/**
 * Lebenslauf, Kompetenzen und Kennzahlen — die einzige Quelle für alles, was
 * die Seite über Torges Werdegang behauptet.
 *
 * Konvention wie `photos.ts`: typisierte Arrays, keine Paraglide-Aufrufe im
 * Modul. Übersetzt wird in den Komponenten über `msg()` aus `$lib/messages`,
 * das die `messageKey`-Präfixe mit den Suffixen zusammensetzt.
 *
 * Jede Jahreszahl auf der Site muss sich auf `cvEntries` zurückführen lassen —
 * Startseite eingeschlossen.
 */

export type CvKind = 'ausbildung' | 'arbeit' | 'studium';

export interface CvEntry {
	id: string;
	kind: CvKind;
	/** Startjahr, z. B. '2020'. */
	from: string;
	/** Endjahr, oder `null` für laufend/geplant. */
	to: string | null;
	/** Paraglide-Key-Präfix: `${messageKey}_title`, `_org`, `_desc`. */
	messageKey: string;
	tech: string[];
	/** Noch nicht begonnen (Studium ab 2026) → gepunktete Rail, Label „geplant“. */
	upcoming?: boolean;
}

/** Neueste zuerst — die Timeline rendert das Array unverändert von oben nach unten. */
export const cvEntries: CvEntry[] = [
	{
		id: 'studium',
		kind: 'studium',
		from: '2026',
		to: null,
		// TODO Torge: `cv_studium_org` in beiden Locales auf die echte Hochschule setzen.
		messageKey: 'cv_studium',
		tech: [],
		upcoming: true
	},
	{
		id: 'entwickler',
		kind: 'arbeit',
		from: '2023',
		to: '2026',
		// TODO Torge: `cv_entwickler_title` / `_org` in beiden Locales auf echte Rolle + Firma setzen.
		messageKey: 'cv_entwickler',
		// TODO Torge: echten Stack eintragen — nur was du im Gespräch verteidigen könntest.
		tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
		upcoming: false
	},
	{
		id: 'ausbildung',
		kind: 'ausbildung',
		from: '2020',
		to: '2023',
		// TODO Torge: `cv_ausbildung_title` / `_org` auf echten Ausbildungsberuf + Betrieb setzen.
		messageKey: 'cv_ausbildung',
		tech: [],
		upcoming: false
	}
];

export interface SkillGroup {
	id: string;
	/** Paraglide-Key-Präfix: `${messageKey}_label`. */
	messageKey: string;
	/** Steuert den `TechBadge`-Tone der ganzen Gruppe. */
	tone: 'green' | 'warm' | 'neutral';
	items: string[];
}

/**
 * TODO Torge: `items` durchgehen und auf das reduzieren, was du im Gespräch
 * verteidigen könntest. Vier Gruppen à 3–5 Einträge ist das Maximum — eine
 * Matrix mit 30 Badges liest sich wie eine Wunschliste und entwertet die
 * Kompetenzen, die wirklich sitzen.
 */
export const skillGroups: SkillGroup[] = [
	{
		id: 'backend',
		messageKey: 'skills_backend',
		tone: 'green',
		items: ['Java', 'Spring Boot', 'REST', 'Kafka']
	},
	{
		id: 'frontend',
		messageKey: 'skills_frontend',
		tone: 'warm',
		items: ['TypeScript', 'Svelte 5', 'SvelteKit', 'Tailwind']
	},
	{
		id: 'daten',
		messageKey: 'skills_daten',
		tone: 'neutral',
		items: ['PostgreSQL', 'Redis', 'SQL']
	},
	{
		id: 'betrieb',
		messageKey: 'skills_betrieb',
		tone: 'neutral',
		items: ['Docker', 'Linux', 'Git', 'CI/CD']
	}
];

export interface QuickFact {
	/** Paraglide-Key-Präfix: `${messageKey}_label` + `_value`. */
	messageKey: string;
}

/** Der Fakten-Kasten neben dem `/arbeit`-Hero. Informiert; das CtaBand konvertiert. */
export const quickFacts: QuickFact[] = [
	{ messageKey: 'fact_schwerpunkt' },
	{ messageKey: 'fact_erfahrung' },
	{ messageKey: 'fact_aktuell' },
	// TODO Torge: `fact_standort_value` in beiden Locales auf Ort + Erreichbarkeit setzen.
	{ messageKey: 'fact_standort' }
];

