<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import * as m from '$lib/paraglide/messages';
	import PORTRAIT_BACKPACK from '$lib/assets/PORTRAIT_BACKPACK.jpg?enhanced';
	import PORTRAIT_DOUBT from '$lib/assets/PORTRAIT_DOUBT.jpg?enhanced';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});

	let principles = $derived([
		{ n: '01', title: m.ueber_principle_1_title(), desc: m.ueber_principle_1_desc(), tilt: 'rotate(-0.8deg)' },
		{ n: '02', title: m.ueber_principle_2_title(), desc: m.ueber_principle_2_desc(), tilt: 'rotate(0.7deg) translateY(8px)' },
		{ n: '03', title: m.ueber_principle_3_title(), desc: m.ueber_principle_3_desc(), tilt: 'rotate(-0.5deg)' }
	]);

	let context = $derived([
		{ label: m.ueber_context_coffee_label(), value: m.ueber_context_coffee_val() },
		{ label: m.ueber_context_ears_label(), value: m.ueber_context_ears_val() },
		{ label: m.ueber_context_table_label(), value: m.ueber_context_table_val() },
		{ label: m.ueber_context_last_label(), value: m.ueber_context_last_val() },
		{ label: m.ueber_context_base_label(), value: m.ueber_context_base_val() }
	]);
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
	<title>{m.nav_ueber()} — Torge Stubbe</title>
	<meta name="description" content={m.ueber_hero_lede()} />
</svelte:head>

<NavBar scrolled={true} {loaded} />

