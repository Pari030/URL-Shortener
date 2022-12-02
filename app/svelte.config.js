import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import sveltePreprocess from 'svelte-preprocess'
import * as sass from 'sass'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		sass: {
		  sync: true,
		  implementation: sass,
		},
	  }),

	kit: {
		adapter: adapter()
	}
};

export default config;
