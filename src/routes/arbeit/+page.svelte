<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
	import ArbeitShowcase from '$lib/components/ArbeitShowcase.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Dauerbaustellen from '$lib/components/Dauerbaustellen.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import * as m from '$lib/paraglide/messages';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
		);

		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>{m.nav_arbeit()} — Torge Stubbe</title>
	<meta name="description" content={m.arbeit_head_lede()} />
</svelte:head>

<NavBar scrolled={true} {loaded} />

<div class="pg pg--inner">
	<PageHead
		pattern="pattern-flare"
		label={m.arbeit_head_label()}
		title={m.arbeit_head_title()}
		lede={m.arbeit_head_lede()}
	/>
	<ArbeitShowcase />
	<TechStack />
	<Dauerbaustellen />
</div>

<CtaBand />
<Footer />
