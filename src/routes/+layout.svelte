<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import CameraFlash from '$lib/components/CameraFlash.svelte';
	import { getLocale } from '$lib/paraglide/runtime';

	let { children } = $props();

	let currentLocale = $derived(page.url.href && getLocale());
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,700;0,800;1,700;1,800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700;1,800&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Public+Sans:wght@400;500;600&display=swap"
	/>
	<link rel="icon" href={favicon} />
</svelte:head>

{#key currentLocale}
	{@render children()}
{/key}

<CameraFlash />

<div style="display:none">
	{#each locales as locale (locale)}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
