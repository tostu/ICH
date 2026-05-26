<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->

<section id="philosophie" class="philosophie pattern-subtle-grain">
	<div class="philosophie__inner section-pad">
		<div class="philosophie__text reveal">
			<span class="label-lg text-tertiary-fixed opacity-70"
				>{m.philosophie_label ? m.philosophie_label() : 'Meine Philosophie'}</span
			>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<h2 class="display-md philosophie__headline">
				{@html m.philosophie_title
					? m.philosophie_title()
					: 'Code ist Architektur.<br /><em>Keine Fließbandarbeit.</em>'}
			</h2>
			<div class="philosophie__accent"></div>
			<p class="body-lg text-white/80">
				{m.philosophie_p1
					? m.philosophie_p1()
					: 'Für mich ist Software kein Produkt einer Fabrik, sondern das Ergebnis von Handwerk. Jede Entscheidung in der Architektur hat Konsequenzen — wie die Statik eines Gebäudes. Ich baue Systeme, die halten. Nicht solche, die man nächstes Jahr wegwirft.'}
			</p>
			<p class="body-lg mt-[var(--space-md)] text-white/80">
				{m.philosophie_p2
					? m.philosophie_p2()
					: 'Diese Haltung ist kein Luxus, sondern Notwendigkeit. Wer komplexe Domänen in saubere Strukturen überführt, spart keine Zeit beim Bauen — aber Jahre beim Warten.'}
			</p>
		</div>
		<div class="philosophie__image reveal">
			<enhanced:img
				src="$lib/assets/PORTRAI_SIDE_SMOKE_BW.jpg"
				alt="Torge Stubbe — Seitenansicht"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<style>
	.philosophie {
		background: var(--primary);
		position: relative;
		overflow: hidden;
	}

	.philosophie__inner {
		max-width: 1280px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: var(--space-2xl);
		align-items: center;
		position: relative;
		z-index: 1;
		padding-top: var(--space-lg) !important;
	}

	.philosophie__headline {
		color: var(--on-primary);
		margin-top: var(--space-xs);
	}

	.philosophie__headline :global(em) {
		font-style: italic;
		color: var(--tertiary-fixed);
	}

	.philosophie__accent {
		width: 64px;
		height: 3px;
		background: var(--secondary);
		margin: var(--space-md) 0;
	}

	.philosophie__image {
		position: relative;
		aspect-ratio: 4 / 5;
		max-width: 380px;
		width: 100%;
		margin-left: auto;
	}

	/* Rose vertical rule — mirrors the horizontal accent bar in the text column */
	.philosophie__image::before {
		content: '';
		position: absolute;
		top: 0;
		left: -16px;
		width: 4px;
		height: 100%;
		background: var(--secondary);
		z-index: 1;
	}

	/* Rose ghost-box registration frame */
	.philosophie__image::after {
		content: '';
		position: absolute;
		inset: 10px;
		border: 1px solid var(--secondary);
		opacity: 0.45;
		z-index: 2;
		pointer-events: none;
	}

	.philosophie__image :global(picture) {
		position: absolute;
		inset: 0;
		display: block;
	}

	.philosophie__image :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 15%;
		display: block;
		max-width: none;
		margin: 0;
	}

	@media (max-width: 1024px) {
		.philosophie__inner {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}

		.philosophie__image {
			order: -1;
			max-width: 240px;
			margin: 0 auto 0 16px;
		}
	}
</style>
