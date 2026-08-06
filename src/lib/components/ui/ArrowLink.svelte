<script lang="ts">
	/** Inline mono CTA used across the landing cards — arrow widens on hover. */
	let { href, label }: { href: string; label: string } = $props();
</script>

{#snippet arrow()}
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
		><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg
	>
{/snippet}

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	class="inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium tracking-[0.16em] text-warm-deep uppercase transition-[gap] duration-200 ease-out hover:gap-3.5"
>
	{label}
	<span class="block h-4 w-4">{@render arrow()}</span>
</a>
