import PageHeader from "@/components/PageHeader";

export default function Content() {
  return (
    <>
      <PageHeader section="brand-expression" eyebrow="Brand Expression" title="Content" />
      <p className="page-lead">
        Voice and tone guidelines for the Instacart product experience.
        This section will define how the brand sounds in microcopy, error
        states, onboarding, and key UI moments.
      </p>

      <hr className="divider" />

      <div className="placeholder">
        <span className="placeholder-label">Coming soon</span>
        <p>
          Content guidelines are being developed by the content design team.
          This will cover product voice, tone principles, writing for components,
          error states, empty states, confirmations, and loading copy.
        </p>
      </div>

      <h2 className="h2">What this section will cover</h2>

      <div className="card-grid">
        <div className="card">
          <p className="card-title">Product voice</p>
          <p className="card-body">How Instacart sounds across all in-product
          copy — the consistent personality underneath every message.</p>
        </div>
        <div className="card">
          <p className="card-title">Tone by context</p>
          <p className="card-body">How tone shifts between task flows,
          confirmations, errors, and brand moments.</p>
        </div>
        <div className="card">
          <p className="card-title">Writing for components</p>
          <p className="card-body">Labels, CTAs, placeholders, tooltips —
          rules for writing within the constraints of UI components.</p>
        </div>
        <div className="card">
          <p className="card-title">Error states</p>
          <p className="card-body">How to communicate failure clearly and
          helpfully without alarming or frustrating users.</p>
        </div>
        <div className="card">
          <p className="card-title">Empty states</p>
          <p className="card-body">Copy for zero-state screens that guides
          users toward action without feeling generic.</p>
        </div>
        <div className="card">
          <p className="card-title">Numerics & formatting</p>
          <p className="card-body">Prices, quantities, weights, times —
          consistent formatting rules for product data.</p>
        </div>
      </div>
    </>
  );
}
