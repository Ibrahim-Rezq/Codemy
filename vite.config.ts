import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        manifest: true,
        rollupOptions: {
            output: { compact: true },
        },
    },

    plugins: [react(), splitVendorChunkPlugin()],
})
