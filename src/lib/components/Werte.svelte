<script module lang="ts">
	const principles = [
		{
			word: 'Fundiert',
			desc: 'Alles hat Gewicht und Tiefe. Keine Oberflächlichkeit, keine leeren Versprechen.',
			color: 'var(--primary)'
		},
		{
			word: 'Charakterstark',
			desc: 'Eigensinn ist kein Defekt. Markante Entscheidungen führen zu einzigartigen Ergebnissen.',
			color: 'var(--secondary)'
		},
		{
			word: 'Substanziell',
			desc: 'Haptisch, wertvoll, von bleibender Bedeutung — wie schwerer Wollstoff.',
			color: 'var(--secondary)'
		},
		{
			word: 'Nuanciert',
			desc: 'Das Auge für Details, die andere übersehen. Im Code wie im Stadtbild.',
			color: 'var(--on-surface-variant)'
		},
		{
			word: 'Autonom',
			desc: 'Eigenständige Lösungen, fernab vom IT-Einheitsbrei. Kein Herdentrieb.',
			color: 'var(--primary)'
		},
		{
			word: 'Beständig',
			desc: 'Systeme bauen, die Bestand haben. Keine Wegwerfarchitektur, kein Quick-Fix.',
			color: 'var(--primary-container)'
		}
	];
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let activeIndex = $state(0);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = (entry.target as HTMLElement).dataset.index;
						if (index !== undefined) {
							activeIndex = parseInt(index);
						}
					}
				});
			},
			{
				threshold: 0.6,
				rootMargin: '-10% 0px -40% 0px'
			}
		);

		document.querySelectorAll('.principle-item').forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>

<section class="werte section-pad" id="werte">
	<div class="werte__container">
		<div class="werte__sidebar">
			<div class="werte__header reveal">
				<span class="label-lg text-secondary">Die Grundsätze</span>
				<h2 class="display-md">Was mich <br /><em>antreibt.</em></h2>
				<p class="body-md mt-6 max-w-xs text-secondary">
					Meine Arbeitsweise ist geprägt von einer klaren Haltung und dem Anspruch an höchste
					Qualität.
				</p>
			</div>
		</div>

		<div class="werte__content">
			{#each principles as principle, i (principle.word)}
				<div class="principle-item reveal" class:active={activeIndex === i} data-index={i}>
					<span class="principle-number">0{i + 1}</span>
					<h3 class="principle-word display-md" style:color={principle.color}>{principle.word}</h3>
					<p class="principle-desc body-lg">{principle.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.werte {
		background: var(--surface);
		position: relative;
	}

	.werte__container {
		max-width: 1280px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-2xl);
		position: relative;
	}

	.werte__sidebar {
		position: sticky;
		top: var(--space-3xl);
		height: fit-content;
		padding-top: var(--space-lg);
	}

	.werte__header em {
		font-style: italic;
		color: var(--secondary);
	}

	.werte__content {
		padding-bottom: 20vh;
	}

	.principle-item {
		padding: var(--space-3xl) 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		opacity: 0.15;
		transition:
			opacity var(--duration-normal) var(--ease-out),
			transform var(--duration-normal) var(--ease-out);
		transform: translateX(10px);
	}

	.principle-item:first-child {
		padding-top: var(--space-lg);
	}

	.principle-item.active {
		opacity: 1;
		transform: translateX(0);
	}

	.principle-number {
		font-family: var(--font-body);
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--secondary);
		letter-spacing: 0.1em;
	}

	.principle-word {
		margin: 0;
		color: var(--primary);
	}

	.principle-desc {
		max-width: 45ch;
		color: var(--on-surface-variant);
	}

	.mt-6 {
		margin-top: 1.5rem;
	}

	.max-w-xs {
		max-width: 20rem;
	}

	@media (max-width: 1024px) {
		.werte__container {
			grid-template-columns: 1fr;
			gap: var(--space-xl);
		}

		.werte__sidebar {
			position: static;
		}

		.principle-item {
			padding: var(--space-xl) 0;
			opacity: 1;
			transform: none;
		}

		.werte__content {
			padding-bottom: 0;
		}
	}
</style>
