<script lang="ts">
	import type { Album } from '$lib/photos';
	import Card from './ui/Card.svelte';

	let {
		album,
		href,
		index,
		countLabel
	}: { album: Album; href: string; index: string; countLabel: string } = $props();
</script>

<Card pad="none" interactive {href} class="album-card flex flex-col overflow-hidden">
	<span class="card__media">
		{#if album.cover.source.kind === 'local'}
			<enhanced:img
				src={album.cover.source.img}
				alt={album.cover.alt}
				sizes="(min-width:1024px) 380px, 100vw"
			/>
		{:else}
			<img src={album.cover.source.full} alt={album.cover.alt} loading="lazy" />
		{/if}
		<span class="card__overlay"></span>
		<span class="card__index">{index}</span>
	</span>
	<span class="card__foot">
		<span class="card__label">{album.label}</span>
		<span class="card__meta">
			<span class="card__count">{countLabel}</span>
			<span class="card__arrow" aria-hidden="true">→</span>
		</span>
	</span>
</Card>

<style>
	.card__media {
		position: relative;
		display: block;
		aspect-ratio: 4 / 3;
		overflow: hidden;
	}

	.card__media :global(picture) {
		display: contents;
	}

	.card__media :global(img) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--duration-slow) var(--ease-out);
	}

	/* `.album-card` sits on <Card>'s root, so it carries no scoping hash —
	   anchor the hover chain with :global and keep the rest scoped. */
	:global(.album-card:hover) .card__media :global(img) {
		transform: scale(1.05);
	}

	.card__overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(transparent 45%, rgba(30, 43, 36, 0.35));
	}

	.card__index {
		position: absolute;
		top: 14px;
		left: 16px;
		font-family: var(--font-mono);
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.16em;
		color: var(--color-surface);
	}

	.card__foot {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding: 18px 20px 20px;
	}

	.card__label {
		font-family: var(--font-display);
		font-size: 1.55rem;
		font-weight: 600;
		letter-spacing: -0.01em;
		color: var(--color-on-surface);
	}

	.card__meta {
		display: flex;
		align-items: center;
		gap: 0.7rem;
	}

	.card__count {
		font-family: var(--font-mono);
		font-size: 11px;
		letter-spacing: 0.08em;
		color: var(--color-muted);
	}

	.card__arrow {
		font-family: var(--font-mono);
		color: var(--color-warm-deep);
		transition: transform var(--duration-fast) var(--ease-out);
	}

	:global(.album-card:hover) .card__arrow {
		transform: translateX(4px);
	}
</style>
