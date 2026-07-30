<script lang="ts">
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import { playCameraShutter } from '$lib/audio';
	import { pswpAttrs, type Album, type Photo } from '$lib/photos';

	let { album }: { album: Album } = $props();

	const featured = $derived(album.photos[0]);
	const rest = $derived(album.photos.slice(1));

	let galleryEl: HTMLDivElement;

	function exif(p: Photo): string {
		return `${p.exif.aperture} · ${p.exif.shutter} · ${p.exif.iso}`;
	}

	onMount(() => {
		const lightbox = new PhotoSwipeLightbox({
			gallery: galleryEl,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});

		lightbox.on('uiRegister', () => {
			lightbox.pswp?.ui?.registerElement({
				name: 'exif-caption',
				order: 9,
				isButton: false,
				appendTo: 'root',
				onInit: (el, pswp) => {
					el.className = 'pswp-exif';
					const render = () => {
						const anchor = pswp.currSlide?.data.element as HTMLElement | undefined;
						if (!anchor) return;
						const d = anchor.dataset;
						el.innerHTML = `
							<div class="pswp-exif__head">
								<span class="pswp-exif__city">${d.city ?? ''}</span>
								<span class="pswp-exif__title">${d.title ?? ''}</span>
							</div>
							<div class="pswp-exif__tags">
								<span>${d.aperture ?? ''}</span>
								<span>${d.shutter ?? ''}</span>
								<span>${d.iso ?? ''}</span>
								<span>${d.lens ?? ''}</span>
							</div>`;
					};
					pswp.on('change', render);
					render();
				}
			});
		});

		lightbox.on('beforeOpen', () => playCameraShutter());
		lightbox.init();

		return () => lightbox.destroy();
	});
</script>

<div class="album" bind:this={galleryEl}>
	<!-- Featured -->
	{#if featured}
		{@const a = pswpAttrs(featured)}
		<a
			class="album__featured"
			href={a.href}
			data-pswp-width={a.width}
			data-pswp-height={a.height}
			data-city={album.label}
			data-title={featured.title}
			data-aperture={featured.exif.aperture}
			data-shutter={featured.exif.shutter}
			data-iso={featured.exif.iso}
			data-lens={featured.exif.lens}
		>
			<span class="album__featured-shadow" aria-hidden="true"></span>
			<span class="album__featured-frame">
				{#if featured.source.kind === 'local'}
					<enhanced:img
						src={featured.source.img}
						alt={featured.alt}
						sizes="(min-width:1280px) 1168px, 100vw"
					/>
				{:else}
					<img src={featured.source.full} alt={featured.alt} loading="eager" />
				{/if}
				<span class="album__featured-cap">
					<span class="album__featured-loc"
						>● {album.label.toUpperCase()} — {featured.title.toUpperCase()}</span
					>
					<span class="album__featured-exif">{exif(featured)} · {featured.exif.lens}</span>
				</span>
			</span>
		</a>
	{/if}

	<!-- Grid -->
	<div class="album__grid">
		{#each rest as p, i (i)}
			{@const a = pswpAttrs(p)}
			<a
				class="album__cell"
				href={a.href}
				data-pswp-width={a.width}
				data-pswp-height={a.height}
				data-city={album.label}
				data-title={p.title}
				data-aperture={p.exif.aperture}
				data-shutter={p.exif.shutter}
				data-iso={p.exif.iso}
				data-lens={p.exif.lens}
			>
				{#if p.source.kind === 'local'}
					<enhanced:img
						src={p.source.img}
						alt={p.alt}
						loading="lazy"
						sizes="(min-width:1280px) 373px, (min-width:768px) 33vw, 100vw"
					/>
				{:else}
					<img src={p.source.thumb} alt={p.alt} loading="lazy" />
				{/if}
				<span class="album__cap">
					<span class="album__cap-loc">{album.label.toUpperCase()} · {p.title.toUpperCase()}</span>
					<span class="album__cap-exif">{exif(p)}</span>
				</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.album {
		/* Measure and gutters come from the page's <Section> wrapper. */
		width: 100%;
	}

	/* Featured */
	.album__featured {
		display: block;
		position: relative;
		padding: 0 0 14px 0;
	}

	.album__featured-shadow {
		position: absolute;
		inset: 16px -14px 0 16px;
		background: var(--secondary);
		border-radius: var(--radius-card);
	}

	.album__featured-frame {
		position: relative;
		display: block;
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow: 0 16px 38px rgba(30, 43, 36, 0.22);
	}

	.album__featured-frame :global(picture) {
		display: contents;
	}

	.album__featured-frame :global(img) {
		display: block;
		width: 100%;
		height: clamp(320px, 40vw, 520px);
		object-fit: cover;
		transition: transform var(--duration-normal, 0.3s) var(--ease-out, ease);
	}

	.album__featured:hover :global(img) {
		transform: scale(1.02);
	}

	.album__featured-cap {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding: 16px 24px;
		background: linear-gradient(transparent, rgba(30, 43, 36, 0.75));
		font-family: var(--font-mono, monospace);
	}

	.album__featured-loc {
		font-size: 11.5px;
		font-weight: 500;
		letter-spacing: 0.16em;
		color: #f7f2e5;
	}

	.album__featured-exif {
		font-size: 11px;
		letter-spacing: 0.08em;
		color: rgba(247, 242, 229, 0.85);
	}

	/* Grid */
	.album__grid {
		margin-top: 42px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 26px 22px;
	}

	.album__cell {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.album__cell :global(picture) {
		display: contents;
	}

	.album__cell :global(img) {
		display: block;
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: var(--radius);
		box-shadow: 0 6px 18px rgba(30, 43, 36, 0.12);
		transition: transform var(--duration-normal, 0.3s) var(--ease-out, ease);
	}

	.album__cell:hover :global(img) {
		transform: scale(1.02);
	}

	.album__cap {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.75rem;
		font-family: var(--font-mono, monospace);
	}

	.album__cap-loc {
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.14em;
		color: var(--on-surface, #1e2b24);
	}

	.album__cap-exif {
		font-size: 10px;
		color: var(--on-surface-variant, #8a8672);
		white-space: nowrap;
	}

	@media (max-width: 768px) {
		.album__grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 520px) {
		.album__grid {
			grid-template-columns: 1fr;
		}
		.album__cell :global(img) {
			height: 260px;
		}
	}

	/* PhotoSwipe custom EXIF caption (rendered into pswp root, needs :global) */
	:global(.pswp-exif) {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		flex-wrap: wrap;
		gap: 0.75rem 1.5rem;
		padding: 18px 24px;
		background: linear-gradient(transparent, rgba(6, 27, 14, 0.82));
		font-family: var(--font-mono, monospace);
		z-index: 10;
		pointer-events: none;
	}

	:global(.pswp-exif__head) {
		display: flex;
		align-items: baseline;
		gap: 0.7rem;
	}

	:global(.pswp-exif__city) {
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--warm-bright);
	}

	:global(.pswp-exif__title) {
		font-size: 15px;
		letter-spacing: 0.02em;
		color: #f7f2e5;
	}

	:global(.pswp-exif__tags) {
		display: flex;
		gap: 1rem;
		font-size: 11px;
		letter-spacing: 0.08em;
		color: rgba(247, 242, 229, 0.82);
	}
</style>
