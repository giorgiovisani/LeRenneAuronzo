import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/LeRenneAuronzo/',  // Make sure this matches your repository name //DA NON USARE, ROMPE TUTTO!!
    plugins: [react()],
})
