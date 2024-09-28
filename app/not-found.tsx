import React from "react";

export default function NotFound() {
  return (
    <main className="relative h-screen overflow-y-auto bg-solarized-light dark:bg-solarized-dark text-solarized-light dark:text-solarized-dark">
      <div className="relative z-20 h-5/6 flex items-center">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center">
            <p className="my-6 sm:text-3xl text-2xl font-bold">
              ページが見つかりませんでした
            </p>
            <a href="/" className="link mt-3 inline-flex items-center">
              Go Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
