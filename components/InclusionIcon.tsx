import type { InclusionIcon } from "@/lib/tours";

const ICONS: Record<InclusionIcon, React.ReactNode> = {
  bed: (
    <>
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 18v2" />
      <path d="M21 18v2" />
      <path d="M3 13h18" />
      <path d="M7 13v-2.5A1.5 1.5 0 0 1 8.5 9h1A1.5 1.5 0 0 1 11 10.5V13" />
    </>
  ),
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
  users: (
    <>
      <circle cx="9" cy="8" r="2.6" />
      <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <circle cx="17" cy="9" r="2" />
      <path d="M15 14.2c2.3.3 4 2.2 4 4.8" />
    </>
  ),
  utensils: (
    <>
      <path d="M7 3v6.5a1.5 1.5 0 0 0 3 0V3" />
      <path d="M8.5 9.5V21" />
      <path d="M16 3c-1.1 1.5-1.5 3-1.5 5.5 0 1.4.9 2.5 2 2.5v10" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M8 7l1.5-2.5h5L16 7" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
};

export default function InclusionIconGraphic({ icon }: { icon: InclusionIcon }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ICONS[icon]}
    </svg>
  );
}
