import Image from "next/image";
import BASE_PATH from "@/lib/basePath";
import PageHeader from "@/components/PageHeader";
import DoDont from "@/components/DoDont";

const icons = [
  "Account","Basket","Cart","Chevron","Grid",
  "Home","Lightning","Location","Performance",
  "Pin","Pricing","Receipt","Report","Search",
  "Settings","Trash",
];

export default function Iconography() {
  return (
    <>
      <PageHeader section="styles" eyebrow="Styles" title="Iconography" />
      <p className="page-lead">
        System icons are functional signals — not decoration. They reinforce
        meaning, orient users, and save space. The Instacart icon set is
        consistent in weight, grid, and visual style.
      </p>

      <hr className="divider" />

      <h2 className="h2">System icons</h2>
      <p className="body">
        All system icons are drawn on a 24×24px grid with a consistent
        2px stroke weight. Available in Outline and Filled states, and in
        three sizes: 16px, 24px, and 32px.
      </p>

      <div className="icon-grid">
        {icons.map((name) => (
          <div key={name} className="icon-cell">
            <Image
              src={`${BASE_PATH}/icons/${name}-24x24-Outline.svg`}
              alt={name}
              width={24}
              height={24}
              unoptimized
            />
            <span className="icon-label">{name}</span>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <h2 className="h2">Sizes</h2>
      <table className="token-table">
        <thead>
          <tr>
            <th>Size</th>
            <th>Token</th>
            <th>Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16px</td>
            <td><code className="token-name">icon.size.sm</code></td>
            <td>Inline with small text, tight spaces, metadata rows</td>
          </tr>
          <tr>
            <td>24px</td>
            <td><code className="token-name">icon.size.md</code></td>
            <td>Default — navigation, buttons, list rows</td>
          </tr>
          <tr>
            <td>32px</td>
            <td><code className="token-name">icon.size.lg</code></td>
            <td>Empty states, feature introductions, prominent UI moments</td>
          </tr>
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">Outline vs. Filled</h2>
      <p className="body">
        Use <strong>Outline</strong> as the default state. Use{" "}
        <strong>Filled</strong> to communicate an active or selected state —
        a filled Home icon signals the current tab, an outlined one does not.
        Never use Filled for decorative purposes.
      </p>
      <DoDont
        doText={<p>Switch to Filled state when an icon represents the user&apos;s current location or a toggled-on state (e.g. active nav tab, favorited item).</p>}
        dontText={<p>Mix Outline and Filled icons at the same level of hierarchy without a semantic reason — it reads as inconsistency, not intent.</p>}
      />

      <hr className="divider" />

      <h2 className="h2">Color</h2>
      <p className="body">
        Icons inherit color from their context. Use semantic color tokens
        — never hardcode a color value on an icon. Active navigation icons
        use <code className="token-name">color.action.primary</code>.
        Decorative or secondary icons use{" "}
        <code className="token-name">color.text.secondary</code>.
        Error icons use <code className="token-name">color.feedback.error</code>.
      </p>

      <hr className="divider" />

      <h2 className="h2">Custom vs. system icons</h2>
      <p className="body">
        Reach for a system icon before requesting a custom one. Custom icons
        should only be created when no system icon accurately represents the
        concept, and should be drawn to the same grid and weight as the
        system set. All new icons must be reviewed by the brand team before
        shipping.
      </p>
    </>
  );
}
