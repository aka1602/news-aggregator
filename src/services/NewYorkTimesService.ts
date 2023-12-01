const API_KEY = process.env.NEXT_PUBLIC_NEY_YORK_TIMES_API_KEY;
const API_URL = `${process.env.NEXT_PUBLIC_NEY_YORK_TIMES_API_DOMAIN}/svc/search/v2/articlesearch.json`;

const NewYorkTimesService = {
  fetchArticles: async (searchQuery: any, filters: any) => {
    const { date, category, author } = filters;
    const params = {
      q: searchQuery,
      "api-key": API_KEY,
      ...(date && { from: date }), // Add date filter if available
      ...(category && { category }),
      ...(author && { author }),
    };

    const queryString = new URLSearchParams(params).toString();
    const url = `${API_URL}?${queryString}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data, "data ====");
      return data?.response?.docs || [];
    } catch (error) {
      throw new Error("Error fetching articles");
    }
  },
};

export default NewYorkTimesService;
