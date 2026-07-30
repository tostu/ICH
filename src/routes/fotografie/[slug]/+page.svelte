<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import AlbumGrid from '$lib/components/AlbumGrid.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const album = $derived(data.album);

	let loaded = $state(false);
	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>{album.label} · {m.nav_fotografie()} — Torge Stubbe</title>
	<meta name="description" content={m.fotografie_head_lede()} />
</svelte:head>

<NavBar scrolled={true} {loaded} />

<main class="album-page">
	<header class="album-page__hero">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a class="album-page__back" href={localizeHref('/fotografie')}>← {m.fotografie_back()}</a>
		<span class="album-page__eyebrow">Fotografie · {album.label}</span>
		<h1 class="album-page__title">{album.label}<em>.</em></h1>
		<p class="album-page__lede">{m.fotografie_head_lede()}</p>
	</header>

	<section class="album-page__body">
		<AlbumGrid {album} />
	</section>
</main>

<CtaBand />
<Footer />

<style>
	.album-page {
		background: var(--surface, #f7f2e5);
		padding-top: 5rem;
	}

	.album-page__hero {
		max-width: var(--measure, 1280px);
		margin: 0 auto;
		padding: clamp(2.5rem, 7vh, 4rem) 3.5rem clamp(1.5rem, 4vh, 2.25rem);
	}

	.album-page__back {
		display: inline-block;
		font-family: var(--font-mono, monospace);
		font-size: 12px;
		letter-spacing: 0.08em;
		color: var(--on-surface-variant, #3a4a40);
		margin-bottom: 1.5rem;
		transition: color var(--duration-fast, 0.15s) var(--ease-out, ease);
	}

	.album-page__back:hover {
		color: var(--color-accent-deep, #c96f1f);
	}

	.album-page__eyebrow {
		display: block;
		font-family: var(--font-mono, monospace);
		font-size: 11.5px;
		font-weight: 500;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-accent-deep, #c96f1f);
		margin-bottom: 18px;
	}

	.album-page__title {
		font-family: var(--font-display, serif);
		font-weight: 600;
		font-size: clamp(3rem, 6vw, 4.75rem);
		letter-spacing: -0.01em;
		line-height: 1.02;
		margin: 0;
		color: var(--on-surface, #1e2b24);
	}

	.album-page__title em {
		font-style: italic;
		color: var(--secondary, #2f6b50);
	}

	.album-page__lede {
		font-size: 1.1rem;
		font-weight: 500;
		line-height: 1.6;
		color: var(--on-surface-variant, #3a4a40);
		max-width: 34rem;
		margin: 1.4rem 0 0;
	}

	.album-page__body {
		padding: clamp(1.5rem, 4vh, 2.5rem) 3.5rem clamp(3rem, 7vh, 4.5rem);
	}

	@media (max-width: 640px) {
		.album-page__hero,
		.album-page__body {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
	}
</style>
