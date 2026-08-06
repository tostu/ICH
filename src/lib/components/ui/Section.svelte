<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Page section shell — the landing page's measure + gutter recipe
	 * (`max-w-measure` + `px-6 md:px-14`) in one place so every page lines up
	 * on the same vertical rails as NavBar and Footer.
	 */
	let {
		id,
		class: cls = '',
		children
	}: { id?: string; class?: string; children: Snippet } = $props();
</script>

<section {id} class="mx-auto max-w-measure bg-surface px-6 md:px-14 {cls}">
	{@render children()}
</section>
