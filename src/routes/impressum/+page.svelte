<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageHero from '$lib/components/ui/PageHero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import * as m from '$lib/paraglide/messages';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>{m.impressum_title ? m.impressum_title() : 'Impressum'} — Torge Stubbe</title>
	<meta
		name="description"
		content="Legal Imprint (Impressum) of Torge Stubbe, Software Architect & Photographer based in Hamburg."
	/>
</svelte:head>

<NavBar scrolled={true} {loaded} />

<main class="bg-surface">
	<PageHero
		label={m.legal_imprint_label ? m.legal_imprint_label() : 'Rechtliche Angaben'}
		title={m.impressum_title ? m.impressum_title() : 'Impressum'}
	/>

	<Section class="pt-4 pb-16">
		<div class="legal-page__content max-w-[46rem]">
			<section class="legal-page__section">
				<h2 class="headline-md">
					{m.impressum_section_info ? m.impressum_section_info() : 'Angaben gemäß § 5 TMG'}
				</h2>
				<p class="body-md mt-2">
					Torge Stubbe<br />
					Software-Architekt & Street Photographer<br />
					Hamburg, Deutschland
				</p>
			</section>

			<section class="legal-page__section mt-8">
				<h2 class="headline-md">
					{m.impressum_section_contact ? m.impressum_section_contact() : 'Kontakt'}
				</h2>
				<p class="body-md mt-2">
					E-Mail: <a href="mailto:hello@torgestubbe.de" class="legal-page__link"
						>hello@torgestubbe.de</a
					><br />
					Webseite: <a href="https://torgestubbe.de" class="legal-page__link">torgestubbe.de</a>
				</p>
			</section>

			<section class="legal-page__section mt-8">
				<h2 class="headline-md">
					{m.impressum_section_disclaimer_title
						? m.impressum_section_disclaimer_title()
						: 'Haftungsausschluss (Disclaimer)'}
				</h2>
				<h3 class="title-sm mt-4">
					{m.impressum_disclaimer_content_title
						? m.impressum_disclaimer_content_title()
						: 'Haftung für Inhalte'}
				</h3>
				<p class="body-md mt-2 text-on-surface-variant">
					Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
					den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
					jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
					überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
					hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
					den allgemeinen Gesetzen bleiben hiervon unberührt.
				</p>

				<h3 class="title-sm mt-4">
					{m.impressum_disclaimer_links_title
						? m.impressum_disclaimer_links_title()
						: 'Haftung für Links'}
				</h3>
				<p class="body-md mt-2 text-on-surface-variant">
					Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
					Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
					Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
					Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
					mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
					Verlinkung nicht erkennbar.
				</p>

				<h3 class="title-sm mt-4">
					{m.impressum_disclaimer_copyright_title
						? m.impressum_disclaimer_copyright_title()
						: 'Urheberrecht'}
				</h3>
				<p class="body-md mt-2 text-on-surface-variant">
					Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
					dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
					der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
					Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
					nur für den privaten, nicht kommerziellen Gebrauch gestattet.
				</p>
			</section>
		</div>
	</Section>
</main>

<Footer />

<style>
	.legal-page__content {
		border-top: 1.5px solid rgba(30, 43, 36, 0.15);
		padding-top: var(--space-lg);
	}

	.legal-page__section h2 {
		color: var(--on-surface);
	}

	.legal-page__section h3 {
		color: var(--primary);
	}

	.legal-page__link {
		color: var(--warm-deep);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.legal-page__link:hover {
		color: var(--secondary-container);
	}

	.legal-page__section p {
		line-height: 1.6;
		color: var(--on-surface-variant);
	}
</style>
