interface Images {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const allImages = import.meta.glob("../assets/**/*{png,jgp,jpeg}");

/*
 *Import locale image from src/ folder as "../assets/***.png".
 */
export async function resolveLocalImage(
    path: string,
    alt: string = ""
): Promise<Images> {
    let img = (await allImages[path]()) as { default: Images };
    img.default.alt = alt;
    return img.default;
}
