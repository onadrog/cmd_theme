import rss from "@astrojs/rss";

const postImportResult: Record<string, Post> = import.meta.glob('./blog/**/*.md', { eager: true });
const posts: Post[] = Object.values(postImportResult);
import { site } from "../data/site";
import type {Posts} from "../utils/types/frontmatter"

interface Post extends Omit<Posts, "frontmatter">{
    frontmatter : {
        title: string,
        pubDate: Date
    }
}


export function get() {
    return rss({
        title: site.rssTitle,
        description: site.description,
        site: import.meta.env.SITE,
        items: posts.map((post) => ({
            link: post.url,
            title: post.frontmatter.title,
            pubDate: post.frontmatter.pubDate,
        }))
    });
}
