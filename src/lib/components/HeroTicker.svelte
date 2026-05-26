<script lang="ts">
	let { loaded, items }: { loaded: boolean; items: string[] } = $props();

	let marqueeText = $derived(
		(items.map((i) => i.toUpperCase()).join('   ·   ') + '   ·   ').repeat(10)
	);

	let innerWidth = $state(0);

	let pathDefinition = $derived(
		innerWidth < 600
			? 'M 0,60 C 150,48 300,48 450,60 C 600,70 750,70 900,60 C 1050,48 1200,48 1200,60'
			: 'M 0,60 C 150,40 300,40 450,60 C 600,75 750,75 900,60 C 1050,40 1200,40 1200,60'
	);

	let fontSize = $derived(innerWidth < 600 ? '20' : '14');

	function waveMarquee(node: SVGTextPathElement) {
		let raf: number;
		let last: number | null = null;
		let current = 0;

		function tick(ts: number) {
			if (last !== null) {
				current -= (ts - last) * 0.002;
				node.setAttribute('startOffset', `${current}%`);
			}
			last = ts;
			raf = requestAnimationFrame(tick);
		}

		raf = requestAnimationFrame(tick);

		return {
			destroy() {
				cancelAnimationFrame(raf);
			}
		};
	}
</script>

<svelte:window bind:innerWidth />

<div class="hero__ticker" class:hero__ticker--loaded={loaded}>
	<svg
		class="hero__ticker-svg"
		viewBox="0 0 1200 100"
		preserveAspectRatio="xMidYMid slice"
		aria-hidden="true"
	>
		<defs>
			<path id="hero-wave" d={pathDefinition} />
		</defs>
		<text class="hero__ticker-text" font-size={fontSize}>
			<textPath use:waveMarquee href="#hero-wave" startOffset="0%">
				{marqueeText}
			</textPath>
		</text>
	</svg>
</div>

<style>
	.hero__ticker {
		position: relative;
		background: var(--primary-container);
	}

	.hero__ticker::before {
		content: '';
		position: absolute;
		top: -22px;
		left: -2%;
		width: 104%;
		height: 44px;
		background: var(--primary-container);
		border-radius: 50% 50% 0 0 / 44px 44px 0 0;
		pointer-events: none;
	}

	.hero__ticker-svg {
		display: block;
		width: 100%;
		height: 80px;
	}

	.hero__ticker-text {
		font-family: var(--font-body);
		font-weight: 600;
		letter-spacing: 1.5px;
		fill: var(--on-primary);
		opacity: 0;
		transition: opacity 0.55s var(--ease-out-expo) 1.9s;
	}

	.hero__ticker--loaded .hero__ticker-text {
		opacity: 0.75;
	}
</style>
