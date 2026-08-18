import PageHeader from "@/components/PageHeader";
import DoDont from "@/components/DoDont";

type Swatch = { name: string; hex: string };

const primary: Swatch[] = [
  { name: "Kale",   hex: "#003D29" },
  { name: "Carrot", hex: "#FF7009" },
  { name: "Cashew", hex: "#FAF1E5" },
];

const greens: Swatch[] = [
  { name: "Spinach",      hex: "#3A682F" },
  { name: "Lime",         hex: "#0AAD0A" },
  { name: "Matcha",       hex: "#85CC3E" },
  { name: "Granny Smith", hex: "#DBEF77" },
  { name: "Honeydew",     hex: "#C5FF96" },
];

const warm: Swatch[] = [
  { name: "Dark Chocolate", hex: "#442202" },
  { name: "Tangerine",      hex: "#FFA323" },
  { name: "Watermelon",     hex: "#FF8E67" },
  { name: "Cantaloupe",     hex: "#FFBB6E" },
  { name: "Mushroom",       hex: "#EDC9A2" },
  { name: "Cashew Dark",    hex: "#EDE5DA" },
];

const accent: Swatch[] = [
  { name: "Banana", hex: "#FFDC23" },
  { name: "Butter", hex: "#F9FB93" },
  { name: "Mint",   hex: "#C6F0CB" },
];

function SwatchCard({ s, primary: isPrimary }: { s: Swatch; primary?: boolean }) {
  const light = isLight(s.hex);
  return (
    <div className="swatch">
      <div
        className="swatch-arc"
        style={{
          background: s.hex,
          borderColor: light ? "rgba(0,0,0,0.08)" : "transparent",
        }}
      />
      <span className="swatch-name">{s.name}</span>
      <span className="swatch-hex">{s.hex.toUpperCase()}</span>
    </div>
  );
}

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 200;
}

export default function Color() {
  return (
    <>
      <PageHeader section="styles" eyebrow="Styles" title="Color" />
      <p className="page-lead">
        The Instacart color system translates a rich brand palette into
        a focused product palette. Most UI is built from a tight semantic
        subset — every color in the product has a job.
      </p>

      <hr className="divider" />

      <h2 className="h2">Primary palette</h2>
      <p className="body">
        These three colors carry the majority of the product UI and define
        the Instacart visual identity at a glance.
      </p>
      <div className="swatch-row swatch-row--primary">
        {primary.map((s) => <SwatchCard key={s.hex} s={s} primary />)}
      </div>

      <hr className="divider" />

      <h2 className="h2">Greens</h2>
      <p className="body">
        The green family spans the full range from deep brand anchors to
        bright functional accents. Used for actions, success states, and
        produce-inspired moments.
      </p>
      <div className="swatch-row">
        {greens.map((s) => <SwatchCard key={s.hex} s={s} />)}
      </div>

      <hr className="divider" />

      <h2 className="h2">Warm tones</h2>
      <p className="body">
        Warm colors support the Instacart brand across accent, notification,
        and surface roles. Carrot is the primary warm accent; the rest provide
        tonal range and surface warmth.
      </p>
      <div className="swatch-row">
        {warm.map((s) => <SwatchCard key={s.hex} s={s} />)}
      </div>

      <hr className="divider" />

      <h2 className="h2">Accent & utility</h2>
      <p className="body">
        Bright, high-visibility colors used sparingly for promotional moments,
        badges, and category callouts.
      </p>
      <div className="swatch-row">
        {accent.map((s) => <SwatchCard key={s.hex} s={s} />)}
      </div>

      <hr className="divider" />

      <h2 className="h2">Semantic roles</h2>
      <p className="body">
        Colors should be applied through semantic tokens, not raw values.
        The same green that represents an action today may need to change
        theme or platform — semantic tokens make that swap invisible to
        the consuming component.
      </p>

      <table className="token-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Token</th>
            <th>Value</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Action / Primary</td>
            <td><code className="token-name">color.action.primary</code></td>
            <td>Kale <span style={{ color: "var(--text-tertiary)" }}>#003D29</span></td>
            <td>Primary buttons, active nav, links</td>
          </tr>
          <tr>
            <td>Accent</td>
            <td><code className="token-name">color.accent</code></td>
            <td>Carrot <span style={{ color: "var(--text-tertiary)" }}>#FF7009</span></td>
            <td>Promotional labels, IC+, brand moments</td>
          </tr>
          <tr>
            <td>Surface / Default</td>
            <td><code className="token-name">color.surface.default</code></td>
            <td>Cashew <span style={{ color: "var(--text-tertiary)" }}>#FAF1E5</span></td>
            <td>Page backgrounds, sidebar</td>
          </tr>
          <tr>
            <td>Surface / Raised</td>
            <td><code className="token-name">color.surface.raised</code></td>
            <td>Cashew Dark <span style={{ color: "var(--text-tertiary)" }}>#EDE5DA</span></td>
            <td>Cards, sheets, elevated containers</td>
          </tr>
          <tr>
            <td>Feedback / Success</td>
            <td><code className="token-name">color.feedback.success</code></td>
            <td>Lime <span style={{ color: "var(--text-tertiary)" }}>#0AAD0A</span></td>
            <td>Confirmations, order completions</td>
          </tr>
          <tr>
            <td>Feedback / Error</td>
            <td><code className="token-name">color.feedback.error</code></td>
            <td>TBD</td>
            <td>Error states, destructive actions</td>
          </tr>
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">Exclusive colors</h2>
      <p className="body">
        Certain colors in the brand palette are reserved for specific
        in-product contexts. Using them outside these contexts dilutes
        their signal and creates false expectations for users.
      </p>
      <div className="placeholder">
        <span className="placeholder-label">In progress</span>
        <p>IC+ color usage, promotional palette, and partner brand
        moment rules are being worked through with the brand team.
        This section will be updated.</p>
      </div>

      <hr className="divider" />

      <h2 className="h2">Accessibility</h2>
      <p className="body">
        All color pairings used for text must meet WCAG AA contrast
        requirements (4.5:1 for body text, 3:1 for large text). Run
        contrast checks before shipping any new color pairing. Never
        use color as the sole means of communicating meaning.
      </p>
      <DoDont
        doText={<p>Test foreground/background pairings at every usage size and verify against the semantic token contrast documentation.</p>}
        dontText={<p>Pair Cashew text on a Kale background without verifying contrast — warm tones close the gap more than expected.</p>}
      />
    </>
  );
}
