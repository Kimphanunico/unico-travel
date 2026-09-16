import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Lightweight breadcrumb trail, meant to sit inside a hero section on top of
// a photo/gradient background so visitors always see where they are and can
// jump back to a previous section in one click. The last item (current
// page) is never a link.
export default function Breadcrumbs({
  items,
  align = "left",
}: {
  items: BreadcrumbItem[];
  align?: "left" | "center";
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-4 flex flex-wrap items-center gap-1.5 text-xs text-white/70 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.href && !isLast ? (
              <Link href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-white" : undefined}>{item.label}</span>
            )}
            {!isLast && <span className="text-white/40">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
