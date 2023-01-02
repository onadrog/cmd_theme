import rss from "@astrojs/rss";

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
const posts = Object.values(postImportResult);
import {site} from "../data/site";

export const get = () => rss({
    title: site.rssTitle,
    description: site.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
        link: post.url,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.pubDate,
    }))
});
