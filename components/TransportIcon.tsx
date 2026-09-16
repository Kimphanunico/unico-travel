import type { TransportMode } from "@/lib/tours";

const ICONS: Record<TransportMode, React.ReactNode> = {
  car: (
    <>
      <path d="M4 16v-3.5L6 8h12l2 4.5V16" />
      <path d="M4 16h16" />
      <path d="M4 16v2" />
      <path d="M20 16v2" />
      <circle cx="7.5" cy="16" r="1.4" />
      <circle cx="16.5" cy="16" r="1.4" />
    </>
  ),
  flight: (
    <>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </>
  ),
  boat: (
    <>
      <path d="M4 14h16l-2 5H6z" />
      <path d="M12 14V5" />
      <path d="M12 5l4 3" />
      <path d="M3 18c1.3 1 2.7 1 4 0s2.7-1 4 0 2.7 1 4 0 2.7-1 4 0" />
    </>
  ),
};

export default function TransportIcon({
  mode,
  className = "",
}: {
  mode: TransportMode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {ICONS[mode]}
    </svg>
  );
}