export interface WorkshopProject {
	id: string;
	/** Paraglide-Key-Präfix: `${messageKey}_tag`, `_title`, `_desc`, `_irony`. */
	messageKey: string;
	title: string;
	tag: string;
	/** 0–100. Nur für `mode: 'laufend'` — bei einem Experiment wäre „0 %“ eine Wertung. */
	progress: number;
	pulseSpeed: 'slow' | 'chaotic';
	tech: string[];
	/** 'laufend' = Dauerbaustelle, 'experiment' = einmaliger Lernversuch. */
	mode: 'laufend' | 'experiment';
}

/**
 * TODO Torge: 1–3 `mode: 'experiment'`-Einträge ergänzen. Das ist der Bereich für
 * Projekte ohne Zweck — etwas ausprobiert, etwas gelernt, kein Anspruch auf
 * Fertigstellung. Genau so sagt es auch `werkstatt_desc`.
 */
export const workshopProjects: WorkshopProject[] = [
	{
		id: 'wohin',
		messageKey: 'werkstatt_wohin',
		title: 'WOHIN',
		tag: 'App',
		progress: 50,
		pulseSpeed: 'slow',
		tech: ['Flutter', 'Hono', 'Astro', 'Sanity'],
		mode: 'laufend'
	},
	{
		id: 'welche-partei',
		messageKey: 'werkstatt_quiz',
		title: 'Welche Partei?',
		tag: 'Quiz App',
		progress: 92,
		pulseSpeed: 'slow',
		tech: ['Svelte 5', 'SvelteKit', 'TailwindCSS', 'D3.js', 'Playwright'],
		mode: 'laufend'
	},
	{
		id: 'sofa-showdown',
		messageKey: 'werkstatt_party',
		title: 'Sofa-Showdown',
		tag: 'Party Game',
		progress: 0,
		pulseSpeed: 'chaotic',
		tech: [],
		mode: 'laufend'
	}
];

export interface WorkProject {
	id: string;
	/** Laufnummer auf der Karte, z. B. '01'. */
	number: string;
	/** Paraglide-Key-Präfix: `${messageKey}_role`, `_title`, `_desc`. */
	messageKey: string;
	/** MUSS innerhalb von 2023–2026 liegen. */
	period: string;
	tech: string[];
}

/**
 * TODO Torge: 2–3 echte Projekte aus 2023–2026 eintragen. Pro Projekt gebraucht:
 * was das System gemacht hat, was *dein* Anteil war, welche Technik, welcher
 * Zeitraum. Ein ehrlicher Satz („Ich habe den Import-Job von 40 min auf 4 min
 * gebracht“) schlägt drei generische; zwei gute Projekte schlagen drei aufgefüllte.
 *
 * Pro Eintrag zusätzlich `${messageKey}_role` / `_title` / `_desc` in
 * `messages/de.json` UND `messages/en.json` anlegen.
 *
 * Solange das Array leer ist, rendert die Sektion nichts — kein Empty State,
 * kein „coming soon“.
 */
export const workProjects: WorkProject[] = [];

export interface ProofStat {
	/** Die Zahl vor dem Akzentzeichen. */
	base: string;
	/** Akzentzeichen, farblich abgesetzt gesetzt ('+', '·', '∞'). */
	accent: string;
	/** Rest hinter dem Akzentzeichen. */
	tail: string;
	/** Paraglide-Key-Präfix: `${messageKey}_label` + `_note`. */
	messageKey: string;
}

/**
 * Die „In Kürze“-Kacheln der Startseite. Standen bisher hart in `ProofBand.svelte`.
 *
 * TODO Torge: „40+ Releases im Betrieb“ ist bis auf Weiteres draußen — die Zahl
 * war nicht belegbar, und eine unbelegte Zahl ist genau das, was hier raus sollte.
 * Trägt sie doch, am Ende dieses Arrays anhängen (nicht dazwischenschieben — die
 * Kachel-Optik hängt an der Position) und `proof_releases_label` / `_note` in
 * beiden Locales anlegen. `ProofBand.svelte` verkraftet drei wie vier Kacheln.
 */
export const proofStats: ProofStat[] = [
	{ base: '3', accent: '', tail: '', messageKey: 'proof_jahre' },
	{ base: '3', accent: '·', tail: '1', messageKey: 'proof_staedte' },
	{ base: '', accent: '∞', tail: '', messageKey: 'proof_baustellen' }
];

/** Zeitraum-Label für Timeline und Streifen: `2023–2026` bzw. `seit 2026`. */
export function cvPeriod(entry: CvEntry, sinceLabel: string): string {
	return entry.to ? `${entry.from}–${entry.to}` : `${sinceLabel} ${entry.from}`;
}
