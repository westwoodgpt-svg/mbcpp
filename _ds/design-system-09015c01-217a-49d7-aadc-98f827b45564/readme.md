# Мой бизнес — Design System

Brand & UI design system for the **Центр поддержки предпринимательства Калининградской области** (Kaliningrad Region Center for Entrepreneurship Support), operating under the federal **«Мой бизнес»** ("My Business") brand — the national network of state support centers for small and medium enterprises, part of the национальный проект «Малое и среднее предпринимательство».

## What this is
A reusable foundation — colors, type, spacing, components, and full-screen UI kits — for building **«Мой бизнес»**-branded interfaces: regional center websites, service catalogs, event listings, success-story features, and presentations.

## Sources used
- **Logo:** `uploads/logo.png` (the Калининград center lockup) — exact brand colors were sampled from it.
- **Reference codebase (`newsite/`):** saved pages from a sibling «Мой бизнес» regional center (mbnso.ru, Новосибирск): *Об организации, Мероприятия, Истории бизнеса, Услуги, главная*. These are Bitrix-rendered pages whose CSS lives in external (un-saved) stylesheets, so exact production tokens couldn't be lifted; structure and content tone were used as reference.
- **GitHub:** https://github.com/westwoodgpt-svg/newsite — currently contains only a README; no design assets were importable. Worth re-checking as it fills out.

> Readers with access can explore the GitHub repo above and the live regional sites (e.g. mbnso.ru, mybusiness39.ru) to refine fidelity.

---

## CONTENT FUNDAMENTALS
How «Мой бизнес» writes:
- **Language:** Russian. Formal-but-warm civic tone — a helpful state institution, not a startup. Addresses the reader with the polite **«вы»** (lowercase), never «ты».
- **Casing:** Sentence case for headings and buttons. Russian quotation marks **«ёлочки»** around brand/program names: «Мой бизнес», «Развитие».
- **Voice:** Action- and benefit-oriented and concrete. Verbs lead CTAs: *«Получить услугу», «Записаться», «Узнать подробнее», «Подать заявку»*. Numbers and facts are foregrounded (free services, number of entrepreneurs helped, deadlines).
- **Emoji:** Not used. Keep copy clean and official.
- **Vibe:** Supportive, accessible, trustworthy. Bureaucratic clarity softened by warm color and rounded shapes. Avoid hype, slang, and exclamation overload.
- **Examples:** "Центр «Мой бизнес» — единое окно государственной поддержки предпринимателей." · "Бесплатные консультации по юридическим и финансовым вопросам." · "Все услуги — в одном месте."

## VISUAL FOUNDATIONS
- **Colors:** Warm, earthy, distinctive — the opposite of generic blue gov-tech. Three brand pillars sampled from the logo:
  - **Coffee brown `#4d2f2a`** — primary text, headers, dark surfaces (the wordmark color).
  - **Tan / caramel `#cf9e70`** — signature secondary, fills, illustration tone (the rocket body).
  - **Coral `#dd4b33`** — single energetic accent for CTAs and highlights (the flame). Used sparingly.
  - Warm cream `#faf6f1`/`#f8eede` backgrounds; warm-tinted greys for neutrals (never pure cold grey).
- **Type:** One geometric humanist sans (substituted with **Manrope**) across the board; weight does the work — extrabold/bold display headings, regular body. Tight letter-spacing on large headings. Uppercase tracked eyebrows in coral.
- **Spacing:** 4px base scale; generous section padding (48–96px). Comfortable body line-height (~1.55).
- **Backgrounds:** Mostly flat cream/white. Occasional full-bleed brand-brown section for emphasis. Warm photography of people/entrepreneurs; no heavy gradients, no purple. Tan can be used as a large flat color block.
- **Corner radii:** Friendly and rounded — cards 14–20px, buttons pill or 14px, inputs 14px. Avoid sharp 0px corners.
- **Cards:** White on cream, 14–20px radius, soft warm shadow (`--shadow-md`), 1px subtle border optional. No colored left-border stripe gimmick.
- **Shadows:** Soft, low-spread, warm-tinted (brown alpha), never harsh black. Accent buttons get a coral glow shadow.
- **Borders:** 1px warm grey (`--border-subtle`). Dividers light.
- **Hover:** Buttons darken (primary → brown-900, accent → coral-700); cards lift (shadow-md → shadow-lg) with a small translateY. Links shift to accent-hover.
- **Press:** Slight scale-down (~0.98) and shadow reduction.
- **Motion:** Restrained. 140–360ms, ease-out. Fades and short rises on scroll; no bounces, no looping decorative animation.
- **Transparency/blur:** Minimal. Optional sticky header with subtle backdrop. Protection: dark scrim over hero photos to keep white text legible (gradient brown→transparent), not capsules.
- **Imagery vibe:** Warm, natural light, real Russian SMEs and center staff; candid, optimistic. Not cold or corporate-stock-blue.

## ICONOGRAPHY
- The reference site uses simple line icons and Bitrix sprite assets; no embedded brand icon font was recoverable from the saved pages.
- **Substitution (flagged):** this system uses **Lucide** (CDN) — clean, consistent ~2px stroke line icons that match the friendly, rounded geometry of the brand. Swap for the official icon set if one is provided.
- Emoji and unicode-as-icon are **not** used.
- The logo mark (rocket + flame) is the one brand glyph; keep it intact, don't recolor.

---

## INDEX
- `styles.css` — entry point (imports tokens + fonts + base). **Consumers link this.**
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `assets/` — `logo-full.png` (full lockup).
- `components/core/` — Button, Badge, Tag, Card, Input, Stat, ServiceCard, SectionHeader (+ `.d.ts`, `.prompt.md`, card HTML).
- `ui_kits/website/` — full-screen recreation of a «Мой бизнес» regional center homepage.
- Foundation specimen cards: `guidelines/*.html` (Colors, Type, Spacing).
- `SKILL.md` — Agent-Skill wrapper.

## CAVEATS
- **Fonts** are substituted (Manrope). Brand font files not provided.
- **Icons** are substituted (Lucide CDN).
- Exact production CSS tokens could not be extracted from the saved Bitrix pages (external stylesheets weren't included); colors are sampled from the logo and the rest is a faithful reconstruction of the «Мой бизнес» visual language. Please supply the official brand book / font files / icon set to reach pixel fidelity.
