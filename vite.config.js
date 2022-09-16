import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//
// https://vitejs.dev/config/
export default defineConfig({
    base: '/my-3d-web-dev-portfolio',
    plugins: [vue()],
});
