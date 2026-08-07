---
name: hometelecom
description: A sky that shifts across the page like the day does — bright morning blue where the move begins, open daylight through the practical sections, deep dusk where the promise gets made.
colors:
  sky-1: "#0050db"
  sky-2: "#1968e6"
  sky-3: "#4a8df6"
  sky-4: "#86b4f7"
  sky-5: "#c7dbfc"
  sky-6: "#eef4ff"
  dusk-1: "#060d2b"
  dusk-2: "#131f5c"
  dusk-3: "#2c3f9e"
  ink-900: "#0b1526"
  ink-700: "#3c4863"
  ink-500: "#69738c"
  line: "#e4e9f4"
  mist: "#f5f8fd"
  accent: "#1968e6"
  amber: "#f5a524"
  status-positive-bg: "#e4f6ea"
  status-positive-text: "#177a44"
  status-pending-bg: "#fff2df"
  status-pending-text: "#a6650a"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Segoe UI, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5.6vw, 4.35rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, Segoe UI, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "12px"
  md: "18px"
  lg: "28px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "24px"
  lg: "64px"
  xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.ink-900}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  button-sky:
    backgroundColor: "#ffffff"
    textColor: "{colors.sky-1}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
---

# Design System: hometelecom

## Overview

**Creative North Star: "The sky that tells you what time it is in the journey."**

hometelecom exists to make a stressful, multi-vendor task (moving home and re-arranging five separate services) feel like a single calm errand. The rebuild takes that literally: the page opens in a bright, cloud-streaked morning sky at the moment the visitor starts their move, holds open daylight through the practical service sections where the real decisions get made, and drops into a deep dusk-blue band for the one section that asks to be trusted rather than skimmed — the five-point promise, backed by a named executive who'll personally match a competitor's offer. The sky is the system: it never becomes a decorative gradient bolted onto a hero, it is the thing the whole page's pacing is built around.

The visual language is wide, light, and confident — big type, generous air, soft elevated cards, pill-shaped actions — pulled from modern SaaS marketing sites (Jorny, Notch, Tether, Designspace, PureVolt) rather than the utility-comparison-site look of the original. Nothing here is styled as a "card grid of icon + heading + text" by default; each service gets a structure suited to what it's actually proving (a live-feeling coverage panel for broadband, real lifestyle photography for energy, a dense triptych for the three smaller jobs). The hero's "let's get you started" wayfinding went through three revisions before landing on a frosted-glass picker that shares the checker's own material rather than a boxed card — see "Hero 'let's get you started' picker (v3)" below.

**Key Characteristics:**
- Real photographic sky (`assets/images/hero-sky.jpg`, user-supplied) fills the hero with a slow, near-imperceptible ambient pan, fading to white at the base; every other "sky" surface echoes its sampled hues as a CSS gradient rather than reusing the photo (see the Photo-Once Rule)
- A second, deep "dusk" sky — CSS gradient, no photo — reprised once, mid-page, for the trust/promise section
- Wide layout: 1440–1600px content width, generous gutters, nothing feels boxed-in
- Pill-shaped primary actions; soft, colour-tinted elevation on cards; no hard-edged neobrutalist shadows
- A typographic wordmark (script "home" + sans "telecom", no icon/logomark) carried in white on dark sections, ink on light ones

## Colors

A single-hue "sky" blue carries the Committed color strategy (large gradient fields at the hero, the promise band, and the closing contact CTA); everywhere else is restrained neutrals plus that same blue as the one accent. Amber appears only for star ratings.

