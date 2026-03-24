<section id="galerie" class="galerie">
	<div class="galerie__header section-pad reveal">
		<span class="label-lg text-secondary">Portfolio & Street Photography</span>
		<h2 class="display-md">Urbane <em>Nuancen.</em></h2>
		<p class="body-lg text-on-surface-variant max-w-[36rem] mt-[var(--space-sm)]">
			Ein Auge für die Details, die andere übersehen — sowohl im Code als auch im Stadtbild. Hier
			treffen technische Case Studies auf urbane Beobachtungen.
		</p>
	</div>

	<div class="galerie__grid">
		<div class="galerie__item galerie__item--wide reveal">
			<enhanced:img
				src="$lib/assets/STREET_HAMBURG_SKY_PLANE.jpg"
				alt="Flugzeug über Hamburger Hinterhof"
				loading="lazy"
			/>
			<div class="galerie__overlay">
				<span class="label-lg">Hamburg</span>
				<span class="headline-md">Concrete Monolith</span>
			</div>
		</div>
		<div class="galerie__item reveal">
			<enhanced:img
				src="$lib/assets/STREET_HAMBURG_SPEICHERSTADT.jpg"
				alt="Hamburg Speicherstadt durch Brückenrahmen"
				loading="lazy"
			/>
			<div class="galerie__overlay">
				<span class="label-lg">Hamburg</span>
				<span class="headline-md">Raw Steel</span>
			</div>
		</div>
		<div class="galerie__item reveal">
			<enhanced:img
				src="$lib/assets/STREET_LONDON_GRAFITTI.jpg"
				alt="Street Art in London"
				loading="lazy"
			/>
			<div class="galerie__overlay">
				<span class="label-lg">London</span>
				<span class="headline-md">Urban Canvas</span>
			</div>
		</div>
		<div class="galerie__item galerie__item--tall reveal">
			<enhanced:img
				src="$lib/assets/STREET_HAMBURG_STUFEN_FRAU_BW.jpg"
				alt="Silhouette auf Hamburger Treppe"
				loading="lazy"
			/>
			<div class="galerie__overlay">
				<span class="label-lg">Hamburg</span>
				<span class="headline-md">The Interior Void</span>
			</div>
		</div>
		<div class="galerie__item reveal">
			<enhanced:img
				src="$lib/assets/STREET_HANNOVER_TRAM.jpg"
				alt="Straßenbahn bei Nacht in Hannover"
				loading="lazy"
			/>
			<div class="galerie__overlay">
				<span class="label-lg">Hannover</span>
				<span class="headline-md">Night Transit</span>
			</div>
		</div>
		<div class="galerie__item reveal">
			<enhanced:img
				src="$lib/assets/STREET_LONDON_SUNSET.jpg"
				alt="London Architektur im Sonnenuntergang"
				loading="lazy"
			/>
			<div class="galerie__overlay">
				<span class="label-lg">London</span>
				<span class="headline-md">Golden Facade</span>
			</div>
		</div>
		<div class="galerie__item reveal">
			<enhanced:img
				src="$lib/assets/STREET_HAMBURG_FAHRRAD_TOPDOWN_BW.jpg"
				alt="Fahrrad von oben, Hamburg"
				loading="lazy"
			/>
			<div class="galerie__overlay">
				<span class="label-lg">Hamburg</span>
				<span class="headline-md">Geometry</span>
			</div>
		</div>
		<div class="galerie__item reveal">
			<enhanced:img
				src="$lib/assets/STREET_LONDON_SUBWAY_BW.jpg"
				alt="London Underground Rolltreppe"
				loading="lazy"
			/>
			<div class="galerie__overlay">
				<span class="label-lg">London</span>
				<span class="headline-md">Descent</span>
			</div>
		</div>
	</div>
</section>

<style>
	.galerie {
		background: var(--surface-container-low);
	}

	.galerie__header {
		padding-bottom: 0;
	}

	.galerie__header em {
		font-style: italic;
		color: var(--secondary);
	}

	.galerie__grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: 280px;
		gap: 4px;
	}

	.galerie__item {
		position: relative;
		overflow: hidden;
		border-radius: var(--radius);
		cursor: pointer;
	}

	/* enhanced:img generates a <picture> wrapper — normalize it */
	.galerie__item :global(picture) {
		display: contents;
	}

	.galerie__item :global(picture img),
	.galerie__item :global(> img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--duration-normal) var(--ease-out);
	}

	.galerie__item:hover :global(picture img),
	.galerie__item:hover :global(> img) {
		transform: scale(1.03);
	}

	.galerie__overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: var(--space-md);
		background: linear-gradient(to top, rgba(6, 27, 14, 0.85) 0%, transparent 60%);
		opacity: 0;
		transition: opacity var(--duration-normal) var(--ease-out);
	}

	.galerie__item:hover .galerie__overlay {
		opacity: 1;
	}

	.galerie__overlay .label-lg {
		color: var(--tertiary-fixed);
		margin-bottom: 0.25rem;
	}

	.galerie__overlay .headline-md {
		color: var(--on-primary);
		font-size: clamp(1.125rem, 2vw, 1.5rem);
	}

	.galerie__item--wide {
		grid-column: span 2;
	}

	.galerie__item--tall {
		grid-row: span 2;
	}

	@media (max-width: 1024px) {
		.galerie__grid {
			grid-template-columns: repeat(2, 1fr);
			grid-auto-rows: 240px;
		}

		.galerie__item--wide {
			grid-column: span 2;
		}

		.galerie__item--tall {
			grid-row: span 1;
		}
	}

	@media (max-width: 640px) {
		.galerie__grid {
			grid-template-columns: repeat(2, 1fr);
			grid-auto-rows: 200px;
			gap: 2px;
		}

		.galerie__item--wide {
			grid-column: span 2;
		}

		.galerie__overlay {
			opacity: 1;
			padding: var(--space-sm);
		}
	}
</style>
