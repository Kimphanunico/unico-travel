import type { Locale } from "@/lib/i18n";

// A stylized regional context map: Vietnam and its neighbors, hand-drawn as
// soft original shapes (not traced from any reference map or atlas data).
// Neighbor countries are simplified for visual context only, not surveyed
// borders. Includes Hoang Sa (Paracel) and Truong Sa (Spratly), which are
// not optional on a Vietnamese map of the country.

const VIETNAM_PATH =
  "M108,4 C117.2,2.7 135.2,10.3 142,18 C148.8,25.7 151.8,42 150,52 " +
  "C148.2,62 138.1,72.1 131,80 C123.9,87.9 113.3,93.6 106,101 " +
  "C98.7,108.4 90.5,117.9 86,126 C81.5,134.1 79.9,142.6 78,151 " +
  "C76.1,159.4 72.7,170.1 74,178 C75.3,185.9 82.3,192.7 86,200 " +
  "C89.7,207.3 94.3,215.3 97,223 C99.7,230.7 100.3,238.8 103,248 " +
  "C105.7,257.2 110.3,269.5 114,280 C117.7,290.5 122.6,304.1 126,313 " +
  "C129.4,321.9 134.7,328.1 135,335 C135.3,341.9 133.6,349.2 128,356 " +
  "C122.4,362.8 108.4,371.7 100,377 C91.6,382.3 83.7,389 76,389 " +
  "C68.3,389 60.4,382.3 52,377 C43.6,371.7 26.6,364.4 24,356 " +
  "C21.4,347.6 31.3,334.7 36,325 C40.7,315.3 49.5,305.8 53,296 " +
  "C56.5,286.2 58,274 58,264 C58,254 54.8,243.7 53,234 " +
  "C51.2,224.3 48.3,213.4 47,204 C45.7,194.6 44.8,185.4 45,176 " +
  "C45.2,166.6 46.5,155.7 48,146 C49.5,136.3 51.4,125.7 54,116 " +
  "C56.6,106.3 61.6,95.7 64,86 C66.4,76.3 65.6,65.7 69,56 " +
  "C72.4,46.3 78.7,34.4 85,26 C91.3,17.6 98.8,5.3 108,4 Z";

const NEIGHBOR_BLOBS: { d: string; label: [string, string]; lx: number; ly: number }[] = [
  {
    d: "M68,15 C88,22 105,26 108,32 C116,50 120,68 118,85 C116,105 110,128 102,148 C94,168 84,188 72,205 C60,215 46,213 38,210 C24,203 16,189 14,178 C9,158 8,138 10,120 C12,100 14,82 20,68 C27,52 34,38 40,28 C48,20 58,17 68,15 Z",
    label: ["Myanmar", "Myanmar"],
    lx: 52,
    ly: 118,
  },
  {
    d: "M90,235 C110,232 128,233 140,238 C154,244 164,254 168,268 C171,282 164,296 160,308 C155,322 149,334 148,340 C148,352 149,362 148,372 C147,384 140,396 132,405 C122,410 112,410 106,408 C95,404 90,390 88,375 C86,362 82,350 80,340 C68,335 58,328 55,320 C50,308 44,295 42,285 C40,272 46,262 52,255 C63,246 78,239 90,235 Z",
    label: ["Thailand", "Thái Lan"],
    lx: 100,
    ly: 330,
  },
  {
    d: "M148,118 C160,124 174,130 182,138 C190,148 193,164 192,180 C191,196 188,212 182,222 C174,232 164,238 158,240 C146,236 136,228 132,222 C124,210 120,194 122,180 C123,166 124,152 126,142 C132,132 140,124 148,118 Z",
    label: ["Laos", "Lào"],
    lx: 155,
    ly: 178,
  },
  {
    d: "M168,300 C182,298 198,299 202,304 C212,308 218,318 216,332 C220,344 212,356 206,364 C200,374 190,380 178,380 C164,382 154,376 150,368 C144,358 145,346 146,336 C147,326 150,318 154,312 C158,306 162,302 168,300 Z",
    label: ["Cambodia", "Campuchia"],
    lx: 182,
    ly: 340,
  },
];

// Hoang Sa (Paracel) and Truong Sa (Spratly) island groups, shown as small
// scattered dot clusters off the coast, inside the Vietnam-relative
// coordinate space (see the translate group below).
const ISLAND_GROUPS = [
  {
    label: "Hoàng Sa",
    cx: 188,
    cy: 175,
    dots: [
      { dx: -6, dy: -4 },
      { dx: 3, dy: -6 },
      { dx: 7, dy: 2 },
      { dx: -2, dy: 5 },
      { dx: 5, dy: 8 },
    ],
  },
  {
    label: "Trường Sa",
    cx: 204,
    cy: 272,
    dots: [
      { dx: -8, dy: -6 },
      { dx: 0, dy: -8 },
      { dx: 8, dy: -3 },
      { dx: -4, dy: 4 },
      { dx: 6, dy: 8 },
      { dx: -10, dy: 6 },
    ],
  },
];

