'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGE_ORDER = [
  { label: "Design Principles", href: "/foundations/design-principles" },
  { label: "Accessibility", href: "/foundations/accessibility" },
  { label: "Design Tokens", href: "/foundations/design-tokens" },
  { label: "Color", href: "/styles/color" },
  { label: "Typography", href: "/styles/typography" },
  { label: "Spacing & Layout", href: "/styles/spacing-layout" },
  { label: "Corner Radius", href: "/styles/corner-radius" },
  { label: "Iconography", href: "/styles/iconography" },
  { label: "Overview", href: "/brand-expression/overview" },
  { label: "Illustration", href: "/brand-expression/illustration" },
  { label: "Motion", href: "/brand-expression/motion" },
  { label: "Content", href: "/brand-expression/content" },
];

function CarrotIcon({ flipped }: { flipped?: boolean }) {
  return (
    <svg
      width="24"
      height="32"
      viewBox="0 0 99 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="page-nav-arrow"
      style={{ transform: flipped ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <path
        d="M26.7597 18.3745C26.7597 25.6708 29.9392 30.8699 36.8395 35.6714L56.7072 49.5L-3.60619e-06 49.5L-2.16372e-06 82.4999L56.7072 82.4999L36.8395 96.3286C29.9392 101.13 26.7597 106.329 26.7597 113.625C26.7597 124.634 34.8876 131.964 44.9015 132C53.4815 132.031 59.0684 127.984 64.5563 119.46L99 66L64.5562 12.5401C59.0683 4.02117 53.4781 -0.026278 44.9014 0.000120108C34.8876 0.0364212 26.7597 7.3657 26.7597 18.3745Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function PageNav() {
  const pathname = usePathname();
  const idx = PAGE_ORDER.findIndex((p) => p.href === pathname);

  if (idx === -1) return null;

  const prev = idx > 0 ? PAGE_ORDER[idx - 1] : null;
  const next = idx < PAGE_ORDER.length - 1 ? PAGE_ORDER[idx + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav className="page-nav">
      {prev && (
        <Link href={prev.href} className="page-nav-card page-nav-prev">
          <CarrotIcon flipped />
          <div className="page-nav-text">
            <span className="page-nav-label">Previous</span>
            <span className="page-nav-title">{prev.label}</span>
          </div>
        </Link>
      )}
      {next && (
        <Link href={next.href} className="page-nav-card page-nav-next">
          <div className="page-nav-text">
            <span className="page-nav-label">Up next</span>
            <span className="page-nav-title">{next.label}</span>
          </div>
          <CarrotIcon />
        </Link>
      )}
    </nav>
  );
}
