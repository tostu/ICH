<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->

<section id="kontakt" class="kontakt">
	<div class="kontakt__bg" aria-hidden="true">
		<enhanced:img src="$lib/assets/PORTRAIT_BACKPACK.jpg" alt="" loading="lazy" />
	</div>
	<!-- No `reveal` here: this section is the whole /kontakt page, which runs no
	     IntersectionObserver, so a reveal class would leave it at opacity 0. -->
	<div class="kontakt__inner px-6 md:px-14">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<span
			class="mb-5 block font-mono text-[0.72rem] font-medium tracking-[0.2em] text-warm-bright uppercase"
			>{m.cta_band_label()}</span
		>
		<h2
			class="kontakt__headline font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.01em]"
		>
			{@html m.kontakt_title ? m.kontakt_title() : 'Ready to<br /><em>build?</em>'}
		</h2>
		<p class="mt-7 max-w-[35rem] font-body text-[1.15rem] leading-[1.6] font-medium text-white/80">
			{m.kontakt_desc
				? m.kontakt_desc()
				: 'Direkter Kontakt. Keine Masken. Kein Formular, das erst durch drei Abteilungen muss. Schreib mir, und wir reden über dein Projekt.'}
		</p>
		<div class="mt-10 flex flex-wrap gap-3.5">
			<a
				href="mailto:hello@torgestubbe.de?subject=Kontaktanfrage"
				class="inline-flex items-center gap-2 rounded-pill bg-secondary px-[26px] py-[14px] text-[0.95rem] font-semibold text-on-secondary transition-transform duration-200 ease-out hover:-translate-y-0.5"
			>
				{m.kontakt_cta_primary ? m.kontakt_cta_primary() : 'E-Mail schreiben'}
				<span class="font-mono">→</span>
			</a>
			<a
				href="mailto:hello@torgestubbe.de?subject=Projektbesprechung"
				class="inline-flex items-center rounded-pill border-[1.5px] border-white/35 px-[26px] py-[14px] text-[0.95rem] font-semibold text-white transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-white/70"
			>
				{m.kontakt_cta_secondary ? m.kontakt_cta_secondary() : 'Projekt besprechen'}
			</a>
		</div>
	</div>
</section>

<style>
	.kontakt {
		background: var(--primary);
		position: relative;
		overflow: hidden;
		min-height: 70vh;
		display: flex;
		align-items: center;
	}

	.kontakt__bg {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 50%;
		opacity: 0.15;
	}

	.kontakt__bg :global(picture) {
		width: 100%;
		height: 100%;
	}

	.kontakt__bg :global(picture img),
	.kontakt__bg :global(> img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
	}

	.kontakt__inner {
		position: relative;
		z-index: 1;
		max-width: var(--spacing-measure);
		margin: 0 auto;
		width: 100%;
		/* Clear the fixed NavBar when this section is the top of a page. */
		padding-top: 7rem;
		padding-bottom: var(--space-xl);
	}

	.kontakt__headline {
		color: var(--on-primary);
	}

	.kontakt__headline :global(em) {
		font-style: italic;
		color: var(--tertiary-fixed);
	}

	@media (max-width: 768px) {
		.kontakt__bg {
			width: 100%;
			opacity: 0.08;
		}
	}
</style>
