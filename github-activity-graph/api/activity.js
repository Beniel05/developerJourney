const USERNAME = "Beniel05";

export default async function handler(req, res) {
    try {
        const days = 31;

        // Create dates for the last 31 days
        const dates = [];
        const activity = {};

        const today = new Date();

        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);

            const key = date.toISOString().slice(0, 10);

            dates.push(key);
            activity[key] = 0;
        }

        // Fetch GitHub public events
        const response = await fetch(
            `https://api.github.com/users/${USERNAME}/events/public?per_page=100`,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
                }
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const events = await response.json();

        // Count commits from PushEvents
        for (const event of events) {
            if (event.type !== "PushEvent") continue;

            const date = event.created_at.slice(0, 10);

            if (!(date in activity)) continue;

            activity[date] += event.payload?.commits?.length || 0;
        }

        const values = dates.map(date => activity[date]);

        const svg = generateSVG(dates, values, USERNAME);

        res.setHeader("Content-Type", "image/svg+xml");
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


function generateSVG(dates, values, username) {

    const width = 900;
    const height = 280;

    const padding = {
        top: 45,
        right: 30,
        bottom: 50,
        left: 50
    };

    const chartWidth =
        width - padding.left - padding.right;

    const chartHeight =
        height - padding.top - padding.bottom;

    const maxValue = Math.max(...values, 1);

    const points = values.map((value, index) => {

        const x =
            padding.left +
            (index / (values.length - 1)) * chartWidth;

        const y =
            padding.top +
            chartHeight -
            (value / maxValue) * chartHeight;

        return { x, y };
    });

    const linePath = points
        .map((point, index) =>
            `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
        )
        .join(" ");

    const areaPath = `
        ${linePath}
        L ${points[points.length - 1].x}
          ${padding.top + chartHeight}
        L ${points[0].x}
          ${padding.top + chartHeight}
        Z
    `;

    const labels = points
        .map((point, index) => {

            if (index % 5 !== 0 && index !== points.length - 1) {
                return "";
            }

            const date = new Date(
                dates[index] + "T00:00:00"
            );

            const label = date.toLocaleDateString(
                "en-US",
                {
                    month: "short",
                    day: "numeric"
                }
            );

            return `
                <text
                    x="${point.x}"
                    y="${height - 15}"
                    text-anchor="middle"
                    font-size="11"
                    fill="#8b949e">
                    ${label}
                </text>
            `;
        })
        .join("");

    const circles = points
        .map(point => `
            <circle
                cx="${point.x}"
                cy="${point.y}"
                r="3"
                fill="#58a6ff"
            />
        `)
        .join("");

    return `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${width}"
    height="${height}"
    viewBox="0 0 ${width} ${height}">

    <rect
        width="100%"
        height="100%"
        rx="12"
        fill="#0d1117"/>

    <text
        x="${padding.left}"
        y="28"
        font-family="Arial, sans-serif"
        font-size="16"
        font-weight="bold"
        fill="#f0f6fc">
        ${username}'s GitHub Activity
    </text>

    <line
        x1="${padding.left}"
        y1="${padding.top + chartHeight}"
        x2="${width - padding.right}"
        y2="${padding.top + chartHeight}"
        stroke="#30363d"/>

    <line
        x1="${padding.left}"
        y1="${padding.top}"
        x2="${padding.left}"
        y2="${padding.top + chartHeight}"
        stroke="#30363d"/>

    <path
        d="${areaPath}"
        fill="#58a6ff"
        opacity="0.12"/>

    <path
        d="${linePath}"
        fill="none"
        stroke="#58a6ff"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"/>

    ${circles}

    ${labels}

</svg>
    `;
}