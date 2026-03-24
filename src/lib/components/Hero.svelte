<script lang="ts">
	let {
		loaded,
		onScrollTo
	}: { loaded: boolean; onScrollTo: (id: string) => void } = $props();
</script>

<section id="hero" class="hero">
	<div class="hero__content" class:hero__content--loaded={loaded}>
		<div class="hero__text">
			<span class="label-lg hero__label text-tertiary-fixed opacity-80">
				Software-Architekt & Street Photographer
			</span>
			<h1 class="display-lg hero__headline">
				Digitale<br />Backbone.<br />
				<em>Charakterstark</em><br />gebaut.
			</h1>
			<p class="body-lg hero__subtitle text-white/65">
				Authentischer Architekt für fundierte digitale Systeme —
				charakterstark im Design und substanziell in der Ausführung.
			</p>
			<div class="hero__cta">
				<a
					href="#kontakt"
					class="btn btn--primary"
					onclick={(e) => {
						e.preventDefault();
						onScrollTo('kontakt');
					}}>Projekt starten</a
				>
				<a
					href="#galerie"
					class="btn btn--ghost"
					onclick={(e) => {
						e.preventDefault();
						onScrollTo('galerie');
					}}>Arbeiten ansehen</a
				>
			</div>
		</div>
		<div class="hero__portrait">
			<enhanced:img
				src="$lib/assets/PORTRAIT_WITH_CAMERA.jpg"
				alt="Torge Stubbe mit Kamera in der Hamburger Speicherstadt"
				loading="eager"
			/>
		</div>
	</div>
	<div class="hero__scroll-hint" class:hero__scroll-hint--loaded={loaded}>
		<div class="hero__scroll-line"></div>
	</div>
</section>

<style>
	.hero {
		min-height: 100svh;
		background: var(--primary);
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
	}

	.hero__content {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: 1280px;
		margin: 0 auto;
		width: 100%;
		padding: 8rem 2.5rem 4rem;
		align-items: center;
		gap: 2rem;
	}

	.hero__text {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		opacity: 0;
		transform: translateY(40px);
		transition:
			opacity 1.2s var(--ease-out-expo) 0.4s,
			transform 1.2s var(--ease-out-expo) 0.4s;
	}

	.hero__content--loaded .hero__text {
		opacity: 1;
		transform: translateY(0);
	}

	.hero__label {
		display: inline-block;
	}

	.hero__headline {
		color: var(--on-primary);
	}

	.hero__headline em {
		font-style: italic;
		color: var(--tertiary-fixed);
	}

	.hero__subtitle {
		max-width: 28rem;
	}

	.hero__cta {
		display: flex;
		gap: var(--space-sm);
		margin-top: var(--space-sm);
	}

	.hero__portrait {
		position: relative;
		opacity: 0;
		transform: scale(0.95) translateY(20px);
		transition:
			opacity 1.4s var(--ease-out-expo) 0.7s,
			transform 1.4s var(--ease-out-expo) 0.7s;
	}

	.hero__content--loaded .hero__portrait {
		opacity: 1;
		transform: scale(1) translateY(0);
	}

	.hero__portrait :global(img) {
		width: 100%;
		max-width: 480px;
		height: auto;
		object-fit: cover;
		margin-left: auto;
	}

	.hero__scroll-hint {
		display: flex;
		justify-content: center;
		padding-bottom: 2rem;
		opacity: 0;
		transition: opacity 1.5s var(--ease-out-expo) 1.5s;
	}

	.hero__scroll-hint--loaded {
		opacity: 1;
	}

	.hero__scroll-line {
		width: 1px;
		height: 48px;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
		animation: scrollPulse 2s var(--ease-out) infinite;
	}

	@keyframes scrollPulse {
		0%,
		100% {
			opacity: 0.3;
			transform: scaleY(0.6);
		}
		50% {
			opacity: 1;
			transform: scaleY(1);
		}
	}

	@media (max-width: 1024px) {
		.hero__content {
			grid-template-columns: 1fr;
			padding: 7rem 1.5rem 3rem;
			text-align: center;
		}

		.hero__text {
			align-items: center;
		}

		.hero__subtitle {
			margin: 0 auto;
		}

		.hero__cta {
			justify-content: center;
		}

		.hero__portrait {
			max-width: 320px;
			margin: 0 auto;
		}

		.hero__portrait :global(img) {
			margin: 0 auto;
			max-width: 100%;
		}
	}

	@media (max-width: 640px) {
		.hero__content {
			padding: 6rem 1rem 2rem;
		}

		.hero__cta {
			flex-direction: column;
			width: 100%;
		}

		.hero__cta :global(.btn) {
			width: 100%;
			text-align: center;
		}
	}
</style>
