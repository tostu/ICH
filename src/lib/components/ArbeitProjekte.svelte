<script lang="ts">
	import Section from './ui/Section.svelte';
	import SectionHead from './ui/SectionHead.svelte';
	import Card from './ui/Card.svelte';
	import TechBadge from './ui/TechBadge.svelte';
	import { workProjects } from '$lib/cv';
	import { msg } from '$lib/messages';
	import * as m from '$lib/paraglide/messages';
</script>

<!-- Solange `workProjects` leer ist, existiert die Sektion nicht. Kein Empty
     State, kein „coming soon" — eine leere Projektliste ist keine Aussage. -->
{#if workProjects.length > 0}
	<Section class="pt-16 pb-2">
		<div class="reveal">
			<SectionHead
				label={m.arbeit_projects_label()}
				title={m.arbeit_projects_title()}
				desc={m.arbeit_projects_desc()}
			/>
		</div>

		<div class="flex flex-col gap-6">
			{#each workProjects as p (p.id)}
				<div class="reveal">
					<Card pad="md" interactive class="relative isolate overflow-hidden">
						<span
							class="pointer-events-none absolute top-4 right-6 -z-10 font-display text-[clamp(3rem,5vw,5.5rem)] leading-none font-semibold text-primary/15 select-none"
							aria-hidden="true">{p.number}</span
						>
						<div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
							<span
								class="font-mono text-[0.7rem] font-medium tracking-[0.16em] text-warm-deep uppercase"
								>{msg(p.messageKey, '_role')}</span
							>
							<span class="font-mono text-[0.7rem] text-muted">{p.period}</span>
						</div>
						<h3
							class="mt-2 font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] font-semibold tracking-[-0.01em] text-on-surface"
						>
							{msg(p.messageKey, '_title')}
						</h3>
						<p
							class="mt-3 max-w-[46rem] font-body text-[1rem] leading-[1.6] font-medium text-on-surface-variant"
						>
							{msg(p.messageKey, '_desc')}
						</p>
						<div class="mt-5 flex flex-wrap gap-1.5">
							{#each p.tech as t (t)}
								<TechBadge>{t}</TechBadge>
							{/each}
						</div>
					</Card>
				</div>
			{/each}
		</div>
	</Section>
{/if}
