## Project Configuration

- **Language**: TypeScript
- **Package Manager**: bun
- **Add-ons**: prettier, eslint, tailwindcss, sveltekit-adapter, mdsvex, paraglide, mcp

---

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

---

## Design Context

### Users

Mixed audience in one hub: hiring managers/recruiters evaluating Torge for senior/staff backend roles, freelance/client leads assessing fit for contract work, and people discovering him through street photography. Visitors skim fast and judge credibility quickly — the site must work whether someone lands on it for engineering proof or creative work.

### Brand Personality

"Urban Craftsman" — fundiert, scharfsinnig, authentisch, charakterstark, nuanciert, autonom, direkt, wachsam, substanziell, stilsicher. Layered on top: warm, human, approachable. Technical depth stays, but tone should invite rather than gatekeep — competence without stiffness.

### Aesthetic Direction

Forest green (`--color-primary #357056`) + amber (`--color-secondary` / `--color-warm #e89234`), warm cream surfaces (`--color-surface #f7f2e5` — cream is the page base, never green), sparing lilac accent (`--color-accent #8c7ad6`). Rounded corners (`--radius: 1rem`, `--radius-card: 22px`), layered warm shadows, Instrument Serif display + Instrument Sans body + IBM Plex Mono. Editorial feel (serif display, tactile shadows), not flat/corporate.

**Anti-reference**: corporate agency portfolio — no stiff, impersonal enterprise-consultancy feel. Avoid generic template look (gradient blobs, stock photography, cookie-cutter SaaS spacing).

Light mode only, WCAG AA target — no dark mode planned.

### Design Principles

1. Warmth over polish-for-its-own-sake — cream/amber/green palette and rounded, tactile shapes should feel human, not templated.
2. Competence stays visible but never cold — pair engineering rigor (Java/Spring Boot depth) with approachable, direct copy, not corporate jargon.
3. One hub, two audiences — every page should read fine whether the visitor came for hiring credibility or for the photography.
4. Editorial over generic-SaaS — serif display type, tactile shadows/patterns; reject anything that reads as a template. Compose from the `ui/` primitives below: utilities in markup, scoped CSS only for what utilities can't express (pseudo-elements, keyframes, `:global` into third-party roots).
5. AA contrast in light mode is the accessibility floor, always respect `prefers-reduced-motion`.

### Design System — build pages this way

The landing page (`src/routes/+page.svelte` → `Hero`, `ProofBand`, `Stack`, `CtaBand`) and
the primitives in `src/lib/components/ui/` are the **single source of truth**. Any new page
is a composition of them. `BRAND.md` covers positioning only — it is not a visual brief.

**Always compose from `src/lib/components/ui/`** — never re-derive these inline:

| Primitive     | Use for                                                                                             |
| ------------- | --------------------------------------------------------------------------------------------------- |
| `Section`     | Page section shell — the measure + gutter rails                                                     |
| `PageHero`    | Subpage hero: eyebrow + display h1 + lede, optional back link and `aside` snippet                   |
| `SectionHead` | Section heading — `stacked` (eyebrow → heading → lede) or `inline` (eyebrow + note on one baseline) |
| `Card`        | The card surface (`pad`: `none` \| `md` \| `lg`, `interactive` for the hover lift)                  |
| `TechBadge`   | Mono chip for tech stacks and tags (`neutral` \| `warm` \| `green`)                                 |
| `ArrowLink`   | Mono CTA whose arrow widens on hover                                                                |

**The recipes** (already inside the primitives — listed so there is no reason to invent alternatives):

- rails: `mx-auto max-w-measure px-6 md:px-14`
- eyebrow: `font-mono text-[0.72rem] font-medium tracking-[0.2em] text-warm-deep uppercase`
- display heading: `font-display font-semibold tracking-[-0.01em]`; `<em>` renders italic in `--color-primary`
- body / lede: `font-body font-medium text-muted` (or `text-on-surface-variant`)
- card surface: `rounded-card`, `border border-black/10`, `bg-surface-container-lowest`, `shadow-[0_3px_14px_rgba(30,43,36,0.07)]`
- buttons: `rounded-pill`, `bg-secondary text-on-secondary`, `hover:-translate-y-0.5`

**One token namespace.** All tokens come from `@theme` in `src/routes/layout.css`:
`--color-*`, `--spacing-*`, `--radius-*`, `--font-*`, `--duration-*`, `--ease-*`.
Use Tailwind utilities in markup and `var(--color-*)` in scoped CSS. There are no
unprefixed `:root` aliases (`var(--primary)` does not exist) and no `var(--x, #hex)` fallbacks.

**Banned** — if you are writing any of these, you are reproducing a design that was deleted:

- `.headline-md` / `.title-sm` / `.body-md` / `.display-*` / `.label-*` / `.section-pad` — the old global type scale
- `prose`, `@tailwindcss/typography`, `@tailwindcss/forms` — not installed
- Tailwind v3 bracket-var syntax `text-[--token]`, `rounded-[--token]` — emits nothing in v4
- hardcoded hex outside inline SVG illustrations; `var(--token, #hex)` fallbacks
- dark-mode tokens or `prefers-color-scheme` rules — light mode only
- slab-serif fonts (Zilla Slab, Arvo, Rockwell), Muted Rose `#C9A9A6`, Nordic Gold `#D4AF37`,
  green page backgrounds — a superseded palette from an early brand draft
- gradient blobs, stock photography, cookie-cutter SaaS spacing
