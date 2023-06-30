import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";

import { loadEnv } from "vite";
const { SITE_URL, BASE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), "");
// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    site: SITE_URL,
    base: BASE_URL,
    markdown: {
        shikiConfig: {
            theme: "dracula",
            wrap: true,
        },
    },
    integrations: [
        sitemap(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
        compress({
            css: false,
            html: {
                removeComments: true,
                removeAttributeQuotes: false,
            },
            img: false,
            js: false,
            svg: true,
        }),
        prefetch(),
    ],
    vite: {
        build: {
            assetsInlineLimit: 0,
        },
    },
});
