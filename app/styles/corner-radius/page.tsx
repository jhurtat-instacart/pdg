import PageHeader from "@/components/PageHeader";
import DoDont from "@/components/DoDont";

export default function CornerRadius() {
  const radii = [
    { token: "radius.sm",   value: "6px",   use: "Chips, tags, small badges" },
    { token: "radius.md",   value: "10px",  use: "Buttons, input fields" },
    { token: "radius.lg",   value: "14px",  use: "Cards, product tiles" },
    { token: "radius.xl",   value: "20px",  use: "Bottom sheets, modals" },
    { token: "radius.full", value: "9999px",use: "Pills, avatars, lozenges" },
  ];

  return (
    <>
      <PageHeader section="styles" eyebrow="Styles" title="Corner Radius" />
      <p className="page-lead">
        Corner radius gives the Instacart UI its approachable, friendly
        quality. Consistent usage across surfaces creates visual cohesion.
        Mixing radii arbitrarily creates tension and inconsistency.
      </p>

      <hr className="divider" />

      <h2 className="h2">Radius scale</h2>

      <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
        {radii.map((r) => (
          <div key={r.token} style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
            <div style={{
              width: r.token === "radius.full" ? 72 : 72,
              height: 72,
              background: "var(--honeydew)",
              border: "1px solid var(--spinach)",
              borderRadius: r.value === "9999px" ? "50px" : r.value,
            }} />
            <span style={{ fontSize: 11, color: "var(--text-tertiary)", textAlign: "center" }}>{r.value}</span>
          </div>
        ))}
      </div>

      <table className="token-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th>Typical use</th>
          </tr>
        </thead>
        <tbody>
          {radii.map((r) => (
            <tr key={r.token}>
              <td><code className="token-name">{r.token}</code></td>
              <td>{r.value}</td>
              <td>{r.use}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">Usage principles</h2>
      <DoDont
        doText={<p>Use the same radius token for all instances of the same component type. Product tiles, for example, always use{" "}<code className="token-name">radius.lg</code>.</p>}
        dontText={<p>Mix radii within a single component or apply a rounder radius to a contained element than its parent container.</p>}
      />
      <p className="body">
        When a smaller element is nested inside a larger one, use a
        proportionally smaller radius for the inner element so it
        visually fits the container — this is the concentric radius
        principle.
      </p>
    </>
  );
}
