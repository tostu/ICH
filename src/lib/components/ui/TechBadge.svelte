<script lang="ts">
	import type { Snippet } from 'svelte';

	/** Mono chip for tech stacks and case-study tags. */
	let { tone = 'neutral', children }: { tone?: 'neutral' | 'warm' | 'green'; children: Snippet } =
		$props();

	const tones = {
		neutral: 'bg-surface-container text-on-surface-variant border-black/10',
		warm: 'bg-secondary/12 text-warm-deep border-secondary/25',
		green: 'bg-primary/10 text-primary border-primary/20'
	};
</script>

<span
	class="inline-flex items-center rounded-sm border px-2 py-[0.2rem] font-mono text-[0.6875rem] {tones[
		tone
	]}"
>
	{@render children()}
</span>
