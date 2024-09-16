"use client";

import React, { useState } from "react";

interface HeaderProps {
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavClass = (href: string) =>
    `flex px-6 py-2 ${activePage === href ? "text-solarized-active" : "hover:text-solarized-hover"}`;

  return (
    <header className="z-30 flex items-center w-full h-24 sm:h-32">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <div className="text-lg text-solarized-light dark:text-solarized-dark">
          <a
            href="https://x.com/MxShun"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center hover:text-solarized-hover"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </g>
            </svg>
            ＠MxShun
          </a>
        </div>
        <div className="flex items-center">
          <nav
            className={`lg:flex items-center ${isMenuOpen ? "fixed z-50 top-0 left-0 w-full h-full p-4 bg-solarized-light-menu/80 dark:bg-solarized-dark-menu/80" : "hidden"} text-lg text-solarized-light dark:text-solarized-dark`}
          >
            <a href="/" className={getNavClass("/")}>
              ホーム
            </a>
            <a href="/bio" className={getNavClass("/bio")}>
              経歴
            </a>
            <a href="/honor" className={getNavClass("/honor")}>
              資格
            </a>
            <a href="/talks" className={getNavClass("/talks")}>
              登壇
            </a>
            <a href="/posts" className={getNavClass("/posts")}>
              記事
            </a>
            <a href="/guitars" className={getNavClass("/guitars")}>
              ギター
            </a>
          </nav>
          <button
            onClick={toggleMenu}
            className="flex z-50 flex-col ml-4 lg:hidden"
          >
            <span className="w-6 h-1 mb-1 bg-solarized-dark dark:bg-solarized-light"></span>
            <span className="w-6 h-1 mb-1 bg-solarized-dark dark:bg-solarized-light"></span>
            <span className="w-6 h-1 mb-1 bg-solarized-dark dark:bg-solarized-light"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
