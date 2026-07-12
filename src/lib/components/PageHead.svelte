<script lang="ts">
	let {
		label,
		title,
		lede,
		pattern = ''
	}: { label: string; title: string; lede: string; pattern?: string } = $props();
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<header class="bg-primary relative overflow-hidden {pattern}">
	<div class="relative z-[1] max-w-measure mx-auto px-10 py-[clamp(3.5rem,9vh,6rem)] pb-[clamp(3rem,7vh,4.5rem)]">
		<span class="font-mono text-[0.8125rem] tracking-[0.08em] uppercase font-medium text-warm-bright">{label}</span>
		<h1 class="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-on-primary mt-2">{@html title}</h1>
		<p class="font-body text-[1.125rem] leading-[1.6] text-white/70 max-w-[40rem] mt-md">{@html lede}</p>
	</div>
</header>

<style>
	/* All handled by Tailwind */
</style>
