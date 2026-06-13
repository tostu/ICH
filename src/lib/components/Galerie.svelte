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
	import { playCameraShutter } from '$lib/audio';
	import * as m from '$lib/paraglide/messages';

	const photos = [
		{
			alt: 'Silhouette auf Hamburger Treppe',
			city: 'Hamburg',
			title: 'The Interior Void',
			category: 'street',
			src: STREET_HAMBURG_STUFEN_FRAU_BW,
			aperture: 'F4.0',
			shutter: '1/160s',
			iso: 'ISO 800',
			lens: '28mm'
		},
		{
			alt: 'Flugzeug über Hamburger Hinterhof',
			city: 'Hamburg',
			title: 'Concrete Monolith',
			category: 'street',
			src: STREET_HAMBURG_SKY_PLANE,
			aperture: 'F5.6',
			shutter: '1/500s',
			iso: 'ISO 200',
			lens: '35mm'
		},
		{
			alt: 'Straßenbahn bei Nacht in Hannover',
			city: 'Hannover',
			title: 'Night Transit',
			category: 'street',
			src: STREET_HANNOVER_TRAM,
			aperture: 'F2.0',
			shutter: '1/80s',
			iso: 'ISO 1600',
			lens: '50mm'
		},
		{
			alt: 'Street Art in London',
			city: 'London',
			title: 'Urban Canvas',
			category: 'street',
			src: STREET_LONDON_GRAFITTI,
			aperture: 'F2.8',
			shutter: '1/250s',
			iso: 'ISO 400',
			lens: '35mm'
		},
		{
			alt: 'Hamburg Speicherstadt durch Brückenrahmen',
			city: 'Hamburg',
			title: 'Raw Steel',
			category: 'street',
			src: STREET_HAMBURG_SPEICHERSTADT,
			aperture: 'F8.0',
			shutter: '1/125s',
			iso: 'ISO 100',
			lens: '24mm'
		},
		{
			alt: 'London Underground Rolltreppe',
			city: 'London',
			title: 'Descent',
			category: 'street',
			src: STREET_LONDON_SUBWAY_BW,
			aperture: 'F2.8',
			shutter: '1/60s',
			iso: 'ISO 3200',
			lens: '28mm'
		},
		{
			alt: 'Hamburger Rathaus',
			city: 'Hamburg',
			title: 'The Seat of Power',
			category: 'street',
			src: STREET_HAMBURG_RATHAUS,
			aperture: 'F5.6',
			shutter: '1/200s',
			iso: 'ISO 200',
			lens: '35mm'
		},
		{
			alt: 'U-Bahn Einfahrt Hamburg',
			city: 'Hamburg',
			title: 'Arrival',
			category: 'street',
			src: STREET_HAMBURG_UBAHN_EINFAHRT,
			aperture: 'F4.0',
			shutter: '1/125s',
			iso: 'ISO 800',
			lens: '50mm'
		},
		{
			alt: 'London Architektur im Sonnenuntergang',
			city: 'London',
			title: 'Golden Facade',
			category: 'street',
			src: STREET_LONDON_SUNSET,
			aperture: 'F2.8',
			shutter: '1/320s',
			iso: 'ISO 400',
			lens: '35mm'
		}
	];

	type Photo = (typeof photos)[number];

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
			reversed: rows.length % 2 !== 0
		});
	}

	let activePhoto = $state<Photo | null>(null);

	function openLightbox(photo: Photo) {
		activePhoto = photo;
		playCameraShutter();
	}

	function closeLightbox() {
		activePhoto = null;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closeLightbox();
		}
	}

	$effect(() => {
		if (activePhoto) {
			document.body.style.overflow = 'hidden';
			setTimeout(() => {
				const dialog = document.querySelector('.lightbox') as HTMLElement;
				if (dialog) dialog.focus();
			}, 50);
		} else {
			document.body.style.overflow = '';
		}
	});
</script>

