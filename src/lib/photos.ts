import type { Picture } from '@sveltejs/enhanced-img';

// Local processed assets (Vite `?enhanced` → Picture with intrinsic dims)
import STREET_HAMBURG_UBAHN from '$lib/assets/STREET_HAMBURG_UBAHN.jpg?enhanced';
import STREET_HAMBURG_UBAHN_EINFAHRT from '$lib/assets/STREET_HAMBURG_UBAHN_EINFAHRT.jpg?enhanced';
import STREET_HAMBURG_UBAHN_SCHILD_BW from '$lib/assets/STREET_HAMBURG_UBAHN_SCHILD_BW.jpg?enhanced';
import STREET_HAMBURG_SKY_PLANE from '$lib/assets/STREET_HAMBURG_SKY_PLANE.jpg?enhanced';
import STREET_HAMBURG_RATHAUS from '$lib/assets/STREET_HAMBURG_RATHAUS.jpg?enhanced';
import STREET_HAMBURG_STUFEN_FRAU_BW from '$lib/assets/STREET_HAMBURG_STUFEN_FRAU_BW.jpg?enhanced';
import STREET_HAMBURG_SPEICHERSTADT from '$lib/assets/STREET_HAMBURG_SPEICHERSTADT.jpg?enhanced';
import STREET_HAMBURG_FAHRRAD_TOPDOWN_BW from '$lib/assets/STREET_HAMBURG_FAHRRAD_TOPDOWN_BW.jpg?enhanced';
import STREET_BIKE_INFRONT_BUSH from '$lib/assets/STREET_BIKE_INFRONT_BUSH.jpg?enhanced';
import STREET_LONDON_GRAFITTI from '$lib/assets/STREET_LONDON_GRAFITTI.jpg?enhanced';
import STREET_LONDON_SUNSET from '$lib/assets/STREET_LONDON_SUNSET.jpg?enhanced';
import STREET_LONDON_SUBWAY_BW from '$lib/assets/STREET_LONDON_SUBWAY_BW.jpg?enhanced';
import STREET_HANNOVER_TRAM from '$lib/assets/STREET_HANNOVER_TRAM.jpg?enhanced';

export type City = 'hamburg' | 'london' | 'hannover';

export interface Exif {
	aperture: string;
	shutter: string;
	iso: string;
	lens: string;
}

/**
 * A gallery photo is either a locally processed asset (responsive `<enhanced:img>`,
 * intrinsic dims from `img.img.w/h`) or a remote placeholder (picsum, explicit dims).
 * Both expose a full-size URL + width/height so PhotoSwipe can treat them uniformly.
 */
export type PhotoSource =
	| { kind: 'local'; img: Picture }
	| { kind: 'remote'; thumb: string; full: string; w: number; h: number };

export interface Photo {
	source: PhotoSource;
	alt: string;
	/** Short subject, e.g. "U-Bahn". */
	title: string;
	city: City;
	bw: boolean;
	exif: Exif;
}

export interface Album {
	slug: City;
	label: string;
	/** Overview card cover + album featured hero (always a real photo). */
	cover: Photo;
	/** Featured photo first, remainder in the grid. */
	photos: Photo[];
}

/** Full-size href + intrinsic dimensions PhotoSwipe needs, from either source kind. */
export function pswpAttrs(photo: Photo): { href: string; width: number; height: number } {
	if (photo.source.kind === 'local') {
		return {
			href: photo.source.img.img.src,
			width: photo.source.img.img.w,
			height: photo.source.img.img.h
		};
	}
	return { href: photo.source.full, width: photo.source.w, height: photo.source.h };
}

const local = (img: Picture): PhotoSource => ({ kind: 'local', img });

/** Seeded picsum placeholder so prerendered markup is deterministic. */
function picsum(seed: string): PhotoSource {
	return {
		kind: 'remote',
		thumb: `https://picsum.photos/seed/${seed}/600/400`,
		full: `https://picsum.photos/seed/${seed}/1600/1067`,
		w: 1600,
		h: 1067
	};
}

/** Placeholder photo padding a thin album until it fills the featured + grid layout. */
function placeholder(seed: string, city: City, title: string): Photo {
	return {
		source: picsum(`${city}-${seed}`),
		alt: `Platzhalter — ${title}`,
		title,
		city,
		bw: false,
		exif: { aperture: 'F2.8', shutter: '1/250s', iso: 'ISO 400', lens: '35mm' }
	};
}

