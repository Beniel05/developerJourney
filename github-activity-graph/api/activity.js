const DEFAULT_USERNAME = "Beniel05";

export default async function handler(req, res) {
    try {
        const url = new URL(req.url, "https://example.com");

        const username =
            url.searchParams.get("username") || DEFAULT_USERNAME;

        const days = 31;
        const dates = [];

        const today = new Date();

        // Generate last 31 dates
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);

            dates.push(date.toISOString().slice(0, 10));
        }

        const from = `${dates[0]}T00:00:00Z`;
        const to = `${dates[days - 1]}T23:59:59Z`;

        // GitHub GraphQL query
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

        // Request GitHub contribution data
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
            throw new Error("GitHub GraphQL request failed");
        }

        const user = data.data.user;

        if (!user) {
            throw new Error(`GitHub user "${username}" not found`);
        }

        // Initialize activity
        const activity = {};

        for (const date of dates) {
            activity[date] = 0;
        }

        // Extract contribution counts
        const weeks =
            user.contributionsCollection
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

        // Generate SVG
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


function generateSVG(
    dates,
    values,
    username
) {

    const width = 900;
    const height = 280;

    const padding = {
        top: 60,
        right: 30,
        bottom: 45,
        left: 45,
    };

    const graphWidth =
        width -
        padding.left -
        padding.right;

    const graphHeight =
        height -
        padding.top -
        padding.bottom;

    const max =
        Math.max(...values, 1);


    // Convert values → SVG points
    const points = values.map(
        (value, index) => {

            const x =
                padding.left +
                (index / (values.length - 1)) *
                graphWidth;

            const y =
                padding.top +
                graphHeight -
                (value / max) *
                graphHeight;

            return `${x},${y}`;
        }
    );


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
        fill="#0d1117"
    />


    <!-- Title -->
    <text
        x="${width / 2}"
        y="32"
        text-anchor="middle"
        fill="#ffffff"
        font-size="20"
        font-family="Arial, sans-serif"
    >
        ${username}'s GitHub Activity
    </text>


    <!-- Bottom baseline -->
    <line
        x1="${padding.left}"
        y1="${padding.top + graphHeight}"
        x2="${width - padding.right}"
        y2="${padding.top + graphHeight}"
        stroke="#30363d"
        stroke-width="1"
    />


    <!-- Activity line -->
    <polyline
        points="${points.join(" ")}"
        fill="none"
        stroke="#58a6ff"
        stroke-width="3"
        stroke-linejoin="round"
        stroke-linecap="round"
    />


    <!-- Activity points -->
    ${values.map(
        (value, index) => {

            const [x, y] =
                points[index].split(",");

            return `
        <circle
            cx="${x}"
            cy="${y}"
            r="3"
            fill="#58a6ff"
        >
            <title>
                ${dates[index]}:
                ${value} contributions
            </title>
        </circle>
            `;
        }
    ).join("")}


    <!-- Start date -->
    <text
        x="${padding.left}"
        y="${height - 15}"
        fill="#8b949e"
        font-size="12"
        font-family="Arial, sans-serif"
    >
        ${dates[0]}
    </text>


    <!-- End date -->
    <text
        x="${width - padding.right}"
        y="${height - 15}"
        text-anchor="end"
        fill="#8b949e"
        font-size="12"
        font-family="Arial, sans-serif"
    >
        ${dates[dates.length - 1]}
    </text>

</svg>
`;
}