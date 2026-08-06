<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<section class="bg-surface px-6 pt-12 pb-12 md:px-14">
	<div
		class="mx-auto flex max-w-measure flex-wrap items-center justify-between gap-lg border-t-[1.5px] border-black/15 pt-9"
	>
		<div>
			<span
				class="mb-[0.7rem] block font-mono text-[0.7rem] font-medium tracking-[0.2em] text-warm-deep uppercase"
				>{m.cta_band_label()}</span
			>
			<h2
				class="border-none font-display text-[clamp(2rem,4vw,2.65rem)] leading-[1.05] font-semibold text-on-surface"
			>
				{@html m.cta_band_title()}
			</h2>
		</div>
		<div class="flex flex-wrap items-center gap-[0.9rem]">
			<span class="font-mono text-[0.85rem] text-on-surface-variant">hello@torgestubbe.de</span>
			<a
				class="inline-flex items-center gap-2 rounded-pill bg-secondary px-6 py-[13px] text-[0.95rem] font-semibold text-on-secondary transition-transform duration-200 ease-out hover:-translate-y-0.5"
				href="mailto:hello@torgestubbe.de?subject=Kontaktanfrage"
			>
				{m.kontakt_cta_primary()}
				<span class="font-mono">→</span>
			</a>
		</div>
	</div>
</section>

<style>
	h2 :global(em) {
		font-style: italic;
		color: var(--color-accent-deep);
	}
</style>
