import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Breadcrumb trail shown as its own plain bar just below the header (not
// overlaid on a photo), so it stays legible on any hero image and matches
// the familiar "Home > Section > Page" pattern from other travel sites.
// The last item (current page) is never a link.
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs leading-none">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.href && !isLast ? (
              <Link href={item.href} className="text-ink/55 transition-colors hover:text-terracotta">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-medium text-ink" : "text-ink/55"}>{item.label}</span>
            )}
            {!isLast && (
              <svg width="6" height="9" viewBox="0 0 6 9" fill="none" className="text-ink/30">
                <path d="M1 1L5 4.5L1 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        );
      })}
    </nav>
  );
}
