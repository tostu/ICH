import * as m from '$lib/paraglide/messages';

export interface NavItem {
	/** Canonical (de-localized) route, e.g. `/arbeit`. */
	slug: string;
	/** Paraglide message key for the short navigation label. */
	navKey: 'nav_home' | 'nav_arbeit' | 'nav_fotografie' | 'nav_ueber' | 'nav_kontakt';
}

/** The ordered primary navigation that powers the nav bar. */
export const navItems: NavItem[] = [
	{ slug: '/', navKey: 'nav_home' },
	{ slug: '/arbeit', navKey: 'nav_arbeit' },
	{ slug: '/fotografie', navKey: 'nav_fotografie' },
	{ slug: '/ueber', navKey: 'nav_ueber' },
	{ slug: '/kontakt', navKey: 'nav_kontakt' }
];

/** Resolve a nav item's label in the active locale. */
export function navLabel(item: NavItem): string {
	return m[item.navKey]();
}
