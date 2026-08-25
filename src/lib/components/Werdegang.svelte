<script lang="ts">
	import Section from './ui/Section.svelte';
	import SectionHead from './ui/SectionHead.svelte';
	import TechBadge from './ui/TechBadge.svelte';
	import ArrowLink from './ui/ArrowLink.svelte';
	import { cvEntries, cvPeriod, type CvEntry } from '$lib/cv';
	import { msg } from '$lib/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';

	/**
	 * Eine Komponente, zwei Detailstufen — damit Startseite und /arbeit nicht
	 * auseinanderdriften können, wenn sich 2027 etwas ändert.
	 *
	 * `timeline` erklärt den Werdegang, `strip` nennt ihn nur: Zeitraum, Titel,
	 * Firma. Der Streifen ist ein Inhaltsverzeichnis-Eintrag, keine zweite
	 * Fassung des Lebenslaufs.
	 */
	let { variant = 'timeline' }: { variant?: 'timeline' | 'strip' } = $props();

	const period = (entry: CvEntry) => cvPeriod(entry, m.cv_since());

	// Vertikal liest sich neueste-zuerst, waagerecht liest sich links→rechts
	// chronologisch — deshalb dreht der Streifen die Reihenfolge um.
	const stripEntries = $derived([...cvEntries].reverse());
</script>

{#if variant === 'timeline'}
	<Section class="pt-16 pb-2">
		<div class="reveal">
			<SectionHead label={m.cv_label()} title={m.cv_title()} desc={m.cv_desc()} />
		</div>

		<ol>
			{#each cvEntries as entry, i (entry.id)}
				<li
					class="reveal grid grid-cols-[86px_14px_1fr] gap-x-4 pb-10 last:pb-0 md:grid-cols-[130px_14px_1fr]"
				>
					<span class="pt-[0.35rem] font-mono text-[0.78rem] leading-[1.4] text-muted"
						>{period(entry)}</span
					>

					<span
						class="cv-rail"
						class:cv-rail--dashed={entry.upcoming}
						class:cv-rail--last={i === cvEntries.length - 1}
						aria-hidden="true"
					>
						<span
							class="cv-dot"
							class:cv-dot--ausbildung={entry.kind === 'ausbildung'}
							class:cv-dot--upcoming={entry.upcoming}
						></span>
					</span>

					<div>
						<h3
							class="font-display text-[1.35rem] leading-[1.2] font-semibold tracking-[-0.01em] text-on-surface"
						>
							{msg(entry.messageKey, '_title')}
						</h3>
						<p class="mt-1 font-mono text-[0.78rem] text-warm-deep">
							{msg(entry.messageKey, '_org')}
						</p>
						<p class="mt-3 max-w-[42rem] font-body text-[0.95rem] leading-[1.6] text-muted">
							{msg(entry.messageKey, '_desc')}
						</p>

						{#if entry.upcoming || entry.tech.length > 0}
							<div class="mt-4 flex flex-wrap gap-1.5">
								{#if entry.upcoming}
									<TechBadge tone="warm">{m.cv_planned()}</TechBadge>
								{/if}
								{#each entry.tech as t (t)}
									<TechBadge>{t}</TechBadge>
								{/each}
							</div>
						{/if}
					</div>
				</li>
			{/each}
		</ol>
	</Section>
{:else}
	<Section class="pt-16 pb-10">
		<div class="reveal">
			<SectionHead variant="inline" label={m.cv_label()} note={m.cv_strip_note()} />
		</div>

		<ol class="cv-strip reveal grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
			{#each stripEntries as entry (entry.id)}
				<li class="relative md:pt-7">
					<span
						class="cv-strip__dot"
						class:cv-strip__dot--upcoming={entry.upcoming}
						aria-hidden="true"
					></span>
					<span class="font-mono text-[0.72rem] tracking-[0.16em] text-muted">{period(entry)}</span>
					<h3
						class="mt-1.5 font-display text-[1.25rem] leading-[1.2] font-semibold tracking-[-0.01em] text-on-surface"
					>
						{msg(entry.messageKey, '_title')}
					</h3>
					<p class="mt-1 font-mono text-[0.78rem] text-warm-deep">
						{msg(entry.messageKey, '_org')}
					</p>
				</li>
			{/each}
		</ol>

		<div class="reveal mt-9">
			<ArrowLink href={localizeHref('/arbeit')} label={m.cv_strip_cta()} />
		</div>
	</Section>
{/if}

<style>
	/* ── Timeline-Rail ──
	   Eine Haarlinie über die volle Zeilenhöhe, der Punkt sitzt darauf.
	   Beim letzten Eintrag endet die Linie kurz hinter dem Punkt, damit sie
	   nicht ins Leere läuft. */
	.cv-rail {
		position: relative;
		display: block;
		justify-self: center;
		width: 0;
		height: 100%;
		border-left: 1px solid var(--color-outline-variant);
	}

	.cv-rail--dashed {
		border-left-style: dashed;
	}

	.cv-rail--last {
		height: 1.5rem;
	}

	.cv-dot {
		position: absolute;
		top: 0.5rem;
		left: -4.5px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: var(--color-primary);
	}

	.cv-dot--ausbildung {
		background-color: var(--color-secondary);
	}

	/* Geplant = ungefüllter Ring. Nicht ausgrauen — reduzierte Opazität kostet
	   Kontrast, und AA ist Pflicht. */
	.cv-dot--upcoming {
		background-color: var(--color-surface);
		border: 2px solid var(--color-primary);
	}

	/* ── Streifen-Rail (Startseite) ──
	   Nur ab md:. Darunter stapeln die Einträge, und eine waagerechte Zeitachse
	   über gestapelten Karten ergäbe keinen Sinn. */
	@media (min-width: 768px) {
		.cv-strip {
			position: relative;
		}

		.cv-strip::before {
			content: '';
			position: absolute;
			top: 5px;
			right: 0;
			left: 0;
			border-top: 1px solid var(--color-outline-variant);
		}

		.cv-strip__dot {
			position: absolute;
			top: 0;
			left: 0;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: var(--color-primary);
		}

		.cv-strip__dot--upcoming {
			background-color: var(--color-surface);
			border: 2px solid var(--color-primary);
		}
	}
</style>
