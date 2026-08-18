import PageHeader from "@/components/PageHeader";
import DoDont from "@/components/DoDont";

export default function Illustration() {
  return (
    <>
      <PageHeader section="brand-expression" eyebrow="Brand Expression" title="Illustration" />
      <p className="page-lead">
        Instacart illustration brings warmth and personality to intentional
        moments in the product. Two styles are in scope for product use —
        each with distinct applications and restrictions.
      </p>

      <hr className="divider" />

      <h2 className="h2">Illustration styles in product</h2>
      <p className="body">
        The full brand illustration system contains multiple styles. For
        product, only the following two are used. Other styles (scenario
        illustrations, line-drawn hands) are reserved for brand and
        marketing contexts.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
        <div style={{ background: "var(--cashew)", border: "1px solid var(--border)", borderRadius: 12, padding: "28px 24px" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "var(--text-tertiary)", marginBottom: 10 }}>Style 1</p>
          <p style={{ fontFamily: "InstacartSansHeadline, sans-serif", fontWeight: 500, fontSize: 16, color: "var(--kale)", marginBottom: 8 }}>Vignette</p>
          <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text-secondary)" }}>
            Combines watercolor backgrounds with line-drawn elements in the
            foreground. The workhorse product illustration style — approachable,
            fresh, and versatile across empty states, feature introductions,
            and onboarding.
          </p>
        </div>
        <div style={{ background: "var(--surface-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "28px 24px" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "var(--text-tertiary)", marginBottom: 10 }}>Style 2</p>
          <p style={{ fontFamily: "InstacartSansHeadline, sans-serif", fontWeight: 500, fontSize: 16, color: "var(--kale)", marginBottom: 8 }}>Watercolor</p>
          <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text-secondary)" }}>
            Pure watercolor without line work. Reserved for key marketing
            and brand moments within the app — IC+ premium screens, seasonal
            campaigns, high-impact onboarding. Use with restraint.
          </p>
        </div>
      </div>

      <hr className="divider" />

      <h2 className="h2">When to use illustration</h2>

      <table className="token-table">
        <thead>
          <tr>
            <th>Context</th>
            <th>Style</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Empty states</td>
            <td>Vignette</td>
            <td>Standard empty cart, no search results, no orders yet</td>
          </tr>
          <tr>
            <td>Onboarding</td>
            <td>Vignette or Watercolor</td>
            <td>Watercolor for first-screen impact; vignette for feature steps</td>
          </tr>
          <tr>
            <td>IC+ upsell</td>
            <td>Watercolor</td>
            <td>Premium context warrants premium illustration style</td>
          </tr>
          <tr>
            <td>Order confirmation</td>
            <td>Vignette</td>
            <td>Celebratory moment without over-extending to watercolor</td>
          </tr>
          <tr>
            <td>Seasonal / campaign</td>
            <td>Watercolor</td>
            <td>Approved campaign assets only — not ad hoc illustrations</td>
          </tr>
          <tr>
            <td>Feature introduction</td>
            <td>Vignette</td>
            <td>Communicates the feature concept without distracting from UI</td>
          </tr>
          <tr>
            <td>Error states</td>
            <td>Vignette (optional)</td>
            <td>Only for critical errors where illustration reduces anxiety</td>
          </tr>
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">What illustration is not for</h2>
      <DoDont
        doText={<p>Use illustration at the screen level — as a hero, a feature callout, or a state indicator. Give it space to breathe.</p>}
        dontText={<p>Use illustration inside functional components (buttons, form fields, product tiles) or as background decoration on task-heavy screens like search or checkout.</p>}
      />

      <hr className="divider" />

      <h2 className="h2">Getting illustrations</h2>
      <p className="body">
        All product illustrations are produced and maintained by the brand
        team. Do not commission or create new illustration styles outside
        the approved set. If you need an illustration for a new context,
        work with the brand team to produce it within the established style.
      </p>
      <p className="body">
        Illustration assets are available in the Figma brand library under
        the Illustration component category.
      </p>
    </>
  );
}
