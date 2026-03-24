<script lang="ts">
  import STREET_HAMBURG_STUFEN_FRAU_BW from '$lib/assets/STREET_HAMBURG_STUFEN_FRAU_BW.jpg?enhanced';
  import STREET_HAMBURG_SKY_PLANE from '$lib/assets/STREET_HAMBURG_SKY_PLANE.jpg?enhanced';
  import STREET_HANNOVER_TRAM from '$lib/assets/STREET_HANNOVER_TRAM.jpg?enhanced';
  import STREET_LONDON_GRAFITTI from '$lib/assets/STREET_LONDON_GRAFITTI.jpg?enhanced';
  import STREET_HAMBURG_SPEICHERSTADT from '$lib/assets/STREET_HAMBURG_SPEICHERSTADT.jpg?enhanced';
  import STREET_LONDON_SUBWAY_BW from '$lib/assets/STREET_LONDON_SUBWAY_BW.jpg?enhanced';
  import STREET_HAMBURG_UBAHN_EINFAHRT from '$lib/assets/STREET_HAMBURG_UBAHN_EINFAHRT.jpg?enhanced';
  import STREET_LONDON_SUNSET from '$lib/assets/STREET_LONDON_SUNSET.jpg?enhanced';
  import STREET_HAMBURG_RATHAUS from '$lib/assets/STREET_HAMBURG_RATHAUS.jpg?enhanced';
  import STREET_HAMBURG_FAHRRAD_TOPDOWN_BW from '$lib/assets/STREET_HAMBURG_FAHRRAD_TOPDOWN_BW.jpg?enhanced';
  import STREET_HAMBURG_UBAHN_SCHILD_BW from '$lib/assets/STREET_HAMBURG_UBAHN_SCHILD_BW.jpg?enhanced';
  import STREET_HAMBURG_UBAHN from '$lib/assets/STREET_HAMBURG_UBAHN.jpg?enhanced';
  import STREET_BIKE_INFRONT_BUSH from '$lib/assets/STREET_BIKE_INFRONT_BUSH.jpg?enhanced';

  const photos = [
    { alt: 'Silhouette auf Hamburger Treppe', city: 'Hamburg',  title: 'The Interior Void',   category: 'street', src: STREET_HAMBURG_STUFEN_FRAU_BW  },
    { alt: 'Flugzeug über Hamburger Hinterhof', city: 'Hamburg',  title: 'Concrete Monolith',   category: 'street', src: STREET_HAMBURG_SKY_PLANE  },
    { alt: 'Straßenbahn bei Nacht in Hannover', city: 'Hannover', title: 'Night Transit',       category: 'street', src: STREET_HANNOVER_TRAM  },
    { alt: 'Street Art in London', city: 'London',   title: 'Urban Canvas',        category: 'street', src: STREET_LONDON_GRAFITTI  },
    { alt: 'Hamburg Speicherstadt durch Brückenrahmen', city: 'Hamburg', title: 'Raw Steel',           category: 'street', src: STREET_HAMBURG_SPEICHERSTADT  },
    { alt: 'London Underground Rolltreppe', city: 'London',   title: 'Descent',             category: 'street', src: STREET_LONDON_SUBWAY_BW  },
    { alt: 'U-Bahn Einfahrt Hamburg', city: 'Hamburg',  title: 'Arrival',             category: 'street', src: STREET_HAMBURG_UBAHN_EINFAHRT  },
    { alt: 'London Architektur im Sonnenuntergang', city: 'London',   title: 'Golden Facade',       category: 'street', src: STREET_LONDON_SUNSET  },
    { alt: 'Hamburger Rathaus', city: 'Hamburg',  title: 'The Seat of Power',   category: 'street', src: STREET_HAMBURG_RATHAUS  },
    { alt: 'Fahrrad von oben, Hamburg', city: 'Hamburg',  title: 'Geometry',            category: 'street', src: STREET_HAMBURG_FAHRRAD_TOPDOWN_BW  },
    { alt: 'Hamburger U-Bahn Schild, Schwarz-Weiß', city: 'Hamburg',  title: 'Signage',             category: 'street', src: STREET_HAMBURG_UBAHN_SCHILD_BW  },
    { alt: 'Hamburger U-Bahn Station', city: 'Hamburg',  title: 'Underground',         category: 'street', src: STREET_HAMBURG_UBAHN  },
    { alt: 'Fahrrad vor einem Busch', city: 'Street',   title: 'Still Life',          category: 'street', src: STREET_BIKE_INFRONT_BUSH  },
  ];

  interface PhotoData {
    alt: string;
    city: string;
    title: string;
    category: string;
    src: string;
  }

  interface LogicalRow {
    type: 'large-left' | 'large-right';
    large: PhotoData;
    small1: PhotoData;
    small2: PhotoData;
  }

  const logicalRows: LogicalRow[] = [];
  for (let i = 0; i < photos.length; i += 3) {
    const rowType = (logicalRows.length % 2 === 0) ? 'large-left' : 'large-right';

    // Ensure we have enough photos for a full block of 3, or provide fallbacks
    const largePhoto = photos[i];
    const smallPhoto1 = photos[i + 1] || largePhoto; // Fallback to largePhoto if not enough
    const smallPhoto2 = photos[i + 2] || smallPhoto1; // Fallback to smallPhoto1 if not enough

    if (largePhoto) { // Only push if there's at least one photo
      logicalRows.push({
        type: rowType,
        large: largePhoto,
        small1: smallPhoto1,
        small2: smallPhoto2,
      });
    }
  }
