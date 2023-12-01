/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import ArticleCard from "@/components/common/ArticleCard";
import Filters from "@/components/common/Filters";
import Loader from "@/components/common/Loader";
import GuardianService from "@/services/GuardianService";
import NewYorkTimesService from "@/services/NewYorkTimesService";
import NewsService from "@/services/NewsAPIService";
import { AppActions, AppState, Article, Filter } from "@/utils/types";
import { useEffect, useReducer } from "react";

const initialState: AppState = {
  articles: [],
  filters: { date: "", category: "", source: "", search: "", author: "" },
  loading: false,
};
// Reducer function to handle state transitions based on actions
const appReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case "SET_ARTICLES":
      return { ...state, articles: action.payload };
    case "SET_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const handleLoading = (load: boolean) => {
    dispatch({ type: "SET_LOADING", payload: load });
  };
  const fetchData = async () => {
    handleLoading(true);

    try {
      const combinedArticles = [];
      if (state.filters.source === "The Guardian") {
        const guardianArticles = await GuardianService.fetchArticles(
          state.filters.search,
          state.filters
        );
        combinedArticles.push(...guardianArticles);
      } else if (state.filters.source === "The New York Times") {
        const nyNewsArticles = await NewYorkTimesService.fetchArticles(
          state.filters.search,
          state.filters
        );

        combinedArticles.push(...nyNewsArticles);
      } else {
        const newsAPIArticles = await NewsService.fetchArticles(
          state.filters.search,
          state.filters
        );
        combinedArticles.push(...newsAPIArticles);
      }

      handleLoading(false);
      // Dispatch the action to set the articles
      dispatch({ type: "SET_ARTICLES", payload: combinedArticles });
    } catch (error) {
      handleLoading(false);
      console.error("Error fetching articles:", error);
    }
  };
  useEffect(() => {
    const storedSettings = localStorage.getItem("settings");
    if (storedSettings) {
      dispatch({ type: "SET_FILTER", payload: JSON.parse(storedSettings) });
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [state.filters]);

  return (
    <main className="md:max-w-[1280px] w-full md:flex md:flex-row md:items-start md:mx-auto">
      <Loader loading={state.loading} />
      <div>
        <Filters
          filters={state.filters}
          setFilters={(filterState: Filter) => {
            dispatch({ type: "SET_FILTER", payload: filterState });
          }}
        />
        <div className="flex flex-wrap  justify-between">
          {state.articles.map((article: Article, key: number) => (
            <div
              className="max-lg:w-full lg:w-[31%] shrink-0 max-lg:mb-5"
              key={key}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
