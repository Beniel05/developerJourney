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

    const width = 900;
    const height = 300;

    const padding = {
        top: 50,
        right: 30,
        bottom: 55,
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

    const maxValue =
        Math.max(...values, 1);

    // Round Y-axis maximum upward
    const yMax =
        Math.ceil(maxValue / 2) * 2 || 2;

    const ySteps = 5;

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

            return { x, y };
        }
    );


    // ------------------------------------------------------
    // Smooth curve
    // ------------------------------------------------------

    let linePath =
        `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {

        const previous = points[i - 1];
        const current = points[i];

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
    // Y-axis labels
    // ------------------------------------------------------

    let yAxis = "";

    for (let i = 0; i <= ySteps; i++) {

        const value =
            Math.round(
                (yMax / ySteps) * i
            );

        const y =
            baselineY -
            (value / yMax) *
            graphHeight;

        // Grid line
        yAxis += `
            <line
                x1="${padding.left}"
                y1="${y}"
                x2="${width - padding.right}"
                y2="${y}"
                stroke="#30363d"
                stroke-width="1"
                stroke-dasharray="2 3"
            />
        `;

        // Label
        yAxis += `
            <text
                x="${padding.left - 10}"
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

    for (let i = 0; i < dates.length; i++) {

        const point = points[i];

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
                opacity="0.6"
            />
        `;

        // Day number
        xAxis += `
            <text
                x="${point.x}"
                y="${baselineY + 16}"
                text-anchor="middle"
                fill="#8b949e"
                font-size="9"
                font-family="Arial, sans-serif"
            >
                ${i + 1}
            </text>
        `;
    }


    // ------------------------------------------------------
    // Data points
    // ------------------------------------------------------

    let circles = "";

    for (let i = 0; i < points.length; i++) {

        const point = points[i];

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
        y="28"
        text-anchor="middle"
        fill="#ffffff"
        font-size="15"
        font-weight="600"
        font-family="Arial, sans-serif"
    >
        ${username}'s Contribution Graph
    </text>


    <!-- Grid + Y axis -->
    ${yAxis}


    <!-- X axis grid -->
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
        stroke-width="2"
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
            rotate(-90 18 ${padding.top + graphHeight / 2})
        "
    >
        Contributions
    </text>


    <!-- X axis title -->
    <text
        x="${width / 2}"
        y="${height - 10}"
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