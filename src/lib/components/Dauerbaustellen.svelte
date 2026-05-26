<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	let projects = $derived([
		{
			id: 'wohin',
			tag: 'App',
			title: 'WOHIN',
			desc: m.baustellen_wohin_desc
				? m.baustellen_wohin_desc()
				: 'Vibe-orientierte Discovery-Plattform für Spots. Suche und Filterung nach Aktivitäten statt Sternen.',
			tech: ['Flutter', 'Hono', 'Astro', 'Sanity'],
			progress: 50,
			pulseSpeed: 'slow',
			statusText: 'Slow progress',
			irony: m.baustellen_wohin_irony
				? m.baustellen_wohin_irony()
				: 'Backend und CMS stehen bereit, aber der Wechsel von Expo auf Flutter setzt die App-Entwicklung zurück auf Start.'
		},
		{
			id: 'welche-partei',
			tag: 'Quiz App',
			title: 'Welche Partei?',
			desc: m.baustellen_quiz_desc
				? m.baustellen_quiz_desc()
				: 'Modernes politisches Profiling und spielerisches This-or-That-Turnier als Wahl-O-Mat-Alternative.',
			tech: ['Svelte 5', 'SvelteKit', 'TailwindCSS', 'D3.js', 'Playwright'],
			progress: 92,
			pulseSpeed: 'slow',
			statusText: 'Slow progress',
			irony: m.baustellen_quiz_irony
				? m.baustellen_quiz_irony()
				: 'Technisch fast fertig, aber das Feintuning der Parteigewichtungen fühlt sich an wie echte Koalitionsverhandlungen.'
		},
		{
			id: 'sofa-showdown',
			tag: 'Party Game',
			title: 'Sofa-Showdown',
			desc: m.baustellen_party_desc
				? m.baustellen_party_desc()
				: 'Jackbox-artiges Party-Spiel für lokale Multiplayer-Abende. Das eigene Smartphone wird zum Controller',
			tech: [],
			progress: 0,
			pulseSpeed: 'chaotic',
			statusText: 'Concept phase / Chaotic',
			irony: m.baustellen_party_irony
				? m.baustellen_party_irony()
				: 'Mitten in der Konzeptionsphase mit einem guten Freund'
		}
	]);
</script>

<!-- eslint-disable svelte/no-at-html-tags -->

