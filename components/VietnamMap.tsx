// A stylized, hand-illustrated impression of Vietnam's coastline — not a
// geographically precise map. Built as an original brand illustration
// rather than traced from any reference map.

export default function VietnamMap({
  cities,
  neighbors,
  className = "",
}: {
  cities: { name: string; x: number; y: number }[];
  neighbors: { name: string; x: number; y: number }[];
  className?: string;
}) {
  return (
    <svg viewBox="0 0 200 320" className={className}>
      <path
        d="M100,10
           C130,10 150,30 145,55
           C140,90 112,108 101,138
           C96,158 82,173 79,194
           C77,214 90,229 104,244
           C128,258 149,269 145,289
           C141,301 112,309 91,304
           C62,298 51,279 56,254
           C46,229 51,199 56,179
           C46,149 56,119 66,94
           C56,69 61,39 76,19
           C86,10 95,8 100,10 Z"
        fill="var(--color-terracotta)"
        opacity="0.9"
      />

      {neighbors.map((n, i) => (
        <text
          key={i}
          x={n.x}
          y={n.y}
          textAnchor="middle"
          fontSize="9"
          letterSpacing="1.5"
          fill="currentColor"
          opacity="0.4"
          className="uppercase"
        >
          {n.name}
        </text>
      ))}

      {cities.map((c, i) => (
        <g key={i}>
          <circle cx={c.x} cy={c.y} r="3" fill="white" stroke="var(--color-ink)" strokeWidth="1.2" />
          <text
            x={c.x + 10}
            y={c.y + 3}
            fontSize="9"
            fontWeight="600"
            fill="var(--color-ink)"
          >
            {c.name}
          </text>
        </g>
      ))}
    </svg>
  );
}
