import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import pkg from "./package.json" assert { type: "json" };

function normalizePascalCaseName(name) {
  return name
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join("");
}

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: `dist/simulations/${pkg.name}`,
    manifest: true,
  },

  resolve: {
    alias: {
      
    },
  },

  define: {
    __APP_NAME__: JSON.stringify(pkg.name),
    __APP_NAME_PASCAL__: JSON.stringify(normalizePascalCaseName(pkg.name))
  }
});
