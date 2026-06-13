<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	let cards = $derived([
		{
			num: '01',
			title: m.expertise_card1_title ? m.expertise_card1_title() : 'Technische Architektur',
			desc: m.expertise_card1_desc
				? m.expertise_card1_desc()
				: 'Enterprise-Systeme mit Java & Spring Boot — von der Konzeption bis zum Deployment. Saubere Schichten, klare Verantwortlichkeiten, skalierbare Strukturen.'
		},
		{
			num: '02',
			title: m.expertise_card2_title ? m.expertise_card2_title() : 'Robuste Backend-Logik',
			desc: m.expertise_card2_desc
				? m.expertise_card2_desc()
				: 'Komplexe Domänenlogik für Plattformen wie das „Amazon für Landwirte“. Systeme, die Millionen von Transaktionen zuverlässig verarbeiten.'
		},
		{
			num: '03',
			title: m.expertise_card3_title ? m.expertise_card3_title() : 'Performance & Audits',
			desc: m.expertise_card3_desc
				? m.expertise_card3_desc()
				: 'Bestehende Architekturen analysieren, Engpässe identifizieren, Systeme härten. Keine Flickarbeit — strukturelle Verbesserung.'
		}
	]);
</script>

<!-- eslint-disable svelte/no-at-html-tags -->

<section id="expertise" class="expertise pattern-architectural-grid section-pad">
	<div class="expertise__inner">
		<div class="reveal">
			<span class="label-lg text-secondary"
				>{m.expertise_label ? m.expertise_label() : 'Was ich baue'}</span
			>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<h2 class="display-md expertise__headline">
				{@html m.expertise_title
					? m.expertise_title()
					: 'Massive Systeme.<br /><em>Fundierte Logik.</em>'}
			</h2>
		</div>

		<div class="expertise__grid">
			{#each cards as card (card.num)}
				<article class="expertise__card reveal">
					<span class="expertise__card-num">{card.num}</span>
					<h3 class="headline-md">{card.title}</h3>
					<p class="body-md text-on-surface-variant">{card.desc}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.expertise {
		background: var(--surface);
		padding-bottom: var(--space-lg) !important;
	}

	.expertise__inner {
		max-width: 1280px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.expertise__headline {
		margin-top: var(--space-xs);
		color: var(--primary);
	}

	.expertise__headline :global(em) {
		font-style: italic;
		color: var(--secondary);
	}

	.expertise__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
		margin-top: var(--space-2xl);
	}

	.expertise__card {
		background: var(--surface-container);
		border-radius: var(--radius);
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		transition: background var(--duration-normal) var(--ease-out);
	}

	.expertise__card:hover {
		background: var(--surface-container-high);
	}

	.expertise__card-num {
		font-family: var(--font-display);
		font-size: 2.5rem;
		font-weight: 800;
		color: var(--tertiary-fixed);
		line-height: 1;
	}

	@media (max-width: 1024px) {
		.expertise__grid {
			grid-template-columns: 1fr;
			gap: var(--space-sm);
			margin-top: var(--space-xl);
		}

		.expertise__card {
			padding: var(--space-md) var(--space-sm);
		}
	}
</style>