<section id="dauerbaustellen" class="dauerbaustellen pattern-blueprint-grid">
	<div class="dauerbaustellen__inner">
		<div class="dauerbaustellen__header reveal">
			<span class="label-lg text-secondary"
				>{m.baustellen_label ? m.baustellen_label() : 'Work in (slow) progress'}</span
			>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<h2 class="display-md">
				{@html m.baustellen_title ? m.baustellen_title() : 'Ewige <em>Dauerbaustellen.</em>'}
			</h2>
			<p class="body-md mt-3 max-w-xl text-on-surface-variant">
				{m.baustellen_desc
					? m.baustellen_desc()
					: 'Manche Projekte sind wie alte Kathedralen: Sie werden nie wirklich fertig. Ein ehrlicher Blick auf meine aktuellen Baustellen, Entwürfe und R&D-Schleifen.'}
			</p>
		</div>

		<div class="dauerbaustellen__grid">
			{#each projects as project (project.id)}
				<article class="dauerbaustellen__card reveal">
					<div class="dauerbaustellen__card-header">
						<span class="dauerbaustellen__tag">{project.tag}</span>
						<span class="dauerbaustellen__percentage">{project.progress}%</span>
					</div>

					<div class="dauerbaustellen__progress-track">
						<div class="dauerbaustellen__progress-fill" style="width: {project.progress}%"></div>
					</div>

					<div class="dauerbaustellen__content">
						<h3 class="title-lg dauerbaustellen__title">{project.title}</h3>
						<p class="body-md mt-2 text-on-surface-variant">{project.desc}</p>
						<p class="body-sm mt-3 text-secondary/90 italic">
							„ {project.irony} “
						</p>
					</div>

					<div class="dauerbaustellen__footer">
						<div class="dauerbaustellen__tech">
							{#each project.tech as t (t)}
								<span class="dauerbaustellen__tech-badge font-mono">{t}</span>
							{/each}
						</div>
						<div class="dauerbaustellen__status-light">
							<span class="dauerbaustellen__light-pulse pulse--{project.pulseSpeed}"></span>
							<span class="sr-only">Status: {project.statusText}</span>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.dauerbaustellen {
		background: var(--surface-container-low);
		border-top: 1px solid var(--surface-container);
		border-bottom: 1px solid var(--surface-container);
		padding: var(--space-xl) var(--space-lg);
	}

	@media (max-width: 1024px) {
		.dauerbaustellen {
			padding: var(--space-lg) var(--space-md);
		}
	}

	.dauerbaustellen__inner {
		max-width: 1280px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.dauerbaustellen__header :global(em) {
		font-style: italic;
		color: var(--secondary);
	}

	.dauerbaustellen__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
		margin-top: var(--space-lg);
	}

	.dauerbaustellen__card {
		background: var(--surface-container-lowest);
		border: 1px solid var(--surface-container-high);
		border-radius: var(--radius);
		padding: var(--space-md);
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		position: relative;
		transition:
			transform var(--duration-normal) var(--ease-out),
			box-shadow var(--duration-normal) var(--ease-out),
			border-color var(--duration-normal) var(--ease-out);
	}

	.dauerbaustellen__card:hover {
		transform: translateY(-4px);
		border-color: var(--outline-variant);
		box-shadow: 0 8px 30px rgba(6, 27, 14, 0.04);
	}

	.dauerbaustellen__card-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.dauerbaustellen__tag {
		font-family: var(--font-body);
		font-size: 0.6875rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 0.3rem 0.6rem;
		border-radius: var(--radius);
		background: var(--primary-container);
		color: var(--on-primary);
	}

	.dauerbaustellen__percentage {
		font-family: var(--font-body);
		font-size: 1.875rem;
		font-weight: 800;
		color: var(--secondary);
		line-height: 1;
	}

	.dauerbaustellen__progress-track {
		height: 3px;
		background: var(--surface-container-high);
		border-radius: var(--radius);
		overflow: hidden;
	}

	.dauerbaustellen__progress-fill {
		height: 100%;
		background: var(--secondary);
		border-radius: var(--radius);
		transition: width 1s var(--ease-out-expo);
	}

	.dauerbaustellen__content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.body-sm {
		font-size: 0.875rem;
		line-height: 1.45;
	}

	.dauerbaustellen__title {
		color: var(--primary);
	}

	.dauerbaustellen__footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: auto;
		padding-top: var(--space-xs);
		border-top: 1px solid var(--surface-container);
	}

	.dauerbaustellen__tech {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.dauerbaustellen__tech-badge {
		font-size: 0.6875rem;
		padding: 0.2rem 0.5rem;
		background: var(--surface-container);
		color: var(--on-surface-variant);
		border-radius: var(--radius);
		border: 1px solid var(--surface-container-high);
	}

	.dauerbaustellen__status-light {
		display: flex;
		align-items: center;
	}

	/* Pulse Indicators */
	.dauerbaustellen__light-pulse {
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: var(--secondary);
		position: relative;
	}

	.dauerbaustellen__light-pulse::after {
		content: '';
		position: absolute;
		inset: -4px;
		border-radius: 50%;
		background-color: var(--secondary);
		opacity: 0.4;
	}

	/* Different pulsing speeds to reflect active state and chaos levels */
	.pulse--slow::after {
		animation: pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
	}
	.pulse--slow {
		background-color: #e09f3e; /* Amber warning */
	}
	.pulse--slow::after {
		background-color: #e09f3e;
	}

	.pulse--sleeping::after {
		animation: pulse-ring 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
	}
	.pulse--sleeping {
		background-color: #845051; /* Dark/sleeping rose */
		opacity: 0.65;
	}
	.pulse--sleeping::after {
		background-color: #845051;
	}

	.pulse--chaotic::after {
		animation: pulse-ring 1s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
	}
	.pulse--chaotic {
		background-color: #d62246; /* Error red-ish */
	}
	.pulse--chaotic::after {
		background-color: #d62246;
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

	@media (max-width: 1024px) {
		.dauerbaustellen__grid {
			grid-template-columns: 1fr;
			gap: var(--space-sm);
			margin-top: var(--space-xl);
		}
	}
</style>
