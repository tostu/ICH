### 1. Goal
Refactor the hero ticker by extracting it from `Hero.svelte` into a reusable, isolated `HeroTicker.svelte` component.

### 2. Approach
`Hero.svelte` is currently handling the text array, the SVG path layout, the responsive font size and path generation, and the `requestAnimationFrame` animation logic. By extracting the ticker to a new `HeroTicker.svelte` component, we separate concerns and significantly reduce the complexity of the main `Hero` component. The `tickerItems` will be passed as a prop from `Hero.svelte` to keep the data decoupled from the UI implementation.

### 3. File Changes
- **Create**: `src/lib/components/HeroTicker.svelte` - Will contain the responsive SVG, path definitions, `waveMarquee` action/attachment, and ticker-specific CSS.
- **Modify**: `src/lib/components/Hero.svelte` - Remove the ticker markup, animation logic, and styles, replacing them with a `<HeroTicker>` component import and usage.

### 4. Implementation Steps

#### Task 1: Create HeroTicker Component
1. Create `src/lib/components/HeroTicker.svelte`.
2. Add props for `loaded` (boolean) and `items` (string array).
3. Move `marqueeText`, `innerWidth`, `pathDefinition`, `fontSize`, and the `waveMarquee` attachment from `src/lib/components/Hero.svelte` to this new file.
4. Make `marqueeText` a `$derived` value so it updates if `items` ever change.
5. Move `<svelte:window bind:innerWidth />` and the `<div class="hero__ticker">` HTML structure.
6. Move all CSS classes starting with `.hero__ticker` into the `<style>` block of the new component.

#### Task 2: Update Hero Component
1. In `src/lib/components/Hero.svelte`, import `HeroTicker` from `./HeroTicker.svelte`.
2. Remove the `<svelte:window bind:innerWidth />` as it's no longer needed here.
3. Remove `marqueeText`, `innerWidth`, `pathDefinition`, `fontSize`, and the `waveMarquee` function. Keep `tickerItems`.
4. Replace `<div class="hero__ticker">...</div>` with `<HeroTicker {loaded} items={tickerItems} />`.
5. Remove all CSS styles related to `.hero__ticker` from the `<style>` section.

### 5. Acceptance Criteria
- `src/lib/components/Hero.svelte` no longer contains any SVG animation logic, window binding, or `.hero__ticker` styles.
- The hero ticker renders and animates visually exactly as it did before.
- `HeroTicker.svelte` correctly accepts `items` as a prop and derives the marquee text from it.
- There are no compiler errors or type-checking issues (e.g., `npm run check` or `svelte-check` passes).

### 6. Verification Steps
- Start the dev server using `bun run dev` and open the site.
- Verify the wave ticker at the bottom of the hero section displays correctly.
- Resize the window below 600px width and verify the wave's path and font size adapt, confirming the `innerWidth` binding works correctly inside the new component.
- Run type-checking via `bun run check` (or equivalent Svelte check script) to ensure no type errors were introduced by extracting props.

### 7. Risks & Mitigations
- **Broken CSS Scope:** Styles might unintentionally lose their cascade effect. *Mitigation:* We will directly copy the isolated `.hero__ticker` class selectors which are fully encapsulated and should not leak or break when moved.
- **Action/Attachment issue:** Moving `{@attach waveMarquee}` to a new file might fail if imports are missing. *Mitigation:* All Svelte 5 rune state hooks (`$props`, `$derived`, `$state`) and standard DOM types (`SVGTextPathElement`) are properly typed without external library imports, so it's safe to move out.