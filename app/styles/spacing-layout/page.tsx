import PageHeader from "@/components/PageHeader";
import DoDont from "@/components/DoDont";

export default function SpacingLayout() {
  const scaleSteps = [
    { token: "space.1", px: "4px",  use: "Icon padding, tight label gaps" },
    { token: "space.2", px: "8px",  use: "Inline element spacing, icon-to-label" },
    { token: "space.3", px: "12px", use: "Internal component padding" },
    { token: "space.4", px: "16px", use: "Standard component padding" },
    { token: "space.5", px: "20px", use: "List item gaps, card internal spacing" },
    { token: "space.6", px: "24px", use: "Section gaps within a card or sheet" },
    { token: "space.8", px: "32px", use: "Between distinct UI sections" },
    { token: "space.10", px: "40px", use: "Page-level section separation" },
    { token: "space.12", px: "48px", use: "Large structural gaps" },
  ];

  return (
    <>
      <PageHeader section="styles" eyebrow="Styles" title="Spacing & Layout" />
      <p className="page-lead">
        A consistent spacing system creates rhythm and scanability. In a dense
        grocery UI, the right spacing does more work than the right color —
        it separates signal from noise.
      </p>

      <hr className="divider" />

      <h2 className="h2">Spacing scale</h2>
      <p className="body">
        Spacing is based on a 4px base unit. All values are multiples of 4.
        Use tokens — never hardcode spacing values in component styles.
      </p>

      <table className="token-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th>Typical use</th>
          </tr>
        </thead>
        <tbody>
          {scaleSteps.map((s) => (
            <tr key={s.token}>
              <td><code className="token-name">{s.token}</code></td>
              <td>{s.px}</td>
              <td>{s.use}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">Grid</h2>
      <p className="body">
        The consumer app uses a 4-column grid on mobile with 16px gutters and
        16px margin. On larger breakpoints (tablet, web), this expands to 8 or
        12 columns with wider margins.
      </p>

      <table className="token-table">
        <thead>
          <tr>
            <th>Breakpoint</th>
            <th>Columns</th>
            <th>Gutter</th>
            <th>Margin</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Mobile (&lt;375px)</td><td>4</td><td>12px</td><td>12px</td></tr>
          <tr><td>Mobile (375–767px)</td><td>4</td><td>16px</td><td>16px</td></tr>
          <tr><td>Tablet (768–1023px)</td><td>8</td><td>20px</td><td>24px</td></tr>
          <tr><td>Desktop (1024px+)</td><td>12</td><td>24px</td><td>40px</td></tr>
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">Density</h2>
      <p className="body">
        Instacart surfaces are inherently dense — product grids, list views,
        and cart summaries pack a lot of information. Density is a feature,
        not a bug. The goal is to maximize meaningful content without creating
        visual clutter.
      </p>
      <DoDont
        doText={<p>Use consistent spacing tokens to create predictable rhythm. Let whitespace work at the section level, not the element level.</p>}
        dontText={<p>Add padding to every element individually — this creates visual noise and breaks the grid rhythm.</p>}
      />

      <hr className="divider" />

      <h2 className="h2">Page margins</h2>
      <p className="body">
        Never let content touch the screen edge. Respect the safe areas on
        mobile — especially bottom navigation zones and notch areas on
        modern devices. Use platform-appropriate safe area insets.
      </p>
    </>
  );
}
