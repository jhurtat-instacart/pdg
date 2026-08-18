import PageHeader from "@/components/PageHeader";
import DoDont from "@/components/DoDont";

export default function BrandExpressionOverview() {
  return (
    <>
      <PageHeader section="brand-expression" eyebrow="Brand Expression" title="Overview" />
      <p className="page-lead">
        The Instacart brand is warm, vibrant, and fresh. In the product,
        brand expression is earned — it shows up in specific moments,
        on specific surfaces, and at specific intensities. This section
        defines where and how it belongs.
      </p>

      <hr className="divider" />

      <h2 className="h2">Brand in product</h2>
      <p className="body">
        Most of the product UI is functional. Color, type, and layout are
        doing the job of communicating and enabling action — not expressing
        personality. Brand expression layers on top of the functional
        foundation at intentional moments: the first impression, the
        celebratory state, the premium tier, the seasonal event.
      </p>
      <p className="body">
        The test for whether a surface warrants brand expression is
        simple: <strong>does the user have a moment to receive it?</strong>{" "}
        A product tile in a scrolling list does not. An IC+ upsell screen does.
        An empty cart state does. A successful order confirmation does.
      </p>

      <hr className="divider" />

      <h2 className="h2">Brand expression triggers</h2>
      <p className="body">
        The following contexts are appropriate for brand expression —
        illustration, expressive typography, color moments, and motion:
      </p>

      <div className="card-grid">
        <div className="card">
          <p className="card-title">Onboarding</p>
          <p className="card-body">First impressions set tone. Use illustration
          and expressive type to establish warmth before the task begins.</p>
        </div>
        <div className="card">
          <p className="card-title">IC+ upsell</p>
          <p className="card-body">Premium tier deserves premium expression.
          Serif type, exclusive color, and refined illustration signal value.</p>
        </div>
        <div className="card">
          <p className="card-title">Order confirmation</p>
          <p className="card-body">A moment of delight after task completion.
          Illustration and motion make the completion feel earned.</p>
        </div>
        <div className="card">
          <p className="card-title">Empty states</p>
          <p className="card-body">Empty states with illustration are less
          intimidating and more human than a blank screen with text.</p>
        </div>
        <div className="card">
          <p className="card-title">Seasonal / campaigns</p>
          <p className="card-body">Temporal brand moments — holidays,
          produce seasons — where the brand can flex without becoming noise.</p>
        </div>
        <div className="card">
          <p className="card-title">Feature introductions</p>
          <p className="card-body">When launching a new capability, a
          moment of brand storytelling earns attention before the UI does.</p>
        </div>
      </div>

      <hr className="divider" />

      <h2 className="h2">What brand expression is not</h2>
      <p className="body">
        Brand expression is not decoration applied to functional UI.
        It is not illustrations on every screen, expressive type in every
        heading, or brand colors on every button. When brand expression
        is everywhere, it is nowhere.
      </p>
      <DoDont
        doText={<p>Use brand expression on screens where the user&apos;s primary mode is reception — they are being welcomed, rewarded, or informed — not actively completing a task.</p>}
        dontText={<p>Add illustration or expressive type to transactional screens (checkout, cart, search results) where the user is in task mode. It competes with the task and creates friction.</p>}
      />

      <hr className="divider" />

      <h2 className="h2">Expression tools</h2>
      <p className="body">
        The Instacart brand expression toolkit for product includes:
      </p>
      <div className="card-grid">
        <div className="card">
          <p className="card-title">Illustration</p>
          <p className="card-body">Vignette and watercolor styles for
          key moments. See the Illustration page for usage rules.</p>
        </div>
        <div className="card">
          <p className="card-title">Motion</p>
          <p className="card-body">Named motion behaviors that carry
          brand personality through transitions and micro-interactions.</p>
        </div>
        <div className="card">
          <p className="card-title">Serif type</p>
          <p className="card-body">Instacart Serif Headline for premium
          and editorial moments. Never in functional UI.</p>
        </div>
        <div className="card">
          <p className="card-title">Color moments</p>
          <p className="card-body">Exclusive brand colors used at full
          saturation in specific, intentional contexts.</p>
        </div>
      </div>
    </>
  );
}
