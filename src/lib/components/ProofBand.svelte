<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	// The four "Steckbrief" stats — number split into a base + an accent glyph
	// (`i`), a mono label, and a one-line quip.
	const stats = [
		{ base: '12', accent: '+', tail: '', label: m.hero_stat1_label(), note: m.stat1_note() },
		{ base: '40', accent: '+', tail: '', label: m.hero_stat2_label(), note: m.stat2_note() },
		{ base: '3', accent: '·', tail: '1', label: m.hero_stat3_label(), note: m.stat3_note() },
		{ base: '', accent: '∞', tail: '', label: m.hero_stat4_label(), note: m.stat4_note() }
	];
</script>

<section id="entdecken" class="max-w-measure mx-auto px-6 md:px-14 pt-12 pb-2">
	<div class="flex items-baseline gap-[1.1rem] mb-[1.9rem] flex-wrap">
		<span class="font-mono text-[0.7rem] font-medium tracking-[0.2em] uppercase text-warm-deep">{m.stat_band_label()}</span>
		<span class="text-[0.95rem] font-medium text-muted">{m.stat_band_note()}</span>
	</div>
	<div class="flex flex-wrap md:flex-nowrap gap-[1.4rem] items-stretch">
		{#each stats as stat, i (stat.label)}
			{@const cardClass = (
				i === 0 ? 'bg-primary text-on-primary rotate-[-1.6deg] shadow-[0_10px_24px_rgba(30,43,36,0.14)]' :
				i === 1 ? 'bg-surface-container-low text-on-surface border-[1.5px] border-black/10 rotate-[1.2deg] translate-y-[10px]' :
				i === 2 ? 'bg-secondary text-on-secondary rotate-[-1deg] shadow-[0_10px_24px_rgba(30,43,36,0.12)]' :
				'bg-forest-dark text-on-primary rotate-[1.8deg] translate-y-[6px] shadow-[0_10px_24px_rgba(30,43,36,0.18)]'
			)}
			<div class="flex-1 basis-[calc(50%_-_0.7rem)] md:basis-0 min-w-0 rounded-[16px] p-[26px_26px_22px] flex flex-col gap-1.5 {cardClass}">
				<div class="font-display font-semibold text-[clamp(2.6rem,4.5vw,3.5rem)] border-none leading-none">
					{stat.base}<i class="not-italic"
						class:text-warm-bright={i === 0 || i === 3}
						class:text-warm-deep={i === 1}
						class:text-forest-dark={i === 2}
						class:opacity-70={i === 2}
					>{stat.accent}</i>{stat.tail}
				</div>
				<div class="font-mono text-[0.68rem] font-medium tracking-[0.16em] uppercase"
					class:text-warm-bright={i === 0 || i === 3}
					class:text-warm-deep={i === 1}
					class:text-forest-dark={i === 2}
				>{stat.label}</div>
				<div class="text-[0.82rem] font-medium leading-[1.45] opacity-80">{stat.note}</div>
			</div>
		{/each}
	</div>
</section>
