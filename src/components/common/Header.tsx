"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className=" bg-white fixed top-0 left-0 right-0 z-[1000] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                href="/personalise"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Personalise settings
              </Link>
            </div>
          </div>
        </div>

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            {open && (
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="data:image/png;base64,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"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Security
                      </span>
                    </a>
                    <Link
                      href="/personalise"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/view-grid */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Personalise settings
                      </span>
                    </Link>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/refresh */}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Refresh
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
