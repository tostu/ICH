<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';	import CtaBand from '$lib/components/CtaBand.svelte';
	import PageHero from '$lib/components/ui/PageHero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import SectionHead from '$lib/components/ui/SectionHead.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import * as m from '$lib/paraglide/messages';
	import { site } from '$lib/site';
	import PORTRAIT_BACKPACK from '$lib/assets/PORTRAIT_BACKPACK.jpg?enhanced';
	import PORTRAIT_DOUBT from '$lib/assets/PORTRAIT_DOUBT.jpg?enhanced';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});

	let principles = $derived([
		{
			n: '01',
			title: m.ueber_principle_1_title(),
			desc: m.ueber_principle_1_desc(),
			tilt: 'rotate(-0.8deg)'
		},
		{
			n: '02',
			title: m.ueber_principle_2_title(),
			desc: m.ueber_principle_2_desc(),
			tilt: 'rotate(0.7deg) translateY(8px)'
		},
		{
			n: '03',
			title: m.ueber_principle_3_title(),
			desc: m.ueber_principle_3_desc(),
			tilt: 'rotate(-0.5deg)'
		}
	]);

	let context = $derived([
		{ label: m.ueber_context_coffee_label(), value: m.ueber_context_coffee_val() },
		{ label: m.ueber_context_ears_label(), value: m.ueber_context_ears_val() },
		{ label: m.ueber_context_table_label(), value: m.ueber_context_table_val() },
		{ label: m.ueber_context_last_label(), value: m.ueber_context_last_val() },
		{ label: m.ueber_context_base_label(), value: m.ueber_context_base_val() }
	]);
</script>

<svelte:head>
	<title>{m.nav_ueber()} — {site.name}</title>
	<meta name="description" content={m.ueber_hero_lede()} />
</svelte:head>

<NavBar scrolled={true} {loaded} />

<main class="bg-surface">
	<PageHero label={m.ueber_head_label()} title={m.ueber_head_title()} lede={m.ueber_hero_lede()}>
		{#snippet aside()}
			<figure class="portrait">
				<span aria-hidden="true" class="portrait__backing portrait__backing--green"></span>
				<enhanced:img
					class="portrait__img portrait__img--tilt"
					src={PORTRAIT_BACKPACK}
					alt="Torge unterwegs"
					loading="lazy"
				/>
				<span class="portrait__badge font-mono">{m.ueber_hero_badge()}</span>
			</figure>
		{/snippet}
	</PageHero>

	<!-- Grundsätze -->
	<Section class="pt-12 pb-2">
		<SectionHead
			label={m.ueber_principles_label()}
			note={m.ueber_principles_sub()}
			variant="inline"
		/>
		<div class="grid grid-cols-1 gap-[22px] md:grid-cols-3">
			{#each principles as p (p.n)}
				<div style="transform:{p.tilt}">
					<Card pad="md" class="flex h-full flex-col gap-3">
						<span class="font-mono text-[0.7rem] tracking-[0.16em] text-warm-deep">{p.n}</span>
						<div
							class="font-display text-[1.55rem] leading-[1.2] font-semibold tracking-[-0.01em] text-on-surface"
						>
							{p.title}
						</div>
						<p class="m-0 font-body text-[0.875rem] leading-[1.55] font-medium text-muted">
							{p.desc}
						</p>
					</Card>
				</div>
			{/each}
		</div>
	</Section>

	<!-- Current Context -->
	<Section class="pt-16 pb-2">
		<div class="context">
			<div>
				<div
					class="mb-6 font-mono text-[0.72rem] font-medium tracking-[0.2em] text-warm-bright uppercase"
				>
					{m.ueber_context_label()}
				</div>
				<dl class="font-mono">
					{#each context as row (row.label)}
						<div class="context__row">
							<dt class="context__key">{row.label}</dt>
							<dd class="context__val">{row.value}</dd>
						</div>
					{/each}
				</dl>
			</div>
			<figure class="portrait portrait--wide">
				<span aria-hidden="true" class="portrait__backing portrait__backing--amber"></span>
				<enhanced:img
					class="portrait__img"
					src={PORTRAIT_DOUBT}
					alt="Torge, nachdenklich"
					loading="lazy"
				/>
			</figure>
		</div>
	</Section>

	<!-- Baustellen strip -->
	<Section class="pt-10 pb-4">
		<div
			class="flex flex-wrap items-center justify-between gap-6 rounded-card border-[1.5px] border-dashed border-black/25 bg-surface-container-lowest px-8 py-[22px]"
		>
			<span class="font-mono text-[0.7rem] font-medium tracking-[0.16em] text-muted uppercase">
				{m.ueber_backlog_label()}
			</span>
			<span class="font-mono text-[0.72rem] text-on-surface-variant">{m.ueber_backlog_items()}</span
			>
		</div>
	</Section>
</main>

<CtaBand />
<style>
	/* Portrait with offset backing — same tactile treatment as the landing hero. */
	.portrait {
		position: relative;
		margin: 0;
		width: 100%;
		max-width: 380px;
		margin-left: auto;
	}

	.portrait--wide {
		max-width: none;
	}

	.portrait__backing {
		position: absolute;
		border-radius: var(--radius-lg);
		z-index: 0;
	}

	.portrait__backing--green {
		inset: 16px 16px -14px -14px;
		background: var(--color-primary);
	}

	.portrait__backing--amber {
		inset: 14px -12px -12px 14px;
		background: var(--color-secondary);
	}

	.portrait__img {
		position: relative;
		z-index: 1;
		display: block;
		width: 100%;
		height: 440px;
		object-fit: cover;
		border-radius: var(--radius);
		box-shadow: 0 18px 40px rgba(30, 43, 36, 0.22);
	}

	.portrait__img--tilt {
		transform: rotate(2deg);
	}

	.portrait--wide .portrait__img {
		height: 360px;
		box-shadow: 0 12px 30px rgba(30, 43, 36, 0.3);
	}

	.portrait__badge {
		position: absolute;
		bottom: -16px;
		right: -14px;
		z-index: 2;
		background: var(--color-surface);
		border: 1px solid rgba(30, 43, 36, 0.12);
		font-size: 0.68rem;
		color: var(--color-on-surface-variant);
		padding: 8px 12px;
		border-radius: var(--radius-sm);
		transform: rotate(-2.5deg);
		box-shadow: 0 6px 16px rgba(30, 43, 36, 0.12);
		white-space: nowrap;
	}

	/* Current Context — the one dark surface on the page. */
	.context {
		background: var(--color-forest-dark);
		border-radius: var(--radius-card);
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
		color: rgba(247, 242, 229, 0.72);
	}

	.context__val {
		font-family: var(--font-body);
		font-size: 1rem;
		font-weight: 500;
		color: var(--color-surface);
		margin: 0;
	}

	@media (max-width: 900px) {
		.context {
			grid-template-columns: 1fr;
			gap: var(--spacing-lg);
			padding: 36px 28px;
		}

		.portrait {
			max-width: 380px;
			margin-left: 0;
		}

		.context__row {
			grid-template-columns: 120px 1fr;
			gap: 16px;
		}
	}
</style>