<section id="galerie" class="galerie section-pad">
	<div class="galerie__inner">
		<div class="galerie__header reveal">
			<span class="label-lg text-tertiary-fixed opacity-80"
				>{m.galerie_label ? m.galerie_label() : 'Portfolio & Street Photography'}</span
			>
			<h2 class="display-md text-white">
				Urbane <em>{m.galerie_nuances ? m.galerie_nuances() : 'Nuancen.'}</em>
			</h2>
			<p class="body-lg mt-[var(--space-sm)] max-w-xl text-white/65">
				{m.galerie_desc
					? m.galerie_desc()
					: 'Ein Auge für die Details, die andere übersehen — sowohl im Code als auch im Stadtbild. Hier treffen technische Case Studies auf urbane Beobachtungen.'}
			</p>
		</div>

		<div class="galerie__grid">
			{#each rows as row, i (i)}
				<div class="galerie__row" class:reversed={row.reversed}>
					<button
						type="button"
						class="galerie__item large reveal"
						style="--i: {i * 3}"
						onclick={() => openLightbox(row.large)}
					>
						<enhanced:img
							src={row.large.src}
							alt={row.large.alt}
							loading="lazy"
							sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
						/>
						<div class="galerie__overlay">
							<span class="galerie__city" data-cat={row.large.category}>{row.large.city}</span>
							<span class="headline-md">{row.large.title}</span>
						</div>
					</button>

					<div class="galerie__stack">
						<button
							type="button"
							class="galerie__item small reveal"
							style="--i: {i * 3 + 1}"
							onclick={() => openLightbox(row.small1)}
						>
							<enhanced:img
								src={row.small1.src}
								alt={row.small1.alt}
								loading="lazy"
								sizes="(min-width:1920px) 640px, (min-width:1080px) 320px, (min-width:768px) 200px"
							/>
							<div class="galerie__overlay">
								<span class="galerie__city" data-cat={row.small1.category}>{row.small1.city}</span>
								<span class="headline-md">{row.small1.title}</span>
							</div>
						</button>
						<button
							type="button"
							class="galerie__item small reveal"
							style="--i: {i * 3 + 2}"
							onclick={() => openLightbox(row.small2)}
						>
							<enhanced:img
								src={row.small2.src}
								alt={row.small2.alt}
								loading="lazy"
								sizes="(min-width:1920px) 640px, (min-width:1080px) 320px, (min-width:768px) 200px"
							/>
							<div class="galerie__overlay">
								<span class="galerie__city" data-cat={row.small2.category}>{row.small2.city}</span>
								<span class="headline-md">{row.small2.title}</span>
							</div>
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

{#if activePhoto}
	<div
		class="lightbox"
		role="dialog"
		aria-modal="true"
		aria-label={m.lightbox_label ? m.lightbox_label() : 'Foto-Detailansicht'}
		onkeydown={handleKeydown}
		tabindex="-1"
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="lightbox__overlay" onclick={closeLightbox}></div>

		<div class="lightbox__content">
			<button
				type="button"
				class="lightbox__close"
				onclick={closeLightbox}
				aria-label={m.lightbox_close ? m.lightbox_close() : 'Schließen'}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-6 w-6"
					><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg
				>
			</button>

			<div class="lightbox__image-wrapper">
				<enhanced:img src={activePhoto.src} alt={activePhoto.alt} class="lightbox__image" />
			</div>

			<div class="lightbox__info">
				<div class="lightbox__header-info">
					<span class="label-lg text-secondary">{activePhoto.city}</span>
					<h3 class="display-md mt-1 text-white">{activePhoto.title}</h3>
				</div>

				<div class="lightbox__telemetry font-mono">
					<div class="telemetry-tag">
						<span class="telemetry-label"
							>{m.telemetry_aperture ? m.telemetry_aperture() : 'APERTURE'}</span
						>
						<span class="telemetry-val">{activePhoto.aperture}</span>
					</div>
					<div class="telemetry-tag">
						<span class="telemetry-label"
							>{m.telemetry_shutter ? m.telemetry_shutter() : 'SHUTTER'}</span
						>
						<span class="telemetry-val">{activePhoto.shutter}</span>
					</div>
					<div class="telemetry-tag">
						<span class="telemetry-label">{m.telemetry_iso ? m.telemetry_iso() : 'ISO'}</span>
						<span class="telemetry-val">{activePhoto.iso}</span>
					</div>
					<div class="telemetry-tag">
						<span class="telemetry-label">{m.telemetry_lens ? m.telemetry_lens() : 'LENS'}</span>
						<span class="telemetry-val">{activePhoto.lens}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.galerie {
		background: var(--primary);
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

	/* Items buttons reset */
	.galerie__item {
		position: relative;
		overflow: hidden;
		min-height: 0;
		min-width: 0;
		background: transparent;
		padding: 0;
		border: none;
		display: block;
		width: 100%;
		height: 100%;
		text-align: left;
		cursor: pointer;
		border-radius: 0;
	}

	.galerie__item:focus-visible {
		outline: 3px solid var(--tertiary-fixed);
		outline-offset: -3px;
		z-index: 10;
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

	.galerie__item:hover .galerie__overlay,
	.galerie__item:focus-within .galerie__overlay {
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
	.galerie__item:hover .headline-md,
	.galerie__item:focus-within .galerie__city,
	.galerie__item:focus-within .headline-md {
		transform: translateY(0);
		opacity: 1;
	}

	.galerie__item:hover .headline-md,
	.galerie__item:focus-within .headline-md {
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

	/* Lightbox Styles */
	.lightbox {
		position: fixed;
		inset: 0;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-lg);
		outline: none;
		overflow-y: auto;
	}

	@media (max-width: 640px) {
		.lightbox {
			padding: 12px;
		}
	}

	.lightbox__overlay {
		position: absolute;
		inset: 0;
		background: rgba(6, 27, 14, 0.94);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	.lightbox__content {
		position: relative;
		z-index: 10;
		display: flex;
		flex-direction: column;
		max-width: 900px;
		width: 100%;
		background: var(--primary-container);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow: 0 24px 50px rgba(0, 0, 0, 0.5);
		animation: lightboxFadeIn var(--duration-normal) var(--ease-out-expo) forwards;
		margin: auto;
	}

	@keyframes lightboxFadeIn {
		from {
			opacity: 0;
			transform: scale(0.96);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.lightbox__close {
		position: absolute;
		right: 1rem;
		top: 1rem;
		background: rgba(0, 0, 0, 0.5);
		color: #ffffff;
		border: none;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 20;
		cursor: pointer;
		transition:
			background var(--duration-fast),
			transform var(--duration-fast);
	}

	.lightbox__close:hover {
		background: var(--secondary);
		transform: scale(1.05);
	}

	.lightbox__image-wrapper {
		width: 100%;
		aspect-ratio: 16 / 10;
		background: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	@media (max-width: 640px) {
		.lightbox__image-wrapper {
			aspect-ratio: 4 / 3;
			max-height: 55vh;
		}
	}

	.lightbox__image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	.lightbox__info {
		padding: var(--space-md) var(--space-lg);
		background: var(--primary);
		color: #ffffff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	@media (max-width: 640px) {
		.lightbox__info {
			flex-direction: column;
			align-items: stretch;
			padding: var(--space-sm) var(--space-md);
			gap: 1rem;
		}
	}

	.lightbox__telemetry {
		display: flex;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	@media (max-width: 640px) {
		.lightbox__telemetry {
			justify-content: space-between;
			gap: 0.5rem;
		}
	}

	.telemetry-tag {
		display: flex;
		flex-direction: column;
	}

	.telemetry-label {
		font-size: 0.6rem;
		color: rgba(255, 255, 255, 0.45);
		letter-spacing: 0.08em;
	}

	.telemetry-val {
		font-size: 0.875rem;
		color: var(--tertiary-fixed);
		font-weight: 600;
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
			grid-template-rows: none;
			grid-template-columns: 1fr 1fr;
			gap: 4px;
		}

		.galerie__item.small {
			aspect-ratio: 4 / 3;
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
