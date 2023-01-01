import type {ImageMetadata} from '@astrojs/image/dist/vite-plugin-astro-image';
// @ts-ignore
import image from "../assets/social.png"; 

export interface Site {
    siteName: string,
    title: string,
    description: string,
    image: string | ImageMetadata 
    twitterCreator: string
}



export const site: Site  = {
    siteName: 'Cmd_Theme',
    title: "Welcome to my personal website.",
    description: 'This is my personal website, where I post news and some other test stuff.',
    image: image,
    twitterCreator: ''
}
