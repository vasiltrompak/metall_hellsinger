import {defineConfig} from "cypress";

export default defineConfig({
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
    e2e: {
        baseUrl: process.env.CLIENT_URL || 'http://localhost:5173',
        setupNodeEvents(on, config) {
        },
        viewportWidth: 1280,
        viewportHeight: 720,
    },
});
