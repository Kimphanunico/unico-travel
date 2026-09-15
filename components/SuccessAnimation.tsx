// A small, original celebratory illustration (a happy paper airplane taking
// off, with a flight trail and a few sparkles) shown after a trip request or
// message is submitted successfully. Built as brand-colored SVG shapes, not
// traced from any reference illustration or character.

export default function SuccessAnimation({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 180" className={className}>
      {/* flight trail */}
      <path
        d="M15,155 C45,135 55,110 78,95"
        fill="none"
        stroke="var(--color-sand)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="1 11"
        className="animate-trail"
      />

      {/* sparkles */}
      <path
        d="M172 38 L175.5 47 L185 50.5 L175.5 54 L172 63 L168.5 54 L159 50.5 L168.5 47 Z"
        fill="var(--color-terracotta)"
        className="animate-sparkle"
        style={{ animationDelay: "0.1s" }}
      />
      <path
        d="M193 88 L195 93.5 L200.5 95.5 L195 97.5 L193 103 L191 97.5 L185.5 95.5 L191 93.5 Z"
        fill="var(--color-forest)"
        className="animate-sparkle"
        style={{ animationDelay: "0.5s" }}
      />
      <circle
        cx="155"
        cy="112"
        r="4.5"
        fill="var(--color-terracotta)"
        opacity="0.75"
        className="animate-sparkle"
        style={{ animationDelay: "0.3s" }}
      />
      <circle
        cx="188"
        cy="60"
        r="3.2"
        fill="var(--color-forest)"
        opacity="0.65"
        className="animate-sparkle"
        style={{ animationDelay: "0.8s" }}
      />

      {/* paper airplane */}
      <g className="animate-float-gentle">
        <path d="M14,148 L178,28 L84,86 Z" fill="var(--color-terracotta)" />
        <path d="M84,86 L178,28 L100,132 Z" fill="var(--color-terracotta-dark)" />
        <path
          d="M84,86 L178,28"
          stroke="#7a3c19"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* face */}
        <circle cx="128" cy="58" r="5" fill="white" />
        <circle cx="150" cy="46" r="5" fill="white" />
        <circle cx="129" cy="59" r="2.2" fill="var(--color-ink)" />
        <circle cx="151" cy="47" r="2.2" fill="var(--color-ink)" />
        <path
          d="M122,70 Q138,82 156,64"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
