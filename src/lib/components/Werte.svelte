<section class="werte section-pad">
	<div class="werte__inner">
		<div class="werte__header reveal">
			<span class="label-lg text-secondary">Die Grundsätze</span>
			<h2 class="display-md">Was mich <em>antreibt.</em></h2>
		</div>
		<div class="werte__grid">
			{#each [
				{
					word: 'Fundiert',
					desc: 'Alles hat Gewicht und Tiefe. Keine Oberflächlichkeit, keine leeren Versprechen.',
					bg: 'var(--primary)',
					color: 'var(--on-primary)'
				},
				{
					word: 'Charakterstark',
					desc: 'Eigensinn ist kein Defekt. Markante Entscheidungen führen zu einzigartigen Ergebnissen.',
					bg: 'var(--surface-container)',
					color: 'var(--on-surface)'
				},
				{
					word: 'Substanziell',
					desc: 'Haptisch, wertvoll, von bleibender Bedeutung — wie schwerer Wollstoff.',
					bg: 'var(--secondary)',
					color: 'var(--on-secondary)'
				},
				{
					word: 'Nuanciert',
					desc: 'Das Auge für Details, die andere übersehen. Im Code wie im Stadtbild.',
					bg: 'var(--surface-container-high)',
					color: 'var(--on-surface)'
				},
				{
					word: 'Autonom',
					desc: 'Eigenständige Lösungen, fernab vom IT-Einheitsbrei. Kein Herdentrieb.',
					bg: 'var(--primary-container)',
					color: 'var(--on-primary)'
				},
				{
					word: 'Beständig',
					desc: 'Systeme bauen, die Bestand haben. Keine Wegwerfarchitektur, kein Quick-Fix.',
					bg: 'var(--tertiary-fixed)',
					color: 'var(--on-tertiary-fixed)'
				}
			] as wert (wert.word)}
				<div class="werte__tile reveal" style="background: {wert.bg}; color: {wert.color};">
					<h3 class="headline-lg werte__word">{wert.word}</h3>
					<p class="body-md">{wert.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.werte {
		background: var(--surface);
	}

	.werte__inner {
		max-width: 1280px;
		margin: 0 auto;
	}

	.werte__header {
		margin-bottom: var(--space-2xl);
	}

	.werte__header em {
		font-style: italic;
		color: var(--secondary);
	}

	.werte__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	.werte__tile {
		border-radius: var(--radius);
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		transition: transform var(--duration-normal) var(--ease-out);
	}

	.werte__tile:hover {
		transform: translateY(-4px);
	}

	.werte__word {
		font-weight: 800;
	}

	@media (max-width: 1024px) {
		.werte__grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.werte__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
