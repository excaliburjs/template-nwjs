import { defineConfig } from "vite";

export default defineConfig({
    base: './', // optionally give a base path, useful for itch.io to serve relative instead of the default absolut
    // currently excalibur plugins are commonjs
    // this forces vite to keep things from bundling ESM together with commonjs
    optimizeDeps: {
        exclude: ["excalibur"],
    },
    build: {
        assetsInlineLimit: 0, // excalibur cannot handle inlined xml in prod mode
        sourcemap: true,
    }
});
