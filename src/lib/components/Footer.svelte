<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
</script>

<footer class="footer">
	<div class="footer__inner">
		<span class="footer__wordmark">TORGE STUBBE</span>
		<div class="footer__links">
			<a href="https://linkedin.com/in/torgestubbe" target="_blank" rel="noopener noreferrer"
				>LinkedIn</a
			>
			<a href="https://github.com/torgestubbe" target="_blank" rel="noopener noreferrer">GitHub</a>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={localizeHref('/impressum')}
				>{m.impressum_title ? m.impressum_title() : 'Impressum'}</a
			>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={localizeHref('/datenschutz')}
				>{m.datenschutz_title ? m.datenschutz_title() : 'Datenschutz'}</a
			>
		</div>
		<span class="footer__copy body-md">2026 — Hamburg, DE</span>
	</div>
</footer>

<style>
	.footer {
		background: var(--primary);
		padding: var(--space-lg) var(--space-lg);
		border-top: 1px solid color-mix(in srgb, var(--on-primary) 5%, transparent);
	}

	.footer__inner {
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.footer__wordmark {
		font-family: var(--font-display);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		color: var(--on-primary);
	}

	.footer__links {
		display: flex;
		gap: var(--space-md);
	}

	.footer__links a {
		font-size: 0.8125rem;
		font-weight: 500;
		color: color-mix(in srgb, var(--on-primary) 70%, transparent);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		transition: color var(--duration-fast);
	}

	.footer__links a:hover {
		color: var(--tertiary-fixed);
	}

	.footer__copy {
		color: color-mix(in srgb, var(--on-primary) 40%, transparent);
	}

	@media (max-width: 640px) {
		.footer__inner {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
