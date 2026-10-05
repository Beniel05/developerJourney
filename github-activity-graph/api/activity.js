const DEFAULT_USERNAME = "Beniel05";

export default async function handler(req, res) {
    try {
        const url = new URL(req.url, "https://example.com");

        const username =
            url.searchParams.get("username") || DEFAULT_USERNAME;

        const days = 31;
        const dates = [];

        const today = new Date();

        // Last 31 days
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);

            dates.push(date.toISOString().slice(0, 10));
        }

        const from = `${dates[0]}T00:00:00Z`;
        const to = `${dates[days - 1]}T23:59:59Z`;

        // --------------------------------------------------
        // GitHub GraphQL
        // --------------------------------------------------

        const query = `
            query($username: String!, $from: DateTime!, $to: DateTime!) {
                user(login: $username) {
                    contributionsCollection(from: $from, to: $to) {
                        contributionCalendar {
                            weeks {
                                contributionDays {
                                    date
                                    contributionCount
                                }
                            }
                        }
                    }
                }
            }
        `;

        const response = await fetch(
            "https://api.github.com/graphql",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/vnd.github+json",
                    "Authorization":
                        `Bearer ${process.env.GITHUB_TOKEN}`,
                },

                body: JSON.stringify({
                    query,

                    variables: {
                        username,
                        from,
                        to,
                    },
                }),
            }
        );

        const data = await response.json();

        if (!response.ok || data.errors) {
            console.error(data);

            throw new Error(
                "GitHub GraphQL request failed"
            );
        }

        if (!data.data.user) {
            throw new Error(
                `GitHub user "${username}" not found`
            );
        }

        // --------------------------------------------------
        // Extract contribution data
        // --------------------------------------------------

        const activity = {};

        for (const date of dates) {
            activity[date] = 0;
        }

        const weeks =
            data.data.user
                .contributionsCollection
                .contributionCalendar
                .weeks;

        for (const week of weeks) {
            for (const day of week.contributionDays) {
                if (day.date in activity) {
                    activity[day.date] =
                        day.contributionCount;
                }
            }
        }

        const values = dates.map(
            date => activity[date]
        );

        // --------------------------------------------------
        // Generate SVG
        // --------------------------------------------------

        const svg = generateSVG(
            dates,
            values,
            username
        );

        res.setHeader(
            "Content-Type",
            "image/svg+xml"
        );

        res.setHeader(
            "Cache-Control",
            "public, max-age=300, s-maxage=300"
        );

        res.status(200).send(svg);

    } catch (error) {
        console.error(error);

        res.status(500).send(
            "Failed to generate GitHub activity graph."
        );
    }
}


// ==========================================================
// SVG
// ==========================================================

