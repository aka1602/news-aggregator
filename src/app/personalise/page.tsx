/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import SelectFilter from "@/components/common/SelectFilter";
import { Button } from "@/components/ui/button";
import { newsCategories, sources } from "@/utils/constant";
import React, { useEffect, useState } from "react";

export default function page() {
  const [settings, setSettings] = useState({
    category: "",
    source: "",
    author: "",
  });
  const setCategory = (value: string, key: string) => {
    setSettings({ ...settings, [key]: value });
  };

  const applySettings = () => {
    localStorage.setItem("settings", JSON.stringify(settings));
  };
  const resetSettings = () => {
    setSettings({ category: "", source: "", author: "" });
    localStorage.removeItem("settings");
  };
  useEffect(() => {
    const storedSettings = localStorage.getItem("settings");
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    }
  }, []);

  return (
    <div>
      <div className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Author
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="please input author name"
            value={settings.author}
            onChange={(e) => setCategory(e.target.value, "author")}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Category
          </label>
          <SelectFilter
            list={newsCategories}
            value={settings.category}
            onChange={(value) => setCategory(value, "category")}
            className="mt-2 h-[42px] w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Source
          </label>
          <SelectFilter
            list={sources}
            defaultValue={"News Api"}
            value={settings.source}
            onChange={(value) => setCategory(value, "source")}
            className="mt-2 h-[42px] w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <Button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-lg:mt-10 mt-5"
          onClick={applySettings}
        >
          Apply settings
        </Button>
        <Button
          className="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-lg:mt-5 mt-5 lg:ml-2.5 md:ml-2.5"
          onClick={resetSettings}
        >
          Reset settings
        </Button>
      </div>
    </div>
  );
}
