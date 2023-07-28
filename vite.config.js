import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), svgr()],
	css: {
		modules: {
			localsConvention: 'camelCaseOnly'
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@import "src/scss/_variables.scss";`
			}
		}
	},
	build: {
		outDir: 'build',
		base: 'https://ivan-mikitenko.github.io/Pizza-Shop/'
	}
});
