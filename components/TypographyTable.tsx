'use client';
import { useState } from "react";

const serif = '"InstacartSerifHeadline", serif';
const sans = '"InstacartSansBody", sans-serif';

type StyleRow = {
  name: string;
  family: string;
  typeface: string;
  weightLabel: string;
  weight: number;
  size: number;
  leading: number;
  decoration?: string;
};

const mobileStyles: StyleRow[] = [
  { name: "hero",                 family: serif, typeface: "IC Serif",            weightLabel: "Medium",  weight: 500, size: 40, leading: 44 },
  { name: "display",              family: serif, typeface: "IC Serif",            weightLabel: "Medium",  weight: 500, size: 28, leading: 31 },
  { name: "headline",             family: serif, typeface: "IC Serif",            weightLabel: "Medium",  weight: 500, size: 28, leading: 31 },
  { name: "title",                family: serif, typeface: "IC Serif",            weightLabel: "Medium",  weight: 500, size: 21, leading: 24 },
  { name: "subtitle",             family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 15, leading: 19 },
  { name: "body emphasized",      family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 13, leading: 16 },
  { name: "body regular",         family: sans,  typeface: "Instacart Sans Body", weightLabel: "Regular", weight: 400, size: 13, leading: 16 },
  { name: "body link",            family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 13, leading: 16, decoration: "underline" },
  { name: "body strikethrough",   family: sans,  typeface: "Instacart Sans Body", weightLabel: "Regular", weight: 400, size: 13, leading: 16, decoration: "line-through" },
  { name: "accent emphasized",    family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 11, leading: 13 },
  { name: "accent regular",       family: sans,  typeface: "Instacart Sans Body", weightLabel: "Regular", weight: 400, size: 11, leading: 13 },
  { name: "accent link",          family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 11, leading: 13, decoration: "underline" },
  { name: "accent strikethrough", family: sans,  typeface: "Instacart Sans Body", weightLabel: "Regular", weight: 400, size: 11, leading: 13, decoration: "line-through" },
];

const desktopStyles: StyleRow[] = [
  { name: "hero",                 family: serif, typeface: "IC Serif",            weightLabel: "Medium",  weight: 500, size: 50, leading: 56 },
  { name: "display",              family: serif, typeface: "IC Serif",            weightLabel: "Medium",  weight: 500, size: 68, leading: 72 },
  { name: "headline",             family: serif, typeface: "IC Serif",            weightLabel: "Medium",  weight: 500, size: 30, leading: 34 },
  { name: "title",                family: serif, typeface: "IC Serif",            weightLabel: "Medium",  weight: 500, size: 24, leading: 28 },
  { name: "subtitle",             family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 17, leading: 20 },
  { name: "body emphasized",      family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 14, leading: 18 },
  { name: "body regular",         family: sans,  typeface: "Instacart Sans Body", weightLabel: "Regular", weight: 400, size: 14, leading: 18 },
  { name: "body link",            family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 14, leading: 18, decoration: "underline" },
  { name: "body strikethrough",   family: sans,  typeface: "Instacart Sans Body", weightLabel: "Regular", weight: 400, size: 14, leading: 18, decoration: "line-through" },
  { name: "accent emphasized",    family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 12, leading: 14 },
  { name: "accent regular",       family: sans,  typeface: "Instacart Sans Body", weightLabel: "Regular", weight: 400, size: 12, leading: 14 },
  { name: "accent link",          family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 12, leading: 14, decoration: "underline" },
  { name: "accent strikethrough", family: sans,  typeface: "Instacart Sans Body", weightLabel: "Medium",  weight: 500, size: 12, leading: 14, decoration: "line-through" },
];

export default function TypographyTable() {
  const [tab, setTab] = useState<"mobile" | "desktop">("mobile");
  const styles = tab === "mobile" ? mobileStyles : desktopStyles;

  return (
    <div className="typo-table-container">
      <div className="typo-tabs">
        <button
          className={`typo-tab${tab === "mobile" ? " typo-tab-active" : ""}`}
          onClick={() => setTab("mobile")}
        >
          Mobile
        </button>
        <button
          className={`typo-tab${tab === "desktop" ? " typo-tab-active" : ""}`}
          onClick={() => setTab("desktop")}
        >
          Desktop
        </button>
      </div>

      <table className="token-table type-scale-table">
        <thead>
          <tr>
            <th>Style name</th>
            <th>Typeface</th>
            <th>Font</th>
            <th>Size</th>
            <th>Leading</th>
            <th>Tracking</th>
          </tr>
        </thead>
        <tbody>
          {styles.map((s) => (
            <tr key={s.name}>
              <td>
                <span style={{
                  fontFamily: s.family,
                  fontSize: s.size,
                  fontWeight: s.weight,
                  lineHeight: `${s.leading}px`,
                  textDecoration: s.decoration ?? "none",
                  color: "var(--text-primary)",
                  whiteSpace: "nowrap",
                }}>
                  {s.name}
                </span>
              </td>
              <td>{s.typeface}</td>
              <td>{s.weightLabel}</td>
              <td>{s.size}px</td>
              <td>{s.leading}</td>
              <td>0%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
