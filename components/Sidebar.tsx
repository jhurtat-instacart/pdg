"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const InstacartLockup = () => (
  <svg width="96" height="16" viewBox="0 0 80 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Instacart">
    <path d="M4.90223 8.21536C7.26124 8.21536 9.19462 9.99308 9.18911 12.5437H0.615364C0.611077 9.99431 2.54384 8.21536 4.90223 8.21536Z" fill="#FF7009"/>
    <path d="M8.4384 2.18322C7.89642 2.18322 7.5106 2.42128 7.15234 2.93883L6.12594 4.42778V0.177345H3.6763V4.42778L2.6499 2.93883C2.29348 2.42128 1.90766 2.18322 1.36384 2.18322C0.546883 2.18322 0.00244964 2.79228 0 3.54356C0 4.18663 0.298244 4.60524 0.930251 5.01644L4.89928 7.59798L8.86831 5.01644C9.50032 4.60524 9.80101 4.18663 9.79856 3.54356C9.79918 2.79228 9.25536 2.18322 8.4384 2.18322Z" fill="#0AAD0A"/>
    <path d="M14.2064 2.87962C13.2946 2.87962 12.7152 2.30952 12.7152 1.4321C12.7152 0.554684 13.3086 3.8147e-05 14.2064 3.8147e-05C15.1183 3.8147e-05 15.6976 0.569525 15.6976 1.44694C15.6976 2.32436 15.1042 2.87962 14.2064 2.87962ZM15.5384 3.43612V12.5417H12.8744V3.43489L15.5384 3.43612Z" fill="#003D29"/>
    <path d="M19.4901 3.4387V5.13479H19.6206C20.1277 3.93584 21.0108 3.26309 22.4297 3.26309C24.3551 3.26309 25.542 4.41814 25.542 6.65466V12.5455H22.878V7.1518C22.878 5.89473 22.3427 5.32462 21.2857 5.32462C20.1834 5.32462 19.563 5.93863 19.563 7.22476V12.5455H16.899V3.4387H19.4901Z" fill="#003D29"/>
    <path d="M28.935 9.65999C29.0367 10.4496 29.5144 10.8589 30.3687 10.8589C31.3093 10.8589 31.7007 10.4935 31.7007 9.98152C31.7007 9.48685 31.4557 9.19191 30.6437 9.10472L29.4856 8.97302C27.415 8.73929 26.5607 7.80374 26.5607 6.25234C26.5607 4.52719 27.8468 3.25527 30.3393 3.25527C32.7718 3.25527 33.9158 4.42516 34.0603 6.1936H31.599C31.5415 5.50663 31.136 5.11213 30.2817 5.11213C29.3986 5.11213 29.0079 5.47757 29.0079 5.98893C29.0079 6.42733 29.2829 6.6759 29.9633 6.7637L31.2659 6.94117C33.3076 7.2188 34.176 8.05417 34.176 9.67483C34.176 11.4581 32.8006 12.7152 30.354 12.7152C27.8204 12.7152 26.546 11.4872 26.3733 9.65999H28.935Z" fill="#003D29"/>
    <path d="M35.713 9.86354V5.56611H34.569V3.78283C36.0461 3.68019 36.6248 3.12492 36.683 1.75037H38.377V3.43162H40.3906V5.56611H38.377V9.4103C38.377 10.3168 38.7536 10.5944 39.4915 10.5944C39.7155 10.5918 39.9386 10.5674 40.1578 10.5214V12.5533C39.7274 12.6651 39.2843 12.7192 38.8399 12.7141C36.6549 12.7141 35.713 11.7198 35.713 9.86354Z" fill="#003D29"/>
    <path d="M46.3719 11.0238H46.2586C45.8384 12.0904 45.0423 12.7193 43.6668 12.7193C41.8713 12.7193 40.9018 11.5939 40.9018 10.1464C40.9018 8.80152 41.6545 7.86598 43.6956 7.48756L45.2303 7.2093C46.0124 7.06338 46.2873 6.78575 46.2873 6.31767C46.2873 5.68944 45.8531 5.324 45.0135 5.324C44.087 5.324 43.6234 5.74756 43.5364 6.47843H41.0004C41.2754 4.51955 42.6943 3.26309 45.1121 3.26309C47.7179 3.26309 48.9489 4.59375 48.9489 6.63982V12.5455H46.3719V11.0238ZM46.2849 8.34828C46.0534 8.52389 45.749 8.65745 45.3295 8.75762L44.5334 8.94806C43.8389 9.10883 43.578 9.43036 43.578 9.92751C43.578 10.5706 44.0269 10.936 44.7796 10.936C45.6774 10.936 46.2855 10.4413 46.2855 9.2696L46.2849 8.34828Z" fill="#003D29"/>
    <path d="M54.7434 3.26305C57.5526 3.26305 59.116 4.8126 59.3188 7.29769H56.6854C56.5556 6.17232 55.9505 5.45567 54.7312 5.45567C53.3698 5.45567 52.6031 6.31825 52.6031 7.94138C52.6031 9.66591 53.428 10.5285 54.76 10.5285C55.8893 10.5285 56.5972 9.85574 56.7289 8.64257H59.3782C59.1332 11.1864 57.4387 12.7236 54.673 12.7236C51.633 12.7236 49.9097 10.8816 49.9097 8.03103C49.9078 5.14898 51.8192 3.26305 54.7434 3.26305Z" fill="#003D29"/>
    <path d="M65.5124 11.0238H65.3967C64.9772 12.0904 64.181 12.7193 62.8056 12.7193C61.01 12.7193 60.0399 11.5939 60.0399 10.1464C60.0399 8.80152 60.7932 7.86598 62.8343 7.48756L64.369 7.2093C65.1511 7.06338 65.4261 6.78575 65.4261 6.31767C65.4261 5.68944 64.9913 5.324 64.1516 5.324C63.2251 5.324 62.7621 5.74756 62.6751 6.47843H60.1416C60.4166 4.51955 61.8355 3.26309 64.2533 3.26309C66.8591 3.26309 68.0901 4.59375 68.0901 6.63982V12.5455H65.5124V11.0238ZM65.4261 8.34828C65.1946 8.52389 64.8902 8.65745 64.4701 8.75762L63.674 8.94806C62.9789 9.10883 62.7186 9.43036 62.7186 9.92751C62.7186 10.5706 63.1675 10.936 63.9202 10.936C64.8179 10.936 65.4261 10.4413 65.4261 9.2696V8.34828Z" fill="#003D29"/>
    <path d="M71.8867 3.43687V5.64433H72.0172C72.4661 3.78932 73.1195 3.2761 73.9861 3.2761C74.1682 3.27543 74.3493 3.3051 74.5219 3.36391V5.8929C74.2823 5.85622 74.0404 5.83659 73.798 5.83416C72.5383 5.83416 72.0319 6.34614 72.0319 7.7782V12.5437H69.3679V3.43687H71.8867Z" fill="#003D29"/>
    <path d="M75.3236 3.53426C76.0187 3.25601 76.3078 2.68591 76.3512 1.75037H77.9876V3.43162H80V5.56611H77.9876V9.4103C77.9876 10.3168 78.3636 10.5944 79.1022 10.5944C79.3259 10.5919 79.5488 10.5674 79.7679 10.5214V12.5533C79.3377 12.6652 78.8948 12.7192 78.4506 12.7141C76.2643 12.7141 75.3236 11.7198 75.3236 9.86354V3.53426Z" fill="#003D29"/>
  </svg>
);

