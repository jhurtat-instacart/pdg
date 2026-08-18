import PageHeader from "@/components/PageHeader";

export default function Motion() {
  return (
    <>
      <PageHeader section="brand-expression" eyebrow="Brand Expression" title="Motion" />
      <p className="page-lead">
        Motion in Instacart communicates. It confirms actions, guides
        attention, and expresses the brand&apos;s energy — fresh, direct,
        and grounded. Motion should never be gratuitous.
      </p>

      <hr className="divider" />

      <h2 className="h2">Principles</h2>

      <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div className="card">
          <p className="card-title">Purposeful</p>
          <p className="card-body">Every animation has a reason: confirming
          a state change, establishing spatial context, or rewarding an
          action. If you can&apos;t name the reason, remove the motion.</p>
        </div>
        <div className="card">
          <p className="card-title">Swift</p>
          <p className="card-body">Grocery shopping is a task. Motion should
          feel fast and responsive — never slow, precious, or self-indulgent.
          Default durations are short.</p>
        </div>
        <div className="card">
          <p className="card-title">Grounded</p>
          <p className="card-body">Objects obey physics. They accelerate and
          decelerate naturally. Nothing floats or appears without spatial
          logic.</p>
        </div>
      </div>

      <hr className="divider" />

      <h2 className="h2">Transitions</h2>
      <p className="body">
        Transitions communicate spatial relationships between screens and
        states. They should reinforce the mental model of the navigation
        stack, not contradict it.
      </p>

      <table className="token-table">
        <thead>
          <tr>
            <th>Transition type</th>
            <th>Usage</th>
            <th>Direction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Push / Pop</strong></td>
            <td>Navigating deeper into a hierarchy</td>
            <td>New screen slides in from the right; back slides out to the right</td>
          </tr>
          <tr>
            <td><strong>Lift</strong></td>
            <td>Opening a modal or bottom sheet</td>
            <td>Sheet rises from the bottom; dismisses downward</td>
          </tr>
          <tr>
            <td><strong>Fade</strong></td>
            <td>Tab switching, same-level state changes</td>
            <td>Crossfade at the content level; no directional movement</td>
          </tr>
          <tr>
            <td><strong>Expand</strong></td>
            <td>Card or element expanding in place</td>
            <td>Scales from the element&apos;s origin point</td>
          </tr>
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">Timing</h2>
      <p className="body">
        All durations use tokens. Do not hardcode timing values in components.
      </p>

      <table className="token-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Duration</th>
            <th>Easing</th>
            <th>Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="token-name">motion.duration.fast</code></td>
            <td>100ms</td>
            <td>ease-out</td>
            <td>Micro-interactions: button press, checkbox toggle, icon state</td>
          </tr>
          <tr>
            <td><code className="token-name">motion.duration.base</code></td>
            <td>200ms</td>
            <td>ease-in-out</td>
            <td>Default component transitions: expand, collapse, fade</td>
          </tr>
          <tr>
            <td><code className="token-name">motion.duration.slow</code></td>
            <td>300ms</td>
            <td>ease-in-out</td>
            <td>Screen-level transitions: push, lift, page navigation</td>
          </tr>
          <tr>
            <td><code className="token-name">motion.duration.brand</code></td>
            <td>400–600ms</td>
            <td>spring</td>
            <td>Brand moments only: order confirmation, onboarding, delight</td>
          </tr>
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2">Accessibility</h2>
      <p className="body">
        All motion must respect{" "}
        <code>prefers-reduced-motion</code>. When this preference is
        active, replace all motion-based transitions with instant state
        changes or simple opacity fades (&lt;100ms). Looping animations
        must stop or not start. This is not optional.
      </p>
    </>
  );
}
