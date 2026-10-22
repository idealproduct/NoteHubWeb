import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
export default defineConfig({ base: '/NoteHub/', plugins: [react(), tailwindcss()] })
