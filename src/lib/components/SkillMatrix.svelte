<script lang="ts">
	import Section from './ui/Section.svelte';
	import SectionHead from './ui/SectionHead.svelte';
	import TechBadge from './ui/TechBadge.svelte';
	import { skillGroups } from '$lib/cv';
	import { msg } from '$lib/messages';
	import * as m from '$lib/paraglide/messages';
</script>

<!-- Bewusst ohne Card-Fläche: die Werkstatt darunter ist ein Karten-Raster, und
     zwei Raster hintereinander lesen sich als dasselbe Element. Hier trägt die
     Haarlinie unter dem Gruppenlabel die Struktur. -->
<Section class="pt-12 pb-2">
	<div class="reveal">
		<SectionHead label={m.skills_label()} title={m.skills_title()} desc={m.skills_desc()} />
	</div>

	<dl class="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
		{#each skillGroups as group (group.id)}
			<div class="reveal">
				<dt
					class="border-b border-black/10 pb-2.5 font-mono text-[0.72rem] font-medium tracking-[0.2em] text-warm-deep uppercase"
				>
					{msg(group.messageKey, '_label')}
				</dt>
				<dd class="mt-4 flex flex-wrap gap-1.5">
					{#each group.items as item (item)}
						<TechBadge tone={group.tone}>{item}</TechBadge>
					{/each}
				</dd>
			</div>
		{/each}
	</dl>
</Section>
