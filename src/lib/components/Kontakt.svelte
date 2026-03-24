<section id="kontakt" class="kontakt">
	<div class="kontakt__bg" aria-hidden="true">
		<enhanced:img
			src="$lib/assets/PORTRAIT_BACKPACK.jpg"
			alt=""
			loading="lazy"
		/>
	</div>
	<div class="kontakt__inner section-pad reveal">
		<h2 class="display-lg kontakt__headline">
			Ready to<br /><em>build?</em>
		</h2>
		<p class="body-lg text-white/75 max-w-[32rem] mt-[var(--space-md)]">
			Direkter Kontakt. Keine Masken. Kein Formular, das erst durch drei Abteilungen muss. Schreib
			mir, und wir reden über dein Projekt.
		</p>
		<div class="kontakt__buttons">
			<a href="mailto:hello@torgestubbe.de" class="btn btn--primary">E-Mail schreiben</a>
			<a href="mailto:hello@torgestubbe.de" class="btn btn--secondary">Projekt besprechen</a>
		</div>
	</div>
</section>

<style>
	.kontakt {
		background: var(--primary);
		position: relative;
		overflow: hidden;
		min-height: 70vh;
		display: flex;
		align-items: center;
	}

	.kontakt__bg {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 50%;
		opacity: 0.15;
	}

	.kontakt__bg :global(picture) {
		width: 100%;
		height: 100%;
	}

	.kontakt__bg :global(picture img),
	.kontakt__bg :global(> img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
	}

	.kontakt__inner {
		position: relative;
		z-index: 1;
		max-width: 1280px;
		margin: 0 auto;
		width: 100%;
	}

	.kontakt__headline {
		color: var(--on-primary);
	}

	.kontakt__headline em {
		font-style: italic;
		color: var(--tertiary-fixed);
	}

	.kontakt__buttons {
		display: flex;
		gap: var(--space-sm);
		margin-top: var(--space-lg);
	}

	@media (max-width: 768px) {
		.kontakt__bg {
			width: 100%;
			opacity: 0.08;
		}

		.kontakt__buttons {
			flex-direction: column;
		}

		.kontakt__buttons :global(.btn) {
			text-align: center;
		}
	}
</style>
