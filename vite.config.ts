import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/', // asset URLs are absolute to the site root so SPA routes find them
  plugins: [react()],
});
