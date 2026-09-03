/**
 * Single source of truth for site identity / contact data — name, email,
 * socials, location, domain. Add a new social by appending to `socials`.
 */

export interface SocialLink {
	id: string;
	label: string;
	href: string;
	handle: string;
}

export const site = {
	name: 'Torge Stubbe',
	wordmark: 'TORGE STUBBE',
	jobTitle: 'Softwareentwickler & Street Photographer',
	email: 'tostu@posteo.de',
	domain: 'tostu.me',
	url: 'https://tostu.me',
	location: {
		city: 'Hamburg',
		country: 'Deutschland'
	}
};

export const socials: SocialLink[] = [
	{
		id: 'linkedin',
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/torge-stubbe-32259a22b',
		handle: '/in/torge-stubbe'
	},
	{
		id: 'github',
		label: 'GitHub',
		href: 'https://github.com/tostu',
		handle: '@tostu'
	}
];

export function mailto(subject?: string): string {
	return subject
		? `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
		: `mailto:${site.email}`;
}
