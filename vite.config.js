import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';
// import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
	// resolve: {
	// 	alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	// },
	// base: '/src/',
	// plugins: [tsconfigPaths()],
	// "baseUrl": ".",
	//   "paths": { "@/*": ["./src/*"] },
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	// base: process.env.NODE_ENV === 'production' ? '/leagueoflegends/' : '/',
	// base: '/',
	define: {
		baseUrl: JSON.stringify(process.env.BASE_URL || '/'),
	},
	plugins: [
		react({
			babel: {
				plugins: ['@emotion/babel-plugin'],
			},
		}),
	],
});
