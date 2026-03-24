<section id="expertise" class="expertise section-pad">
	<div class="expertise__inner">
		<div class="reveal">
			<span class="label-lg text-secondary">Was ich baue</span>
			<h2 class="display-md expertise__headline">
				Massive Systeme.<br /><em>Fundierte Logik.</em>
			</h2>
		</div>

		<div class="expertise__grid">
			{#each [
				{
					num: '01',
					title: 'Technische Architektur',
					desc: 'Enterprise-Systeme mit Java & Spring Boot — von der Konzeption bis zum Deployment. Saubere Schichten, klare Verantwortlichkeiten, skalierbare Strukturen.'
				},
				{
					num: '02',
					title: 'Robuste Backend-Logik',
					desc: 'Komplexe Domänenlogik für Plattformen wie das „Amazon für Landwirte". Systeme, die Millionen von Transaktionen zuverlässig verarbeiten.'
				},
				{
					num: '03',
					title: 'Performance & Audits',
					desc: 'Bestehende Architekturen analysieren, Engpässe identifizieren, Systeme härten. Keine Flickarbeit — strukturelle Verbesserung.'
				}
			] as card (card.num)}
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
	}

	.expertise__inner {
		max-width: 1280px;
		margin: 0 auto;
	}

	.expertise__headline {
		margin-top: var(--space-xs);
		color: var(--primary);
	}

	.expertise__headline em {
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
	}
</style>
