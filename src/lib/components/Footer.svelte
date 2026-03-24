<footer class="footer">
	<div class="footer__inner">
		<span class="footer__wordmark">TORGE STUBBE</span>
		<div class="footer__links">
			<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
		</div>
		<span class="footer__copy body-md text-on-surface-variant">2026 — Hamburg, DE</span>
	</div>
</footer>

<style>
	.footer {
		background: var(--surface-container);
		padding: var(--space-lg) var(--space-lg);
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
		color: var(--primary);
	}

	.footer__links {
		display: flex;
		gap: var(--space-md);
	}

	.footer__links a {
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--on-surface-variant);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		transition: color var(--duration-fast);
	}

	.footer__links a:hover {
		color: var(--primary);
	}

	@media (max-width: 640px) {
		.footer__inner {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
