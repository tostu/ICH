<script lang="ts">
	let {
		scrolled,
		loaded,
		onScrollTo
	}: { scrolled: boolean; loaded: boolean; onScrollTo: (id: string) => void } = $props();

	let mobileMenuOpen = $state(false);

	function handleNavLink(e: MouseEvent, id: string) {
		e.preventDefault();
		mobileMenuOpen = false;
		onScrollTo(id);
	}
</script>

<nav class="nav" class:nav--scrolled={scrolled} class:nav--loaded={loaded}>
	<div class="nav__inner">
		<a
			href="#hero"
			class="nav__wordmark"
			onclick={(e) => {
				e.preventDefault();
				onScrollTo('hero');
			}}
		>
			TORGE STUBBE
		</a>

		<button
			class="nav__burger"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Menu"
			aria-expanded={mobileMenuOpen}
		>
			<span class="nav__burger-line" class:open={mobileMenuOpen}></span>
			<span class="nav__burger-line" class:open={mobileMenuOpen}></span>
		</button>

		<ul class="nav__links" class:nav__links--open={mobileMenuOpen}>
			{#each [['expertise', 'Expertise'], ['philosophie', 'Philosophie'], ['galerie', 'Galerie'], ['logbuch', 'Logbuch'], ['kontakt', 'Kontakt']] as [id, label] (id)}
				<li>
					<a href="#{id}" onclick={(e) => handleNavLink(e, id)}>{label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		opacity: 0;
		transform: translateY(-8px);
		transition:
			opacity var(--duration-slow) var(--ease-out-expo) 0.2s,
			transform var(--duration-slow) var(--ease-out-expo) 0.2s,
			background var(--duration-normal) var(--ease-out),
			backdrop-filter var(--duration-normal) var(--ease-out);
	}

	.nav--loaded {
		opacity: 1;
		transform: translateY(0);
	}

	.nav--scrolled {
		background: rgba(252, 249, 240, 0.82);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}

	.nav__inner {
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 2.5rem;
	}

	.nav__wordmark {
		font-family: var(--font-display);
		font-size: 0.875rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		color: var(--on-primary);
		transition: color var(--duration-normal) var(--ease-out);
	}

	.nav--scrolled .nav__wordmark {
		color: var(--primary);
	}

	.nav__links {
		list-style: none;
		display: flex;
		gap: 2.5rem;
	}

	.nav__links a {
		font-family: var(--font-body);
		font-size: 0.8125rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.7);
		transition: color var(--duration-fast) var(--ease-out);
	}

	.nav--scrolled .nav__links a {
		color: var(--on-surface-variant);
	}

	.nav__links a:hover {
		color: var(--on-primary);
	}

	.nav--scrolled .nav__links a:hover {
		color: var(--primary);
	}

	.nav__burger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		padding: 4px;
	}

	.nav__burger-line {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--on-primary);
		transition:
			transform var(--duration-normal) var(--ease-out),
			opacity var(--duration-fast);
	}

	.nav--scrolled .nav__burger-line {
		background: var(--primary);
	}

	.nav__burger-line.open:first-child {
		transform: translateY(3.5px) rotate(45deg);
	}

	.nav__burger-line.open:last-child {
		transform: translateY(-3.5px) rotate(-45deg);
	}

	@media (max-width: 768px) {
		.nav__inner {
			padding: 1rem 1.25rem;
		}

		.nav__burger {
			display: flex;
		}

		.nav__links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			gap: 0;
			background: var(--primary);
			padding: 0;
			max-height: 0;
			overflow: hidden;
			transition: max-height var(--duration-normal) var(--ease-out);
		}

		.nav__links--open {
			max-height: 320px;
		}

		.nav--scrolled .nav__links {
			background: rgba(252, 249, 240, 0.96);
		}

		.nav__links li {
			padding: 0;
		}

		.nav__links a {
			display: block;
			padding: 1rem 1.5rem;
			font-size: 0.875rem;
		}
	}
</style>
