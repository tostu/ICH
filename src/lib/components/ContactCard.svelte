<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { site, mailto } from '$lib/site';

	/**
	 * Der dunkle Kontakt-CTA: Abschluss des Landing-Stapels (`Stack`) und Banner
	 * am Ende der Unterseiten (`CtaBand`). `heading` passt die Überschriftenebene
	 * an: im Stapel steht die Karte unter dem Sektions-h2, sonst als eigene Sektion.
	 * Bewusst ohne <Card> — dessen heller Fill würde mit der dunklen Fläche kollidieren.
	 */
	let { heading = 'h2' }: { heading?: 'h2' | 'h3' } = $props();

	let copied = $state(false);
	let copyTimer: ReturnType<typeof setTimeout> | undefined;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(site.email);
		} catch {
			// Clipboard blockiert — die Adresse bleibt sichtbar und per Klick markierbar.
			return;
		}
		copied = true;
		clearTimeout(copyTimer);
		copyTimer = setTimeout(() => (copied = false), 2000);
	}
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<div
	class="flex w-full flex-col items-center overflow-hidden rounded-card border border-black/10 bg-forest-dark px-6 py-10 text-center shadow-[0_10px_30px_rgba(30,43,36,0.22)] md:px-14 md:py-11"
>
	<span
		class="mb-5 inline-block rounded-pill border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[0.68rem] font-medium tracking-[0.2em] text-on-primary/80 uppercase"
		>{m.cta_band_label()}</span
	>
	<svelte:element
		this={heading}
		class="cta-title font-display text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.01em] text-on-primary"
	>
		{@html m.cta_band_title()}
	</svelte:element>
	<p
		class="mt-4 max-w-[36rem] font-body text-[clamp(0.98rem,1.4vw,1.1rem)] leading-[1.6] font-medium text-on-primary/70"
	>
		{m.cta_band_desc()}
	</p>
	<div class="mt-7 flex flex-wrap items-center justify-center gap-3">
		<div
			class="inline-flex items-center gap-3 rounded-pill border border-white/15 bg-white/5 py-2 pr-2 pl-5"
		>
			<span class="font-mono text-[0.9rem] text-on-primary select-all">{site.email}</span>
			<button
				type="button"
				onclick={copyEmail}
				class="cursor-pointer rounded-pill bg-white/10 px-3 py-1.5 font-mono text-[0.72rem] text-on-primary/85 transition-colors duration-200 hover:bg-white/20"
			>
				<span aria-live="polite">{copied ? m.cta_copied() : m.cta_copy()}</span>
			</button>
		</div>
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<a
			href={mailto('Kontaktanfrage')}
			class="inline-flex items-center gap-2 rounded-pill bg-secondary px-6 py-[13px] text-[0.95rem] font-semibold text-on-secondary shadow-[0_8px_22px_rgba(232,146,52,0.3)] transition-transform duration-200 ease-out hover:-translate-y-0.5"
		>
			{m.kontakt_cta_primary()}
			<span class="font-mono">→</span>
		</a>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	</div>
</div>

<style>
	.cta-title :global(em) {
		font-style: italic;
		color: var(--color-warm-bright);
	}
</style>
