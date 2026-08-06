<script lang="ts">
	/**
	 * Section heading block. Two shapes, both taken from the landing page:
	 * - `stacked` (Stack.svelte): eyebrow → display heading → lede
	 * - `inline`  (ProofBand.svelte): eyebrow and note on one baseline
	 */
	let {
		label,
		title,
		desc,
		note,
		variant = 'stacked',
		align = 'start',
		class: cls = ''
	}: {
		label: string;
		title?: string;
		desc?: string;
		note?: string;
		variant?: 'stacked' | 'inline';
		align?: 'start' | 'center';
		class?: string;
	} = $props();
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
{#if variant === 'inline'}
	<div class="mb-[1.9rem] flex flex-wrap items-baseline gap-[1.1rem] {cls}">
		<span class="font-mono text-[0.7rem] font-medium tracking-[0.2em] text-warm-deep uppercase"
			>{label}</span
		>
		{#if note}
			<span class="text-[0.95rem] font-medium text-muted">{note}</span>
		{/if}
	</div>
{:else}
	<div class="mb-9 max-w-[42rem] {align === 'center' ? 'mx-auto text-center' : ''} {cls}">
		<span
			class="mb-3.5 block font-mono text-[0.72rem] font-medium tracking-[0.2em] text-warm-deep uppercase"
			>{label}</span
		>
		{#if title}
			<h2
				class="section-head__title font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.01em] text-on-surface"
			>
				{@html title}
			</h2>
		{/if}
		{#if desc}
			<p
				class="mt-4 max-w-[32.5rem] font-body text-[1.03rem] leading-[1.6] font-medium text-muted"
				class:mx-auto={align === 'center'}
			>
				{desc}
			</p>
		{/if}
	</div>
{/if}

<style>
	.section-head__title :global(em) {
		font-style: italic;
		color: var(--color-primary);
	}
</style>
