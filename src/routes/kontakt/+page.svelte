<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';	import PageHero from '$lib/components/ui/PageHero.svelte';
	import KontaktChannels from '$lib/components/KontaktChannels.svelte';
	import * as m from '$lib/paraglide/messages';
	import { site, mailto } from '$lib/site';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>{m.nav_kontakt()} — {site.name}</title>
	<meta name="description" content={m.kontakt_head_lede()} />
</svelte:head>

<NavBar scrolled={true} {loaded} />

<!-- Kein CtaBand auf dieser Seite: die Seite ist der Call-to-Action. Das Band
     würde Überschrift, Adresse und Button ein zweites Mal zeigen. -->
<main class="flex min-h-[calc(100svh-7rem)] flex-col justify-center bg-surface pb-14 md:pb-20">
	<PageHero
		label={m.kontakt_head_label()}
		title={m.kontakt_head_title()}
		lede={m.kontakt_head_lede()}
	>
		{#snippet actions()}
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<a
				href={mailto('Kontaktanfrage')}
				class="inline-flex items-center gap-2 rounded-pill bg-secondary px-[26px] py-[14px] text-[0.95rem] font-semibold text-on-secondary transition-transform duration-200 ease-out hover:-translate-y-0.5"
			>
				{m.kontakt_cta_primary()}
				<span class="font-mono">→</span>
			</a>
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		{/snippet}

		{#snippet aside()}
			<KontaktChannels />
		{/snippet}
	</PageHero>
</main>
