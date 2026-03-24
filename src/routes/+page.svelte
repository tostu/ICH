<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Expertise from '$lib/components/Expertise.svelte';
	import Philosophie from '$lib/components/Philosophie.svelte';
	import Werte from '$lib/components/Werte.svelte';
	import Galerie from '$lib/components/Galerie.svelte';
	import Logbuch from '$lib/components/Logbuch.svelte';
	import Kontakt from '$lib/components/Kontakt.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let scrolled = $state(false);
	let loaded = $state(false);

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}

	onMount(() => {
		requestAnimationFrame(() => {
			loaded = true;
		});

		const onScroll = () => {
			scrolled = window.scrollY > 40;
		};
		window.addEventListener('scroll', onScroll, { passive: true });

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
			window.removeEventListener('scroll', onScroll);
			observer.disconnect();
		};
	});
</script>

<NavBar {scrolled} {loaded} onScrollTo={scrollTo} />
<Hero {loaded} onScrollTo={scrollTo} />
<Expertise />
<Philosophie />
<Werte />
<Galerie />
<Logbuch />
<Kontakt />
<Footer />
