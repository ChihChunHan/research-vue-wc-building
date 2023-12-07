import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes("-")
        }
      },
      customElement: true
    })
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler"
    }
  },
  build: {
    target: "esnext",
    minify: "terser",
    lib: {
      entry: "src/CustomElement",
      formats: ["es", "cjs", "iife"],
      name: "CustomElement"
    }
  }
});
