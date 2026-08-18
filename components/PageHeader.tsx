import Image from "next/image";
import BASE_PATH from "@/lib/basePath";

type Section = "foundations" | "styles" | "brand-expression";

const config: Record<Section, { vector: string; vectorW: number; vectorH: number }> = {
  foundations: { vector: "/vectors/header-foundations.svg", vectorW: 343, vectorH: 258 },
  styles:      { vector: "/vectors/header-styles.svg",      vectorW: 304, vectorH: 244 },
  "brand-expression": { vector: "/vectors/header-brand.svg", vectorW: 340, vectorH: 238 },
};

export default function PageHeader({
  section,
  eyebrow,
  title,
}: {
  section: Section;
  eyebrow: string;
  title: string;
}) {
  const { vector, vectorW, vectorH } = config[section];
  return (
    <div className={`page-header page-header--${section}`}>
      <span className="page-header-eyebrow">{eyebrow}</span>
      <h1 className="page-header-title">{title}</h1>
      <Image
        src={`${BASE_PATH}${vector}`}
        alt=""
        aria-hidden={true}
        className="page-header-vector"
        width={vectorW}
        height={vectorH}
        unoptimized
      />
    </div>
  );
}
