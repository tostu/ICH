<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	let werte = $derived([
		{
			word: m.wert_fundiert_word ? m.wert_fundiert_word() : 'Fundiert',
			desc: m.wert_fundiert_desc
				? m.wert_fundiert_desc()
				: 'Alles hat Gewicht und Tiefe. Keine Oberflächlichkeit, keine leeren Versprechen.',
			bg: 'var(--primary)',
			color: 'var(--on-primary)'
		},
		{
			word: m.wert_charakterstark_word ? m.wert_charakterstark_word() : 'Charakterstark',
			desc: m.wert_charakterstark_desc
				? m.wert_charakterstark_desc()
				: 'Eigensinn ist kein Defekt. Markante Entscheidungen führen zu einzigartigen Ergebnissen.',
			bg: 'var(--surface-container)',
			color: 'var(--on-surface)'
		},
		{
			word: m.wert_substanziell_word ? m.wert_substanziell_word() : 'Substanziell',
			desc: m.wert_substanziell_desc
				? m.wert_substanziell_desc()
				: 'Haptisch, wertvoll, von bleibender Bedeutung — wie schwerer Wollstoff.',
			bg: 'var(--secondary)',
			color: 'var(--on-secondary)'
		},
		{
			word: m.wert_nuanciert_word ? m.wert_nuanciert_word() : 'Nuanciert',
			desc: m.wert_nuanciert_desc
				? m.wert_nuanciert_desc()
				: 'Das Auge für Details, die andere übersehen. Im Code wie im Stadtbild.',
			bg: 'var(--surface-container-high)',
			color: 'var(--on-surface)'
		},
		{
			word: m.wert_autonom_word ? m.wert_autonom_word() : 'Autonom',
			desc: m.wert_autonom_desc
				? m.wert_autonom_desc()
				: 'Eigenständige Lösungen, fernab vom IT-Einheitsbrei. Kein Herdentrieb.',
			bg: 'var(--primary-container)',
			color: 'var(--on-primary)'
		},
		{
			word: m.wert_bestaendig_word ? m.wert_bestaendig_word() : 'Beständig',
			desc: m.wert_bestaendig_desc
				? m.wert_bestaendig_desc()
				: 'Systeme bauen, die Bestand haben. Keine Wegwerfarchitektur, kein Quick-Fix.',
			bg: 'var(--tertiary-fixed)',
			color: 'var(--on-tertiary-fixed)'
		}
	]);

	let selectedIndex = $state<number>(0);
	let hoveredIndex = $state<number | null>(null);
	let activeIndex = $derived(hoveredIndex !== null ? hoveredIndex : selectedIndex);

	let isStickyActive = $state(false);
	let trackElement = $state<HTMLElement | null>(null);

	let currentColorPair = $derived.by(() => {
		const active = activeIndex;
		if (isStickyActive || hoveredIndex !== null) {
			if (active >= 0 && active < werte.length) {
				return {
					bg: werte[active].bg,
					color: werte[active].color
				};
			}
		}
		return {
			bg: 'var(--surface)',
			color: 'var(--primary)'
		};
	});

	$effect(() => {
		if (typeof window === 'undefined') return;

		let ticking = false;

		const updateStickyState = () => {
			isStickyActive = window.innerWidth >= 1024 && window.innerHeight >= 700;
		};

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					updateStickyState();
					if (isStickyActive && trackElement) {
						const rect = trackElement.getBoundingClientRect();
						const trackHeight = rect.height;
						const viewHeight = window.innerHeight;
						const scrollable = trackHeight - viewHeight;

						if (scrollable > 0) {
							const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
							const totalItems = werte.length;

							// Map progress to indices
							let targetIndex = Math.floor(progress * totalItems);
							if (targetIndex >= totalItems) targetIndex = totalItems - 1;

							if (hoveredIndex === null) {
								selectedIndex = targetIndex;
							}
						}
					}
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll, { passive: true });

		updateStickyState();
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	});

	function selectAndScrollTo(index: number) {
		selectedIndex = index;

		if (typeof window === 'undefined' || !trackElement || !isStickyActive) return;

		const rect = trackElement.getBoundingClientRect();
		const trackHeight = rect.height;
		const viewHeight = window.innerHeight;
		const scrollable = trackHeight - viewHeight;

		if (scrollable <= 0) return;

		const p = index / (werte.length - 1);
		const targetScrollY = window.scrollY + rect.top + p * scrollable;

		window.scrollTo({
			top: targetScrollY,
			behavior: 'smooth'
		});
	}
