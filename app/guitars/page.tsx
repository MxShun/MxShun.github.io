import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { basePath } from "@/next.config";

const BASE_PATH = basePath ? basePath : "";

export default function Guitars() {
  return (
    <main className="relative h-screen overflow-y-auto bg-solarized-light dark:bg-solarized-dark text-solarized-light dark:text-solarized-dark">
      <Header activePage="/guitars" />
      <section>
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center mb-10">
            <h1>
              <Link
                href="https://kenyokoyama.com/guitar/"
                className={"link"}
                target={"_blank"}
              >
                Ken Yokoyama
              </Link>
              &nbsp;に憧れただけのページ
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-solarized-dark dark:bg-solarized-light inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col text-center items-center">
              <div className="flex-grow">
                <figure className={"relative"}>
                  <img
                    src={`${BASE_PATH}/fender-mod-shop-jazzmaster-23.jpg`}
                    alt="fender-mod-shop-jazzmaster-23"
                    className="max-w-96 max-h-96 object-cover object-center"
                  />
                  <figcaption
                    className={
                      "absolute top-0 w-full h-full opacity-0 hover:opacity-100 bg-black/65 text-yellow-200"
                    }
                  >
                    <span
                      className={
                        "absolute bottom-0 left-0 text-left px-2.5 py-1"
                      }
                    >
                      {"No.3 Fender Mod Shop Jazzmaster '23"}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col text-center items-center">
              <div className="flex-grow">
                <figure className={"relative"}>
                  <img
                    src={`${BASE_PATH}/gibson-limited-explorer-gothic-ii-06.jpg`}
                    alt="gibson-limited-explorer-gothic-ii-06"
                    className="max-w-96 max-h-96 object-cover object-center"
                  />
                  <figcaption
                    className={
                      "absolute top-0 w-full h-full opacity-0 hover:opacity-100 bg-black/65 text-yellow-200"
                    }
                  >
                    <span
                      className={
                        "absolute bottom-0 left-0 text-left px-2.5 py-1"
                      }
                    >
                      {"No.2 Gibson Limited Explorer Gothic II '06"}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col text-center items-center">
              <div className="flex-grow">
                <figure className={"relative"}>
                  <img
                    src={`${BASE_PATH}/epiphone-japan-les-paul-standard-lps-85f-99.jpg`}
                    alt="epiphone-japan-les-paul-standard-lps-85f-99.jpg"
                    className="max-w-96 max-h-96 object-cover object-center"
                  />
                  <figcaption
                    className={
                      "absolute top-0 w-full h-full opacity-0 hover:opacity-100 bg-black/65 text-yellow-200"
                    }
                  >
                    <span
                      className={
                        "absolute bottom-0 left-0 text-left px-2.5 py-1"
                      }
                    >
                      {"No.1 Epiphone Japan Les Paul Standard LPS-85F '99"}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
