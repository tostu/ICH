<script lang="ts">
	import { proofStats } from '$lib/cv';
	import { msg } from '$lib/messages';
	import * as m from '$lib/paraglide/messages';

	// Die "Steckbrief"-Kacheln — Zahl aufgeteilt in Basis + Akzentglyphe (`i`),
	// dazu ein Mono-Label und eine Zeile Kommentar. Die Werte stehen in `cv.ts`,
	// damit jede Zahl auf der Site auf denselben Lebenslauf zurückgeht.
	//
	// Die Kachel-Optik hängt an der Position, nicht an einer festen Anzahl:
	// so überlebt die Sektion, wenn eine Kachel dazukommt oder wegfällt.
	const skins = [
		{
			card: 'bg-primary text-on-primary rotate-[-1.6deg] shadow-[0_10px_24px_rgba(30,43,36,0.14)]',
			tint: 'text-warm-bright'
		},
		{
			card: 'bg-surface-container-low text-on-surface border-[1.5px] border-black/10 rotate-[1.2deg] translate-y-[10px]',
			tint: 'text-warm-deep'
		},
		{
			card: 'bg-forest-dark text-on-primary rotate-[-1deg] translate-y-[6px] shadow-[0_10px_24px_rgba(30,43,36,0.18)]',
			tint: 'text-accent-bright'
		},
		{
			card: 'bg-secondary text-on-secondary rotate-[1.8deg] shadow-[0_10px_24px_rgba(30,43,36,0.12)]',
			tint: 'text-forest-dark'
		}
	];
</script>

<section id="entdecken" class="mx-auto max-w-measure bg-surface px-6 pt-12 pb-2 md:px-14">
	<div class="mb-[1.9rem] flex flex-wrap items-baseline gap-[1.1rem]">
		<span class="font-mono text-[0.7rem] font-medium tracking-[0.2em] text-warm-deep uppercase"
			>{m.stat_band_label()}</span
		>
		<span class="text-[0.95rem] font-medium text-muted">{m.stat_band_note()}</span>
	</div>
	<div class="flex flex-wrap items-stretch gap-[1.4rem] md:flex-nowrap">
		{#each proofStats as stat, i (stat.messageKey)}
			{@const skin = skins[i % skins.length]}
			<div
				class="flex min-w-0 flex-1 basis-[calc(50%_-_0.7rem)] flex-col gap-1.5 rounded-[16px] p-[26px_26px_22px] md:basis-0 {skin.card}"
			>
				<div
					class="border-none font-display text-[clamp(2.6rem,4.5vw,3.5rem)] leading-none font-semibold"
				>
					{stat.base}<i class="not-italic {skin.tint}">{stat.accent}</i>{stat.tail}
				</div>
				<div class="font-mono text-[0.68rem] font-medium tracking-[0.16em] uppercase {skin.tint}">
					{msg(stat.messageKey, '_label')}
				</div>
				<div class="text-[0.82rem] leading-[1.45] font-medium opacity-80">
					{msg(stat.messageKey, '_note')}
				</div>
			</div>
		{/each}
	</div>
</section>
