<script lang="ts">
	import Marquee from './Marquee.svelte';
	import 'devicon/devicon.min.css';
</script>

<section class="techstack">
	<div class="techstack__header reveal">
		<span class="label-lg text-tertiary-fixed opacity-70">Im Werkzeugkasten</span>
	</div>
	<div class="techstack__marquee">
		<Marquee />
	</div>
</section>

<style>
	.techstack {
		background: var(--primary);
		padding: var(--space-xl) 0;
	}

	.techstack__marquee {
		max-width: 1280px;
		margin-left: auto;
		margin-right: auto;
		overflow: hidden;
	}

	.techstack__header {
		text-align: center;
		margin-bottom: var(--space-lg);
		max-width: 1280px;
		margin-left: auto;
		margin-right: auto;
	}
</style>