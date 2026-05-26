<script lang="ts">
	import { playCameraShutter } from '$lib/audio';
	import * as m from '$lib/paraglide/messages';

	let { loaded, onScrollTo }: { loaded: boolean; onScrollTo: (id: string) => void } = $props();

	let viewfinderActive = $state(false);
	let shutterFlashing = $state(false);
	let focusState = $state<'idle' | 'focusing' | 'locked'>('idle');

	let timer: ReturnType<typeof setTimeout> | null = null;
	let flashTimer: ReturnType<typeof setTimeout> | null = null;
	let focusTimer: ReturnType<typeof setTimeout> | null = null;

	let heroElement: HTMLElement | null = $state(null);
	let mouseX = $state(0);
	let mouseY = $state(0);

	function handleMouseMove(e: MouseEvent) {
		if (!heroElement) return;
		const rect = heroElement.getBoundingClientRect();
		mouseX = e.clientX - rect.left;
		mouseY = e.clientY - rect.top;
	}

	function triggerCamera() {
		if (timer) clearTimeout(timer);
		if (flashTimer) clearTimeout(flashTimer);
		if (focusTimer) clearTimeout(focusTimer);

		if (viewfinderActive) {
			shutterFlashing = true;
			playCameraShutter();
			flashTimer = setTimeout(() => {
				shutterFlashing = false;
			}, 100);
			timer = setTimeout(() => {
				viewfinderActive = false;
				focusState = 'idle';
			}, 1500);
			return;
		}

		viewfinderActive = true;
		focusState = 'focusing';

		focusTimer = setTimeout(() => {
			focusState = 'locked';

			flashTimer = setTimeout(() => {
				playCameraShutter();
				shutterFlashing = true;

				setTimeout(() => {
					shutterFlashing = false;
				}, 100);

				timer = setTimeout(() => {
					viewfinderActive = false;
					focusState = 'idle';
				}, 1500);
			}, 300);
		}, 450);
	}
</script>

<!-- eslint-disable svelte/no-at-html-tags -->

<section
	id="hero"
	class="hero"
	bind:this={heroElement}
	onmousemove={handleMouseMove}
	style="--mouse-x: {mouseX}px; --mouse-y: {mouseY}px;"
