<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';	import CtaBand from '$lib/components/CtaBand.svelte';
	import AlbumCard from '$lib/components/AlbumCard.svelte';
	import PageHero from '$lib/components/ui/PageHero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHead from '$lib/components/ui/SectionHead.svelte';
	import { albums } from '$lib/photos';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { site } from '$lib/site';

	let loaded = $state(false);
	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>{m.nav_fotografie()} — {site.name}</title>
	<meta name="description" content={m.fotografie_head_lede()} />
</svelte:head>

<NavBar scrolled={true} {loaded} />

<main class="bg-surface">
	<PageHero
		label={m.fotografie_head_label()}
		title={m.fotografie_head_title()}
		lede={m.fotografie_head_lede()}
	/>

	<Section class="pt-8 pb-14">
		<SectionHead label={m.fotografie_alben_label()} variant="inline" />
		<div class="grid grid-cols-1 gap-x-6 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
			{#each albums as album, i (album.slug)}
				<AlbumCard
					{album}
					href={localizeHref(`/fotografie/${album.slug}`)}
					index={`#${i + 1}`}
					countLabel={m.fotografie_album_count({ count: album.photos.length })}
				/>
			{/each}
		</div>
	</Section>
</main>

<CtaBand />