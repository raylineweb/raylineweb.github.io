import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    base: '/',    // User Page (raylineweb.github.io) — served from root
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        // Suppress the chunk size warning — Spline is intentionally large but lazy-loaded
        chunkSizeWarningLimit: 3000,
    },
})

