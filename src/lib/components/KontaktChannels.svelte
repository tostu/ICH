<script lang="ts">
	import Card from './ui/Card.svelte';
	import * as m from '$lib/paraglide/messages';
	import { site, socials, mailto } from '$lib/site';

	/**
	 * Der Kanal-Kasten neben dem /kontakt-Hero. Anders als QuickFacts ist er
	 * kein Beiwerk, sondern der Inhalt der Seite: jede Zeile ist ein ganzer
	 * Klickbereich, die Adresse steht in Originalschreibweise (kein `uppercase`
	 * auf einer Mailadresse), und der Hinweis sagt, wofür der Kanal gedacht ist.
	 */
	const socialHints: Record<string, () => string> = {
		linkedin: m.kontakt_channel_linkedin_hint,
		github: m.kontakt_channel_github_hint
	};

	let channels = $derived([
		{
			label: m.kontakt_channel_email_label(),
			value: site.email,
			hint: m.kontakt_channel_email_hint(),
			href: mailto('Kontaktanfrage'),
			external: false
		},
		...socials.map((social) => ({
			label: social.label,
			value: social.handle,
			hint: socialHints[social.id]?.() ?? social.label,
			href: social.href,
			external: true
		}))
	]);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#snippet arrow()}
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
		><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg
	>
{/snippet}

<Card pad="none" class="overflow-hidden">
	<span
		class="block px-6 pt-6 pb-4 font-mono text-[0.72rem] font-medium tracking-[0.2em] text-warm-deep uppercase md:px-7 md:pt-7"
		>{m.kontakt_channels_label()}</span
	>

	<ul class="list-none">
		{#each channels as channel (channel.href)}
			<li class="border-t border-black/10">
				<a
					href={channel.href}
					target={channel.external ? '_blank' : undefined}
					rel={channel.external ? 'noopener noreferrer' : undefined}
					class="group flex items-center gap-4 px-6 py-4 transition-colors duration-200 ease-out hover:bg-surface-container-low focus-visible:bg-surface-container-low md:px-7"
				>
					<span class="min-w-0 flex-1">
						<span class="block font-mono text-[0.7rem] tracking-[0.16em] text-warm-deep uppercase"
							>{channel.label}</span
						>
						<span class="mt-1 block truncate font-mono text-[0.95rem] text-on-surface"
							>{channel.value}</span
						>
						<span class="mt-1 block font-body text-[0.8rem] leading-[1.4] font-medium text-muted"
							>{channel.hint}</span
						>
					</span>
					<span
						class="block h-4 w-4 shrink-0 text-warm-deep transition-transform duration-200 ease-out group-hover:translate-x-1"
						>{@render arrow()}</span
					>
				</a>
			</li>
		{/each}
	</ul>

	<div
		class="flex items-center gap-2.5 border-t border-black/10 bg-surface-container-low px-6 py-4 md:px-7"
	>
		<span class="dot" aria-hidden="true"></span>
		<span class="font-body text-[0.875rem] leading-[1.4] font-medium text-on-surface-variant"
			>{m.fact_standort_value()}</span
		>
	</div>
</Card>

<style>
	/* Einziger Akzent im Kasten: der Verfügbarkeits-Punkt atmet leise. */
	.dot {
		width: 0.5rem;
		height: 0.5rem;
		flex-shrink: 0;
		border-radius: var(--radius-pill);
		background: var(--color-secondary);
		animation: dot-pulse 2.8s var(--ease-out) infinite;
	}

	@keyframes dot-pulse {
		0%,
		100% {
			box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-secondary) 55%, transparent);
		}
		60% {
			box-shadow: 0 0 0 6px color-mix(in srgb, var(--color-secondary) 0%, transparent);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.dot {
			animation: none;
		}
	}
</style>
