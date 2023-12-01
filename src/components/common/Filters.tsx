"use client";
import React, { useEffect, useReducer, useState } from "react";
import { Button } from "../ui/button";
import SelectFilter from "./SelectFilter";
import { FilterActions, Filter } from "@/utils/types";
import { newsCategories, sources } from "@/utils/constant";

// Reducer function to handle state updates
const reducer = (state: Filter, action: FilterActions): Filter => {
  switch (action.type) {
    case "TOGGLE_COLLAPSE":
      return { ...state, isCollapsed: !state.isCollapsed };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_SOURCE":
      return { ...state, source: action.payload };
    case "SET_SELECTED_DATE":
      return { ...state, date: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_ALL":
      return { ...state, ...action.payload };
    case "RESET":
      return defaultFilters;

    default:
      return state;
  }
};
interface props {
  filters?: Filter;
  setFilters: (filters: Filter) => void;
}
const defaultFilters = {
  isCollapsed: true,
  category: "",
  source: "",
  date: "",
  search: "",
};
export default function Filters({
  setFilters = () => {},
  filters = {
    ...defaultFilters,
  },
}: props) {
  const [state, dispatch] = useReducer(reducer, {
    ...defaultFilters,
  });

  const toggleCollapse = () => {
    dispatch({ type: "TOGGLE_COLLAPSE" });
  };
  const resetState = () => {
    dispatch({ type: "RESET" });
  };
  const handleSearch = () => {
    setFilters(state);
    resetState();
  };
  useEffect(() => {
    if (filters) {
      dispatch({ type: "SET_ALL", payload: filters || "" });
    }
  }, [filters]);
  return (
    <div className="mb-5 max-w-screen">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleCollapse}
        >
          <div>
            <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
            <p className="mt-1 text-sm">Use filters to further refine search</p>
          </div>
          <button
            onClick={toggleCollapse}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {state.isCollapsed ? "▼" : "▲"}
          </button>
        </div>

        {!state.isCollapsed && (
          <div>
            <div className="relative mb-3 mt-3 w-full flex  items-center justify-between rounded-md">
              <svg
                className="absolute left-2 block h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg>
              <input
                type="text"
                value={state.search}
                onChange={(e) =>
                  dispatch({ type: "SET_SEARCH", payload: e.target.value })
                }
                className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Search news"
              />
            </div>
            <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <label className="text-stone-600 text-sm font-medium">
                  Category
                </label>

                <SelectFilter
                  list={newsCategories}
                  value={state.category}
                  onChange={(value) =>
                    dispatch({ type: "SET_CATEGORY", payload: value })
                  }
                  className="mt-2 h-[42px] w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-stone-600 text-sm font-medium">
                  Source
                </label>
                <SelectFilter
                  list={sources}
                  value={state.source}
                  onChange={(value) =>
                    dispatch({ type: "SET_SOURCE", payload: value })
                  }
                  className="mt-2 h-[42px] w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-stone-600 text-sm font-medium">
                  Select Date
                </label>
                <input
                  type="date"
                  value={state.date}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_SELECTED_DATE",
                      payload: e.target.value,
                    })
                  }
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>
        )}

        {!state.isCollapsed && (
          <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <Button
              className="active:scale-95 rounded-lg   outline-none focus:ring "
              onClick={resetState}
            >
              Reset
            </Button>
            <Button
              className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
