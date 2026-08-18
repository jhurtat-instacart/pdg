import PageHeader from "@/components/PageHeader";

const principles = [
  {
    name: "Warm",
    body: "Instacart lives in the world of food and home. Design decisions should reflect that: warm tones, organic forms, a sensibility that feels human. Inclusive by default.",
  },
  {
    name: "Clear",
    body: "Grocery is information-dense. Visual hierarchy does the heavy lifting. Restraint is a skill: not every element earns its place on screen.",
  },
  {
    name: "Fun",
    body: "Food is one of life's great pleasures. Find the moments: micro-interactions, seasonal details, unexpected touches that make the experience feel alive rather than transactional.",
  },
  {
    name: "Efficient",
    body: "Every tap, wait state, and confirmation dialog costs something. Default to fast. Remove friction unless it has a clear job to do.",
  },
  {
    name: "Scalable",
    body: "Design at the component level. Every decision should hold up across surfaces, edge cases, and future contexts. One-off solutions become future debt.",
  },
  {
    name: "Specific",
    body: "Follow convention where it works: checkout, search, account flows. Design for context where it doesn't. Grocery, convenience, health, recipes each has different needs. The right solution beats the generic one.",
  },
];

export default function DesignPrinciples() {
  return (
    <>
      <PageHeader section="foundations" eyebrow="Foundations" title="Design Principles" />

      <div className="page-intro">
        <p className="page-intro-highlight">Instacart's product design principles are about balancing efficiency and expression.</p>
        <p className="body">You'll notice a natural tension between pairs. Within that tension is where we live — because good product design takes nuance, craft, and careful attention to the needs of users, retailers, and the business.</p>
        <p className="body">The principles are a lens rather than a checklist. They work best when in conversation with one another. If a design decision can't be justified by at least one of these principles, it's worth asking whether it belongs in the product.</p>
      </div>

      <hr className="divider" />

      <h2 className="h2">Our Product Design Principles</h2>

      <div className="principle-grid">
        {principles.map((p) => (
          <div key={p.name} className="principle-card">
            <p className="principle-name">{p.name}</p>
            <p className="principle-body">{p.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
