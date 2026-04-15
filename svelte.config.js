import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		// Tells SvelteKit this is a library, not an app
		package: {
			dir: 'dist',
			emitTypes: true
		}
	}
};

export default config;
