<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Kontakt from '$lib/components/Kontakt.svelte';
	import * as m from '$lib/paraglide/messages';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>{m.nav_kontakt()} — Torge Stubbe</title>
	<meta name="description" content={m.kontakt_desc()} />
</svelte:head>

<NavBar scrolled={true} {loaded} />

<div class="pg pg--inner">
	<Kontakt />
</div>

<Footer />
