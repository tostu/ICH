<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import AlbumGrid from '$lib/components/AlbumGrid.svelte';
	import PageHero from '$lib/components/ui/PageHero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { site } from '$lib/site';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const album = $derived(data.album);

	let loaded = $state(false);
	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>{album.label} · {m.nav_fotografie()} — {site.name}</title>
	<meta name="description" content={m.fotografie_head_lede()} />
</svelte:head>

<NavBar scrolled={true} {loaded} />

<main class="bg-surface">
	<PageHero
		label="{m.nav_fotografie()} · {album.label}"
		title="{album.label}<em>.</em>"
		lede={m.fotografie_head_lede()}
		backHref={localizeHref('/fotografie')}
		backLabel={m.fotografie_back()}
	/>

	<Section class="pt-4 pb-14">
		<AlbumGrid {album} />
	</Section>
</main>

<CtaBand />
