import * as m from '$lib/paraglide/messages';

/**
 * Löst einen zur Laufzeit zusammengesetzten Message-Key auf.
 *
 * Nötig, weil die Records in `cv.ts` nur ein Key-Präfix tragen (`cv_entwickler`)
 * und die Suffixe (`_title`, `_org`, `_desc`) erst in der Komponente entstehen.
 * `import * as m` lässt sich nicht mit einem breiten `string` indizieren, also
 * steht hier der einzige Cast des Projekts — an einer Stelle, dokumentiert.
 *
 * Fehlt der Key, kommt der Key selbst zurück. Dann steht der Fehler sichtbar auf
 * der Seite, statt still im Build zu verschwinden (Paraglide fällt sonst
 * kommentarlos auf die Basissprache zurück).
 */
export function msg(prefix: string, suffix = ''): string {
	const key = `${prefix}${suffix}`;
	const fn = (m as unknown as Record<string, (() => string) | undefined>)[key];
	return fn ? fn() : key;
}
