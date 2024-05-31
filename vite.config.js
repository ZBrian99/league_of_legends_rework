import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: ['@emotion/babel-plugin'],
			},
		}),
	],
	// base: '/league-of-legends/',
	build: {
	// 	assetsDir: 'public',
		rollupOptions: {
			input: ['./index.html', './404.html'],
		},
	},
});
