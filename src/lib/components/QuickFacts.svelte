<script lang="ts">
	import Card from './ui/Card.svelte';
	import { quickFacts } from '$lib/cv';
	import { msg } from '$lib/messages';
	import * as m from '$lib/paraglide/messages';
</script>

<!-- Der Kasten neben dem /arbeit-Hero. Er informiert; konvertiert wird unten im
     CtaBand — deshalb bewusst ohne Button und ohne Link. -->
<Card pad="md">
	<span
		class="mb-5 block font-mono text-[0.72rem] font-medium tracking-[0.2em] text-warm-deep uppercase"
		>{m.facts_label()}</span
	>

	<dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3">
		{#each quickFacts as fact (fact.messageKey)}
			<dt class="pt-[0.15rem] font-mono text-[0.72rem] tracking-[0.16em] text-warm-deep uppercase">
				{msg(fact.messageKey, '_label')}
			</dt>
			<dd class="font-body text-[0.95rem] leading-[1.45] font-medium text-on-surface">
				{msg(fact.messageKey, '_value')}
			</dd>
		{/each}
	</dl>
</Card>
