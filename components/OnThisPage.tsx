'use client';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Heading = { id: string; text: string };

export default function OnThisPage() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const collect = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".page-wrap h2"));
      els.forEach(el => {
        if (!el.id) {
          el.id = (el.textContent ?? "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
        }
      });
      const hs: Heading[] = els.map(el => ({ id: el.id, text: el.textContent ?? "" }));
      setHeadings(hs);
      if (hs.length > 0) setActiveId(hs[0].id);
    };
    const t = setTimeout(collect, 80);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "0px 0px -65% 0px", threshold: 0 }
    );

    headings.forEach(h => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="on-this-page">
      <p className="otp-title">On this page</p>
      <ul className="otp-list">
        {headings.map(h => (
          <li key={h.id} className="otp-item">
            <a
              href={`#${h.id}`}
              className={`otp-link${activeId === h.id ? " otp-link--active" : ""}`}
              onClick={e => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                setActiveId(h.id);
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
