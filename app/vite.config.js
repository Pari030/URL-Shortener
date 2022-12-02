import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
		  '@': path.resolve('/src'),
		},
	  }
});