</script>

<section id="galerie" class="galerie section-pad">
	<div class="galerie__inner">
		<div class="galerie__header reveal">
			<span class="label-lg text-secondary">Portfolio & Street Photography</span>
			<h2 class="display-md">Urbane <em>Nuancen.</em></h2>
			<p class="body-lg text-on-surface-variant max-w-xl mt-(--space-sm)">
				Ein Auge für die Details, die andere übersehen — sowohl im Code als auch im Stadtbild. Hier
				treffen technische Case Studies auf urbane Beobachtungen.
			</p>
		</div>

		<div class="galerie__grid">
			{#each logicalRows as row, i (i)}
				<div class="galerie__logical-row {row.type}">
					<!-- Large Image -->
					<div class="galerie__item large-image reveal" style="--i: {i * 3};">
						<enhanced:img src={row.large.src} alt={row.large.alt} loading="lazy" />
						<div class="galerie__overlay">
							<span class="galerie__city" data-cat={row.large.category}>{row.large.city}</span>
							<span class="headline-md">{row.large.title}</span>
						</div>
					</div>

					<!-- Stacked Small Images -->
					<div class="small-images-stack">
						<div class="galerie__item small-image reveal" style="--i: {i * 3 + 1};">
							<enhanced:img src={row.small1.src} alt={row.small1.alt} loading="lazy" />
							<div class="galerie__overlay">
								<span class="galerie__city" data-cat={row.small1.category}>{row.small1.city}</span>
								<span class="headline-md">{row.small1.title}</span>
							</div>
						</div>
						<div class="galerie__item small-image reveal" style="--i: {i * 3 + 2};">
							<enhanced:img src={row.small2.src} alt={row.small2.alt} loading="lazy" />
							<div class="galerie__overlay">
								<span class="galerie__city" data-cat={row.small2.category}>{row.small2.city}</span>
								<span class="headline-md">{row.small2.title}</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.galerie {
		background: var(--surface-container-low);
	}

	.galerie__inner {
		max-width: 1280px;
		margin: 0 auto;
	}

	.galerie__header {
		margin-bottom: var(--space-2xl);
	}

	.galerie__header em {
		font-style: italic;
		color: var(--secondary);
	}

	.galerie__grid {
		display: flex; /* Stack logical rows vertically */
		flex-direction: column;
		gap: 4px; /* Gap between logical rows */
		width: 100%;
	}

	.galerie__logical-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr); /* Two columns for large and small stack */
		gap: 4px; /* Gap between large image and small images stack */
	}

	/* Order for large-left / smalls-right */
	.galerie__logical-row.large-left .large-image {
		grid-column: 1;
		grid-row: 1 / span 2; /* Large image spans 2 rows */
	}
	.galerie__logical-row.large-left .small-images-stack {
		grid-column: 2;
		grid-row: span 2;
	}

	/* Order for smalls-left / large-right */
	.galerie__logical-row.large-right .large-image {
		grid-column: 2;
		grid-row: 1 / span 2; /* Large image spans 2 rows */
	}
	.galerie__logical-row.large-right .small-images-stack {
		grid-column: 1;
		grid-row: span 2;
	}


	.small-images-stack {
		display: flex;
		flex-direction: column;
		gap: 4px; /* Gap between stacked small images */
	}

	.galerie__item.large-image,
	.galerie__item.small-image {
		/* Basic item styling, ensure they fill their space */
		height: 100%;
		width: 100%;
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
		transform: scale(1.04);
	}

	/* Overlay */
	.galerie__overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: var(--space-md);
		background: linear-gradient(to top, rgba(6, 27, 14, 0.88) 0%, transparent 60%);
		opacity: 0;
		transition: opacity var(--duration-normal) var(--ease-out);
	}

	.galerie__item:hover .galerie__overlay {
		opacity: 1;
	}

	/* Slide-up text animation */
	.galerie__city,
	.galerie__overlay .headline-md {
		display: block;
		transform: translateY(10px);
		transition:
			transform var(--duration-normal) var(--ease-out),
			opacity var(--duration-normal) var(--ease-out);
		opacity: 0;
	}

	.galerie__item:hover .galerie__city,
	.galerie__item:hover .headline-md {
		transform: translateY(0);
		opacity: 1;
	}

	.galerie__item:hover .headline-md {
		transition-delay: 40ms;
	}

	/* City label with category dot */
	.galerie__city {
		display: flex;
		align-items: center;
		gap: 0.4em;
		font-size: var(--label-lg-size, 0.75rem);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--tertiary-fixed);
		margin-bottom: 0.25rem;
	}

	.galerie__city::before {
		content: '';
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.galerie__city[data-cat='street']::before {
		background: var(--secondary);
	}

	.galerie__city[data-cat='portrait']::before {
		background: var(--tertiary);
	}

	.galerie__overlay .headline-md {
		color: var(--on-primary);
		font-size: clamp(1.125rem, 2vw, 1.5rem);
	}

	/* Mobile: Stack everything */
	@media (max-width: 640px) {
		.galerie__logical-row {
			grid-template-columns: 1fr; /* Single column for logical row */
		}

		.galerie__logical-row.large-left .large-image,
		.galerie__logical-row.large-right .large-image,
		.galerie__logical-row.large-left .small-images-stack,
		.galerie__logical-row.large-right .small-images-stack {
			grid-column: 1; /* All items take full width in single column */
			grid-row: unset; /* Remove specific row assignments */
		}

		.galerie__logical-row.large-right .large-image {
			order: 2; /* Ensure large image comes after smalls if it was on the right */
		}
		.galerie__logical-row.large-right .small-images-stack {
			order: 1; /* Ensure smalls come before large if large was on the right */
		}

		.small-images-stack {
			flex-direction: column; /* Keep stacked */
		}

		.galerie__item.large-image,
		.galerie__item.small-image {
			height: auto; /* Allow natural height for stacked items */
		}

		/* Overlay should still be visible on mobile */
		.galerie__overlay {
			opacity: 1;
			padding: var(--space-sm);
		}

		.galerie__city,
		.galerie__overlay .headline-md {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
