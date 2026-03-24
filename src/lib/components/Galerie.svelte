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
  	{ alt: 'Hamburger Rathaus', city: 'Hamburg',  title: 'The Seat of Power',   category: 'street', src: STREET_HAMBURG_RATHAUS  },
    { alt: 'U-Bahn Einfahrt Hamburg', city: 'Hamburg',  title: 'Arrival',             category: 'street', src: STREET_HAMBURG_UBAHN_EINFAHRT  },
    { alt: 'London Architektur im Sonnenuntergang', city: 'London',   title: 'Golden Facade',       category: 'street', src: STREET_LONDON_SUNSET  },

  ];

  type Photo = typeof photos[number];

  interface Row {
    large: Photo;
    small1: Photo;
    small2: Photo;
    reversed: boolean;
  }

  const rows: Row[] = [];
  for (let i = 0; i < photos.length; i += 3) {
    if (!photos[i]) break;
    rows.push({
      large: photos[i],
      small1: photos[i + 1] ?? photos[i],
      small2: photos[i + 2] ?? photos[i + 1] ?? photos[i],
      reversed: rows.length % 2 !== 0,
    });
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
			{#each rows as row, i (i)}
				<div class="galerie__row" class:reversed={row.reversed}>
					<div class="galerie__item large reveal" style="--i: {i * 3}">
						<enhanced:img src={row.large.src} alt={row.large.alt} loading="lazy"
							sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" />
						<div class="galerie__overlay">
							<span class="galerie__city" data-cat={row.large.category}>{row.large.city}</span>
							<span class="headline-md">{row.large.title}</span>
						</div>
					</div>

					<div class="galerie__stack">
						<div class="galerie__item small reveal" style="--i: {i * 3 + 1}">
							<enhanced:img src={row.small1.src} alt={row.small1.alt} loading="lazy"
								sizes="(min-width:1920px) 640px, (min-width:1080px) 320px, (min-width:768px) 200px" />
							<div class="galerie__overlay">
								<span class="galerie__city" data-cat={row.small1.category}>{row.small1.city}</span>
								<span class="headline-md">{row.small1.title}</span>
							</div>
						</div>
						<div class="galerie__item small reveal" style="--i: {i * 3 + 2}">
							<enhanced:img src={row.small2.src} alt={row.small2.alt} loading="lazy"
								sizes="(min-width:1920px) 640px, (min-width:1080px) 320px, (min-width:768px) 200px" />
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

	/* Grid: stacks rows vertically */
	.galerie__grid {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	/* Each row: 2 columns — large (2fr) + stack (1fr) */
	.galerie__row {
		display: grid;
		grid-template-columns: 2fr 1fr;
		height: clamp(200px, 26vw, 380px);
		gap: 4px;
	}

	/* Reversed row: stack (1fr) left, large (2fr) right */
	.galerie__row.reversed {
		grid-template-columns: 1fr 2fr;
	}

	.galerie__row.reversed .galerie__item.large {
		order: 2;
	}

	.galerie__row.reversed .galerie__stack {
		order: 1;
	}

	/* Stack: two small images in equal rows */
	.galerie__stack {
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: 4px;
		min-height: 0;
	}

	/* Items */
	.galerie__item {
		position: relative;
		overflow: hidden;
		min-height: 0;
		min-width: 0;
	}

	.galerie__item :global(picture) {
		display: contents;
	}

	.galerie__item :global(picture img),
	.galerie__item :global(> img) {
		position: absolute;
		inset: 0;
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

	/* Slide-up text */
	.galerie__city,
	.galerie__overlay .headline-md {
		display: block;
		transform: translateY(10px);
		opacity: 0;
		transition:
			transform var(--duration-normal) var(--ease-out),
			opacity var(--duration-normal) var(--ease-out);
	}

	.galerie__item:hover .galerie__city,
	.galerie__item:hover .headline-md {
		transform: translateY(0);
		opacity: 1;
	}

	.galerie__item:hover .headline-md {
		transition-delay: 40ms;
	}

	/* City label */
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

	/* Mobile: single column, aspect-ratio heights */
	@media (max-width: 640px) {
		.galerie__row {
			grid-template-columns: 1fr;
			height: auto;
		}

		.galerie__row.reversed .galerie__item.large,
		.galerie__row.reversed .galerie__stack {
			order: unset;
		}

		.galerie__item.large {
			aspect-ratio: 4 / 3;
			height: auto;
		}

		.galerie__stack {
			grid-template-rows: unset;
		}

		.galerie__item.small {
			aspect-ratio: 16 / 9;
			height: auto;
		}

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
