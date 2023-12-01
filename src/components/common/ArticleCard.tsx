import { truncateString } from "@/utils/constant";
import React from "react";
interface Article {
  [key: string]: any;
}
interface props {
  article: Article;
}
export default function ArticleCard({ article = {} }: props) {
  const imageUrl = () => {
    let image = "";
    if (article?.urlToImage) {
      image = article?.urlToImage;
    } else if (article?.multimedia?.[0]?.url) {
      image = "https://static01.nyt.com/" + article?.multimedia?.[0]?.url;
    } else {
      image =
        "https://1000logos.net/wp-content/uploads/2021/05/The-Guardian-logo.png";
    }
    return image;
  };
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-stretch h-full relative">
      <a href="#">
        <img className="rounded-t-lg" src={imageUrl()} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {truncateString(
              article.title ||
                article?.headline?.main ||
                article?.webTitle ||
                "",
              100
            )}
            {}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 min-h-[150px]">
          {truncateString(
            article.content || article?.abstract || article?.webTitle || "",
            100
          )}
        </p>
        <a
          href={article.url || article?.web_url || article?.webUrl || ""}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-5 left-5"
          target="_blank"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
