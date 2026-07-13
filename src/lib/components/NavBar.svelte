<script lang="ts">
	import { isMuted, toggleMute } from '$lib/audio';
	import { page } from '$app/state';
	import { locales, localizeHref, getLocale } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';

	import { navItems, navLabel } from '$lib/chapters';

	let { scrolled, loaded }: { scrolled: boolean; loaded: boolean } = $props();

	let mobileMenuOpen = $state(false);
	let muted = $state(false);

	onMount(() => {
		muted = isMuted();
	});

	function handleMuteToggle() {
		muted = toggleMute();
	}
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<nav class="nav" class:nav--scrolled={scrolled} class:nav--loaded={loaded}>
	<div class="nav__inner">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a
			href={localizeHref('/')}
			class="nav__wordmark"
		>
			TORGE STUBBE
		</a>

		<div class="nav__right-group">
			<ul class="nav__links" class:nav__links--open={mobileMenuOpen}>
				{#each navItems as item (item.slug)}
					<li>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a
							href={localizeHref(item.slug)}
							class:active={page.url.pathname === localizeHref(item.slug)}
							class:nav__cta={item.navKey === 'nav_kontakt'}
							onclick={() => (mobileMenuOpen = false)}>{navLabel(item)}</a
						>
					</li>
				{/each}
				<!-- Mobile-only controls row -->
				<li class="nav__mobile-controls-item">
					<div class="nav__mobile-controls">
						<div class="nav__lang">
							{#each locales as l (l)}
								<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
								<a
									href={localizeHref(page.url.pathname, { locale: l })}
									class="nav__lang-btn"
									class:active={getLocale() === l}
								>
									{l.toUpperCase()}
								</a>
							{/each}
						</div>
						<button
							type="button"
							class="nav__audio-toggle"
							onclick={handleMuteToggle}
							aria-label={muted ? 'Ton einschalten' : 'Ton stummlegen'}
							title={muted ? 'Ton einschalten' : 'Ton stummlegen'}
						>
							{#if muted}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="icon-svg"
									><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line
										x1="17"
										y1="9"
										x2="23"
										y2="15"
									/></svg
								>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="icon-svg"
									><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg
								>
							{/if}
						</button>
					</div>
				</li>
			</ul>

			<div class="nav__controls">
				<!-- Language Switcher -->
				<div class="nav__lang">
					{#each locales as l (l)}
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a
							href={localizeHref(page.url.pathname, { locale: l })}
							class="nav__lang-btn"
							class:active={getLocale() === l}
						>
							{l.toUpperCase()}
						</a>
					{/each}
				</div>

				<!-- Audio Toggle Button -->
				<button
					type="button"
					class="nav__audio-toggle"
					onclick={handleMuteToggle}
					aria-label={muted ? 'Ton einschalten' : 'Ton stummlegen'}
					title={muted ? 'Ton einschalten' : 'Ton stummlegen'}
				>
					{#if muted}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon-svg"
							><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line
								x1="17"
								y1="9"
								x2="23"
								y2="15"
							/></svg
						>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon-svg"
							><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg
						>
					{/if}
				</button>
			</div>

			<button
				class="nav__burger"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Menu"
				aria-expanded={mobileMenuOpen}
			>
				<span class="nav__burger-line" class:open={mobileMenuOpen}></span>
				<span class="nav__burger-line" class:open={mobileMenuOpen}></span>
			</button>
		</div>
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
		background: color-mix(in srgb, var(--surface) 82%, transparent);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}

	.nav__inner {
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.375rem 3.5rem;
	}

	@media (max-width: 767px) {
		.nav__inner {
			padding: 1.125rem 1.5rem;
		}
	}

	.nav__wordmark {
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		font-weight: 500;
		letter-spacing: 0.14em;
		color: var(--forest-dark, #1e2b24);
		transition: color var(--duration-normal) var(--ease-out);
	}

	.nav--scrolled .nav__wordmark {
		color: var(--forest-dark, #1e2b24);
	}

	.nav__right-group {
		display: flex;
		align-items: center;
		gap: 2rem;
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

	.nav__links a.active {
		color: var(--on-primary);
		border-bottom: 2px solid var(--color-accent);
		padding-bottom: 2px;
	}

	.nav--scrolled .nav__links a.active {
		color: var(--forest-dark, #1e2b24);
	}

	.nav__links a.nav__cta {
		background: var(--primary);
		color: var(--on-primary) !important;
		padding: 8px 16px;
		border-radius: var(--radius-pill, 999px);
		border-bottom: none !important;
	}

	.nav__links a.nav__cta:hover {
		color: var(--on-primary) !important;
		opacity: 0.9;
	}

	@media (max-width: 768px) {
		.nav__links a.nav__cta {
			display: inline-block;
			margin: 0.75rem 1.5rem;
			padding: 10px 20px;
		}
	}

	.nav__controls {
		display: flex;
		align-items: center;
		gap: 1rem;
		border-left: 1px solid rgba(255, 255, 255, 0.15);
		padding-left: 1rem;
	}

	.nav--scrolled .nav__controls {
		border-left-color: rgba(6, 27, 14, 0.15);
	}

	.nav__lang {
		display: flex;
		gap: 0.4rem;
		font-family: var(--font-body);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.05em;
	}

	.nav__lang-btn {
		color: rgba(255, 255, 255, 0.45);
		transition: color var(--duration-fast);
		cursor: pointer;
	}

	.nav--scrolled .nav__lang-btn {
		color: rgba(29, 27, 32, 0.45);
	}

	.nav__lang-btn.active,
	.nav__lang-btn:hover {
		color: var(--on-primary);
	}

	.nav--scrolled .nav__lang-btn.active,
	.nav--scrolled .nav__lang-btn:hover {
		color: var(--primary);
	}

	.nav__audio-toggle {
		background: transparent;
		color: rgba(255, 255, 255, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px;
		transition: color var(--duration-fast);
		cursor: pointer;
	}

	.nav__audio-toggle:hover {
		color: var(--on-primary);
	}

	.nav--scrolled .nav__audio-toggle {
		color: var(--on-surface-variant);
	}

	.nav--scrolled .nav__audio-toggle:hover {
		color: var(--primary);
	}

	.icon-svg {
		width: 1rem;
		height: 1rem;
	}

	.nav__burger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		padding: 4px;
		cursor: pointer;
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

	.nav__mobile-controls-item {
		display: none;
	}

	@media (max-width: 768px) {
		.nav__inner {
			padding: 1rem 1.25rem;
		}

		.nav__burger {
			display: flex;
		}

		.nav__controls {
			display: none;
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
			max-height: 380px;
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

		.nav__mobile-controls-item {
			display: block;
			border-top: 1px solid rgba(255, 255, 255, 0.1);
			padding: 0.75rem 1.5rem;
		}

		.nav--scrolled .nav__mobile-controls-item {
			border-top-color: rgba(6, 27, 14, 0.1);
		}

		.nav__mobile-controls {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		.nav__mobile-controls .nav__lang {
			gap: 1rem;
		}

		.nav__mobile-controls .nav__lang-btn {
			font-size: 0.8125rem;
			padding: 0.25rem 0.5rem;
		}

		.nav__mobile-controls .nav__audio-toggle {
			padding: 8px;
			color: rgba(255, 255, 255, 0.7);
		}

		.nav--scrolled .nav__mobile-controls .nav__audio-toggle {
			color: var(--on-surface-variant);
		}

		.nav__mobile-controls .nav__audio-toggle:hover {
			color: var(--on-primary);
		}

		.nav--scrolled .nav__mobile-controls .nav__audio-toggle:hover {
			color: var(--primary);
		}
	}
</style>
