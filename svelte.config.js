import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Fully prerendered; Cloudflare serves build/404.html for unknown paths.
	kit: { adapter: adapter({ fallback: '404.html' }) },
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) =>
			filename.includes('node_modules') ? undefined : { runes: true }
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
