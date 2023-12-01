export const newsCategories = [
  { name: "Politics", url: "politics" },
  { name: "World News", url: "world_news" },
  { name: "Business and Economy", url: "business_economy" },
  { name: "Science and Technology", url: "science_technology" },
  { name: "Health", url: "health" },
  { name: "Environment", url: "environment" },
  { name: "Entertainment", url: "entertainment" },
  { name: "Sports", url: "sports" },
  { name: "Opinion/Editorial", url: "opinion_editorial" },
  { name: "Human Interest", url: "human_interest" },
  { name: "Crime and Legal Issues", url: "crime_legal" },
  { name: "Education", url: "education" },
  { name: "Technology", url: "technology" },
  { name: "Social Issues", url: "social_issues" },
  { name: "Weather", url: "weather" },
  { name: "Travel", url: "travel" },
  { name: "Lifestyle", url: "lifestyle" },
  { name: "Food and Drink", url: "food_drink" },
  { name: "Automotive", url: "automotive" },
  { name: "Religion", url: "religion" },
];
export const sources = [
  { name: "The Guardian", url: "theguardian.com" },
  { name: "The New York Times", url: "nytimes.com" },
  { name: "News Api", url: "newsapi.org" },
];
export function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}
