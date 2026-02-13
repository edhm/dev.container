/*
 * SPDX-FileCopyrightText: 2025 Edgar Huerta Mendoza <ed.huerta.ml@hotmail.com>
 * SPDX-FileCopyrightText: 2025 @edhm
 * SPDX-License-Identifier: MIT
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // Necesario para escuchar en 0.0.0.0
    port: 5173,
    watch: {
      usePolling: true, // Hot-reload en WSL2/Mac
      interval: 1000
    }
  }
})