const nav = [
  {
    label: "Foundations",
    items: [
      { label: "Design Principles", href: "/foundations/design-principles" },
      { label: "Accessibility",     href: "/foundations/accessibility" },
      { label: "Design Tokens",     href: "/foundations/design-tokens" },
    ],
  },
  {
    label: "Styles",
    items: [
      { label: "Color",            href: "/styles/color" },
      { label: "Typography",       href: "/styles/typography" },
      { label: "Spacing & Layout", href: "/styles/spacing-layout" },
      { label: "Corner Radius",    href: "/styles/corner-radius" },
      { label: "Elevation",        href: "/styles/elevation" },
      { label: "Iconography",      href: "/styles/iconography" },
    ],
  },
  {
    label: "Brand Expression",
    items: [
      { label: "Overview",     href: "/brand-expression/overview" },
      { label: "Illustration", href: "/brand-expression/illustration" },
      { label: "Motion",       href: "/brand-expression/motion" },
      { label: "Content",      href: "/brand-expression/content" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navContent = (
    <>
      <nav className="sidebar-nav">
        {nav.map((section) => (
          <div key={section.label} className="nav-section">
            <span className="nav-section-label">{section.label}</span>
            <ul className="nav-items">
              {section.items.map((item) => (
                <li key={item.href} className="nav-item">
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </>
  );

  return (
    <>
      {/* ── Mobile top bar ───────────────────────── */}
      <div className="mobile-header">
        <span className="sidebar-wordmark"><InstacartLockup /></span>
        <button
          className="hamburger"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect y="3"  width="20" height="2" rx="1" fill="currentColor"/>
            <rect y="9"  width="20" height="2" rx="1" fill="currentColor"/>
            <rect y="15" width="20" height="2" rx="1" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* ── Backdrop ─────────────────────────────── */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar / Drawer ─────────────────────── */}
      <aside className={`sidebar${isOpen ? " sidebar--open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-header-row">
            <div>
              <span className="sidebar-wordmark"><InstacartLockup /></span>
              <span className="sidebar-subtitle">Product Design Guidelines</span>
            </div>
            <button
              className="sidebar-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        {navContent}
      </aside>
    </>
  );
}
