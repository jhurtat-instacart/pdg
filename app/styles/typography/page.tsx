import PageHeader from "@/components/PageHeader";
import TypographyTable from "@/components/TypographyTable";

export default function Typography() {
  return (
    <>
      <PageHeader section="styles" eyebrow="Styles" title="Typography" />
      <p className="page-lead">
        Instacart uses three custom typefaces. Each has a distinct role.
        Together they give the product range — from the workhorse legibility
        of body copy to expressive editorial moments.
      </p>

      <hr className="divider" />

      <h2 className="h2">Typefaces</h2>

      <div style={{ marginBottom: 40 }}>
        <div style={{
          padding: "28px 28px 24px",
          background: "var(--kale)",
          borderRadius: 12,
          marginBottom: 12,
          color: "var(--surface-mobile-header)"
        }}>
          <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 14, opacity: 0.5, fontFamily: "InstacartSansBody, sans-serif" }}>
            Instacart Sans Headline
          </div>
          <div style={{ fontSize: 42, lineHeight: 1.05, letterSpacing: "-0.025em", fontFamily: "InstacartSansHeadline, sans-serif", fontWeight: 500 }}>
            Fresh deals,<br />delivered.
          </div>
        </div>
        <p className="body" style={{ marginBottom: 0 }}>
          <strong>Instacart Sans Headline</strong> — Used for all display text,
          page titles, section headings, and marketing moments within the
          product. Bold weight for display; Medium for subheadings.
        </p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{
          padding: "28px 28px 24px",
          background: "var(--cashew)",
          borderRadius: 12,
          marginBottom: 12,
          border: "1px solid var(--border)"
        }}>
          <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 14, color: "var(--text-tertiary)", fontFamily: "InstacartSansBody, sans-serif" }}>
            Instacart Sans Body
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.65, fontFamily: "InstacartSansBody, sans-serif", color: "var(--text-primary)" }}>
            Add organic strawberries, cage-free eggs, and sourdough bread to
            your cart. Estimated delivery in 30–45 minutes.
          </div>
        </div>
        <p className="body" style={{ marginBottom: 0 }}>
          <strong>Instacart Sans Body</strong> — The workhorse. Used for all
          UI copy: product names, descriptions, labels, metadata, and any text
          at sizes below 20px. Regular for body; Medium for emphasis; Bold
          for strong labels and prices.
        </p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{
          padding: "28px 28px 24px",
          background: "var(--surface-card)",
          borderRadius: 12,
          marginBottom: 12,
          border: "1px solid var(--border)"
        }}>
          <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 14, color: "var(--text-tertiary)", fontFamily: "InstacartSansBody, sans-serif" }}>
            Instacart Serif Headline
          </div>
          <div style={{ fontSize: 38, lineHeight: 1.1, letterSpacing: "-0.015em", fontFamily: "InstacartSerifHeadline, serif", fontWeight: 400, color: "var(--kale)" }}>
            Freshly picked,<br />crafted for you.
          </div>
        </div>
        <p className="body" style={{ marginBottom: 0 }}>
          <strong>Instacart Serif Headline</strong> — Reserved for editorial
          and brand expression moments: IC+ upsell, seasonal campaigns,
          onboarding, and empty states with a premium feel. Use sparingly —
          its power comes from restraint.
        </p>
      </div>

      <div className="typeface-split">
        <div className="typeface-split-col">
          <p className="typeface-split-name typeface-split-name--sans">IC Sans</p>
          <div className="typeface-split-card">
            <p className="typeface-split-card-title">Mild</p>
            <p className="typeface-split-card-body">Our hardest-working typeface, spanning campaign through to function.</p>
            <p className="typeface-split-card-body">Our most informative voice.</p>
          </div>
        </div>
        <div className="typeface-split-col">
          <p className="typeface-split-name typeface-split-name--serif">IC Serif</p>
          <div className="typeface-split-card">
            <p className="typeface-split-card-title">Medium</p>
            <p className="typeface-split-card-body">Designed for articulation and warmth, reassuring, and adding greater tonal range.</p>
            <p className="typeface-split-card-body">Our supportive voice.</p>
          </div>
        </div>
      </div>

      <div className="typeface-scale-row">
        <div className="typeface-scale-line" />
        <div className="typeface-scale-labels">
          <div>
            <p className="typeface-scale-pct">90% usage</p>
            <p className="typeface-scale-range">body and below</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p className="typeface-scale-pct">~10% usage</p>
            <p className="typeface-scale-range">title and above</p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <h2 className="h2">Type styles</h2>
      <p className="body">
        The full set of named type styles used across the product. Each style
        is defined by typeface, weight, size, and line height.
      </p>

      <TypographyTable />

      <hr className="divider" />

      <h2 className="h2">Numerals</h2>
      <p className="body">
        Price, quantity, weight, and time are core information types in a
        grocery product. Numbers compete for attention with product names and
        promotional labels. Follow these rules to maintain hierarchy without
        adding visual noise.
      </p>

      <div className="card-grid">
        <div className="card">
          <p className="card-title">Price</p>
          <p className="card-body">Sans Body Bold. Size scales with context —
          larger in PDP, smaller in list view. Never smaller than 13px.</p>
        </div>
        <div className="card">
          <p className="card-title">Quantity</p>
          <p className="card-body">Sans Body Medium. Secondary to price.
          Avoid competing weights in the same container.</p>
        </div>
        <div className="card">
          <p className="card-title">Promo / sale</p>
          <p className="card-body">Accent color + Bold. Original price in
          muted text with strikethrough. Never both at the same size.</p>
        </div>
        <div className="card">
          <p className="card-title">ETA / time</p>
          <p className="card-body">Sans Body Regular. Same size as supporting
          metadata. Upsize only for urgency states (e.g. last-call timing).</p>
        </div>
      </div>
    </>
  );
}