>
	<!-- Grid overlay for technical/architectural vibe -->
	<div class="hero__grid-overlay">
		<div class="hero__glow"></div>
	</div>

	<div class="hero__content" class:hero__content--loaded={loaded}>
		<div class="hero__text">
			<span class="label-lg hero__label text-tertiary-fixed opacity-90">
				{m.hero_label ? m.hero_label() : 'Software-Architekt & Street Photographer'}
			</span>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<h1 class="display-lg hero__headline">
				{@html m.hero_title
					? m.hero_title()
					: 'Digitale<br />Backbone.<br /><em>Charakterstark</em><br />gebaut.'}
			</h1>
			<p class="body-lg hero__subtitle text-white/65">
				{m.hero_subtitle
					? m.hero_subtitle()
					: 'Authentischer Architekt für fundierte digitale Systeme — charakterstark im Design und substanziell in der Ausführung.'}
			</p>
			<div class="hero__cta">
				<a
					href="#kontakt"
					class="btn btn--primary btn--with-icon"
					onclick={(e) => {
						e.preventDefault();
						onScrollTo('kontakt');
					}}
				>
					{m.hero_cta_primary ? m.hero_cta_primary() : 'Projekt starten'}
					<svg
						class="btn__icon"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
				<a
					href="#galerie"
					class="btn btn--ghost"
					onclick={(e) => {
						e.preventDefault();
						onScrollTo('galerie');
					}}>{m.hero_cta_secondary ? m.hero_cta_secondary() : 'Arbeiten ansehen'}</a
				>
			</div>
		</div>
		<div
			class="hero__portrait"
			onclick={triggerCamera}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					triggerCamera();
				}
			}}
			style="cursor: pointer;"
			aria-label="Kamera-Viewfinder aktivieren"
			role="button"
			tabindex="0"
		>
			<div class="crop-marks">
				<div class="crop-mark crop-mark--tl"></div>
				<div class="crop-mark crop-mark--tr"></div>
				<div class="crop-mark crop-mark--bl"></div>
				<div class="crop-mark crop-mark--br"></div>
			</div>

			<enhanced:img
				src="$lib/assets/PORTRAIT_WITH_CAMERA.jpg"
				alt="Torge Stubbe mit Kamera in der Hamburger Speicherstadt"
				loading="eager"
			/>

			{#if !viewfinderActive}
				<div class="camera-cue">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="camera-cue__icon"
						><path
							d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
						/><circle cx="12" cy="13" r="4" /></svg
					>
					<span class="camera-cue__text"
						>{m.hero_portrait_cue ? m.hero_portrait_cue() : 'Sucher aktivieren'}</span
					>
				</div>
			{/if}

			<!-- Camera Viewfinder Overlay -->
			<div class="viewfinder" class:viewfinder--active={viewfinderActive}>
				{#if shutterFlashing}
					<div class="shutter-flash"></div>
				{/if}

				<div class="corners">
					<div class="corner corner--tl"></div>
					<div class="corner corner--tr"></div>
					<div class="corner corner--bl"></div>
					<div class="corner corner--br"></div>
				</div>

				<div class="telemetry-top">
					<span class="rec-indicator">
						<span class="rec-dot"></span> REC
					</span>
					<span class="aspect-ratio">[ 3:4 ]</span>
				</div>

				<div
					class="autofocus-bracket"
					class:autofocus-bracket--focusing={focusState === 'focusing'}
					class:autofocus-bracket--locked={focusState === 'locked'}
				>
					<div class="autofocus-box"></div>
					{#if focusState === 'locked'}
						<span class="focus-beep-indicator">AF-S LOCK</span>
					{/if}
				</div>

				<div class="telemetry-bottom">
					<span class="shutter-speed">1/250</span>
					<span class="aperture">F2.8</span>
					<span class="ev">+-0.0</span>
					<span class="iso">ISO 400</span>
					<span class="raw">RAW</span>
				</div>
			</div>
		</div>
	</div>
	<button
		class="hero__scroll-hint"
		class:hero__scroll-hint--loaded={loaded}
		onclick={() => onScrollTo('expertise')}
		aria-label={m.hero_scroll_hint ? m.hero_scroll_hint() : 'Nach unten scrollen'}
	>
		<span class="hero__scroll-text">{m.hero_scroll_hint ? m.hero_scroll_hint() : 'Scrollen'}</span>
		<div class="lens-scale">
			<div class="lens-scale__line"></div>
			<div class="lens-scale__ticks">
				<div class="lens-scale__tick" data-val="∞"></div>
				<div class="lens-scale__tick" data-val=""></div>
				<div class="lens-scale__tick" data-val="0.3m"></div>
			</div>
			<div class="lens-scale__indicator"></div>
		</div>
	</button>
</section>

<style>
	.hero {
		min-height: 100svh;
		background: var(--primary);
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
	}

	/* ── Interactive Grid Overlay ── */
	.hero__grid-overlay {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 0;
		overflow: hidden;
	}

	.hero__glow {
		position: absolute;
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(255, 222, 165, 0.05) 0%, rgba(255, 222, 165, 0) 70%);
		top: var(--mouse-y);
		left: var(--mouse-x);
		transform: translate(-50%, -50%);
		pointer-events: none;
		transition: opacity 0.5s ease;
		z-index: 1;
	}

	.hero__content {
		flex: 1;
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		max-width: 1280px;
		margin: 0 auto;
		width: 100%;
		padding: clamp(5.5rem, 9vh, 7.5rem) 2.5rem clamp(1.5rem, 4vh, 2.5rem);
		align-items: center;
		gap: 3rem;
		position: relative;
		z-index: 2;
	}

	.hero__text {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		opacity: 0;
		transform: translateY(40px);
		transition:
			opacity 1.2s var(--ease-out-expo) 0.4s,
			transform 1.2s var(--ease-out-expo) 0.4s;
	}

	.hero__content--loaded .hero__text {
		opacity: 1;
		transform: translateY(0);
	}

	.hero__label {
		display: inline-block;
	}

	/* Headline and animated redline */
	.hero__headline {
		color: var(--on-primary);
		line-height: 1.05;
	}

	.hero__headline :global(em) {
		font-style: italic;
		color: var(--tertiary-fixed);
		position: relative;
		display: inline-block;
	}

	.hero__headline :global(em)::after {
		content: '';
		position: absolute;
		bottom: 4px;
		left: 0;
		width: 100%;
		height: 1px;
		background: rgba(255, 222, 165, 0.35);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 1.2s var(--ease-out-expo) 1.2s;
	}

	.hero__content--loaded .hero__headline :global(em)::after {
		transform: scaleX(1);
	}

	/* Subtitle */
	.hero__subtitle {
		max-width: 32rem;
	}

	.hero__cta {
		display: flex;
		gap: var(--space-sm);
		margin-top: var(--space-sm);
	}

	.btn--with-icon {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	.btn__icon {
		width: 16px;
		height: 16px;
		transition: transform var(--duration-fast) var(--ease-out);
	}

	.btn--primary:hover .btn__icon {
		transform: translateX(4px);
	}

	/* Portrait & Crop Marks */
	.hero__portrait {
		position: relative;
		opacity: 0;
		transform: scale(0.95) translateY(20px);
		transition:
			opacity 1.4s var(--ease-out-expo) 0.7s,
			transform 1.4s var(--ease-out-expo) 0.7s;

		aspect-ratio: 3 / 4;
		max-width: min(400px, 42vh);
		width: 100%;
		margin-left: auto;
		margin-top: 0;
	}

	.crop-marks {
		position: absolute;
		inset: -12px;
		pointer-events: none;
		z-index: 3;
	}

	.crop-mark {
		position: absolute;
		width: 12px;
		height: 12px;
		border: 1px solid rgba(255, 222, 165, 0.3);
	}

	.crop-mark--tl {
		top: 0;
		left: 0;
		border-right: none;
		border-bottom: none;
	}
	.crop-mark--tr {
		top: 0;
		right: 0;
		border-left: none;
		border-bottom: none;
	}
	.crop-mark--bl {
		bottom: 0;
		left: 0;
		border-right: none;
		border-top: none;
	}
	.crop-mark--br {
		bottom: 0;
		right: 0;
		border-left: none;
		border-top: none;
	}

	.camera-cue {
		position: absolute;
		bottom: 16px;
		right: 16px;
		background: rgba(6, 27, 14, 0.85);
		color: var(--on-primary);
		padding: 6px 12px;
		border-radius: 20px;
		display: flex;
		align-items: center;
		gap: 6px;
		font-family: var(--font-body);
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		z-index: 5;
		opacity: 0.7;
		transform: translateY(0);
		transition:
			opacity var(--duration-fast) var(--ease-out),
			transform var(--duration-fast) var(--ease-out),
			background var(--duration-fast) var(--ease-out);
		pointer-events: none;
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	.hero__portrait:hover .camera-cue,
	.hero__portrait:focus-visible .camera-cue {
		opacity: 1;
		background: rgba(6, 27, 14, 0.95);
		transform: scale(1.05);
	}

	.camera-cue__icon {
		width: 12px;
		height: 12px;
		color: var(--tertiary-fixed);
	}

	/* Rose offset backing block — editorial mounted-photo device */
	.hero__portrait::before {
		content: '';
		position: absolute;
		top: -12px;
		left: -12px;
		right: 12px;
		bottom: 12px;
		background: var(--secondary);
		z-index: 0;
	}

	/* Cream vertical accent line — architectural registration mark */
	.hero__portrait::after {
		content: '';
		position: absolute;
		top: 8px;
		right: -8px;
		width: 2px;
		height: 60%;
		background: var(--tertiary-fixed);
		z-index: 2;
	}

	.hero__content--loaded .hero__portrait {
		opacity: 1;
		transform: scale(1) translateY(0);
	}

	.hero__portrait :global(picture) {
		position: absolute;
		inset: 0;
		display: block;
		z-index: 1;
	}

	.hero__portrait :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
		display: block;
		max-width: none;
		margin: 0;
	}

	.hero__scroll-hint {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
		align-self: center;
		margin-bottom: 1.5rem;
		opacity: 0;
		color: var(--on-primary);
		transition:
			opacity 1.5s var(--ease-out-expo) 1.5s,
			color var(--duration-fast) var(--ease-out),
			transform var(--duration-fast) var(--ease-out);
		z-index: 2;
	}

	.hero__scroll-hint--loaded {
		opacity: 0.75;
	}

	.hero__scroll-hint:hover,
	.hero__scroll-hint:focus-visible {
		opacity: 1;
		transform: translateY(2px);
	}

	.hero__scroll-hint:focus-visible {
		outline: none;
	}

	.hero__scroll-hint:focus-visible .lens-scale {
		outline: 1px solid var(--tertiary-fixed);
		outline-offset: 4px;
	}

	.hero__scroll-text {
		font-family: var(--font-body);
		font-size: 0.58rem;
		font-weight: 600;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		opacity: 0.55;
		color: var(--on-primary);
		transition:
			color var(--duration-fast) var(--ease-out),
			opacity var(--duration-fast) var(--ease-out);
	}

	.hero__scroll-hint:hover .hero__scroll-text {
		opacity: 1;
		color: var(--tertiary-fixed);
	}

	/* ── Lens Manual Focus Distance Scale (Micro Version) ── */
	.lens-scale {
		position: relative;
		width: 48px;
		height: 28px;
		margin-top: 2px;
	}

	.lens-scale__line {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 18px;
		width: 1px;
		background: rgba(255, 255, 255, 0.15);
		transition: background-color var(--duration-fast) var(--ease-out);
	}

	.hero__scroll-hint:hover .lens-scale__line {
		background: rgba(255, 255, 255, 0.25);
	}

	.lens-scale__ticks {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.lens-scale__tick {
		position: absolute;
		left: 15px; /* center is 18px, offset by 3px to left */
		width: 7px;
		height: 1px;
		background: rgba(255, 255, 255, 0.3);
		color: rgba(255, 255, 255, 0.35);
		transition:
			background-color var(--duration-fast) var(--ease-out),
			color var(--duration-fast) var(--ease-out);
	}

	.lens-scale__tick::after {
		content: attr(data-val);
		position: absolute;
		left: 12px;
		top: 50%;
		transform: translateY(-50%);
		font-family: var(--font-body);
		font-size: 0.5rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: inherit;
	}

	.lens-scale__tick:nth-child(1) {
		top: 0%;
	}
	.lens-scale__tick:nth-child(2) {
		top: 50%;
		width: 5px;
		left: 16px;
	}
	.lens-scale__tick:nth-child(3) {
		top: 100%;
	}

	.lens-scale__indicator {
		position: absolute;
		left: 14px;
		width: 9px;
		height: 1px;
		background: var(--secondary);
		z-index: 2;
		top: 0%;
		transition:
			top var(--duration-normal) var(--ease-out),
			background-color var(--duration-fast) var(--ease-out);
	}

	.lens-scale__indicator::after {
		content: '';
		position: absolute;
		left: 4px;
		top: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		width: 3px;
		height: 3px;
		background: inherit;
	}

	/* Hover sweep: runs a camera-like focus sweep across the distance scales */
	.hero__scroll-hint:hover .lens-scale__indicator,
	.hero__scroll-hint:focus-visible .lens-scale__indicator {
		animation: indicatorSweep 2.2s infinite alternate ease-in-out;
	}

	.hero__scroll-hint:hover .lens-scale__tick:nth-child(1) {
		animation: tickActive1 2.2s infinite alternate ease-in-out;
	}
	.hero__scroll-hint:hover .lens-scale__tick:nth-child(2) {
		animation: tickActive2 2.2s infinite alternate ease-in-out;
	}
	.hero__scroll-hint:hover .lens-scale__tick:nth-child(3) {
		animation: tickActive3 2.2s infinite alternate ease-in-out;
	}

	@keyframes indicatorSweep {
		0% {
			top: 0%;
			background-color: var(--secondary);
		}
		50% {
			top: 50%;
			background-color: var(--tertiary-fixed);
		}
		100% {
			top: 100%;
			background-color: var(--secondary);
		}
	}

	@keyframes tickActive1 {
		0%,
		15% {
			color: var(--tertiary-fixed);
			background-color: var(--tertiary-fixed);
		}
		30%,
		100% {
			color: rgba(255, 255, 255, 0.35);
			background-color: rgba(255, 255, 255, 0.3);
		}
	}

	@keyframes tickActive2 {
		0%,
		20% {
			color: rgba(255, 255, 255, 0.35);
			background-color: rgba(255, 255, 255, 0.3);
		}
		40%,
		60% {
			color: var(--tertiary-fixed);
			background-color: var(--tertiary-fixed);
		}
		80%,
		100% {
			color: rgba(255, 255, 255, 0.35);
			background-color: rgba(255, 255, 255, 0.3);
		}
	}

	@keyframes tickActive3 {
		0%,
		75% {
			color: rgba(255, 255, 255, 0.35);
			background-color: rgba(255, 255, 255, 0.3);
		}
		90%,
		100% {
			color: var(--tertiary-fixed);
			background-color: var(--tertiary-fixed);
		}
	}

	@media (max-width: 1024px) {
		.hero__content {
			grid-template-columns: 1fr;
			padding: clamp(5rem, 8vh, 6.5rem) 1.5rem 1.5rem;
			text-align: center;
			gap: 1.5rem;
		}

		.hero__text {
			align-items: center;
		}

		.hero__subtitle {
			margin: 0 auto;
		}

		.hero__cta {
			justify-content: center;
		}

		.hero__portrait {
			max-width: 280px;
			margin: 16px auto 0;
		}
	}

	@media (max-width: 640px) {
		.hero__content {
			padding: clamp(4.5rem, 7vh, 5.5rem) 1rem 1.25rem;
		}

		.hero__cta {
			flex-direction: column;
			width: 100%;
		}

		.hero__cta :global(.btn) {
			width: 100%;
			text-align: center;
		}
	}

	/* ── Camera Viewfinder Styles ── */
	.viewfinder {
		position: absolute;
		inset: 0;
		z-index: 10;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s ease;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		color: #ffffff;
		padding: 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		user-select: none;
	}

	.viewfinder--active {
		opacity: 1;
	}

	.shutter-flash {
		position: absolute;
		inset: 0;
		background: #ffffff;
		z-index: 20;
		animation: flashEffect 0.1s ease-out forwards;
	}

	@keyframes flashEffect {
		0% {
			opacity: 0.9;
		}
		100% {
			opacity: 0;
		}
	}

	/* Corner brackets */
	.corners {
		position: absolute;
		inset: 12px;
		pointer-events: none;
	}

	.corner {
		position: absolute;
		width: 16px;
		height: 16px;
		border: 1.5px solid rgba(255, 255, 255, 0.7);
	}

	.corner--tl {
		top: 0;
		left: 0;
		border-right: none;
		border-bottom: none;
	}
	.corner--tr {
		top: 0;
		right: 0;
		border-left: none;
		border-bottom: none;
	}
	.corner--bl {
		bottom: 0;
		left: 0;
		border-right: none;
		border-top: none;
	}
	.corner--br {
		bottom: 0;
		right: 0;
		border-left: none;
		border-top: none;
	}

	/* Telemetry details */
	.telemetry-top {
		display: flex;
		justify-content: space-between;
		font-size: 10px;
		letter-spacing: 0.05em;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
		color: rgba(255, 255, 255, 0.9);
	}

	.rec-indicator {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.rec-dot {
		width: 6px;
		height: 6px;
		background: #ff3b30;
		border-radius: 50%;
		display: inline-block;
		animation: blink 1.2s steps(2, start) infinite;
	}

	@keyframes blink {
		to {
			visibility: hidden;
		}
	}

	.telemetry-bottom {
		display: flex;
		justify-content: space-between;
		font-size: 10px;
		letter-spacing: 0.05em;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
		color: rgba(255, 255, 255, 0.9);
	}

	/* Center autofocus reticle */
	.autofocus-bracket {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		pointer-events: none;
	}

	.autofocus-box {
		width: 36px;
		height: 36px;
		border: 1px solid rgba(255, 255, 255, 0.45);
		position: relative;
		transition:
			border-color 0.2s ease,
			transform 0.2s ease;
	}

	.autofocus-box::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 4px;
		height: 4px;
		background: rgba(255, 255, 255, 0.45);
		transform: translate(-50%, -50%);
		border-radius: 50%;
		transition: background-color 0.2s ease;
	}

	.autofocus-bracket--focusing .autofocus-box {
		border-color: #ffcc00;
		animation: focusPulse 0.4s infinite alternate;
	}

	.autofocus-bracket--focusing .autofocus-box::before {
		background: #ffcc00;
	}

	.autofocus-bracket--locked .autofocus-box {
		border-color: #4cd964;
		transform: scale(0.9);
	}

	.autofocus-bracket--locked .autofocus-box::before {
		background: #4cd964;
	}

	@keyframes focusPulse {
		from {
			transform: scale(1.15);
		}
		to {
			transform: scale(1);
		}
	}

	.focus-beep-indicator {
		font-size: 8px;
		color: #4cd964;
		background: rgba(0, 0, 0, 0.6);
		padding: 2px 5px;
		border-radius: 2px;
		letter-spacing: 0.05em;
		font-weight: 600;
	}
</style>
