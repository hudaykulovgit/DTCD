# Expo-Style Dashboard Design System

A design system for building **project-management and dashboard** interfaces in the visual language of Expo's marketing site — a quietly-confident, developer-tool aesthetic (pure white canvas, pure-black CTA, Inter + JetBrains Mono, 8–12px radii). The brand foundation was extracted from a style analysis of Expo's public site; the component set and UI kit are original work sized for a PM/dashboard product, since the source material documents a marketing site, not an app.

## Sources

- `DS/DESIGN-expo.md` — a structured style-analysis document (colors, typography, spacing, component tokens, do's/don'ts) of Expo's public marketing site, provided by the user as a local file. This is the **only** source material for this project — no Figma file, no codebase, and no logo/icon/image assets were provided.
- No other design context (screenshots, GitHub repo, Figma link) was attached. If any of the above becomes available later, re-run discovery against it — see "Caveats" at the bottom of this readme.

## Product context

The source document analyzes **Expo** (expo.dev), a React Native developer platform, and its marketing site specifically: hero band, device-mockup composite, feature/pricing/testimonial cards, footer. The user's brief asks for a design system for **project management and dashboards** — a different product shape. This system therefore:

1. Carries forward the brand's low-level foundations verbatim (colors, type, spacing, radii, shadow, motion absence) — these are brand-level, not page-level.
2. Keeps the marketing-only components (hero band, device-mockup card, pricing tiers, testimonial card, ecosystem tiles) documented below for reference, but does not build them as reusable primitives — they don't serve a dashboard product.
3. Authors a fresh, standard dashboard component set (Button, Input, Table, Sidebar, Dialog, etc.) using the brand's tokens — see **Intentional Additions**.
4. Builds one UI kit: a Project Dashboard product (login, overview, kanban board, task detail, team settings).

## Content Fundamentals

Voice inferred from the source document's own prose and the copy patterns it captures:

- **Confident, quiet, technical.** Sentences are short and declarative ("Ship faster.", "Get your app on every device."). No hype adjectives, no exclamation points.
- **Second person, minimal address.** Docs and CTAs speak to "you" the developer ("Get started"), but the tone never gets chatty or first-person-plural ("we're excited to announce...").
- **Sentence case everywhere.** Headlines, nav items and buttons are sentence case, not Title Case or ALL CAPS — except the deliberate uppercase treatment reserved for `caption-uppercase` labels/badges (tracked +0.88px, e.g. "PREVIEW", section eyebrows).
- **No emoji.** None appear anywhere in the source material or its component inventory.
- **Numbers and specificity over adjectives.** The brand favors concrete nouns (platform names, real product surfaces — EAS Build, Expo Go, Expo Studio) over vague marketing language.
- **CTAs are verbs.** "Get started", "Learn more" — never "Click here" or noun phrases.

Applied to the dashboard product: task/project copy should stay terse and declarative ("3 tasks overdue", "Deploy to staging") — no filler, no forced enthusiasm, sentence case throughout, uppercase reserved for status labels only.

## Visual Foundations

**Colors.** Pure white canvas (`#ffffff`) with near-black ink (`#171717`) for text. The *only* CTA color is pure black (`#000000`); a small blue (`#0d74ce`) is reserved for inline text links and never appears on a button. No saturated brand action color exists — this is deliberate (see Do's/Don'ts). Semantic colors (success green, warning amber, error rose, a purple "preview" tag) are used sparingly and only for status, never decoration.

**Type.** Inter is the only sans family, at exactly two weights: 600 for every display/title role, 400 for body. Display sizes carry negative letter-spacing (-0.5px to -1.92px) that loosens as size drops. JetBrains Mono renders every code surface, no exceptions. No custom/display typeface — the brand deliberately trusts Inter's neutrality instead of commissioning one.

**Spacing.** 4px base unit; scale runs xxs(4) → section(96). Cards inside dense sections sit close (16–24px gaps); page sections breathe at 96px. There is no "compact vs. comfortable" density switch documented — the brand has one density.