</script>

<!-- eslint-disable svelte/no-at-html-tags -->

<section
	class="werte"
	class:is-sticky={isStickyActive}
	class:has-hover={hoveredIndex !== null}
	bind:this={trackElement}
	style:background={currentColorPair.bg}
	style:color={currentColorPair.color}
>
	<div class="werte__sticky">
		<div class="werte__inner section-pad">
			<div class="werte__header reveal">
				<span class="label-lg opacity-70">
					{m.werte_label ? m.werte_label() : 'Die Grundsätze'}
				</span>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<h2 class="display-md">
					{@html m.werte_title ? m.werte_title() : 'Was mich <em>antreibt.</em>'}
				</h2>
			</div>

			<div class="werte__content reveal">
				<ul class="werte__list">
					{#each werte as wert, i (wert.word)}
						<li
							class="werte__item"
							class:is-selected={selectedIndex === i}
							class:is-hovered={hoveredIndex === i}
							onmouseenter={() => (hoveredIndex = i)}
							onmouseleave={() => (hoveredIndex = null)}
						>
							<button
								type="button"
								class="werte__button"
								onclick={() => selectAndScrollTo(i)}
								onfocus={() => (hoveredIndex = i)}
								onblur={() => (hoveredIndex = null)}
							>
								<span class="werte__number">0{i + 1}.</span>
								<span class="werte__word">{wert.word}</span>
							</button>

							<!-- Mobile inline description -->
							<div class="werte__mobile-desc" class:is-expanded={activeIndex === i}>
								<p>{wert.desc}</p>
							</div>
						</li>
					{/each}
				</ul>

				<!-- Desktop description area -->
				<div class="werte__description-container">
					{#each werte as wert, i (wert.word)}
						<div class="werte__description" class:is-visible={activeIndex === i}>
							<p>{wert.desc}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.werte {
		transition:
			background var(--duration-slow) var(--ease-out),
			color var(--duration-normal) var(--ease-out);
		position: relative;
	}

	@media (min-width: 1024px) and (min-height: 700px) {
		.werte.is-sticky {
			height: 300vh;
		}

		.werte.is-sticky .werte__sticky {
			position: sticky;
			top: 80px; /* Offset by navbar height + spacing */
			height: calc(100vh - 80px); /* Keep it within the visible viewport */
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			width: 100%;
		}

		.werte.is-sticky .section-pad {
			padding-top: var(--space-md);
			padding-bottom: var(--space-md);
		}

		/* Reduce spacing between title and list */
		.werte.is-sticky .werte__header {
			margin-bottom: var(--space-lg);
		}

		/* Make font sizes slightly more compact on sticky scroll to fit all screens */
		.werte.is-sticky .werte__word {
			font-size: clamp(1.8rem, 3.2vw, 2.6rem);
		}

		/* Reduce vertical padding of list items to save space */
		.werte.is-sticky .werte__button {
			padding: var(--space-sm) 0;
		}

		/* Smooth translation adjustments for the more compact items */
		.werte.is-sticky:not(.has-hover) .werte__item.is-selected .werte__button {
			transform: translateX(8px);
		}

		.werte.is-sticky .werte__item.is-hovered .werte__button,
		.werte.is-sticky .werte__item:focus-within .werte__button {
			transform: translateX(12px);
		}
	}

	.werte__inner {
		max-width: 1280px;
		margin: 0 auto;
		width: 100%;
	}

	.werte__header {
		margin-bottom: var(--space-2xl);
	}

	.werte__header span {
		transition:
			color var(--duration-normal) var(--ease-out),
			opacity var(--duration-normal) var(--ease-out);
	}

	.werte__header h2 {
		transition: color var(--duration-normal) var(--ease-out);
	}

	.werte__header :global(em) {
		font-style: italic;
		color: currentColor;
		opacity: 0.85;
		transition:
			color var(--duration-normal) var(--ease-out),
			opacity var(--duration-normal) var(--ease-out);
	}

	/* Layout structure */
	.werte__content {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: var(--space-xl);
		align-items: center;
	}

	/* List Styling */
	.werte__list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
	}

	.werte__item {
		border-bottom: 1px solid color-mix(in srgb, currentColor 15%, transparent);
		transition:
			opacity var(--duration-normal) var(--ease-out),
			border-color var(--duration-normal) var(--ease-out);
	}

	/* When no hover is happening, the selected item has 100% opacity, others are slightly dimmed */
	.werte:not(.has-hover) .werte__item:not(.is-selected) {
		opacity: 0.5;
	}

	.werte:not(.has-hover) .werte__item.is-selected {
		opacity: 1;
	}

	/* When hover is happening, the hovered item has 100% opacity, others are highly dimmed */
	.werte.has-hover .werte__item:not(.is-hovered) {
		opacity: 0.25;
	}

	.werte.has-hover .werte__item.is-hovered {
		opacity: 1;
	}

	.werte__button {
		width: fit-content;
		text-align: left;
		background: transparent;
		border: none;
		padding: var(--space-md) 0;
		color: inherit;
		display: flex;
		align-items: baseline;
		gap: var(--space-md);
		cursor: pointer;
		transition: transform var(--duration-normal) var(--ease-out);
	}

	.werte__button:focus {
		outline: none;
	}

	.werte__button:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 4px;
		border-radius: var(--radius);
	}

	/* Active item translations */
	.werte:not(.has-hover) .werte__item.is-selected .werte__button {
		transform: translateX(12px);
	}

	.werte__item.is-hovered .werte__button,
	.werte__item:focus-within .werte__button {
		transform: translateX(16px);
	}

	.werte__number {
		font-family: var(--font-body);
		font-size: clamp(0.875rem, 1.5vw, 1.125rem);
		font-weight: 500;
		opacity: 0.4;
		transition: opacity var(--duration-normal) var(--ease-out);
	}

	.werte__item.is-selected .werte__number,
	.werte__item.is-hovered .werte__number {
		opacity: 0.9;
	}

	.werte__word {
		font-family: var(--font-editorial);
		font-size: clamp(2rem, 4vw, 3.25rem);
		font-weight: 700;
		line-height: 1.1;
	}

	/* Desktop Description Styling */
	.werte__description-container {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		padding-left: var(--space-lg);
		border-left: 1px solid color-mix(in srgb, currentColor 15%, transparent);
		transition: border-color var(--duration-normal) var(--ease-out);
		min-height: 180px;
	}

	.werte__description {
		grid-area: 1 / 1;
		opacity: 0;
		visibility: hidden;
		transform: translateY(16px);
		transition:
			opacity var(--duration-normal) var(--ease-out),
			transform var(--duration-normal) var(--ease-out),
			visibility var(--duration-normal) var(--ease-out);
	}

	.werte__description.is-visible {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	.werte__description p {
		font-family: var(--font-editorial);
		font-size: clamp(1.25rem, 2.5vw, 1.875rem);
		font-style: italic;
		line-height: 1.5;
		font-weight: 600;
	}

	/* Mobile Descriptions and Responsive Layout */
	.werte__mobile-desc {
		display: none;
	}

	@media (max-width: 1024px) {
		.werte__content {
			gap: var(--space-lg);
		}
		.werte__description-container {
			padding-left: var(--space-md);
		}
	}

	@media (max-width: 767px) {
		.werte__content {
			grid-template-columns: 1fr;
		}

		.werte__description-container {
			display: none;
		}

		.werte__mobile-desc {
			display: grid;
			grid-template-rows: 0fr;
			transition: grid-template-rows var(--duration-normal) var(--ease-out);
			overflow: hidden;
			padding-left: calc(clamp(0.875rem, 1.5vw, 1.125rem) + var(--space-md));
			padding-right: var(--space-sm);
		}

		.werte__mobile-desc > p {
			min-height: 0;
			opacity: 0;
			transform: translateY(-8px);
			transition:
				opacity var(--duration-normal) var(--ease-out),
				transform var(--duration-normal) var(--ease-out);
			font-family: var(--font-editorial);
			font-size: clamp(1.125rem, 2vw, 1.35rem);
			font-style: italic;
			padding-bottom: var(--space-md);
			line-height: 1.45;
			font-weight: 600;
		}

		.werte__mobile-desc.is-expanded {
			grid-template-rows: 1fr;
		}

		.werte__mobile-desc.is-expanded > p {
			opacity: 0.9;
			transform: translateY(0);
			transition-delay: 0.05s;
		}

		.werte__item:hover .werte__button,
		.werte__item:focus-within .werte__button {
			transform: translateX(8px);
		}

		.werte:not(.has-hover) .werte__item.is-selected .werte__button {
			transform: translateX(8px);
		}
	}
</style>
