<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import Galerie from '$lib/components/Galerie.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.nav_fotografie()} — Torge Stubbe</title>
	<meta name="description" content={m.fotografie_head_lede()} />
</svelte:head>

<div class="pg pg--inner">
	<PageHead
		label={m.fotografie_head_label()}
		title={m.fotografie_head_title()}
		lede={m.fotografie_head_lede()}
	/>
	<Galerie />
</div>

<CtaBand />
