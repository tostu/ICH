<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import * as m from '$lib/paraglide/messages';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});

	function handleScrollTo(id: string) {
		window.location.href = `/#${id}`;
	}
</script>

<svelte:head>
	<title
		>{m.datenschutz_title ? m.datenschutz_title() : 'Datenschutzerklärung'} — Torge Stubbe</title
	>
	<meta
		name="description"
		content="Privacy Policy (Datenschutzerklärung) of Torge Stubbe, Software Architect & Photographer based in Hamburg."
	/>
</svelte:head>

<NavBar scrolled={true} {loaded} onScrollTo={handleScrollTo} />

<main class="legal-page reveal" class:visible={loaded}>
	<div class="legal-page__inner">
		<span class="label-lg text-secondary"
			>{m.legal_privacy_label ? m.legal_privacy_label() : 'DATENSCHUTZ'}</span
		>
		<h1 class="display-lg mt-2 text-primary">
			{m.datenschutz_title ? m.datenschutz_title() : 'Datenschutzerklärung'}
		</h1>

		<div class="legal-page__content">
			<section class="legal-page__section">
				<h2 class="headline-md">1. Datenschutz auf einen Blick</h2>
				<h3 class="title-sm mt-4">Allgemeine Hinweise</h3>
				<p class="body-md mt-2 text-on-surface-variant">
					Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
					personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
					sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
					Informationen zum Thema Datenschutz entnehmen Sie der unter diesem Text aufgeführten
					Datenschutzerklärung.
				</p>
				<h3 class="title-sm mt-4">Datenerfassung auf dieser Website</h3>
				<p class="body-md mt-2 text-on-surface-variant">
					Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
					Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden zum
					einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten
					handeln, die Sie uns per E-Mail senden. Andere Daten werden automatisch oder nach Ihrer
					Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
					technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
				</p>
			</section>

			<section class="legal-page__section mt-8">
				<h2 class="headline-md">2. Hosting und Content Delivery Networks (CDN)</h2>
				<p class="body-md mt-2 text-on-surface-variant">
					Wir hosten die Inhalte unserer Website bei einem externen Anbieter (Hoster). Die
					personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des
					Hosters gespeichert. Dies dient dem Zweck der Vertragserfüllung gegenüber unseren
					potenziellen und bestehenden Kunden und im Interesse einer sicheren, schnellen und
					effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter
					(Art. 6 Abs. 1 lit. f DSGVO).
				</p>
			</section>

			<section class="legal-page__section mt-8">
				<h2 class="headline-md">3. Allgemeine Hinweise und Pflichtinformationen</h2>
				<h3 class="title-sm mt-4">Datenschutz</h3>
				<p class="body-md mt-2 text-on-surface-variant">
					Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
					behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
					Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website
					benutzen, werden verschiedene personenbezogene Daten erhoben. Diese Datenschutzerklärung
					erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und
					zu welchem Zweck das geschieht.
				</p>
				<h3 class="title-sm mt-4">Hinweis zur verantwortlichen Stelle</h3>
				<p class="body-md mt-2">
					Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
					Torge Stubbe<br />
					E-Mail: hello@torgestubbe.de
				</p>
			</section>

			<section class="legal-page__section mt-8">
				<h2 class="headline-md">4. Ihre Rechte</h2>
				<p class="body-md mt-2 text-on-surface-variant">
					Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
					Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
					Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
					Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
					widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
					Verarbeitung Ihrer personenbezogenen Daten zu verlangen oder Widerspruch gegen die
					Datenverarbeitung einzulegen.
				</p>
			</section>
		</div>
	</div>
</main>

<Footer />

<style>
	.legal-page {
		background: var(--surface);
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 10rem;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.8s var(--ease-out-expo),
			transform 0.8s var(--ease-out-expo);
	}

	.legal-page.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.legal-page__inner {
		max-width: 800px;
		margin: 0 auto;
		width: 100%;
		padding: 0 var(--space-lg) var(--space-2xl);
	}

	.legal-page__content {
		margin-top: var(--space-xl);
		border-top: 1px solid var(--surface-container-high);
		padding-top: var(--space-lg);
	}

	.legal-page__section h2 {
		color: var(--primary);
	}

	.legal-page__section p {
		line-height: 1.6;
	}
</style>
