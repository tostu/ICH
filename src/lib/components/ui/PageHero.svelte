<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Subpage hero — same rails, eyebrow and display type as the landing Hero,
	 * one notch smaller so the home page keeps the loudest headline.
	 * `title` and `lede` accept the `<em>`/`<br />` markup the message catalog ships.
	 */
	let {
		label,
		title,
		lede,
		backHref,
		backLabel,
		aside
	}: {
		label: string;
		title: string;
		lede?: string;
		backHref?: string;
		backLabel?: string;
		aside?: Snippet;
	} = $props();
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<header
	class="mx-auto max-w-measure bg-surface px-6 pt-[104px] pb-6 md:px-14 md:pt-[112px] md:pb-10"
>
	<div
		class="grid grid-cols-1 items-center gap-10 md:gap-16 {aside ? 'md:grid-cols-[1fr_380px]' : ''}"
	>
		<div>
			{#if backHref}
				<a
					href={backHref}
					class="mb-6 inline-block font-mono text-[0.75rem] tracking-[0.08em] text-on-surface-variant transition-colors duration-200 hover:text-warm-deep"
					>← {backLabel}</a
				>
			{/if}
			<span
				class="mb-5 block font-mono text-[0.72rem] font-medium tracking-[0.2em] text-warm-deep uppercase"
				>{label}</span
			>
			<h1
				class="page-hero__title font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.01em] text-on-surface"
			>
				{@html title}
			</h1>
			{#if lede}
				<p
					class="page-hero__lede mt-7 max-w-[35rem] font-body text-[1.15rem] leading-[1.6] font-medium text-on-surface-variant"
				>
					{@html lede}
				</p>
			{/if}
		</div>

		{#if aside}
			<div class="md:ml-auto">{@render aside()}</div>
		{/if}
	</div>
</header>

<style>
	.page-hero__title :global(em) {
		font-style: italic;
		color: var(--color-primary);
	}

	.page-hero__lede :global(em) {
		font-style: normal;
		font-weight: 700;
		color: var(--color-primary);
	}
</style>