**Backgrounds.** No patterns, no hand-drawn illustrations, no textures/grain. The *only* decorative background element is a soft sky-blue radial gradient wash (`#cfe7ff` → `#a8c8e8`) behind the marketing hero — explicitly scoped to that one placement and never reused elsewhere (a documented Don't). Everywhere else the canvas is flat white or flat near-black (dark inversion). No photography documented in the source; the brand's one signature image treatment is the device-mockup composite (real product screenshots inside MacBook/iPhone frames) — not applicable to an in-app dashboard, so not carried into the UI kit.

**Animation.** Undocumented in the source ("Hover state never documented" is stated explicitly in the source's own iteration guide). No easing curves, bounce, or motion language to inherit — this system therefore uses only minimal, conventional transitions (150ms ease on color/background changes) and makes no animation claims beyond that. Flag this gap if animated micro-interactions become a requirement.

**Hover states.** Inferred conservatively from adjacent tokens since not explicitly specified: primary button darkens to `--action-primary-active` (#1a1a1a); secondary/ghost surfaces pick up `--bg-surface-strong` (#f0f0f3); cards get a single soft drop-shadow tier (`0 4px 12px rgba(0,0,0,0.04)`) — the brand's only shadow, used once, not tiered by elevation level.

**Press states.** Not documented beyond the button's active background token; no scale/shrink transform is specified anywhere in the source, so none is used here.

**Borders.** 1px hairline is the default structural device — `--border-strong` (#dcdee0) outlines cards, inputs and secondary buttons; a lighter `--border-default` (#f0f0f3) is used for plain dividers. No colored borders, no left-border accent stripe pattern (explicitly avoided per house style guidance).

**Shadows.** Exactly one shadow tier exists (`--shadow-soft`) for hovered cards. Dialogs get a heavier, dedicated `--shadow-dialog` (added here since the source doesn't cover overlays — see Intentional Additions). No inner shadows anywhere.

**Transparency & blur.** None documented or used — no glassmorphism, no backdrop-filter. The dialog scrim is a flat `rgba(23,23,23,0.32)`, not blurred.

**Imagery color vibe.** Not applicable — no photography in the source material. The one image treatment (device mockups) shows real product UI, not styled photography, so it carries no color-grade guidance.

**Corner radii.** A compact, developer-ergonomic scale: 4px (tags) → 6px (compact rows) → 8px (CTAs, inputs, tiles) → 12px (cards) → 16px (device mockups) → 24px (rare, large atmospheric cards). Pill (9999px) is reserved *only* for badges — CTAs are explicitly never pill-shaped.

**Cards.** White fill, 1px `--border-strong` hairline, 12px radius, no shadow at rest — the soft-drop shadow appears only on hover. Dark-inversion cards (`--bg-surface-dark`, #171717) drop the border entirely and use the solid fill as the depth cue instead.

## Iconography

The source material documents **no icon system** — no icon font, no SVG sprite, no PNG set, and no emoji usage. Per the design-system build rules, an icon set that isn't in the source gets a CDN substitution, flagged here:

- **Substitution: [Lucide](https://lucide.dev)**, loaded from `https://unpkg.com/lucide@latest` (MIT-licensed). Chosen for its minimal, consistent 2px stroke-icon language — the closest match to Expo's own spare, developer-tool visual register (no filled icons, no duotone, no illustrative icons anywhere in the source).
- Wrapped as the `Icon` component (`components/icons/Icon.jsx`) — pass any [Lucide icon name](https://lucide.dev/icons) in kebab-case: `<Icon name="layout-dashboard" />`.
- No unicode characters or emoji are used as icons anywhere in this system, matching the source's silence on both.
- **Ask:** if Expo's actual icon set (or any real product icon assets) becomes available, swap the CDN link for locally-hosted SVGs and this substitution note can be removed.

## Intentional Additions

The source document is a **marketing-site** style analysis; it defines marketing-page components (`hero-band`, `device-mockup-card`, `pricing-tier-card`, `testimonial-card`, `ecosystem-tile`, `cta-band`, `footer-light`) rather than app/dashboard UI primitives. Since the brief asks for a *project-management and dashboard* system, the following components were authored fresh — using only the brand's tokens (color, type, radius, shadow) — because no dashboard component inventory exists in the source:

`IconButton`, `Select`, `Checkbox`, `Switch`, `Tooltip`, `ProgressBar`, `Toast`, `Sidebar`, `Tabs`, `Avatar`, `Table`, `Dialog`, `Icon`.

`Button`, `Input` (`text-input`) and `Badge` (`badge-pill`) map directly to tokens the source *does* define (`button-primary/secondary/tertiary-text`, `text-input`, `badge-pill`) and were built to those exact values.

The marketing-only components from the source (`hero-band`, `device-mockup-card`, `feature-card`, `feature-card-dark`, `workflow-step-card`, `code-block`, `ide-mockup-card`, `pricing-tier-card`, `pricing-tier-featured`, `ecosystem-tile`, `cta-band`, `footer-light`, `testimonial-card`, `top-nav`) are **not** implemented as components here since they don't serve the dashboard product — they're preserved above in Visual Foundations for reference if a marketing site is ever built alongside the dashboard.

## Fonts

Inter and JetBrains Mono are both free, open-source and available on Google Fonts — no substitution needed. No local font files were provided, so `tokens/fonts.css` loads them via the Google Fonts CDN (`@import url(https://fonts.googleapis.com/css2?...)`) rather than self-hosted `@font-face` — functionally identical, but note this if the compiler's font-detection reports zero local fonts; that's expected given a CDN `@import` rather than a local `@font-face` rule.

## Caveats & ask

- **Single source.** This entire system is built from one markdown style-analysis file — no Figma, no codebase, no logo, no product screenshots. Everything under "Components" and "UI kit" beyond the tokens is original construction in the documented style, not a literal port of existing screens.
- **No logo provided.** Nowhere a mark would go, the plain-type wordmark "Expo" (Inter 600) stands in — see the Brand/Wordmark specimen card. If a real logo file exists, attach it and it will replace the wordmark everywhere.
- **Icons are a CDN substitution** (Lucide) — see Iconography above.
- **Hover/press/animation timing is under-specified** in the source; this system made conservative, minimal choices (see Visual Foundations) rather than inventing a motion language. Flag if you want richer interaction design.
- **The component set is a considered guess** at what a project-management dashboard needs, sized to the brand's minimal aesthetic — not a copy of any existing Expo app screen (none was provided). Tell me what's missing or overbuilt and I'll adjust.

**If you have Expo's actual app codebase, Figma file, or logo/icon assets — attach them and I'll re-run this against ground truth instead of inference.** That's the single highest-leverage next step to make this system production-accurate rather than brand-plausible.

## Index

**Tokens** (`styles.css` → `tokens/`): `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `fonts.css` (Google Fonts CDN import for Inter + JetBrains Mono).

**Components** (`components/<group>/`, grouped by concern, each `<Name>.jsx` + `.d.ts` + `.prompt.md`):
- `forms/` — Button, IconButton, Input, Select, Checkbox, Switch
- `feedback/` — Badge, Tooltip, ProgressBar, Toast
- `navigation/` — Sidebar, Tabs
- `data/` — Avatar, Card, Table
- `overlay/` — Dialog
- `icons/` — Icon (Lucide CDN wrapper — intentional addition)

**UI kit** (`ui_kits/dashboard/`): `index.html` (interactive click-through) + `LoginScreen.jsx`, `AppShell.jsx`, `DashboardHome.jsx`, `KanbanBoard.jsx`, `TaskDetail.jsx`, `SettingsScreen.jsx`, `README.md`.

**Foundation specimen cards** (`guidelines/`): 13 cards across Colors (primary/action, neutrals, surfaces/hairlines, semantic, atmospheric wash), Type (display scale, title/body, mono), Spacing (scale, in-use), Brand (radii, elevation, wordmark) — all visible in the Design System tab.

**Other root files:** `thumbnail.html` (homepage tile), `SKILL.md` (Claude-Code-compatible skill export), `DS/DESIGN-expo.md` (original source, read-only reference — do not edit).
