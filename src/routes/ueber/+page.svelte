<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import Werte from '$lib/components/Werte.svelte';
	import OffTheGrid from '$lib/components/OffTheGrid.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import * as m from '$lib/paraglide/messages';
	import PORTRAIT_DOUBT from '$lib/assets/PORTRAIT_DOUBT.jpg?enhanced';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
	<title>{m.nav_ueber()} — Torge Stubbe</title>
	<meta name="description" content={m.ueber_head_lede()} />
</svelte:head>

<div class="pg pg--inner">
	<PageHead
		pattern="pattern-subtle-grain"
		label={m.ueber_head_label()}
		title={m.ueber_head_title()}
		lede={m.ueber_head_lede()}
	/>

	<section class="bio">
		<div class="measure section-pad bio__grid">
			<div class="bio__imgwrap">
				<figure class="bio__fig">
					<span aria-hidden="true" class="bio__backing"></span>
					<enhanced:img src={PORTRAIT_DOUBT} alt="Torge Stubbe" loading="lazy" />
				</figure>
			</div>
			<div>
				<span class="label-lg" style="color:var(--warm-deep)">{m.ueber_bio_label()}</span>
				<h2 class="display-md bio__title">{@html m.ueber_bio_title()}</h2>
				<p class="body-lg bio__p1">{m.ueber_bio_p1()}</p>
				<p class="body-md bio__p2">{m.ueber_bio_p2()}</p>
			</div>
		</div>
	</section>

	<Werte />
	<OffTheGrid />
</div>

<CtaBand />

<style>
	.bio {
		background: var(--surface);
	}
	.bio__grid {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		gap: var(--space-2xl);
		align-items: center;
	}
	.bio__imgwrap {
		padding: 16px;
		max-width: 380px;
		width: 100%;
	}
	.bio__fig {
		position: relative;
		aspect-ratio: 4 / 5;
		width: 100%;
		margin: 0;
	}
	.bio__backing {
		position: absolute;
		top: -12px;
		left: -12px;
		right: 12px;
		bottom: 12px;
		background: var(--secondary);
		border-radius: var(--radius-lg);
		z-index: 0;
	}
	.bio__fig :global(picture) {
		position: absolute;
		inset: 0;
		z-index: 1;
	}
	.bio__fig :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 18%;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-card);
	}
	.bio__title {
		color: var(--primary);
		margin: 0.5rem 0 var(--space-md);
	}
	.bio__title :global(em) {
		font-style: italic;
		color: var(--secondary-container);
	}
	.bio__p1 {
		color: var(--on-surface-variant);
		max-width: 34rem;
	}
	.bio__p2 {
		color: var(--on-surface-variant);
		max-width: 34rem;
		margin-top: var(--space-md);
	}
	@media (max-width: 1024px) {
		.bio__grid {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}
	}
</style>
