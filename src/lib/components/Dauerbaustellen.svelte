<script lang="ts">
	import Section from './ui/Section.svelte';
	import SectionHead from './ui/SectionHead.svelte';
	import Card from './ui/Card.svelte';
	import TechBadge from './ui/TechBadge.svelte';
	import * as m from '$lib/paraglide/messages';

	let projects = $derived([
		{
			id: 'wohin',
			tag: 'App',
			title: 'WOHIN',
			desc: m.baustellen_wohin_desc(),
			tech: ['Flutter', 'Hono', 'Astro', 'Sanity'],
			progress: 50,
			pulseSpeed: 'slow',
			statusText: m.baustellen_status_slow(),
			irony: m.baustellen_wohin_irony()
		},
		{
			id: 'welche-partei',
			tag: 'Quiz App',
			title: 'Welche Partei?',
			desc: m.baustellen_quiz_desc(),
			tech: ['Svelte 5', 'SvelteKit', 'TailwindCSS', 'D3.js', 'Playwright'],
			progress: 92,
			pulseSpeed: 'slow',
			statusText: m.baustellen_status_slow(),
			irony: m.baustellen_quiz_irony()
		},
		{
			id: 'sofa-showdown',
			tag: 'Party Game',
			title: 'Sofa-Showdown',
			desc: m.baustellen_party_desc(),
			tech: [],
			progress: 0,
			pulseSpeed: 'chaotic',
			statusText: m.baustellen_status_chaotic(),
			irony: m.baustellen_party_irony()
		}
	]);
</script>

<Section id="dauerbaustellen" class="pt-16 pb-4">
	<div class="reveal">
		<SectionHead
			label={m.baustellen_label()}
			title={m.baustellen_title()}
			desc={m.baustellen_desc()}
		/>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		{#each projects as project (project.id)}
			<div class="reveal flex">
				<Card pad="md" interactive class="flex w-full flex-col gap-4">
					<div class="flex items-end justify-between gap-3">
						<TechBadge tone="green">{project.tag}</TechBadge>
						<span class="font-display text-[1.875rem] leading-none font-semibold text-warm-deep"
							>{project.progress}%</span
						>
					</div>

					<div
						class="h-[3px] overflow-hidden rounded-full bg-surface-container-high"
						role="progressbar"
						aria-valuenow={project.progress}
						aria-valuemin={0}
						aria-valuemax={100}
						aria-label="{project.title}: {project.statusText}"
					>
						<div
							class="h-full rounded-full bg-secondary transition-[width] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
							style="width: {project.progress}%"
						></div>
					</div>

					<div class="flex grow flex-col">
						<h3
							class="font-display text-[1.55rem] leading-[1.2] font-semibold tracking-[-0.01em] text-on-surface"
						>
							{project.title}
						</h3>
						<p class="mt-2 font-body text-[0.95rem] leading-[1.55] text-on-surface-variant">
							{project.desc}
						</p>
						<p class="mt-3 font-body text-[0.875rem] leading-[1.45] text-muted italic">
							„{project.irony}“
						</p>
					</div>

					<div
						class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-4"
					>
						<div class="flex flex-wrap gap-1.5">
							{#each project.tech as t (t)}
								<TechBadge>{t}</TechBadge>
							{/each}
						</div>
						<span
							class="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.1em] text-muted uppercase"
						>
							<span class="pulse pulse--{project.pulseSpeed}" aria-hidden="true"></span>
							{project.statusText}
						</span>
					</div>
				</Card>
			</div>
		{/each}
	</div>
</Section>

<style>
	/* Status lights — a slow amber blink for "creeping along", a fast red one
	   for "still just a concept". */
	.pulse {
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		position: relative;
		flex-shrink: 0;
	}

	.pulse::after {
		content: '';
		position: absolute;
		inset: -4px;
		border-radius: 50%;
		background-color: inherit;
		opacity: 0.4;
	}

	.pulse--slow {
		background-color: var(--color-status-amber);
	}

	.pulse--slow::after {
		animation: pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
	}

	.pulse--chaotic {
		background-color: var(--color-status-red);
	}

	.pulse--chaotic::after {
		animation: pulse-ring 1s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
	}

	@keyframes pulse-ring {
		0% {
			transform: scale(0.7);
			opacity: 0.8;
		}
		80%,
		100% {
			transform: scale(2.2);
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.pulse::after {
			animation: none !important;
		}
	}
</style>
