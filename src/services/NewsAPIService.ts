const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const API_URL = `${process.env.NEXT_PUBLIC_NEWS_API_DOMAIN}/v2/everything`;

const NewsService = {
  fetchArticles: async (searchQuery: any, filters: any) => {
    const { date, category, author } = filters;
    const params = {
      q: searchQuery || "all",
      apiKey: API_KEY,
      ...(date && { from: date }), // Add date filter if available
      ...(category && { category }),
      ...(author && { author }),
    };

    const queryString = new URLSearchParams(params).toString();
    const url = `${API_URL}?${queryString}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data?.articles || [];
    } catch (error) {
      throw new Error("Error fetching articles");
    }
  },
};

export default NewsService;
