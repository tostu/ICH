<script lang="ts">
	import type { Album } from '$lib/photos';

	let {
		album,
		href,
		index,
		countLabel
	}: { album: Album; href: string; index: string; countLabel: string } = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a class="card" {href}>
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
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		border-radius: var(--radius-card);
		overflow: hidden;
		background: var(--surface-container-lowest);
		border: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: 0 3px 14px rgba(30, 43, 36, 0.07);
		transition:
			transform var(--duration-normal) var(--ease-out),
			box-shadow var(--duration-normal) var(--ease-out),
			border-color var(--duration-normal) var(--ease-out);
	}

	.card:hover {
		transform: translateY(-4px);
		border-color: var(--outline-variant);
		box-shadow: 0 14px 36px rgba(30, 43, 36, 0.12);
	}

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
		transition: transform var(--duration-slow, 0.5s) var(--ease-out, ease);
	}

	.card:hover .card__media :global(img) {
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
		color: var(--surface);
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
		color: var(--on-surface);
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
		color: var(--muted);
	}

	.card__arrow {
		font-family: var(--font-mono);
		color: var(--warm-deep);
		transition: transform var(--duration-fast) var(--ease-out);
	}

	.card:hover .card__arrow {
		transform: translateX(4px);
	}
</style>
