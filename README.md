# torgestubbe.de

Personal site of Torge Stubbe — software architect and street photographer. SvelteKit,
Tailwind v4, Paraglide (de/en), static adapter.

- **Design system** — `CLAUDE.md` → _Design System_. The landing page and
  `src/lib/components/ui/` are the source of truth for every page.
- **Positioning & brand rationale** — `BRAND.md`.

## Creating a project

Scaffolded with [`sv`](https://github.com/sveltejs/cli). To recreate the base project:

```sh
bun x sv@0.12.8 create --template minimal --types ts --add prettier eslint tailwindcss sveltekit-adapter="adapter:static" mdsvex paraglide="languageTags:de, en+demo:no" mcp="ide:claude-code,gemini,other+setup:remote" --install bun ./
```

The Tailwind typography and forms plugins were part of the original scaffold but have since
been removed — nothing used them.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
