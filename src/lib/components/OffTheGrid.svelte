<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<section class="offgrid pattern-notebook-ruled reveal">
	<div class="offgrid__inner">
		<div class="offgrid__content">
			<!-- Left Column: Title & Intro -->
			<div class="offgrid__header">
				<div class="offgrid__stamp-wrapper">
					<div class="offgrid__stamp">OFF THE GRID</div>
				</div>
				<h3 class="display-md offgrid__title">
					{m.offgrid_title ? m.offgrid_title() : 'Current Context'}
				</h3>
				<p class="body-md offgrid__intro">
					{m.offgrid_intro
						? m.offgrid_intro()
						: 'Ein flüchtiger Blick in den analogen Alltag abseits von Bildschirmen und Code-Strukturen — Gesprächsaufhänger für alles, was nicht mit Arbeit zu tun hat.'}
				</p>
			</div>

			<!-- Right Column: Current Activities -->
			<div class="offgrid__items">
				<div class="offgrid__item">
					<span class="offgrid__label"
						>{m.offgrid_reading_label ? m.offgrid_reading_label() : 'Reading'}</span
					>
					<span class="body-lg offgrid__value">
						<em>The Practice</em> — Seth Godin
						<span class="offgrid__meta"
							>{m.offgrid_reading_desc
								? m.offgrid_reading_desc()
								: 'Kreativer Fokus und das Handwerk des Schaffens'}</span
						>
					</span>
				</div>
				<div class="offgrid__item">
					<span class="offgrid__label"
						>{m.offgrid_listening_label ? m.offgrid_listening_label() : 'Listening'}</span
					>
					<span class="body-lg offgrid__value">
						<a
							href="https://album.link/i/268443092"
							target="_blank"
							rel="noopener noreferrer"
							class="offgrid__link"
						>
							<em>Kind of Blue</em> — Miles Davis
						</a>
						<span class="offgrid__meta"
							>{m.offgrid_listening_desc
								? m.offgrid_listening_desc()
								: 'Klassischer modaler Jazz zur Fokussierung'}</span
						>
					</span>
				</div>
				<div class="offgrid__item">
					<span class="offgrid__label"
						>{m.offgrid_coffee_label ? m.offgrid_coffee_label() : 'Coffee'}</span
					>
					<span class="body-lg offgrid__value">
						Ethiopian Yirgacheffe
						<span class="offgrid__meta"
							>{m.offgrid_coffee_desc
								? m.offgrid_coffee_desc()
								: 'Light Roast, zubereitet in der Chemex'}</span
						>
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.offgrid {
		background: var(--surface-container);
		padding: var(--space-2xl) 0;
		border-top: 1px solid var(--outline-variant);
	}

	.offgrid__inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 var(--space-lg);
		position: relative;
		z-index: 1;
	}

	@media (max-width: 1280px) {
		.offgrid__inner {
			padding-left: calc(var(--notebook-margin) + var(--space-sm));
			padding-right: var(--space-md);
		}
	}

	.offgrid__content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-2xl);
		align-items: start;
	}

	.offgrid__stamp-wrapper {
		margin-bottom: var(--space-sm);
	}

	.offgrid__stamp {
		display: inline-block;
		border: 1px solid var(--secondary);
		color: var(--secondary);
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.65rem;
		font-weight: 700;
		padding: 2px 6px;
		letter-spacing: 0.12em;
		transform: rotate(-2deg);
		opacity: 0.8;
		text-transform: uppercase;
		border-radius: 2px;
		user-select: none;
	}

	.offgrid__title {
		color: var(--primary);
		margin-bottom: var(--space-sm);
	}

	.offgrid__intro {
		color: var(--on-surface-variant);
		max-width: 28rem;
	}

	.offgrid__items {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		margin-top: 1.25rem; /* Align baseline with title */
	}

	.offgrid__item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		border-bottom: 1px solid var(--outline-variant);
		padding-bottom: var(--space-sm);
	}

	.offgrid__item:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.offgrid__label {
		font-family: var(--font-body);
		font-weight: 600;
		text-transform: uppercase;
		font-size: 0.75rem;
		color: var(--secondary);
		letter-spacing: 0.08em;
	}

	.offgrid__value {
		color: var(--primary);
		font-weight: 500;
	}

	.offgrid__meta {
		display: block;
		font-size: 0.8125rem;
		color: var(--on-surface-variant);
		font-weight: 400;
		margin-top: 0.15rem;
	}

	.offgrid__link {
		color: inherit;
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color var(--duration-fast) var(--ease-out);
	}

	.offgrid__link:hover {
		color: var(--secondary);
	}

	@media (max-width: 1024px) {
		.offgrid__content {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}

		.offgrid__items {
			margin-top: 0;
		}
	}

	@media (max-width: 640px) {
		.offgrid {
			padding: var(--space-xl) 0 var(--space-md) 0;
		}
	}
</style>
