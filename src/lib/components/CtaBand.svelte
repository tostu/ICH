<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<section class="bg-surface px-6 md:px-14 pt-12 pb-12">
	<div class="max-w-measure mx-auto flex justify-between items-center gap-lg flex-wrap border-t-[1.5px] border-black/15 pt-9">
		<div>
			<span class="block font-mono text-[0.7rem] font-medium tracking-[0.2em] uppercase text-warm-deep mb-[0.7rem]">{m.cta_band_label()}</span>
			<h2 class="font-display font-semibold text-[clamp(2rem,4vw,2.65rem)] border-none leading-[1.05] text-on-surface">{@html m.cta_band_title()}</h2>
		</div>
		<div class="flex items-center gap-[0.9rem] flex-wrap">
			<span class="font-mono text-[0.85rem] text-on-surface-variant">hello@torgestubbe.de</span>
			<a
				class="inline-flex items-center gap-2 bg-secondary text-on-secondary font-semibold text-[0.95rem] px-6 py-[13px] rounded-pill transition-transform duration-200 ease-out hover:-translate-y-0.5"
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
		color: var(--primary);
	}
</style>