function generateSVG(
    dates,
    values,
    username
) {
    const width = 1200;
    const height = 340;

    const padding = {
        top: 55,
        right: 35,
        bottom: 65,
        left: 65,
    };

    const graphWidth =
        width -
        padding.left -
        padding.right;

    const graphHeight =
        height -
        padding.top -
        padding.bottom;

    // ------------------------------------------------------
    // Dynamic Y-axis
    // ------------------------------------------------------

    const maxValue =
        Math.max(...values, 0);

    const yMax =
        getNiceMaximum(maxValue);

    const yStep =
        getNiceStep(yMax);

    const yTicks = [];

    for (
        let value = 0;
        value <= yMax;
        value += yStep
    ) {
        yTicks.push(value);
    }

    // Make sure the maximum is included
    if (yTicks[yTicks.length - 1] < yMax) {
        yTicks.push(yMax);
    }

    // ------------------------------------------------------
    // Coordinates
    // ------------------------------------------------------

    const points = values.map(
        (value, index) => {

            const x =
                padding.left +
                (index / (values.length - 1)) *
                graphWidth;

            const y =
                padding.top +
                graphHeight -
                (value / yMax) *
                graphHeight;

            return {
                x,
                y,
            };
        }
    );

    // ------------------------------------------------------
    // Smooth curve
    // ------------------------------------------------------

    let linePath =
        `M ${points[0].x} ${points[0].y}`;

    for (
        let i = 1;
        i < points.length;
        i++
    ) {
        const previous =
            points[i - 1];

        const current =
            points[i];

        const controlX =
            (previous.x + current.x) / 2;

        linePath +=
            ` C ${controlX} ${previous.y}, ` +
            `${controlX} ${current.y}, ` +
            `${current.x} ${current.y}`;
    }

    // ------------------------------------------------------
    // Area underneath curve
    // ------------------------------------------------------

    const baselineY =
        padding.top + graphHeight;

    const areaPath =
        linePath +
        ` L ${points[points.length - 1].x} ${baselineY}` +
        ` L ${points[0].x} ${baselineY}` +
        ` Z`;

    // ------------------------------------------------------
    // Y-axis + horizontal grid
    // ------------------------------------------------------

    let yAxis = "";

    for (const value of yTicks) {

        const y =
            baselineY -
            (value / yMax) *
            graphHeight;

        // Horizontal grid
        yAxis += `
            <line
                x1="${padding.left}"
                y1="${y}"
                x2="${width - padding.right}"
                y2="${y}"
                stroke="#30363d"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.75"
            />
        `;

        // Y-axis label
        yAxis += `
            <text
                x="${padding.left - 12}"
                y="${y + 4}"
                text-anchor="end"
                fill="#8b949e"
                font-size="10"
                font-family="Arial, sans-serif"
            >
                ${value}
            </text>
        `;
    }

    // ------------------------------------------------------
    // X-axis
    // ------------------------------------------------------

    let xAxis = "";

    for (
        let i = 0;
        i < dates.length;
        i++
    ) {
        const point =
            points[i];

        const date =
            new Date(`${dates[i]}T00:00:00Z`);

        const day =
            date.getUTCDate();

        const month =
            date.toLocaleString(
                "en-US",
                {
                    month: "short",
                    timeZone: "UTC",
                }
            );

        // Vertical grid
        xAxis += `
            <line
                x1="${point.x}"
                y1="${padding.top}"
                x2="${point.x}"
                y2="${baselineY}"
                stroke="#30363d"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.35"
            />
        `;

        // Actual calendar day
        xAxis += `
            <text
                x="${point.x}"
                y="${baselineY + 18}"
                text-anchor="middle"
                fill="#8b949e"
                font-size="9"
                font-family="Arial, sans-serif"
            >
                ${day}
            </text>
        `;

        // Show month name at the beginning
        // of every month
        const previousDate =
            i > 0
                ? new Date(`${dates[i - 1]}T00:00:00Z`)
                : null;

        if (
            i === 0 ||
            previousDate.getUTCMonth() !==
                date.getUTCMonth()
        ) {
            xAxis += `
                <text
                    x="${point.x}"
                    y="${baselineY + 34}"
                    text-anchor="middle"
                    fill="#8b949e"
                    font-size="9"
                    font-weight="600"
                    font-family="Arial, sans-serif"
                >
                    ${month}
                </text>
            `;
        }
    }

    // ------------------------------------------------------
    // Data points
    // ------------------------------------------------------

    let circles = "";

    for (
        let i = 0;
        i < points.length;
        i++
    ) {
        const point =
            points[i];

        circles += `
            <circle
                cx="${point.x}"
                cy="${point.y}"
                r="3"
                fill="#3fb950"
            >
                <title>
                    ${dates[i]}: ${values[i]} contributions
                </title>
            </circle>
        `;
    }

    // ------------------------------------------------------
    // Final SVG
    // ------------------------------------------------------

    return `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 ${width} ${height}"
>

    <!-- Background -->
    <rect
        width="100%"
        height="100%"
        fill="#161b22"
    />

    <!-- Title -->
    <text
        x="${width / 2}"
        y="30"
        text-anchor="middle"
        fill="#ffffff"
        font-size="16"
        font-weight="600"
        font-family="Arial, sans-serif"
    >
        ${username}'s Contribution Graph
    </text>

    <!-- Grid + Y axis -->
    ${yAxis}

    <!-- X axis grid + dates -->
    ${xAxis}

    <!-- Left vertical axis -->
    <line
        x1="${padding.left}"
        y1="${padding.top}"
        x2="${padding.left}"
        y2="${baselineY}"
        stroke="#484f58"
        stroke-width="1"
    />

    <!-- Bottom horizontal axis -->
    <line
        x1="${padding.left}"
        y1="${baselineY}"
        x2="${width - padding.right}"
        y2="${baselineY}"
        stroke="#484f58"
        stroke-width="1"
    />

    <!-- Area -->
    <path
        d="${areaPath}"
        fill="#238636"
        opacity="0.15"
    />

    <!-- Green activity line -->
    <path
        d="${linePath}"
        fill="none"
        stroke="#3fb950"
        stroke-width="2.5"
        stroke-linejoin="round"
        stroke-linecap="round"
    />

    <!-- Points -->
    ${circles}

    <!-- Y axis title -->
    <text
        x="18"
        y="${padding.top + graphHeight / 2}"
        text-anchor="middle"
        fill="#8b949e"
        font-size="10"
        font-family="Arial, sans-serif"
        transform="
            rotate(
                -90
                18
                ${padding.top + graphHeight / 2}
            )
        "
    >
        Contributions
    </text>

    <!-- X axis title -->
    <text
        x="${width / 2}"
        y="${height - 8}"
        text-anchor="middle"
        fill="#8b949e"
        font-size="10"
        font-family="Arial, sans-serif"
    >
        Days
    </text>

</svg>
`;
}


// ==========================================================
// Nice Y-axis scaling
// ==========================================================

function getNiceMaximum(maxValue) {

    if (maxValue <= 0) {
        return 4;
    }

    return Math.ceil(maxValue / 2) * 2;
}


function getNiceStep(maxValue) {

    if (maxValue <= 10) {
        return 2;
    }

    if (maxValue <= 20) {
        return 2;
    }

    if (maxValue <= 40) {
        return 4;
    }

    if (maxValue <= 100) {
        return 10;
    }

    return 20;
}