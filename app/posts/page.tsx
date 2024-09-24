import React from "react";
import Element from "@/components/Element";
import Header from "@/components/Header";
import { getQiitaPosts } from "@/features/qiita/getUserItems";

export default async function Posts() {
  const qiitaPosts = await getQiitaPosts();

  return (
    <main className="relative h-screen overflow-y-auto bg-solarized-light dark:bg-solarized-dark">
      <Header activePage="/posts" />
      <section>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {qiitaPosts.map((post, index) => (
              <Element
                key={index} // NOTE: コンポーネント内でリストコンポーネントをレンダリングする場合に必要
                title={post.title}
                description={`${post.createdAt}投稿`}
                thumbnail={
                  <img
                    src={post.thumbnailUrl}
                    className="mx-auto rounded-full w-28"
                    alt="cyberagent-generative-ai"
                  />
                }
                link={post.url}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
