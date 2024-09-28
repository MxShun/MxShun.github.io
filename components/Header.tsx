"use client";

import React, { useState } from "react";
import Link from "next/link";

type HeaderProps = {
  activePage: string;
};

const Header: React.FC<HeaderProps> = ({ activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavClass = (href: string) =>
    `flex px-6 py-2 ${activePage === href ? "text-solarized-cyan" : "hover:text-solarized-cyan"}`;

  return (
    <header className="z-30 flex items-center w-full h-24 sm:h-32">
      <div className="container flex items-center justify-between px-6 mx-auto text-lg text-solarized-light dark:text-solarized-dark">
        <div>
          <Link
            href="https://x.com/MxShun"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center hover:text-solarized-cyan"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
            </svg>
            ＠MxShun
          </Link>
        </div>
        <div>
          <nav
            className={`lg:flex items-center ${isMenuOpen ? "fixed z-50 top-0 left-0 w-full h-full p-4 bg-solarized-light-deep/80 dark:bg-solarized-dark-deep/80" : "hidden"}`}
          >
            <Link href="/" className={getNavClass("/")}>
              ホーム
            </Link>
            <Link href="/bio" className={getNavClass("/bio")}>
              経歴
            </Link>
            <Link href="/honor" className={getNavClass("/honor")}>
              資格
            </Link>
            <Link href="/talks" className={getNavClass("/talks")}>
              登壇
            </Link>
            <Link href="/posts" className={getNavClass("/posts")}>
              記事
            </Link>
            <Link href="/guitars" className={getNavClass("/guitars")}>
              ギター
            </Link>
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
