import PageHeader from "@/components/PageHeader";
import DoDont from "@/components/DoDont";

export default function Accessibility() {
  return (
    <>
      <PageHeader section="foundations" eyebrow="Foundations" title="Accessibility" />
      <div className="page-intro">
        <p className="page-intro-highlight">We design to open doors for people who use our product.</p>
        <p className="body">
          Instacart designs to WCAG 2.1 AA standards. The four principles (Perceivable,
          Operable, Understandable, Robust) provide a framework for evaluating any
          interaction or visual decision.
        </p>
      </div>

      <table className="token-table" style={{ marginBottom: 32 }}>
        <thead>
          <tr>
            <th>Principle</th>
            <th>What it means</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Perceivable</strong></td>
            <td>Content must be presentable to users in ways they can perceive</td>
            <td>Color contrast, alt text, captions, text alternatives</td>
          </tr>
          <tr>
            <td><strong>Operable</strong></td>
            <td>Interface components must be operable by all users</td>
            <td>Keyboard nav, sufficient tap targets, no time traps</td>
          </tr>
          <tr>
            <td><strong>Understandable</strong></td>
            <td>Content and operations must be understandable</td>
            <td>Clear labels, predictable behavior, error guidance</td>
          </tr>
          <tr>
            <td><strong>Robust</strong></td>
            <td>Content must be compatible with current and future assistive technology</td>
            <td>Semantic HTML, correct ARIA roles, tested with screen readers</td>
          </tr>
        </tbody>
      </table>

      <hr className="divider" />

      <h2 className="h2" id="understanding-disabilities">Understanding disabilities</h2>
      <p className="body">
        Disabilities are diverse: permanent, temporary, and situational. A person
        with a broken arm, a parent holding a baby, and someone with a permanent
        motor impairment all benefit from large tap targets. Designing for the
        edge expands what works for everyone.
      </p>

      <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr", marginBottom: 32 }}>
        <div className="disability-card">
          <p className="disability-card-title">Visual</p>
          <p className="disability-card-body">
            Includes blindness, low vision, and color vision deficiency. Around
            8% of men have some form of color blindness.
          </p>
          <hr className="disability-card-divider" />
          <p className="disability-card-strategies">
            <span className="disability-card-strategies-label">Strategies:</span> sufficient contrast, screen reader support, no color-only
            cues, scalable text, described images.
          </p>
        </div>
        <div className="disability-card">
          <p className="disability-card-title">Motor</p>
          <p className="disability-card-body">
            Includes limited dexterity, tremors, and paralysis. Affects how precisely
            someone can tap, swipe, or hold a device.
          </p>
          <hr className="disability-card-divider" />
          <p className="disability-card-strategies">
            <span className="disability-card-strategies-label">Strategies:</span> large touch targets, keyboard navigation, forgiving hit areas,
            no time-sensitive required actions.
          </p>
        </div>
        <div className="disability-card">
          <p className="disability-card-title">Cognitive</p>
          <p className="disability-card-body">
            Includes dyslexia, ADHD, and memory-related conditions. Affects how
            people read, focus, and process information.
          </p>
          <hr className="disability-card-divider" />
          <p className="disability-card-strategies">
            <span className="disability-card-strategies-label">Strategies:</span> plain language, consistent navigation, short flows, no
            unnecessary complexity or distractions.
          </p>
        </div>
        <div className="disability-card">
          <p className="disability-card-title">Hearing</p>
          <p className="disability-card-body">
            Includes deafness and partial hearing loss. Primarily affects how people
            receive audio-based communication.
          </p>
          <hr className="disability-card-divider" />
          <p className="disability-card-strategies">
            <span className="disability-card-strategies-label">Strategies:</span> captions for video, visual indicators for audio alerts,
            no audio-only communication of critical information.
          </p>
        </div>
      </div>

      <hr className="divider" />

      <h2 className="h2" id="color-and-contrast">Color and contrast</h2>
      <p className="body">
        Contrast is one of the most measurable and commonly failed accessibility
        requirements. Low contrast degrades readability for everyone, particularly
        in bright light or on low-quality screens.
      </p>

      <h3 className="h3">Color contrast ratios</h3>
      <p className="body">
        WCAG 2.1 AA requires a contrast ratio of at least 4.5:1 for body text
        and 3:1 for large text (18px+ regular or 14px+ bold). UI components and
        graphical elements also require 3:1 against adjacent colors.
      </p>

      <table className="token-table" style={{ marginBottom: 20 }}>
        <thead>
          <tr>
            <th>Text size</th>
            <th>Required ratio (AA)</th>
            <th>Required ratio (AAA)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Body text (below 18px regular / 14px bold)</td>
            <td>4.5:1</td>
            <td>7:1</td>
          </tr>
          <tr>
            <td>Large text (18px+ regular or 14px+ bold)</td>
            <td>3:1</td>
            <td>4.5:1</td>
          </tr>
          <tr>
            <td>UI components and icons</td>
            <td>3:1</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      <div className="howto">
        <div className="howto-bar" />
        <div className="howto-content">
          <div className="howto-head">
            <span className="howto-label">How to</span>
            <p className="howto-title">Checking contrast in Figma</p>
          </div>
          <div className="howto-body">
            <p>We use the <a href="https://www.getstark.co" target="_blank" rel="noopener noreferrer">Stark</a> plugin for contrast checking in Figma. It integrates
            directly into the design tool and checks both text and UI elements against WCAG standards.</p>
            <ol>
              <li>Install Stark from the Figma Community (search "Stark – Contrast & Accessibility Tools")</li>
              <li>Select the text or element you want to check</li>
              <li>Open Stark via Plugins &rarr; Stark &rarr; Contrast Checker</li>
              <li>Stark displays the contrast ratio and shows AA/AAA pass or fail badges</li>
              <li>If the element fails, adjust the foreground or background color until it passes</li>
            </ol>
            <p>Run contrast checks before moving any screen to ready-for-dev.</p>
          </div>
        </div>
      </div>

      <h3 className="h3">Contrast over imagery</h3>
      <p className="body">
        Text on top of photos or illustrations requires a different approach. The
        background varies across the frame and can&apos;t be reduced to a single ratio.
        Use a scrim (semi-transparent overlay), a text-safe crop zone, or a solid
        container beneath the text.
      </p>

      <DoDont
        doText={<p>Apply a dark gradient scrim behind text laid on imagery. Make sure the gradient covers enough area that light regions of the image can&apos;t compete with the text above it.</p>}
        dontText={<p>Place text directly on a photo assuming the dark areas provide enough contrast. Image crops shift between devices and content updates.</p>}
      />

      <h3 className="h3">Color as the only signal</h3>
      <p className="body">
        Color communicates meaning, but every color-based signal needs a backup.
        Error states, success confirmations, and status indicators should include
        a secondary cue (icon, label, pattern, or position) so the message lands
        regardless of how someone perceives color.
      </p>

      <DoDont
        doText={<p>Show an error state with a red border, an error icon, and a descriptive message below the field. Each one independently communicates the problem.</p>}
        dontText={<p>Use a red border as the only indication of an error. Users with red-green color blindness will see no difference between a valid and invalid field.</p>}
      />

      <hr className="divider" />

      <h2 className="h2" id="typography">Typography</h2>
      <p className="body">
        Our type system is calibrated for legibility at every scale. Instacart Sans
        was designed with optical balancing that reads cleanly at small sizes; the
        minimum sizes in the ramp are already tuned for accessibility. Apply the
        system as designed.
      </p>

      <h3 className="h3">Use the IDS text styles</h3>
      <p className="body">
        All text in the product should use a named text style from the IDS type ramp.
        These styles have been validated for size, weight, and line height across
        device contexts. The floor is 11px (accent styles). Going below that, or
        setting a custom size outside the ramp, requires design system approval.
      </p>

      <div className="howto">
        <div className="howto-bar" />
        <div className="howto-content">
          <div className="howto-head">
            <span className="howto-label">How to</span>
            <p className="howto-title">Applying text styles in Figma</p>
          </div>
          <div className="howto-body">
            <p>Use the text style panel in the right sidebar (the "T" icon). All Instacart
            text styles are published in the IDS Figma library. If a style does not appear,
            enable the library via the Assets panel &rarr; Libraries &rarr; Instacart Design System.</p>
            <p>Avoid detaching text styles or applying local overrides for size, weight, or
            line height. If a use case genuinely requires a different scale, raise it with
            the design system team.</p>
          </div>
        </div>
      </div>

      <h3 className="h3">Text resizing</h3>
      <p className="body">
        Some users increase system font size through OS accessibility settings.
        Designs with fixed-height containers, single-line clipping, or hardcoded
        layout dimensions will break when text grows. Use flexible containers
        and avoid designs that assume text stays a specific length.
      </p>

      <DoDont
        sideBySide
        doText={<p>Use Auto Layout in Figma with height set to Hug. The container grows with the content, and your design reflects how it will behave in code when text scales.</p>}
        dontText={<p>Use fixed-height frames for components that contain text labels. A fixed height clips overflowing text and hides it from users who have increased their font size.</p>}
      />

      <hr className="divider" />

      <h2 className="h2" id="interaction">Interaction</h2>
      <p className="body">
        How people physically interact with the product varies widely. Appropriate
        target sizes and timing flexibility ensure that users with motor impairments,
        tremors, or slower response times can operate the product without error or
        frustration.
      </p>

      <h3 className="h3">Tap targets</h3>
      <p className="body">
        Every interactive element needs a minimum tap target of 44×44pt, matching
        the Apple HIG and Google Material Design standard and WCAG 2.5.5 (AAA). Even
        when the visual element is smaller (an icon, a text link), the tappable area
        must meet this size. The visual and the hit area can differ.
      </p>

      <DoDont
        sideBySide
        style={{ marginBottom: 20 }}
        doText={<p>A 24px icon can have a 44×44pt tap target. The icon is centered within the hit area, which has a transparent fill. The surrounding space is part of the interaction.</p>}
        dontText={<p>Size the tap target to match the visual bounds of an icon or label. Small targets frustrate users with limited motor control and cause accidental activations.</p>}
      />

      <div className="howto">
        <div className="howto-bar" />
        <div className="howto-content">
          <div className="howto-head">
            <span className="howto-label">How to</span>
            <p className="howto-title">Adding tap targets in Figma</p>
          </div>
          <div className="howto-body">
            <p>When a touchable element is smaller than 44×44pt, wrap it in a frame to
            define the hit area:</p>
            <ol>
              <li>Select the interactive element (icon, button label, etc.)</li>
              <li>Press <strong>Shift + A</strong> to wrap it in an Auto Layout frame</li>
              <li>Set the frame&apos;s minimum width and height to <strong>44</strong></li>
              <li>Center the content horizontally and vertically</li>
              <li>Set the frame fill to <strong>None</strong> (transparent)</li>
              <li>Name the frame <strong>"Hit Area"</strong> to communicate intent to engineers</li>
            </ol>
            <p>This pattern appears throughout IDS components. When reviewing specs,
            check that interactive elements carry a Hit Area frame before marking ready for dev.</p>
          </div>
        </div>
      </div>

      <h3 className="h3">Timing</h3>
      <p className="body">
        Avoid designs that require users to act within a time window. Auto-advancing
        carousels, session timeouts with no warning, and toast notifications that
        disappear quickly create barriers for users who process information more
        slowly or are navigating with assistive technology.
      </p>

      <DoDont
        sideBySide
        doText={<p>If a session timeout or time-sensitive action is unavoidable, warn the user in advance with a clear way to extend or dismiss. Persistent banners work better than transient toasts for critical state changes.</p>}
        dontText={<p>Auto-dismiss confirmations, alerts, or undo actions after 2-3 seconds without a way to retrieve them. A user with a screen reader may not have encountered the notification before it disappears.</p>}
      />

      <hr className="divider" />

      <h2 className="h2" id="content">Content</h2>
      <p className="body">
        Clear structure, plain language, and meaningful image descriptions reduce
        friction for everyone, including users of assistive technology.
      </p>

      <h3 className="h3">Headings and hierarchy</h3>
      <p className="body">
        Screen reader users navigate pages by heading level. A correct heading
        hierarchy (H1 &rarr; H2 &rarr; H3) tells assistive technology what is a section
        title and what is a subsection. In design, this maps directly to type style
        choices: page title, section header, and subsection header, using distinct
        and consistent styles that engineers can translate to the right semantic elements.
      </p>
      <p className="body">
        Put the most important information first, in both visual position and reading
        order. Visual styling alone does not imply structure.
      </p>

      <h3 className="h3">Clear writing for functional tasks</h3>
      <p className="body">
        Save creative or playful writing for brand moments: onboarding, empty
        states, promotional screens. Button labels, error messages, form fields,
        and confirmation dialogs should use plain, direct language. The label should
        describe exactly what happens when tapped.
      </p>

      <DoDont
        sideBySide
        doText={<p>Write button labels as specific actions: "Add to cart," "Schedule delivery," "Remove item." The label describes exactly what happens when tapped.</p>}
        dontText={<p>Use vague or playful labels on functional controls: "Let&apos;s go," "Continue," "Yes" without context. These are ambiguous when heard out of visual context by a screen reader.</p>}
      />

      <h3 className="h3">Alt text</h3>
      <p className="body">
        Every image that communicates meaning needs an alt text description. Decorative
        images, visual flourishes that add no information, should have empty alt
        text (<code style={{ fontFamily: "monospace", fontSize: 12, background: "var(--honeydew)", padding: "1px 5px", borderRadius: 3 }}>alt=""</code>) so screen readers skip them.
      </p>
      <p className="body">
        In design, flag which images are informational and provide a description.
        Add the intended alt text to the layer name or in a spec annotation. Engineers
        will implement it, but the content has to come from the designer.
      </p>

      <div className="howto">
        <div className="howto-bar" />
        <div className="howto-content">
          <div className="howto-head">
            <span className="howto-label">How to</span>
            <p className="howto-title">Writing good alt text</p>
          </div>
          <div className="howto-body">
            <p>Good alt text describes what the image means in context: the information
            it conveys, not a literal inventory of what&apos;s visible. A photo of a produce
            aisle might be "Fresh organic produce in a colorful market display" if it&apos;s
            editorial, or empty alt if it&apos;s purely decorative background texture.</p>
            <ul>
              <li>Keep it under 125 characters when possible</li>
              <li>Skip "image of" or "photo of." Screen readers already announce the image type</li>
              <li>For product images, include the product name, key attributes (organic, size), and any text visible in the image</li>
              <li>For icons used as buttons, write the action: "Add to cart," not "shopping cart with plus sign"</li>
              <li>Annotate alt text in the Figma spec before handing off</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
