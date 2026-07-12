<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import Expertise from '$lib/components/Expertise.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Philosophie from '$lib/components/Philosophie.svelte';
	import Dauerbaustellen from '$lib/components/Dauerbaustellen.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.nav_arbeit()} — Torge Stubbe</title>
	<meta name="description" content={m.arbeit_head_lede()} />
</svelte:head>

<div class="pg pg--inner">
	<PageHead
		pattern="pattern-flare"
		label={m.arbeit_head_label()}
		title={m.arbeit_head_title()}
		lede={m.arbeit_head_lede()}
	/>
	<Expertise />
	<TechStack />
	<Philosophie />
	<Dauerbaustellen />
</div>

<CtaBand />
