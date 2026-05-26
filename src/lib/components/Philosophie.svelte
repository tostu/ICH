<section id="philosophie" class="philosophie">
	<div class="philosophie__inner section-pad">
		<div class="philosophie__text reveal">
			<span class="label-lg text-tertiary-fixed opacity-70">Meine Philosophie</span>
			<h2 class="display-md philosophie__headline">
				Handwerk<br /><em>statt Hype.</em>
			</h2>
			<div class="philosophie__accent"></div>
			<p class="body-lg text-white/80">
				Für mich ist Softwareentwicklung kein Fließbandjob, sondern echtes Handwerk. Ich glaube
				daran, Dinge tiefgreifend zu verstehen, statt nur Lösungen zusammenzukopieren. Jede
				Architektur-Entscheidung hat langfristige Folgen – deshalb baue ich Systeme, die auch morgen
				noch stabil und wartbar sind.
			</p>
			<p class="body-lg mt-[var(--space-md)] text-white/80">
				Klarheit und Struktur sind für mich kein theoretischer Luxus, sondern die Basis für
				erfolgreiche Projekte. Wenn die Grundlagen stimmen, fällt alles andere leichter.
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
