<section id="philosophie" class="philosophie">
	<div class="philosophie__inner section-pad">
		<div class="philosophie__text reveal">
			<span class="label-lg text-tertiary-fixed opacity-70">Meine Philosophie</span>
			<h2 class="display-md philosophie__headline">
				Code ist Architektur.<br /><em>Keine Fließbandarbeit.</em>
			</h2>
			<div class="philosophie__accent"></div>
			<p class="body-lg text-white/80">
				Für mich ist Software kein Produkt einer Fabrik, sondern das Ergebnis von Handwerk. Jede
				Entscheidung in der Architektur hat Konsequenzen — wie die Statik eines Gebäudes. Ich baue
				Systeme, die halten. Nicht solche, die man nächstes Jahr wegwirft.
			</p>
			<p class="body-lg text-white/80 mt-[var(--space-md)]">
				Diese Haltung ist kein Luxus, sondern Notwendigkeit. Wer komplexe Domänen in saubere
				Strukturen überführt, spart keine Zeit beim Bauen — aber Jahre beim Warten.
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
	}

	.philosophie__headline {
		color: var(--on-primary);
		margin-top: var(--space-xs);
	}

	.philosophie__headline em {
		font-style: italic;
		color: var(--tertiary-fixed);
	}

	.philosophie__accent {
		width: 64px;
		height: 3px;
		background: var(--secondary);
		margin: var(--space-md) 0;
	}

	.philosophie__image :global(img) {
		width: 100%;
		max-width: 420px;
		object-fit: cover;
		margin-left: auto;
	}

	@media (max-width: 1024px) {
		.philosophie__inner {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}

		.philosophie__image {
			order: -1;
		}

		.philosophie__image :global(img) {
			max-width: 280px;
			margin: 0 auto;
		}
	}
</style>
