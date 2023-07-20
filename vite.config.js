import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'build',
		base: '/Pizza-Shop/', // замените 'your-project-name' на имя вашего проекта
	},
})



