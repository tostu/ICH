<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import CameraFlash from '$lib/components/CameraFlash.svelte';
	import { getLocale } from '$lib/paraglide/runtime';
	import { playKeyboardClick } from '$lib/audio';
	import { onMount } from 'svelte';

	let { children } = $props();

	let currentLocale = $derived(page.url.href && getLocale());

	onMount(() => {
		const handleGlobalClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const interactive = target.closest('button, a, [role="button"], .btn');
			if (interactive) {
				playKeyboardClick();
			}
		};
		window.addEventListener('click', handleGlobalClick, { capture: true });

		return () => {
			window.removeEventListener('click', handleGlobalClick, { capture: true });
		};
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
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
