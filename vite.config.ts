import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto', // ensures service worker gets injected
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Secret Hitler',
        short_name: 'SecretHitler',
        start_url: '/',
        display: 'standalone',
        background_color: '#f5f5f4',
        theme_color: '#f5f5f4',
        icons: [
          {
            src: '/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        navigateFallback: '/index.html' // ← this makes React Router work offline
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/components/ui')
    }
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173 // you can replace this port with any port
  }
})
