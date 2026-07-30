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
		border-radius: 18px;
		overflow: hidden;
		background: var(--surface-container, #efe8d6);
		box-shadow: 0 8px 24px rgba(30, 43, 36, 0.12);
		transition:
			transform var(--duration-normal, 0.3s) var(--ease-out, ease),
			box-shadow var(--duration-normal, 0.3s) var(--ease-out, ease);
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: 0 18px 40px rgba(30, 43, 36, 0.2);
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
		font-family: var(--font-mono, monospace);
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.16em;
		color: #f7f2e5;
	}

	.card__foot {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding: 18px 20px 20px;
	}

	.card__label {
		font-family: var(--font-display, serif);
		font-size: 1.65rem;
		font-weight: 600;
		color: var(--on-surface, #1e2b24);
	}

	.card__meta {
		display: flex;
		align-items: center;
		gap: 0.7rem;
	}

	.card__count {
		font-family: var(--font-mono, monospace);
		font-size: 11px;
		letter-spacing: 0.08em;
		color: var(--on-surface-variant, #8a8672);
	}

	.card__arrow {
		font-family: var(--font-mono, monospace);
		color: var(--color-accent-deep, #c96f1f);
		transition: transform var(--duration-fast, 0.15s) var(--ease-out, ease);
	}

	.card:hover .card__arrow {
		transform: translateX(4px);
	}
</style>