<div class="bg-surface">
	<!-- Hero -->
	<section class="wrap py-14 md:py-16">
		<div class="hero">
			<div>
				<div class="font-mono text-[0.72rem] font-medium tracking-[0.2em] uppercase text-warm-deep mb-5">
					#4 — {m.ueber_head_label()}
				</div>
				<h1 class="hero__title">{@html m.ueber_head_title()}</h1>
				<p class="font-body text-[1.15rem] font-medium leading-[1.6] text-on-surface-variant max-w-[540px] mt-6">
					{m.ueber_hero_lede()}
				</p>
			</div>
			<figure class="portrait">
				<span aria-hidden="true" class="portrait__backing portrait__backing--green"></span>
				<enhanced:img
					class="portrait__img portrait__img--tilt"
					src={PORTRAIT_BACKPACK}
					alt="Torge unterwegs"
					loading="lazy"
				/>
				<span class="portrait__badge">{m.ueber_hero_badge()}</span>
			</figure>
		</div>
	</section>

	<!-- Grundsätze -->
	<section class="wrap pt-14 pb-2">
		<div class="flex items-baseline gap-[18px] flex-wrap mb-8">
			<span class="font-mono text-[0.7rem] font-medium tracking-[0.2em] uppercase text-warm-deep">
				{m.ueber_principles_label()}
			</span>
			<span class="font-body text-[0.95rem] font-medium text-muted">{m.ueber_principles_sub()}</span>
		</div>
		<div class="principles">
			{#each principles as p (p.n)}
				<div class="card" style="transform:{p.tilt}">
					<span class="font-mono text-[0.7rem] tracking-[0.16em] text-warm-deep">{p.n}</span>
					<div class="card__title">{p.title}</div>
					<p class="m-0 font-body text-[0.875rem] font-medium leading-[1.55] text-muted">{p.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Current Context -->
	<section class="wrap pt-16">
		<div class="context">
			<div>
				<div class="font-mono text-[0.7rem] font-medium tracking-[0.2em] uppercase text-warm-bright mb-6">
					{m.ueber_context_label()}
				</div>
				<div class="font-mono">
					{#each context as row (row.label)}
						<div class="context__row">
							<span class="context__key">{row.label}</span>
							<span class="context__val">{row.value}</span>
						</div>
					{/each}
				</div>
			</div>
			<figure class="portrait portrait--wide">
				<span aria-hidden="true" class="portrait__backing portrait__backing--amber"></span>
				<enhanced:img class="portrait__img" src={PORTRAIT_DOUBT} alt="Torge, nachdenklich" loading="lazy" />
			</figure>
		</div>
	</section>

	<!-- Baustellen strip -->
	<section class="wrap pt-10">
		<div class="backlog">
			<span class="font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase text-muted">
				{m.ueber_backlog_label()}
			</span>
			<span class="font-mono text-[0.72rem] text-on-surface-variant">{m.ueber_backlog_items()}</span>
		</div>
	</section>
</div>

<CtaBand />
<Footer />

<style>
	.wrap {
		max-width: 1280px;
		margin: 0 auto;
		padding-left: var(--space-md);
		padding-right: var(--space-md);
	}
	@media (min-width: 768px) {
		.wrap {
			padding-left: 3.5rem;
			padding-right: 3.5rem;
		}
	}

	/* Hero */
	.hero {
		display: grid;
		grid-template-columns: 1fr 380px;
		gap: 72px;
		align-items: center;
	}
	.hero__title {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(3rem, 6vw, 4.75rem);
		letter-spacing: -0.01em;
		line-height: 1.02;
		margin: 0;
		color: var(--color-forest-dark);
	}
	.hero__title :global(em) {
		font-style: italic;
		color: var(--primary);
	}

	/* Portrait with offset backing */
	.portrait {
		position: relative;
		margin: 0;
		width: 100%;
		max-width: 380px;
		justify-self: end;
	}
	.portrait--wide {
		max-width: none;
	}
	.portrait__backing {
		position: absolute;
		border-radius: 18px;
		z-index: 0;
	}
	.portrait__backing--green {
		inset: 16px 16px -14px -14px;
		background: var(--primary);
	}
	.portrait__backing--amber {
		inset: 14px -12px -12px 14px;
		background: var(--secondary);
	}
	.portrait__img {
		position: relative;
		z-index: 1;
		display: block;
		width: 100%;
		height: 440px;
		object-fit: cover;
		border-radius: 16px;
		box-shadow: 0 18px 40px rgba(30, 43, 36, 0.22);
	}
	.portrait__img--tilt {
		transform: rotate(2deg);
	}
	.portrait--wide .portrait__img {
		height: 360px;
		border-radius: 14px;
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
	}
	.portrait__badge {
		position: absolute;
		bottom: -16px;
		right: -14px;
		z-index: 2;
		background: var(--surface);
		border: 1px solid rgba(30, 43, 36, 0.12);
		font-family: var(--font-mono);
		font-size: 0.68rem;
		color: var(--on-surface-variant);
		padding: 8px 12px;
		border-radius: 8px;
		transform: rotate(-2.5deg);
		box-shadow: 0 6px 16px rgba(30, 43, 36, 0.12);
		white-space: nowrap;
	}

	/* Principles */
	.principles {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 22px;
	}
	.card {
		background: var(--surface-container-lowest);
		border: 1px solid rgba(30, 43, 36, 0.12);
		border-radius: 18px;
		padding: 28px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.card__title {
		font-family: var(--font-display);
		font-size: 1.55rem;
		font-weight: 600;
		line-height: 1.2;
		color: var(--color-forest-dark);
	}

	/* Current Context dark card */
	.context {
		background: var(--color-forest-dark);
		border-radius: 22px;
		padding: 52px 56px;
		display: grid;
		grid-template-columns: 1fr 320px;
		gap: 64px;
		align-items: center;
	}
	.context__row {
		display: grid;
		grid-template-columns: 150px 1fr;
		gap: 24px;
		align-items: baseline;
		padding: 14px 0;
		border-bottom: 1px solid rgba(247, 242, 229, 0.14);
	}
	.context__row:last-child {
		border-bottom: none;
	}
	.context__key {
		font-size: 0.7rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: rgba(247, 242, 229, 0.55);
	}
	.context__val {
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 500;
		color: var(--surface);
	}

	/* Baustellen strip */
	.backlog {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-md);
		flex-wrap: wrap;
		background: var(--surface-container-lowest);
		border: 1.5px dashed rgba(30, 43, 36, 0.3);
		border-radius: 16px;
		padding: 22px 32px;
	}

	@media (max-width: 900px) {
		.hero,
		.principles,
		.context {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}
		.portrait {
			max-width: 380px;
			justify-self: start;
		}
		.context {
			padding: 36px 28px;
		}
		.context__row {
			grid-template-columns: 120px 1fr;
			gap: 16px;
		}
	}
</style>
