import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
    base: "/floodfill2d/",
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                demo: resolve(__dirname, "demo/index.html")
            }
        }
    },
    server: {
        open: "/demo/"
    }
});