### Primary
- **Sky Cobalt** (`#0050db` sky-1) / **Sky Azure** (`#1968e6` sky-2) / **Sky Mid** (`#4a8df6` sky-3) / **Sky Pale** (`#86b4f7` sky-4): sampled directly from `assets/images/hero-sky.jpg` (the real photo the hero uses) at ~2%, 35%, 55% and 70% down the frame, so the CSS-gradient echoes (contact band, broadband panel) match the photo exactly rather than approximating it. sky-2 doubles as the interactive accent (links, checks, focus rings, the mock dashboard's progress fill) everywhere in the light sections.

### Secondary
- **Dusk Navy** (`#060d2b` dusk-1) → **Dusk Indigo** (`#131f5c` dusk-2) → **Dusk Violet** (`#2c3f9e` dusk-3): the one deliberate dark reprise, reserved for the "hometelecom promise" section only. Never used elsewhere — its rarity is what makes the promise section read as a change in register, not just a change in background color.

### Neutral
- **Ink 900** (`#0b1526`): all headings, primary button fill.
- **Ink 700** (`#3c4863`): default body text.
- **Ink 500** (`#69738c`): secondary/muted text (subheads, captions, timestamps).
- **Line** (`#e4e9f4`) / **Mist** (`#f5f8fd`): hairline borders and the alternating light-section background (energy, triptych, reviews, how-it-works).

### Semantic (status pills only)
- **Connected/positive** (`#e4f6ea` bg / `#177a44` text): "Connected", "Set up" status pills in the dashboard mockups.
- **Scheduled/pending** (`#fff2df` bg / `#a6650a` text): "Scheduled" status pills.
- These never appear outside a status pill — they're semantic state, not brand accent, and don't compete with the One Accent Rule below.

### Named Rules
**The One Accent Rule.** Sky blue (`#1968e6`) is the only saturated hue used for interaction and emphasis outside the dusk band and status pills. It never competes with a second "brand" color.
**The Dusk-Once Rule.** The dark dusk gradient appears exactly once, for the promise section. If a second section ever wants a dark band, it reuses dusk — introducing a third register breaks the day-cycle logic the whole page is built on.
**The Photo-Once Rule.** The real sky photograph (`assets/images/hero-sky.jpg`) is used once, in the hero. Every other "sky" surface (contact band, broadband panel) echoes its exact sampled hues as a CSS gradient rather than reusing the raster image, so the motif repeats without the image itself repeating.

## Typography

**Display Font:** Bricolage Grotesque (weights 600/700/800), with Segoe UI / system-ui fallback
**Body Font:** Inter (weights 400/500/600/700), with the same system fallback

**Character:** Bricolage Grotesque carries every heading — a grotesque with just enough personality in its curves to avoid reading as a generic system sans, matching the confident, rounded-geometric headline voice of the reference sites. Inter stays on body copy, labels, and the dashboard-mockup UI text deliberately: at 14–16px in dense feature lists and status pills, legibility wins over personality, and Inter is a genuine workhorse choice there, not a default nobody considered.

### Hierarchy
- **Display** (800/700, `clamp(2.6rem, 5.6vw, 4.35rem)`, 1.1): hero H1 only.
- **Headline** (700, `clamp(2rem, 3.2vw, 2.75rem)`, 1.1): section H2s.
- **Title** (700, ~1.2–1.3rem): card/panel headings (tri-panel h3, quick-card strong, step h3).
- **Body** (400, 1rem–1.08rem, 1.6): paragraphs; measure capped near 32–38rem (~55–65ch) per column, not full-width.
- **Label** (600/700, 0.78–0.95rem): stat labels, pill text, nav links — never uppercase/tracked as a kicker (see Do's and Don'ts).

### Named Rules
**No Kicker Rule.** No small label sits above a heading to announce its topic. The heading carries its own weight; a "FEATURES"-style eyebrow was cut from every section during finishing.

## Layout

Two container widths: `--container` (1440px) for most sections, `--container-wide` (1600px) for the header and hero, both with a fluid `clamp(20px, 4vw, 64px)` gutter — this is what makes the rebuild read as "wider" than the source site's boxed layout. Sections alternate white and mist (`#f5f8fd`) backgrounds to create rhythm without adding borders. Vertical rhythm is a single `clamp(64px, 9vw, 128px)` section padding scale (tightened to `clamp(48px, 6vw, 88px)` for shorter bands like the stats strip and awards row). Below 980px, every two-column split (broadband, energy, promise, reviews, app) stacks to one column, image/visual first only where the source order still makes sense; below 1180px the primary nav collapses into a full-screen mobile panel.

## Elevation & Depth

Hybrid: flat by default, soft colour-tinted elevation on anything that floats above the page (the hero dashboard mockup, feature panels, the phone mockup, quick-start cards on hover). Shadows are always offset-and-blurred, never a flat halo, and tinted toward the sky-blue/ink hue of what casts them rather than plain black.

### Shadow Vocabulary
- **shadow-sm** (`0 2px 10px -4px rgba(11,21,38,.12)`): resting elevation for small icon tiles and stat icons.
- **shadow-md** (`0 20px 48px -22px rgba(19,42,131,.28)`): quick-start cards on hover, the energy meter card, the trust-score card.
- **shadow-lg** (`0 36px 90px -30px rgba(14,42,131,.35)`): the hero dashboard mockup, the app phone mockup, the broadband coverage panel — the page's three "hero objects."

## Shapes

Corners are large and consistent: 12px for small icon tiles, 18px for compact panels, 28px for the big hero/panel/phone frames, and full pill (`999px`) for every primary button and the postcode-checker field. No hard-edged (zero-blur) shadows anywhere — that language is reserved for neobrutalist systems this one isn't. Borders are single 1px hairlines in `--line`; no colored left/right accent borders on cards or list items.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`).
- **Primary:** ink-900 fill, white text, lifts 2px with a deepened shadow on hover.
- **Sky:** white fill, ink-blue text — used only on saturated sky/dusk backgrounds (hero, contact band, promise ghost button's sibling) for contrast.
- **Ghost / Outline:** transparent with a 1.5px border (white-alpha on dark sections, `--line` on light); fills faintly on hover. Used for secondary actions only, never for a page's primary conversion action.

### Cards / Panels
- **Corner style:** 18–28px depending on size (see Shapes).
- **Background:** white on mist sections, mist-tinted glass (`rgba(255,255,255,.08–.16)` + blur) on sky/dusk sections.
- **Shadow strategy:** see Elevation — panels that "float" (mockups) get shadow-lg; in-flow cards get shadow-md only on hover, flat at rest.
- **Border:** 1px hairline at rest; most cards gain no border change on hover, they gain shadow + a 3px lift instead.

### Inputs / Fields
- **Style:** the postcode checker is a pill-shaped glass field (white-alpha background + blur) sitting inside a bordered outer pill, matching the hero's frosted-glass register.
- **Focus:** default browser outline is replaced system-wide with a 2.5px sky-blue outline, 3px offset (see `:focus-visible` in styles.css) — never removed, only restyled.

### Navigation
- **Style:** wordmark + four text links + icon-only phone button + primary pill CTA, all in white over the hero. On scroll (`.is-scrolled`), the header gains a frosted white background and the wordmark/links switch to ink — a background/blur/shadow transition only, deliberately not a padding/size animation, to avoid layout-thrashing the header on scroll.
- **Phone de-emphasis (explicit product decision):** the business wants to steer people away from calling as the default channel, so the literal number no longer appears in the header, hero, or mobile-menu CTA row — those are the high-frequency, "in your face" placements. `.header-phone` is now a circular icon-only button (`tel:` link, `aria-label`/`title` carry the number for a11y) instead of icon+digits. It stays reachable exactly three ways: the header icon (always visible, every breakpoint), the dedicated "Rather speak to us?" contact-band section further down the page (phone kept deliberately secondary there, under the primary "Book a call" action), and the footer. The one contextual exception is the council-tax-&-water triptych panel, where "Call us to arrange" reflects how that specific service actually works today (phone-arranged, not self-serve) — that's product truth, not incidental phone-forward copy, so it stayed.
- **Nav items:** Broadband, Utilities, Customer area, three items rather than the real hometelecom.co.uk site's four. Contact us was folded into Customer area on explicit user request ("contact us should mold into customer area") since both are fundamentally "get help with an existing relationship to this company," just self-serve vs. human-assisted; splitting them into two top-level items was judged unnecessary friction. All three are display-only, deliberately not wired to page sections (`href="#"`); this rebuild's own content lives at page anchors reachable by scrolling or the footer, not primary nav.
- **Dropdowns:** each nav item opens a `.nav-dropdown` panel on hover/focus (desktop only), an opaque white card (`shadow-md`, `radius-md`) that stays legible regardless of what's behind the header. It opens with a scale+lift entrance (`scale(.94)`→`1`, 8px rise, `--ease-out`) rather than a flat fade, and its links cascade in individually on a short stagger (30ms apart) rather than appearing as one block; hover feedback on the links themselves stays undelayed. No caret/chevron indicator, tried once, cut per explicit user feedback ("no arrows in the menu bar"). Dropdown links are inert placeholders mirroring real site structure. Not reachable by touch, mobile collapses to the flat 3-item list only, no nested disclosure.
- **Mega dropdowns (all three top-level items):** `.nav-dropdown--mega` upgrades the same white/`radius-md` card into a two-column panel (~640–680px wide), a plain link list on the left, a hairline `--line` divider, and two photo feature-cards on the right (`.mega-card`: `radius-sm` image, bold title, muted one-line description, `shadow-sm` + mist tint on hover). Broadband and Utilities are left-aligned to their trigger; Customer area is the rightmost nav item now that it absorbed Contact us, so its panel is right-aligned instead (`.nav-dropdown--mega-end`, opens leftward) to stay clear of the viewport edge. Broadband's cards split by the same Tenant/Homeowner segmentation as the hero picker ("For Tenants" / "For Homeowners", both real hero copy). Utilities' four links are grouped by whitespace only, never a text kicker (see the No Kicker Rule): Energy + Water/council tax, then SIM cards + Sky TV, and the two cards summarize those groups ("Home essentials", "Mobile & entertainment") rather than picking two of four arbitrarily. Customer area's eight links group the same way: self-service (My account, Make a payment, Broadband speed check, Network status) and get in touch (Support, Live chat, Book a callback, Call), summarized by "Manage your account" and "Talk to a real person." Card photos are real, licensed (Openverse, same sourcing process as the energy-section photo, see PRODUCT.md Evidence on Hand), self-hosted, animal-free. The two Customer area cards reuse different crops of the same photo shoot as the Broadband/Tenants card (a real sourcing constraint, not a design choice, logged in PRODUCT.md) but were picked and cropped specifically for different poses (laptop vs. phone-to-ear) so they still read as distinct.
- **Account avatar:** a circular icon-only button in `.header-actions` (`.account-avatar`, reuses the existing Ghost/Outline button treatment: white-alpha border on the hero, `--line` border once scrolled) sits before the primary CTA, an `i-user` icon placeholder for a signed-in account affordance. Explicit user request, deliberately not wired anywhere yet (`href="#"`).
- **Mobile:** collapses to a hamburger at 980px; opens a full-height white panel with large (1.4rem) stacked links and the same two CTAs repeated at the bottom. (Fixed bug: `.site-nav-panel a`'s descendant-selector color/padding was leaking into the two `.mobile-cta` buttons at higher specificity than `.btn-primary`/`.btn-outline`, making the filled button's white text invisible against its own ink-900 fill — `.site-nav-panel .mobile-cta a` now restores the intended `.btn` padding/size/colors.)

### Hero copy (rewritten)
The launch H1 ("Big brand names. One simple home setup.") tested as too abstract — it didn't say what the company actually does. It's now literal about the service and the outcome: "Get broadband, energy and utilities sorted before you move in." The lede carries the differentiator instead of re-listing services: one call instead of juggling five providers, UK-based support, contracts that match the tenancy rather than the provider's preferred term — a direct echo of Product Principle #1 ("never make the customer feel like they're juggling five separate companies").

### Hero "let's get you started" picker (v5 — checker and tabs as one card)
v3 had tab nav + value/desc panels sitting above a *separate* postcode-checker form. v4 tried folding the checker into the same flex column as the tabs, but they still read as two independently-styled pills loosely stacked. v5 (user-supplied wireframe) is the real merge: a single outer frosted card (`.hero-picker`, `rgba(255,255,255,.09)`, `radius:36px`) contains exactly two rows — the postcode form on top, the tab nav below — each keeping its own inner pill (same frosted material, same border/blur) so the grouping reads as "one control with two rows" rather than either row losing its identity. The active tab's proof point (value + description + a "Learn more →" link to that service's page section) and the "Not sure where to start? Chat with us" line both live *outside* the card, underneath it — the wireframe's own hierarchy: pick + check is the control, the stat and the escape hatches are commentary on it. Selecting a tab updates the postcode input's placeholder via `data-placeholder` (e.g. "Postcode for energy deals"), and the checker's own 560px width cap was removed so it spans the full card width, matching the tab row beneath it.

The tab nav is `flex-wrap:nowrap` with `overflow-x:auto` and a hidden scrollbar (`.hero-picker-tab{flex:none}` so items keep their natural width) — it never wraps to a second row and the pill's `border-radius:999px` never has to stretch into a stadium/rect shape. Both inner rows are now `width:100%` of the outer card's content box (previously the tab nav alone owned a `max-width:78rem`; that constraint now lives on `.hero-picker` itself, and the checker matches it row-for-row per the wireframe rather than staying capped at its old 560px).

The hero's old phone fallback ("Rather call us? Call 01403 216131") is gone per the phone de-emphasis decision (see Navigation) — replaced with "Not sure where to start? Chat with us", which opens the live-chat widget rather than navigating anywhere.

### Live chat widget
A floating `.chat-widget` (bottom-right, `z-index:200`, above everything including the mobile nav panel) — the self-serve, low-friction channel the phone de-emphasis is steering people toward. Circle toggle button in accent blue (`.chat-toggle`, the One Accent Rule color, not a new brand hue) swaps between a chat-bubble icon and a close (×) icon depending on state, matching the existing `.nav-toggle` open/close icon-swap convention. The panel itself (`.chat-panel`) is an opaque white card — `radius-lg`, `shadow-lg` — that scales/fades in from the button (`transform-origin:bottom right`), never a boxed dashboard or anything competing with the sky photo, since it floats above the page rather than living inside a section.

**Behavior (all client-side, matching the site's "styled UI, not a live backend" convention — see postcode checker, Book a call):** on the homepage only (detected via the presence of `#postcode`, not a page-name flag), the panel auto-opens once per session, ~1.2s after load, showing a greeting and four quick-reply chips (Broadband / Energy & utilities / Track my order / Speak to a real person). Picking a chip posts it as a user-bubble, removes the chip row, shows a `.chat-typing` indicator (three bouncing dots, same bubble shape as a real reply, staggered `animation-delay`), then swaps it for the canned bot reply ~1.1s later — the pause and typing dots are what make the mock read as "live" rather than an instant scripted reply. The "speak to a real person" reply is the one place besides the footer/contact-band/header icon that still surfaces the phone number, appropriately, since the visitor explicitly asked for it. Typing into the input and sending does the same user-bubble → typing → canned-reply pattern. Closing the panel (× in the header, or the toggle button) sets a `sessionStorage` flag so it won't auto-reopen again that session. The widget itself (button + working open/close) is present on all three pages for consistency; only the homepage auto-opens it.

**Testing note:** the open/close transition is opacity+transform driven (`.chat-panel`'s `transition`), which does not resolve under headless Chrome's `--virtual-time-budget` flag (a known headless-testing limitation, not a real bug) — verified correct by temporarily forcing the panel visible and separately by stripping the transition, both confirming the underlying JS/CSS state machine is correct. Real browsers with real wall-clock timers render it normally.

### Signature component: the "move-in checklist" mockup
The app section's phone card is authored UI language (icon tiles, status-check rows reading service name + short status) built entirely from HTML/CSS/SVG, not a screenshot — the page's one remaining "proof device" mockup.

### Real brand assets
Partner network logos (marquee), award badges ("Recognised across the industry"), and the App Store/Google Play badges are the actual images pulled from the live hometelecom.co.uk site (`assets/logos/`, `assets/awards/`, `assets/badges/`) — not authored icons. The marquee logos run large (`height:42px`) and full color, no desaturation — a deliberate reversal of an earlier grayscale-on-hover treatment the user found too muted; award badges run larger still (`64–76px`) since they're finished graphics, not a repeating strip. The three stat numbers (19,000+ / 28yrs / 100%) carry no icon above them — cut per user feedback, numerals speak for themselves at that size. Provider mentions next to a CTA (`.provider-logos`, e.g. Vodafone/TalkTalk/… beside "Broadband deals") are small grayscale logos (20px tall, 45% opacity, full color + 85% opacity on hover) rather than plain text — same real-logo files as the marquee, muted treatment because they're a secondary credibility signal next to a primary action, not the trust strip itself.

### Logo wordmark
Plain typographic wordmark, both words in Bricolage Grotesque: `home` at weight 800, `telecom` at weight 500/86% opacity. A script-font variant (Pacifico) was tried for `home` and reverted — kept here as a note so it isn't re-tried unprompted. Both words inherit `.logo`'s color (white over the hero/footer, ink-900 once the header scrolls); no icon, no logo mark.

### Lifestyle photography
Two real photos, both licensed, both self-hosted (no hotlinking): `assets/images/hero-sky.jpg` (user-supplied) and `assets/images/energy-lifestyle.jpg` (CC BY 2.0, "Smiling Senior Older Woman Sitting on the Sofa" by Stannah International via Flickr/Openverse — attribution recorded in PRODUCT.md). Both are real photography, not illustration, and both were chosen to exclude the source site's own animal-mascot imagery per an explicit product constraint.

### Secondary pages: Email templates, Banners
Two internal-facing marketing-collateral pages (`emails.html`, `banners.html`), both linked from the footer's "Find out more" column and both reusing the real site header/footer/`.hero--compact` verbatim — same chrome, same nav, same sky motif, so they read as part of the site rather than a bolted-on tool.

- **Email templates** (`emails.html`): three real, signed-off marketing emails (a Goodlord-referral Wi-Fi sequence) restyled to the site's palette/type/buttons — copy is contractually unchanged, only presentation (colors, fonts, logo/icon treatment) was touched. Each email's own hero band now runs the actual `hero-sky.jpg` photo behind its logo, fading to white just past the primary CTA (via a two-layer `background-image`: a white fade gradient composited over the photo) — the one deliberate exception to the Photo-Once rule, justified because each email is its own self-contained document, not a section of this page. Rendered live via `document.write()` into unsandboxed iframes with auto-resize-to-content; iframe base URL resolves against the *parent* page, so asset paths inside the injected email HTML are root-relative (`assets/...`), not `../`-relative.
- **Banners** (`banners.html`): three IAB-standard retargeting-banner creatives (300×250, 728×90, 300×600) redesigned from a pink/purple "AI slop" reference into the site's own dark-card language — ink-900 fill, plain wordmark (no house-icon logomark), accent-blue feature dots, white-fill/ink-blue-text CTA (the on-dark-surface button treatment, same move as the email hero CTA). The half-page unit's real-estate is filled with a large, low-opacity `i-wifi` watermark rather than empty space. `.ad-mock` intentionally uses a tighter 8px radius (real display ads don't run the page's 18–28px card radius) and true native pixel dimensions — `.banner-showcase-ads` scrolls horizontally on narrow viewports rather than shrinking the leaderboard below legibility.

## Do's and Don'ts

### Do:
- **Do** keep the sky gradient confined to exactly two bands (hero/contact-band morning-blue, promise-section dusk) — that scarcity is what makes the metaphor legible.
- **Do** vary section structure by what it's proving (coverage panel, tariff dial, triptych, timeline, quote card) rather than defaulting every section to the same icon-card grid.
- **Do** keep the logo a plain typographic wordmark (`home` bold + `telecom` regular, both Bricolage Grotesque, no icon) per the explicit brand decision for this rebuild.
- **Do** self-host every font as a local `.woff2` (see `assets/fonts/`) — no external font requests.

### Don't:
- **Don't** put a kicker/eyebrow label above any heading — cut everywhere during finishing, never reintroduced.
- **Don't** introduce a third sky register (e.g. a second dark section elsewhere) — reuse dusk or stay light.
- **Don't** animate `padding`, `width`, or `height` for hover/scroll effects — the header scroll-state uses background/blur/shadow only, for exactly this reason.
- **Don't** use a colored left/right border as a card or list accent; don't use gradient text for emphasis — weight and size carry emphasis instead.
