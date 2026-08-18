import PageHeader from "@/components/PageHeader";

export default function DesignTokens() {
  return (
    <>
      <PageHeader section="foundations" eyebrow="Foundations" title="Design Tokens" />
      <p className="page-lead">
        Tokens are the named decisions that connect brand values to
        implementation. They are not raw values — they are semantic
        contracts between design and code. The actual values live in TDS
        and the Figma library.
      </p>

      <hr className="divider" />

      <h2 className="h2">What tokens are for</h2>
      <p className="body">
        A token answers the question "what is this value for?" not "what is
        this value?" Instead of a hardcoded color like{" "}
        <code className="token-name">#1A5C1A</code>, a token says{" "}
        <code className="token-name">color.action.primary</code> — which
        means the same semantic intent can be expressed differently across
        themes, platforms, and contexts without changing the consuming code.
      </p>

      <hr className="divider" />

      <h2 className="h2">Token tiers</h2>
      <p className="body">
        Tokens exist at two levels. Use semantic tokens in all product work
        — never reference primitive tokens directly in components.
      </p>

      <table className="token-table">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Example</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Primitive</strong></td>
            <td><code className="token-name">color.green.700</code></td>
            <td>Raw brand values. Defined once, referenced by semantic tokens only.</td>
          </tr>
          <tr>
            <td><strong>Semantic</strong></td>
            <td><code className="token-name">color.action.primary</code></td>
            <td>Meaningful roles. What designers and engineers reach for when building.</td>
          </tr>
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">Naming conventions</h2>
      <p className="body">
        Token names follow a{" "}
        <strong>category · concept · variant · state</strong> structure.
        Not every token needs all four segments.
      </p>

      <table className="token-table">
        <thead>
          <tr>
            <th>Segment</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Category</td>
            <td><code className="token-name">color</code> · <code className="token-name">space</code> · <code className="token-name">radius</code> · <code className="token-name">shadow</code> · <code className="token-name">font</code></td>
          </tr>
          <tr>
            <td>Concept</td>
            <td><code className="token-name">surface</code> · <code className="token-name">action</code> · <code className="token-name">feedback</code> · <code className="token-name">brand</code></td>
          </tr>
          <tr>
            <td>Variant</td>
            <td><code className="token-name">primary</code> · <code className="token-name">secondary</code> · <code className="token-name">subtle</code></td>
          </tr>
          <tr>
            <td>State</td>
            <td><code className="token-name">default</code> · <code className="token-name">hover</code> · <code className="token-name">disabled</code> · <code className="token-name">pressed</code></td>
          </tr>
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">Where tokens live</h2>
      <p className="body">
        Token values are defined and maintained in two places — Figma (for
        design) and TDS (for code). These must stay in sync. If you encounter
        a token that doesn&apos;t exist in both places, raise it with the
        TDS team before shipping.
      </p>

      <div className="card-grid">
        <div className="card">
          <p className="card-title">Figma Library</p>
          <p className="card-body">Design tokens are published as Figma
          variables. Apply them to any element via the variables panel.</p>
        </div>
        <div className="card">
          <p className="card-title">TDS (Code)</p>
          <p className="card-body">Tokens are exported as CSS custom
          properties and available as design system primitives.</p>
        </div>
        <div className="card">
          <p className="card-title">This doc</p>
          <p className="card-body">Explains the naming logic and semantic
          intent — not the values themselves, which may change.</p>
        </div>
      </div>
    </>
  );
}
