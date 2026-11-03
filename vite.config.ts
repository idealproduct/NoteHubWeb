import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
export default defineConfig({
  base: '/',
  build: { sourcemap: false, emptyOutDir: true },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'production-security-policy',
      apply: 'build',
      transformIndexHtml() {
        return [{
          tag: 'meta',
          attrs: {
            'http-equiv': 'Content-Security-Policy',
            content: "default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'",
          },
          injectTo: 'head-prepend',
        }]
      },
    },
  ],
})
