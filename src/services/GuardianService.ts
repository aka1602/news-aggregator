const API_KEY = process.env.NEXT_PUBLIC_GAURDAIN_API_KEY;
const API_URL = `${process.env.NEXT_PUBLIC_GAURDAIN_API_DOMAIN}/search`;

const GuardianService = {
  fetchArticles: async (searchQuery: any, filters: any) => {
    const { date, category, author } = filters;
    const params = {
      q: searchQuery,
      "api-key": API_KEY,

      ...(date && { from: date }), // Add date filter if available
      ...(author && { category }),
      ...(author && { author }),
    };

    const queryString = new URLSearchParams(params).toString();
    const url = `${API_URL}?${queryString}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data?.response?.results || [];
    } catch (error) {
      throw new Error("Error fetching articles");
    }
  },
};

export default GuardianService;
