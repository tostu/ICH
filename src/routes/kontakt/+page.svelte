<script lang="ts">
	import Kontakt from '$lib/components/Kontakt.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.nav_kontakt()} — Torge Stubbe</title>
	<meta name="description" content={m.kontakt_desc()} />
</svelte:head>

<div class="pg pg--inner">
	<Kontakt />
</div>
