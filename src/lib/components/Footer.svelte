<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { site, socials } from '$lib/site';
</script>

<footer class="footer">
	<div class="footer__inner">
		<span class="footer__wordmark">{site.wordmark}</span>
		<div class="footer__links">
			{#each socials as social (social.id)}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={social.href} target="_blank" rel="noopener noreferrer">{social.label}</a>
			{/each}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={localizeHref('/impressum')}
				>{m.impressum_title ? m.impressum_title() : 'Impressum'}</a
			>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={localizeHref('/datenschutz')}
				>{m.datenschutz_title ? m.datenschutz_title() : 'Datenschutz'}</a
			>
		</div>
		<span class="footer__copy">{new Date().getFullYear()} — {site.location.city}, DE</span>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-primary);
		padding: var(--spacing-lg) var(--spacing-lg);
		border-top: 1px solid color-mix(in srgb, var(--color-on-primary) 5%, transparent);
	}

	.footer__inner {
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
	}

	.footer__wordmark {
		font-family: var(--font-display);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		color: var(--color-on-primary);
	}

	.footer__links {
		display: flex;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.footer__links a {
		font-size: 0.8125rem;
		font-weight: 500;
		color: color-mix(in srgb, var(--color-on-primary) 70%, transparent);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		transition: color var(--duration-fast);
	}

	.footer__links a:hover {
		color: var(--color-tertiary-fixed);
	}

	.footer__copy {
		font-family: var(--font-body);
		font-size: 1rem;
		line-height: 1.55;
		color: color-mix(in srgb, var(--color-on-primary) 40%, transparent);
	}

	@media (max-width: 640px) {
		.footer {
			padding: var(--spacing-md) var(--spacing-sm);
		}

		.footer__inner {
			flex-direction: column;
			text-align: center;
		}

		.footer__links {
			justify-content: center;
			gap: var(--spacing-sm);
		}
	}
</style>
