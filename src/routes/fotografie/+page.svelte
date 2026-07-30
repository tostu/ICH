<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import AlbumCard from '$lib/components/AlbumCard.svelte';
	import { albums } from '$lib/photos';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';

	let loaded = $state(false);
	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>{m.nav_fotografie()} — Torge Stubbe</title>
	<meta name="description" content={m.fotografie_head_lede()} />
</svelte:head>

<NavBar scrolled={true} {loaded} />

<!-- eslint-disable svelte/no-at-html-tags -->
<main class="foto">
	<header class="foto__hero">
		<span class="foto__eyebrow">{m.fotografie_head_label()}</span>
		<h1 class="foto__title">{@html m.fotografie_head_title()}</h1>
		<p class="foto__lede">{@html m.fotografie_head_lede()}</p>
	</header>

	<section class="foto__albums">
		<div class="foto__albums-head">
			<span class="foto__albums-label">{m.fotografie_alben_label()}</span>
		</div>
		<div class="foto__albums-grid">
			{#each albums as album, i (album.slug)}
				<AlbumCard
					{album}
					href={localizeHref(`/fotografie/${album.slug}`)}
					index={`#${i + 1}`}
					countLabel={m.fotografie_album_count({ count: album.photos.length })}
				/>
			{/each}
		</div>
	</section>
</main>

<CtaBand />
<Footer />

<style>
	.foto {
		background: var(--surface, #f7f2e5);
		padding-top: 5rem;
	}

	.foto__hero {
		max-width: var(--measure, 1280px);
		margin: 0 auto;
		padding: clamp(3rem, 8vh, 5rem) 3.5rem clamp(1.5rem, 4vh, 2.5rem);
	}

	.foto__eyebrow {
		display: block;
		font-family: var(--font-mono, monospace);
		font-size: 11.5px;
		font-weight: 500;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-accent-deep, #c96f1f);
		margin-bottom: 20px;
	}

	.foto__title {
		font-family: var(--font-display, serif);
		font-weight: 600;
		font-size: clamp(3rem, 6vw, 4.75rem);
		letter-spacing: -0.01em;
		line-height: 1.02;
		margin: 0;
		color: var(--on-surface, #1e2b24);
	}

	.foto__title :global(em) {
		font-style: italic;
		color: var(--secondary, #2f6b50);
	}

	.foto__lede {
		font-size: 1.15rem;
		font-weight: 500;
		line-height: 1.6;
		color: var(--on-surface-variant, #3a4a40);
		max-width: 34rem;
		margin: 1.6rem 0 0;
	}

	.foto__albums {
		max-width: var(--measure, 1280px);
		margin: 0 auto;
		padding: clamp(1.5rem, 4vh, 2.5rem) 3.5rem clamp(3rem, 7vh, 4.5rem);
	}

	.foto__albums-head {
		margin-bottom: 28px;
	}

	.foto__albums-label {
		font-family: var(--font-mono, monospace);
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-accent-deep, #c96f1f);
	}

	.foto__albums-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 28px 24px;
	}

	@media (max-width: 900px) {
		.foto__albums-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.foto__hero,
		.foto__albums {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		.foto__albums-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
