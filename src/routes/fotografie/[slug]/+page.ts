import { error } from '@sveltejs/kit';
import { albums, getAlbum } from '$lib/photos';
import type { EntryGenerator, PageLoad } from './$types';

// Static prerender: emit one page per album slug.
export const entries: EntryGenerator = () => albums.map((a) => ({ slug: a.slug }));

export const load: PageLoad = ({ params }) => {
	const album = getAlbum(params.slug);
	if (!album) {
		error(404, 'Album nicht gefunden');
	}
	return { album };
};
