<script lang="ts">
	import Marquee from './Marquee.svelte';
	import Section from './ui/Section.svelte';
	import SectionHead from './ui/SectionHead.svelte';
	import * as m from '$lib/paraglide/messages';
	import 'devicon/devicon.min.css';
</script>

<Section class="pt-16 pb-4">
	<div class="reveal">
		<SectionHead label={m.techstack_label()} align="center" class="mb-8" />
	</div>
	<div class="overflow-hidden">
		<Marquee />
	</div>
</Section>
