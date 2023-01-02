import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import compress from 'astro-compress';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    site: "http://localhost:3000",
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            wrap: true
        }
    },
    integrations: [sitemap(), image({
        serviceEntryPoint: "@astrojs/image/sharp"
    }), compress({
        css: false,
        html: true,
        img: false,
        js: false,
        svg: false,
    }),]
});
