import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: '/', // Deploy to root of aerielday.github.io
    plugins: [react()],
});
