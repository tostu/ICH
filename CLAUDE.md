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
Forest green (`--primary #357056`) + amber (`--secondary/--warm #e89234`), warm cream surfaces, sparing lilac accent. Rounded corners (`--radius: 1rem`), layered warm shadows, Instrument Serif display + Instrument Sans body + IBM Plex Mono. Editorial, tactile, not flat/corporate.

**Anti-reference**: corporate agency portfolio — no stiff, impersonal enterprise-consultancy feel. Avoid generic template look (gradient blobs, stock photography, cookie-cutter SaaS spacing).

Light mode only, WCAG AA target — no dark mode planned.

### Design Principles
1. Warmth over polish-for-its-own-sake — cream/amber/green palette and rounded, tactile shapes should feel human, not templated.
2. Competence stays visible but never cold — pair engineering rigor (Java/Spring Boot depth) with approachable, direct copy, not corporate jargon.
3. One hub, two audiences — every page should read fine whether the visitor came for hiring credibility or for the photography.
4. Editorial over generic-SaaS — serif display type, tactile shadows/patterns, semantic classes over utility soup; reject anything that reads as a template.
5. AA contrast in light mode is the accessibility floor, always respect `prefers-reduced-motion`.
