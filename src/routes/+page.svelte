<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProofBand from '$lib/components/ProofBand.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	let loaded = $state(false);

	onMount(() => {
		requestAnimationFrame(() => {
			loaded = true;
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
		);

		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

		return () => {
			observer.disconnect();
		};
	});
</script>

<NavBar scrolled={true} {loaded} />
<Hero {loaded} />
<ProofBand />
<Stack />
<CtaBand />
