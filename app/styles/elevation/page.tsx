import PageHeader from "@/components/PageHeader";
import DoDont from "@/components/DoDont";

export default function Elevation() {
  const levels = [
    { name: "Level 0", token: "shadow.0", value: "none",                         use: "Flat surfaces, default backgrounds" },
    { name: "Level 1", token: "shadow.1", value: "0 1px 3px rgba(0,0,0,0.08)",  use: "Cards, product tiles at rest" },
    { name: "Level 2", token: "shadow.2", value: "0 4px 12px rgba(0,0,0,0.10)", use: "Dropdowns, popovers, sticky headers" },
    { name: "Level 3", token: "shadow.3", value: "0 8px 24px rgba(0,0,0,0.12)", use: "Bottom sheets, modals, drawers" },
    { name: "Level 4", token: "shadow.4", value: "0 16px 40px rgba(0,0,0,0.14)",use: "Toasts, overlays at top of stack" },
  ];

  return (
    <>
      <PageHeader section="styles" eyebrow="Styles" title="Elevation & Depth" />
      <p className="page-lead">
        Elevation communicates hierarchy and interactivity through shadow and
        surface layering. A consistent elevation system helps users understand
        what is in front, what is behind, and what they can interact with.
      </p>

      <hr className="divider" />

      <h2 className="h2">Elevation levels</h2>

      <div style={{ display: "flex", gap: 16, marginBottom: 36, alignItems: "flex-end", flexWrap: "wrap" }}>
        {levels.map((l, i) => (
          <div key={l.token} style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
            <div style={{
              width: 72,
              height: 72,
              background: "var(--surface-card)",
              borderRadius: 10,
              boxShadow: l.value === "none" ? "inset 0 0 0 1px var(--border)" : l.value,
            }} />
            <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Level {i}</span>
          </div>
        ))}
      </div>

      <table className="token-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Token</th>
            <th>Value</th>
            <th>Typical use</th>
          </tr>
        </thead>
        <tbody>
          {levels.map((l) => (
            <tr key={l.token}>
              <td>{l.name}</td>
              <td><code className="token-name">{l.token}</code></td>
              <td style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "monospace" }}>{l.value}</td>
              <td>{l.use}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">Surface layering</h2>
      <p className="body">
        Elevation levels correspond to the z-axis stack of surfaces. A
        bottom sheet sits above the page (Level 3). A toast sits above
        the sheet (Level 4). Surfaces at the same elevation level should
        not use shadow to differentiate — use border or background color
        instead.
      </p>

      <DoDont
        doText={<p>Use elevation to distinguish interactive overlays from the content they sit on top of. Modals and bottom sheets should always cast shadow on the surface beneath them.</p>}
        dontText={<p>Apply heavy shadow to every card — elevation loses its meaning when everything looks raised. Reserve shadow for elements that are genuinely above the baseline surface.</p>}
      />

      <hr className="divider" />

      <h2 className="h2">Warm shadows</h2>
      <p className="body">
        Instacart shadows use a warm-tinted black rather than pure black to
        stay consistent with the cream-based palette. This prevents the
        cold, blue-grey shadow cast that feels mismatched on warm backgrounds.
      </p>
    </>
  );
}
