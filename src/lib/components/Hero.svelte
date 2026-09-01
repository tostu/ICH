<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';

	let { loaded }: { loaded: boolean } = $props();

	function scrollToNext() {
		document.getElementById('entdecken')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<section
	id="hero"
	class="mx-auto grid max-w-measure grid-cols-1 items-center gap-10 bg-surface px-6 pt-[104px] pb-10 md:grid-cols-[1fr_340px] md:gap-16 md:px-14 md:pt-[112px]"
>
	<div
		class="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
		class:opacity-0={!loaded}
		class:translate-y-6={!loaded}
	>
		<span
			class="mb-5 block font-mono text-[0.72rem] font-medium tracking-[0.2em] text-warm-deep uppercase"
			>{m.hero_label ? m.hero_label() : 'Hamburg · Hannover · London'}</span
		>
		<h1
			class="hero__headline font-display text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[1] font-semibold tracking-[-0.01em] text-on-surface"
		>
			{@html m.hero_title ? m.hero_title() : 'Moin, ich bin <em>Torge</em>.'}
		</h1>
		<p
			class="hero__subtitle mt-7 max-w-[35rem] font-body text-[1.2rem] leading-[1.6] font-medium text-on-surface-variant"
		>
			{@html m.hero_subtitle
				? m.hero_subtitle()
				: 'Tagsüber baue ich als <em class="c-green">Softwareentwickler</em> Systeme, die einfach laufen.'}
		</p>
		<div class="mt-8 flex flex-wrap gap-3.5">
			<button
				type="button"
				onclick={scrollToNext}
				class="inline-flex cursor-pointer items-center gap-2 rounded-pill bg-secondary px-[26px] py-[14px] text-[0.95rem] font-semibold text-on-secondary transition-transform duration-200 ease-out hover:-translate-y-0.5"
			>
				{m.hero_cta_primary ? m.hero_cta_primary() : 'Schau dich um'}
				<span class="font-mono">↓</span>
			</button>
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<a
				href={localizeHref('/kontakt')}
				class="hero__cta-secondary inline-flex items-center rounded-pill border-[1.5px] px-[26px] py-[14px] text-[0.95rem] font-semibold transition-transform duration-200 ease-out hover:-translate-y-0.5"
				>{m.hero_cta_secondary ? m.hero_cta_secondary() : 'Direkt zu Kontakt'}</a
			>
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		</div>
	</div>

	<div
		class="hero__portrait mx-auto transition-all delay-150 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:mx-0 md:ml-auto"
		class:opacity-0={!loaded}
		class:translate-y-6={!loaded}
	>
		<enhanced:img
			src="$lib/assets/PORTRAIT_WITH_CAMERA.jpg"
			alt="Torge Stubbe mit Kamera in der Hamburger Speicherstadt"
			loading="eager"
		/>
		<span class="hero__caption font-mono"
			>{m.hero_portrait_caption ? m.hero_portrait_caption() : 'fujifilm, immer dabei'}</span
		>
	</div>
</section>

<style>
	.hero__headline :global(em) {
		font-style: italic;
		color: var(--color-primary);
	}

	.hero__subtitle :global(em) {
		font-style: normal;
		font-weight: 700;
	}

	.hero__subtitle :global(em.c-green) {
		color: var(--color-primary);
	}

	.hero__subtitle :global(em.c-amber) {
		color: var(--color-warm-deep);
	}

	.hero__cta-secondary {
		color: var(--color-accent-deep);
		border-color: var(--color-accent-deep);
		background: transparent;
	}

	.hero__portrait {
		position: relative;
		width: 340px;
		max-width: 100%;
	}

	.hero__portrait :global(picture),
	.hero__portrait :global(img) {
		display: block;
		width: 340px;
		max-width: 100%;
		height: 400px;
		object-fit: cover;
		object-position: center 20%;
		border-radius: 14px;
		transform: rotate(2.5deg);
		box-shadow: 0 18px 40px rgba(30, 43, 36, 0.22);
		background-color: var(--color-accent);
	}

	.hero__caption {
		position: absolute;
		bottom: -14px;
		left: -12px;
		background: var(--color-warm);
		border: 1px solid rgba(30, 43, 36, 0.12);
		font-size: 0.7rem;
		color: var(--color-on-surface);
		padding: 8px 12px;
		border-radius: 8px;
		transform: rotate(-2deg);
		box-shadow: 0 6px 16px rgba(30, 43, 36, 0.12);
	}

	@media (max-width: 640px) {
		.hero__portrait {
			width: 260px;
		}

		.hero__portrait :global(picture),
		.hero__portrait :global(img) {
			width: 260px;
			height: 320px;
		}
	}
</style>
