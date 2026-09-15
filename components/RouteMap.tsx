// A lightweight, stylized illustration of a multi-stop route — not a
// geographically accurate map. Draws a gentle winding line connecting the
// given stops, in the site's own brand colors, so tour "legs" get a visual
// cover without relying on real map tiles or licensed cartography.

export default function RouteMap({
  stops,
  className = "",
}: {
  stops: string[];
  className?: string;
}) {
  const width = 400;
  const height = 220;
  const padding = 40;
  const count = Math.max(stops.length, 2);
  const usableWidth = width - padding * 2;

  const points = stops.map((_, i) => {
    const x = padding + (usableWidth * i) / (count - 1);
    const wave = i % 2 === 0 ? -1 : 1;
    const y = height / 2 + wave * 34;
    return { x, y };
  });

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    path += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="1 10"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      {points.map((p, i) => {
        const isEnd = i === 0 || i === points.length - 1;
        const label = stops[i];
        const labelBelow = p.y < height / 2;
        return (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r={isEnd ? 7 : 5}
              fill={isEnd ? "currentColor" : "white"}
              stroke="currentColor"
              strokeWidth="2"
            />
            {isEnd && (
              <text
                x={p.x}
                y={p.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="8"
                fill="white"
                fontWeight="700"
              >
                {i === 0 ? "S" : "E"}
              </text>
            )}
            <text
              x={p.x}
              y={labelBelow ? p.y + 22 : p.y - 16}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill="currentColor"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