const SMALL_ISLANDS = [
  { name: "Phú Quốc", x: 18, y: 322 },
  { name: "Côn Đảo", x: 58, y: 370 },
];

const VIETNAM_OFFSET_X = 200;
const VIETNAM_OFFSET_Y = 10;

export default function VietnamMap({
  locale,
  cities,
  className = "",
}: {
  locale: Locale;
  cities: { name: string; x: number; y: number }[];
  className?: string;
}) {
  const capitalLabel = locale === "vi" ? "THỦ ĐÔ · HÀ NỘI" : "CAPITAL · HANOI";
  const countryName = locale === "vi" ? "Việt Nam" : "Vietnam";
  const seaLabel = locale === "vi" ? "Biển Đông" : "East Sea";

  return (
    <svg viewBox="0 0 480 420" className={className}>
      <rect width="480" height="420" fill="var(--color-cream)" />

      {/* Faint grid, for a bit of vintage-map texture */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`gx${i}`}
          x1={i * 60}
          y1={0}
          x2={i * 60}
          y2={420}
          stroke="var(--color-ink)"
          strokeOpacity="0.05"
        />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={`gy${i}`}
          x1={0}
          y1={i * 60}
          x2={480}
          y2={i * 60}
          stroke="var(--color-ink)"
          strokeOpacity="0.05"
        />
      ))}

      {/* Neighboring countries, simplified for context */}
      {NEIGHBOR_BLOBS.map((blob, i) => (
        <g key={i}>
          <path d={blob.d} fill="var(--color-sand)" stroke="var(--color-cream)" strokeWidth="2.5" />
          <text
            x={blob.lx}
            y={blob.ly}
            textAnchor="middle"
            fontSize="9"
            letterSpacing="1.5"
            fill="var(--color-ink)"
            opacity="0.42"
            className="uppercase"
          >
            {locale === "vi" ? blob.label[1] : blob.label[0]}
          </text>
        </g>
      ))}

      <text
        x={235}
        y={230}
        fontSize="10"
        fontStyle="italic"
        fill="var(--color-ink)"
        opacity="0.4"
        transform="rotate(90 235 230)"
        className="font-serif"
      >
        {seaLabel}
      </text>

      <g transform={`translate(${VIETNAM_OFFSET_X},${VIETNAM_OFFSET_Y})`}>
        <path
          d={VIETNAM_PATH}
          fill="var(--color-terracotta)"
          opacity="0.94"
          stroke="var(--color-cream)"
          strokeWidth="1.5"
        />

        {cities.map((c, i) => (
          <g key={i}>
            <circle cx={c.x} cy={c.y} r="3" fill="white" stroke="var(--color-ink)" strokeWidth="1.2" />
            <text x={c.x + 10} y={c.y + 3} fontSize="9" fontWeight="600" fill="var(--color-ink)">
              {c.name}
            </text>
          </g>
        ))}

        {SMALL_ISLANDS.map((isl, i) => (
          <g key={i}>
            <circle cx={isl.x} cy={isl.y} r="2.2" fill="var(--color-terracotta)" />
            <text x={isl.x + 7} y={isl.y + 3} fontSize="8" fill="var(--color-ink)" opacity="0.75">
              {isl.name}
            </text>
          </g>
        ))}

        {ISLAND_GROUPS.map((group, i) => (
          <g key={i}>
            {group.dots.map((d, di) => (
              <circle
                key={di}
                cx={group.cx + d.dx}
                cy={group.cy + d.dy}
                r="1.4"
                fill="var(--color-terracotta)"
              />
            ))}
            <text
              x={group.cx}
              y={group.cy + 22}
              textAnchor="middle"
              fontSize="8"
              letterSpacing="1"
              fill="var(--color-ink)"
              opacity="0.55"
              className="uppercase"
            >
              {group.label}
            </text>
          </g>
        ))}

        {/* Capital marker: Hanoi, called out with a leader line */}
        <line x1="108" y1="75" x2="168" y2="48" stroke="var(--color-ink)" strokeWidth="1" opacity="0.5" />
        <circle cx="108" cy="75" r="3.4" fill="white" stroke="var(--color-ink)" strokeWidth="1.3" />
        <text x="173" y="40" fontSize="19" fill="var(--color-ink)" className="font-serif">
          {countryName}
        </text>
        <text x="173" y="55" fontSize="8.5" letterSpacing="1.5" fill="var(--color-terracotta)">
          {capitalLabel}
        </text>
      </g>
    </svg>
  );
}
