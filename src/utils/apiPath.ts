const guardian_domain = process.env.NEXT_PUBLIC_GAURDAIN_API_DOMAIN;
const newYork_domain = process.env.NEXT_PUBLIC_NEY_YORK_TIMES_API_DOMAIN;
const newsApi_domain = process.env.NEXT_PUBLIC_NEWS_API_DOMAIN;

export const GAURDAIN_API_PATH = `${guardian_domain}/search`;
export const NEY_YORK_TIMES_API_PATH = `${newYork_domain}/svc/search/v2/articlesearch.json`;
export const NEWS_API_PATH = `${newsApi_domain}/v2/everything`;
