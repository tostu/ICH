<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * The landing page card surface: cream-lowest fill, hairline border,
	 * soft warm shadow, `--radius-card` corners.
	 * `pad` picks the two sizes in use — `lg` for hero-scale cards, `md` for grids.
	 */
	let {
		pad = 'md',
		interactive = false,
		class: cls = '',
		children
	}: {
		pad?: 'md' | 'lg' | 'none';
		interactive?: boolean;
		class?: string;
		children: Snippet;
	} = $props();

	const pads = {
		none: '',
		md: 'p-6 md:p-8',
		lg: 'p-7 md:px-14 md:py-13'
	};
</script>

<div
	class="rounded-card border border-black/10 bg-surface-container-lowest shadow-[0_3px_14px_rgba(30,43,36,0.07)] {pads[
		pad
	]} {interactive
		? 'transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-outline-variant hover:shadow-[0_14px_36px_rgba(30,43,36,0.12)]'
		: ''} {cls}"
>
	{@render children()}
</div>
