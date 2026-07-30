<script lang="ts">
  import { Handle, Position, type NodeProps } from '@xyflow/svelte';

  let { data }: NodeProps = $props();
</script>

<div class="domain-node min-w-[160px] px-4 py-3 rounded-[--radius] border border-[--surface-container-high] bg-[--surface-container-lowest] shadow-sm cursor-grab active:cursor-grabbing">
  <div class="flex items-center gap-2 mb-1">
    <span class="text-lg leading-none">{data.icon}</span>
    <span class="font-[--font-editorial] font-semibold text-[0.95rem] text-[--on-surface]">{data.label}</span>
  </div>
  <p class="font-[--font-mono] text-[0.65rem] text-[--muted] leading-snug">{data.desc}</p>
  <Handle type="source" position={Position.Bottom} class="!w-2.5 !h-2.5 !bg-[--secondary] !border-2 !border-[--surface-container-lowest]" />
  <Handle type="target" position={Position.Top} class="!w-2.5 !h-2.5 !bg-[--secondary] !border-2 !border-[--surface-container-lowest]" />
</div>
