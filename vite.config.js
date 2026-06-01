import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base ('./') keeps asset URLs portable, so the build works whether
// it is served from a domain root or a GitHub Pages project subpath.
export default defineConfig({
  base: './',
  plugins: [react()],
});
