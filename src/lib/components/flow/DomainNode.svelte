<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';

	let { data }: NodeProps = $props();
</script>

<div
	class="domain-node min-w-[160px] cursor-grab rounded-card border border-black/10 bg-surface-container-lowest px-4 py-3 shadow-[0_3px_14px_rgba(30,43,36,0.07)] active:cursor-grabbing"
>
	<div class="mb-1 flex items-center gap-2">
		<span class="text-lg leading-none">{data.icon}</span>
		<span class="font-display text-[0.95rem] font-semibold text-on-surface">{data.label}</span>
	</div>
	<p class="font-mono text-[0.65rem] leading-snug text-muted">{data.desc}</p>
	<Handle
		type="source"
		position={Position.Bottom}
		class="!h-2.5 !w-2.5 !border-2 !border-surface-container-lowest !bg-secondary"
	/>
	<Handle
		type="target"
		position={Position.Top}
		class="!h-2.5 !w-2.5 !border-2 !border-surface-container-lowest !bg-secondary"
	/>
</div>
