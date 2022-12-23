import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "http://localhost:3000",
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            wrap: true
        },
        drafts: true
    },
    integrations: [sitemap()]
});
