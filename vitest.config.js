import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.spec.{js,ts}'],
    server: {
      deps: {
        inline: [
          "@testing-library/dom"
        ]
      }
    }
  }
});