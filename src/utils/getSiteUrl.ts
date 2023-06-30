const base = import.meta.env.BASE_URL;

export function getSiteURL(
    url: string | URL,
    b?: string | URL | undefined
): URL {
    return new URL(`${base === "/" ? "" : base}${url}`, b);
}