const hamburg: Photo[] = [
	{
		source: local(STREET_HAMBURG_STUFEN_FRAU_BW),
		alt: 'Silhouette auf Hamburger Treppe',
		title: 'Stufen',
		city: 'hamburg',
		bw: true,
		exif: { aperture: 'F4.0', shutter: '1/160s', iso: 'ISO 800', lens: '28mm' }
	},
	{
		source: local(STREET_HAMBURG_UBAHN),
		alt: 'Hamburger U-Bahn',
		title: 'U-Bahn',
		city: 'hamburg',
		bw: false,
		exif: { aperture: 'F2.0', shutter: '1/125s', iso: 'ISO 800', lens: '35mm' }
	},
	{
		source: local(STREET_HAMBURG_UBAHN_EINFAHRT),
		alt: 'U-Bahn Einfahrt Hamburg',
		title: 'Einfahrt',
		city: 'hamburg',
		bw: false,
		exif: { aperture: 'F4.0', shutter: '1/125s', iso: 'ISO 800', lens: '50mm' }
	},
	{
		source: local(STREET_HAMBURG_SPEICHERSTADT),
		alt: 'Hamburg Speicherstadt durch Brückenrahmen',
		title: 'Speicherstadt',
		city: 'hamburg',
		bw: false,
		exif: { aperture: 'F8.0', shutter: '1/125s', iso: 'ISO 100', lens: '24mm' }
	},
	{
		source: local(STREET_HAMBURG_RATHAUS),
		alt: 'Hamburger Rathaus',
		title: 'Rathaus',
		city: 'hamburg',
		bw: false,
		exif: { aperture: 'F5.6', shutter: '1/200s', iso: 'ISO 200', lens: '35mm' }
	},
	{
		source: local(STREET_HAMBURG_SKY_PLANE),
		alt: 'Flugzeug über Hamburger Hinterhof',
		title: 'Himmel',
		city: 'hamburg',
		bw: false,
		exif: { aperture: 'F5.6', shutter: '1/500s', iso: 'ISO 200', lens: '35mm' }
	},
	{
		source: local(STREET_HAMBURG_UBAHN_SCHILD_BW),
		alt: 'U-Bahn Schild Hamburg',
		title: 'Schild',
		city: 'hamburg',
		bw: true,
		exif: { aperture: 'F2.8', shutter: '1/250s', iso: 'ISO 400', lens: '35mm' }
	},
	{
		source: local(STREET_HAMBURG_FAHRRAD_TOPDOWN_BW),
		alt: 'Fahrrad von oben, Hamburg',
		title: 'Fahrrad',
		city: 'hamburg',
		bw: true,
		exif: { aperture: 'F4.0', shutter: '1/320s', iso: 'ISO 200', lens: '28mm' }
	},
	{
		source: local(STREET_BIKE_INFRONT_BUSH),
		alt: 'Fahrrad vor Hecke',
		title: 'Hecke',
		city: 'hamburg',
		bw: false,
		exif: { aperture: 'F2.8', shutter: '1/200s', iso: 'ISO 400', lens: '35mm' }
	}
];

const london: Photo[] = [
	{
		source: local(STREET_LONDON_SUNSET),
		alt: 'London Architektur im Sonnenuntergang',
		title: 'Golden Hour',
		city: 'london',
		bw: false,
		exif: { aperture: 'F2.8', shutter: '1/320s', iso: 'ISO 400', lens: '35mm' }
	},
	{
		source: local(STREET_LONDON_GRAFITTI),
		alt: 'Street Art in London',
		title: 'Graffiti',
		city: 'london',
		bw: false,
		exif: { aperture: 'F2.8', shutter: '1/250s', iso: 'ISO 400', lens: '35mm' }
	},
	{
		source: local(STREET_LONDON_SUBWAY_BW),
		alt: 'London Underground Rolltreppe',
		title: 'Subway',
		city: 'london',
		bw: true,
		exif: { aperture: 'F2.8', shutter: '1/60s', iso: 'ISO 3200', lens: '28mm' }
	},
	placeholder('canary', 'london', 'Skyline'),
	placeholder('thames', 'london', 'Themse'),
	placeholder('tube', 'london', 'Tube')
];

const hannover: Photo[] = [
	{
		source: local(STREET_HANNOVER_TRAM),
		alt: 'Straßenbahn bei Nacht in Hannover',
		title: 'Tram',
		city: 'hannover',
		bw: false,
		exif: { aperture: 'F2.0', shutter: '1/80s', iso: 'ISO 1600', lens: '50mm' }
	},
	placeholder('maschsee', 'hannover', 'Maschsee'),
	placeholder('rathaus', 'hannover', 'Rathaus'),
	placeholder('altstadt', 'hannover', 'Altstadt'),
	placeholder('bahnhof', 'hannover', 'Bahnhof'),
	placeholder('markt', 'hannover', 'Markt')
];

export const albums: Album[] = [
	{ slug: 'hamburg', label: 'Hamburg', cover: hamburg[0], photos: hamburg },
	{ slug: 'london', label: 'London', cover: london[0], photos: london },
	{ slug: 'hannover', label: 'Hannover', cover: hannover[0], photos: hannover }
];

export function getAlbum(slug: string): Album | undefined {
	return albums.find((a) => a.slug === slug);
}
