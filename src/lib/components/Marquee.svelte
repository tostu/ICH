<script lang="ts">
	const icons = [
		{ cls: 'devicon-java-plain colored', label: 'Java' },
		{ cls: 'devicon-spring-original colored', label: 'Spring' },
		{ cls: 'devicon-postgresql-plain colored', label: 'PostgreSQL' },
		{ cls: 'devicon-docker-plain colored', label: 'Docker' },
		{ cls: 'devicon-svelte-plain colored', label: 'Svelte' },
		{ cls: 'devicon-tailwindcss-original colored', label: 'Tailwind CSS' },
		{ cls: 'devicon-typescript-plain colored', label: 'TypeScript' },
		{ cls: 'devicon-astro-plain colored', label: 'Astro' },
		{ cls: 'devicon-cloudflare-plain colored', label: 'Cloudflare' },
		{ cls: 'devicon-linux-plain colored', label: 'Linux' },
		{ cls: 'devicon-git-plain colored', label: 'Git' },
		{ cls: 'devicon-nginx-original colored', label: 'Nginx' }
	];
</script>

<div class="marquee-track" role="marquee" aria-label="Tech stack">
	{#each [0, 1] as copy (copy)}
		<div class="marquee-row" aria-hidden={copy === 1}>
			{#each icons as icon (icon.label + copy)}
				<span class="marquee-item" title={icon.label}>
					<i class={icon.cls}></i>
					<span class="marquee-item__label">{icon.label}</span>
				</span>
			{/each}
		</div>
	{/each}
</div>

<style>
	@keyframes marquee-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--marquee-gap)));
		}
	}

	.marquee-track {
		--marquee-gap: 3rem;
		--marquee-duration: 36s;

		display: flex;
		gap: var(--marquee-gap);
		overflow: hidden;
		mask-image: linear-gradient(
			to right,
			transparent 0%,
			rgba(0, 0, 0, 1) 8%,
			rgba(0, 0, 0, 1) 92%,
			transparent 100%
		);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			rgba(0, 0, 0, 1) 8%,
			rgba(0, 0, 0, 1) 92%,
			transparent 100%
		);
	}

	.marquee-track:hover .marquee-row {
		animation-play-state: paused;
	}

	.marquee-row {
		display: flex;
		gap: var(--marquee-gap);
		flex-shrink: 0;
		animation: marquee-left var(--marquee-duration) linear infinite;
	}

	.marquee-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		opacity: 0.65;
		transition: opacity 0.25s ease;
		cursor: default;
		flex-shrink: 0;
	}

	.marquee-item:hover {
		opacity: 1;
	}

	.marquee-item :global(i) {
		font-size: 2.25rem;
		color: var(--tertiary-fixed);
		filter: grayscale(0.5);
		transition:
			filter 0.25s ease,
			transform 0.25s ease;
	}

	.marquee-item:hover :global(i) {
		filter: grayscale(0);
		transform: translateY(-3px);
	}

	.marquee-item__label {
		font-size: 0.6rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--on-primary);
		opacity: 0.4;
		white-space: nowrap;
	}
</style>