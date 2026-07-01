# Jan Ric Hogat — Portfolio Plan

Single-page bento-grid portfolio in a GitHub-inspired dark theme with red highlight lines, built on the existing TanStack Start + Tailwind v4 stack.

## Visual system

- **Palette (GitHub dark + red):**
  - Background `#0d1117`, surface `#161b22`, border `#30363d`
  - Text `#e6edf3`, muted `#7d8590`
  - Primary accent (red highlights/lines): `#f85149`
  - Secondary accents: link blue `#58a6ff`, success green `#3fb950` (used sparingly for tags)
- **Highlight treatment:** thin 1–2px red lines under section titles, left-border on featured cards, animated red underline on nav links, red glow on hover.
- **Typography:** JetBrains Mono for headings/labels/code chips, Inter for body. Loaded via `<link>` in `__root.tsx`.
- **Cards:** rounded-lg, `#161b22` bg, `#30363d` border, subtle red border-glow on hover. Tag chips styled like GitHub topic pills.

## Layout (single scroll, bento grid)

Sticky top nav (name + section anchors + Resume/GitHub buttons).

1. **Hero (animated)**
   - Large name, typed-tagline effect cycling: "Electronics Engineer → Data Engineer → Analytics Builder"
   - Bio paragraph, Resume (PDF download) + GitHub buttons
   - Background: subtle animated grid + faint red scan-line
2. **Bento overview grid** — mixed tile sizes:
   - Large: Featured project (Solar Inverter Analysis)
   - Medium: Currently building / community status (DE Pilipinas top 50)
   - Small tiles: location, license status, contact quick links, GitHub stat-style card
3. **Work Experience** — timeline-style cards (Panasonic, SPES)
4. **Projects — Featured + list**
   - Featured (3): Solar Inverter, Energy Audit & Forecasting, UAV Pest Monitoring — large cards with description, tech stack chips, impact metric
   - Additional (list): Banana Sorting, IoT Dispenser, Floating Wind vs Solar, Discone Antenna, Arduino Distillation, AWS Training — compact rows with tags
5. **Licenses & Certifications** — grouped: PRC (ECE/ECT), DOLE BOSH, DataCamp stack (grid of badge cards)
6. **Affiliations** — 4 cards (BetterGov.PH, DE Pilipinas, Radio Engineering Circle, IECEP) with year ranges
7. **Education** — vertical timeline (PUP → Morong NHS → Pililla INHS → Pililla Elem)
8. **Contact / CTA**
   - Passion message
   - Contact form (name, email, message) → Lovable Cloud + email delivery
   - Email, GitHub, LinkedIn links
9. **Footer** — minimal, © + socials

## Interactive extras

- **Animated hero:** typed rotating tagline, faint animated dot-grid background, fade-in on scroll for sections
- **Contact form:** Lovable Cloud — stores submissions in `contact_messages` table and sends email via Resend edge function (asks for Resend API key on setup)
- **Resume PDF:** user uploads `resume.pdf` to Lovable Cloud storage (public bucket `resume`); Resume button links to it. Fallback: `/resume.pdf` in public/ if no upload yet.

## Prompt refinements to apply

- Fix date: "PRC Board Passer, March 2026" → keep as provided but display as "Board Exam: March 2026" so it reads as scheduled/expected rather than a licensure date paradox.
- Clarify DataCamp list as a certificate stack (grid of badges) rather than a bulleted list.
- Group Projects into Featured vs Additional as chosen.
- Trim redundant phrasing in bio; add a short "Currently" line for the DE end-to-end project.

## Technical section

- **Routing:** single route `src/routes/index.tsx` with in-page sections + anchor nav (`#projects`, etc.). Update `__root.tsx` head with SEO title/description/OG for Jan Ric.
- **Fonts:** `<link>` tags in `__root.tsx` for JetBrains Mono + Inter; register `--font-mono` and `--font-sans` in `@theme` in `src/styles.css`.
- **Tokens:** override `--background`, `--foreground`, `--card`, `--border`, `--primary` (red), `--ring` in `:root` inside `src/styles.css` (project is light-default; we set the new dark palette as the base so no theme toggle needed).
- **Components:** `Hero`, `BentoOverview`, `Experience`, `FeaturedProjects`, `ProjectList`, `Certifications`, `Affiliations`, `Education`, `ContactSection`, `SiteNav`, `Footer` under `src/components/portfolio/`. Reuse shadcn `Button`, `Card`, `Badge`, `Input`, `Textarea`, `Form`.
- **Typed tagline:** small custom hook, no external dep.
- **Contact form backend (requires Lovable Cloud):**
  - Table `public.contact_messages` (id, name, email, message, created_at) with RLS insert-only for `anon`, select for `service_role`; GRANTs per rules.
  - Server function `submitContactMessage` (createServerFn) inserts row + calls Resend via `RESEND_API_KEY` (secret) to email `janrichogat@gmail.com`.
- **Resume storage:** public bucket `resume`; Resume button `href` points to public URL. Provide placeholder button state until upload.
- **SEO:** title "Jan Ric Hogat — Electronics & Data Engineer", meta description from bio, JSON-LD `Person` schema in root head.

## Deliverable order

1. Enable Lovable Cloud (needed for form + resume upload)
2. Theme tokens + fonts
3. Nav + Hero (animated)
4. Bento overview + Experience
5. Featured projects + Project list
6. Certifications + Affiliations + Education
7. Contact form + Resend integration + Footer
8. SEO metadata + JSON-LD
