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
	class="bg-surface max-w-measure mx-auto px-6 md:px-14 pt-[104px] md:pt-[112px] pb-10 grid grid-cols-1 md:grid-cols-[1fr_340px] gap-10 md:gap-16 items-center"
>
	<div
		class="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
		class:opacity-0={!loaded}
		class:translate-y-6={!loaded}
	>
		<span
			class="font-mono text-[0.72rem] font-medium tracking-[0.2em] uppercase text-warm-deep block mb-5"
			>{m.hero_label ? m.hero_label() : 'Hamburg · Hannover · London'}</span
		>
		<h1
			class="hero__headline font-display font-semibold text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[1] tracking-[-0.01em] text-on-surface"
		>
			{@html m.hero_title ? m.hero_title() : 'Moin, ich bin <em>Torge</em>.'}
		</h1>
		<p
			class="hero__subtitle font-body text-[1.2rem] font-medium leading-[1.6] text-on-surface-variant max-w-[35rem] mt-7"
		>
			{@html m.hero_subtitle
				? m.hero_subtitle()
				: 'Tagsüber baue ich als <em class="c-green">Software-Architekt</em> Systeme, die einfach laufen.'}
		</p>
		<div class="flex gap-3.5 mt-8 flex-wrap">
			<button
				type="button"
				onclick={scrollToNext}
				class="inline-flex items-center gap-2 bg-secondary text-on-secondary font-semibold text-[0.95rem] px-[26px] py-[14px] rounded-pill cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5"
			>
				{m.hero_cta_primary ? m.hero_cta_primary() : 'Schau dich um'}
				<span class="font-mono">↓</span>
			</button>
			<a
				href={localizeHref('/kontakt')}
				class="hero__cta-secondary inline-flex items-center border-[1.5px] font-semibold text-[0.95rem] px-[26px] py-[14px] rounded-pill transition-transform duration-200 ease-out hover:-translate-y-0.5"
				>{m.hero_cta_secondary ? m.hero_cta_secondary() : 'Direkt zu Kontakt'}</a
			>
		</div>
	</div>

	<div
		class="hero__portrait mx-auto md:mx-0 md:ml-auto transition-all duration-700 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
	}

	.hero__caption {
		position: absolute;
		bottom: -14px;
		left: -12px;
		background: var(--surface);
		border: 1px solid rgba(30, 43, 36, 0.12);
		font-size: 0.7rem;
		color: var(--on-surface-variant);
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
