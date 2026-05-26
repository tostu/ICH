<script lang="ts">
	import { onMount } from 'svelte';

	interface Flash {
		id: number;
		x: number;
		y: number;
	}

	let flashes = $state<Flash[]>([]);
	let nextId = 0;
	let prefersReducedMotion = $state(false);

	onMount(() => {
		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion = motionQuery.matches;

		const handleMotionChange = (e: MediaQueryListEvent) => {
			prefersReducedMotion = e.matches;
		};
		motionQuery.addEventListener('change', handleMotionChange);

		const handleGlobalClick = (e: MouseEvent) => {
			// Don't show animations if prefers-reduced-motion is true
			if (prefersReducedMotion) return;

			const id = nextId++;
			const x = e.clientX;
			const y = e.clientY;

			flashes = [...flashes, { id, x, y }];

			// Cleanup the flash after animation completes (450ms)
			setTimeout(() => {
				flashes = flashes.filter((f) => f.id !== id);
			}, 450);
		};

		window.addEventListener('click', handleGlobalClick, { passive: true });

		return () => {
			motionQuery.removeEventListener('change', handleMotionChange);
			window.removeEventListener('click', handleGlobalClick);
		};
	});
</script>

{#if flashes.length > 0}
	<div class="flash-container">
		{#each flashes as { id, x, y } (id)}
			<div class="flash-instance" style="left: {x}px; top: {y}px;">
				<!-- Central slightly oval core flare -->
				<div class="flare-core"></div>

				<!-- Single diagonal organic lens streak -->
				<div class="flare-streak"></div>

				<!-- Secondary lens reflection ghosts drifting along the optical axis -->
				<div class="flare-ghost-1"></div>
				<div class="flare-ghost-2"></div>
			</div>
		{/each}
	</div>
{/if}

<style>
	.flash-container {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		z-index: 99999;
		overflow: hidden;
	}

	.flash-instance {
		position: absolute;
		transform: translate(-50%, -50%);
		pointer-events: none;
		width: 0;
		height: 0;
		/* mix-blend-mode: difference ensures elements invert correctly on all backgrounds */
		mix-blend-mode: difference;
	}

	/* Central hot-spot core (oval, tilted) */
	.flare-core {
		position: absolute;
		width: 70px;
		height: 50px;
		background: radial-gradient(
			ellipse at center,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 0.4) 30%,
			rgba(255, 255, 255, 0) 70%
		);
		border-radius: 50%;
		transform: translate(-50%, -50%) rotate(-15deg) scale(0.2);
		animation: flareCore 0.35s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
	}

	/* Soft diagonal glare streak */
	.flare-streak {
		position: absolute;
		width: 160px;
		height: 4px;
		background: radial-gradient(
			ellipse at center,
			rgba(255, 255, 255, 0.85) 0%,
			rgba(255, 255, 255, 0.2) 25%,
			rgba(255, 255, 255, 0) 80%
		);
		transform: translate(-50%, -50%) rotate(25deg) scaleX(0.1);
		animation: flareStreak 0.35s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
	}

	/* Large faint outer ghost ring (drifts top-right) */
	.flare-ghost-1 {
		position: absolute;
		width: 28px;
		height: 28px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		background: radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 70%);
		border-radius: 50%;
		transform: translate(-50%, -50%) translate(15px, -7px) scale(0.5);
		animation: flareGhost1 0.45s cubic-bezier(0.15, 0.85, 0.45, 1) forwards;
	}

	/* Small solid ghost dot (drifts bottom-left) */
	.flare-ghost-2 {
		position: absolute;
		width: 10px;
		height: 10px;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 80%);
		border-radius: 50%;
		transform: translate(-50%, -50%) translate(-12px, 6px) scale(0.5);
		animation: flareGhost2 0.45s cubic-bezier(0.15, 0.85, 0.45, 1) forwards;
	}

	@keyframes flareCore {
		0% {
			transform: translate(-50%, -50%) rotate(-15deg) scale(0.2);
			opacity: 1;
		}
		100% {
			transform: translate(-50%, -50%) rotate(-15deg) scale(1.3);
			opacity: 0;
		}
	}

	@keyframes flareStreak {
		0% {
			transform: translate(-50%, -50%) rotate(25deg) scaleX(0.1) scaleY(0.8);
			opacity: 1;
		}
		100% {
			transform: translate(-50%, -50%) rotate(25deg) scaleX(1.4) scaleY(0.2);
			opacity: 0;
		}
	}

	@keyframes flareGhost1 {
		0% {
			transform: translate(-50%, -50%) translate(10px, -5px) scale(0.4);
			opacity: 0.8;
		}
		100% {
			transform: translate(-50%, -50%) translate(28px, -14px) scale(1.4);
			opacity: 0;
		}
	}

	@keyframes flareGhost2 {
		0% {
			transform: translate(-50%, -50%) translate(-8px, 4px) scale(0.5);
			opacity: 0.8;
		}
		100% {
			transform: translate(-50%, -50%) translate(-22px, 11px) scale(1.6);
			opacity: 0;
		}
	}
</style>
