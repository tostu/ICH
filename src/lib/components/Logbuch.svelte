<section id="logbuch" class="logbuch section-pad">
	<div class="logbuch__inner">
		<div class="logbuch__header reveal">
			<span class="label-lg text-secondary">Gedanken & Beobachtungen</span>
			<h2 class="display-md">Das <em>Logbuch.</em></h2>
		</div>

		<div class="logbuch__grid">
			{#each [
				{
					tag: 'Architektur',
					date: 'März 2026',
					title: 'Warum ich Spring Boot nicht mehr liebe',
					excerpt:
						'Nach acht Jahren mit dem Framework wird es Zeit für eine ehrliche Bilanz. Was hält — und was nur noch aus Gewohnheit bleibt.'
				},
				{
					tag: 'Beobachtung',
					date: 'Februar 2026',
					title: 'Architektur-Patterns im Hamburger Stadtbild',
					excerpt:
						'Was Speicherstadt-Fassaden und Microservice-Architekturen gemeinsam haben. Eine Betrachtung über Struktur und Redundanz.'
				},
				{
					tag: 'Reflexion',
					date: 'Januar 2026',
					title: 'Systeme hinterfragen: Ein Plädoyer',
					excerpt:
						'Der gefährlichste Satz in der Softwareentwicklung ist „Das haben wir schon immer so gemacht." Ein Aufruf zum strukturierten Zweifeln.'
				}
			] as entry (entry.title)}
				<article class="logbuch__card reveal">
					<div class="logbuch__ribbon">
						<span>{entry.tag}</span>
					</div>
					<time class="label-lg text-on-surface-variant">{entry.date}</time>
					<h3 class="headline-md logbuch__card-title">{entry.title}</h3>
					<p class="body-md text-on-surface-variant">{entry.excerpt}</p>
					<a href="#logbuch" class="logbuch__read-more title-sm">Weiterlesen</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.logbuch {
		background: var(--surface);
	}

	.logbuch__inner {
		max-width: 1280px;
		margin: 0 auto;
	}

	.logbuch__header {
		margin-bottom: var(--space-2xl);
	}

	.logbuch__header em {
		font-style: italic;
		color: var(--secondary);
	}

	.logbuch__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	.logbuch__card {
		background: var(--surface-container);
		border-radius: var(--radius);
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		transition: background var(--duration-normal) var(--ease-out);
	}

	.logbuch__card:hover {
		background: var(--surface-container-high);
	}

	.logbuch__ribbon {
		display: inline-flex;
		align-self: flex-start;
	}

	.logbuch__ribbon span {
		font-family: var(--font-body);
		font-size: 0.6875rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 0.3rem 0.6rem;
		border-radius: var(--radius);
		background: var(--tertiary-container);
		color: var(--tertiary-fixed);
	}

	.logbuch__card-title {
		color: var(--primary);
	}

	.logbuch__read-more {
		color: var(--secondary);
		margin-top: auto;
		padding-top: var(--space-sm);
		position: relative;
		display: inline-block;
		align-self: flex-start;
	}

	.logbuch__read-more::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 100%;
		height: 2px;
		background: var(--tertiary-fixed);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--duration-normal) var(--ease-out);
	}

	.logbuch__read-more:hover::after {
		transform: scaleX(1);
	}

	@media (max-width: 1024px) {
		.logbuch__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
