<section id="expertise" class="expertise section-pad">
	<div class="expertise__inner">
		<div class="reveal">
			<span class="label-lg text-secondary">Fokus</span>
			<h2 class="display-md expertise__headline">
				Was ich kann.<br /><em>Backend & Systemdesign.</em>
			</h2>
		</div>

		<div class="expertise__grid">
			{#each [{ num: '01', title: 'Backend & Architektur', desc: 'Ich baue Enterprise-Systeme mit Java und Spring Boot. Von der ersten Konzeption bis zum stabilen Deployment achte ich auf saubere Schichten und klare Verantwortlichkeiten.' }, { num: '02', title: 'Systemdesign', desc: 'Komplexe fachliche Anforderungen übersetze ich in skalierbare Architekturen. Ob große Plattformen oder Millionen von Transaktionen – ich sorge dafür, dass das Fundament hält.' }, { num: '03', title: 'Performance & Refactoring', desc: 'Ich analysiere bestehende Architekturen, decke Engpässe auf und härte die Systeme. Dabei geht es mir nicht um schnelle Patches, sondern um echte, strukturelle Verbesserungen.' }] as card (card.num)}
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
