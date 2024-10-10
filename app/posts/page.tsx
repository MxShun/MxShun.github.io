import Element from "@/components/Element";
import Header from "@/components/Header";
import { getQiitaPosts } from "@/features/qiita/getUserItems";

export const dynamic = "force-static";

export default async function Posts() {
  const qiitaPosts = await getQiitaPosts();

  return (
    <main className="relative h-screen overflow-y-auto bg-solarized-light dark:bg-solarized-dark text-solarized-light dark:text-solarized-dark">
      <Header activePage="/posts" />
      <section>
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center mb-10">
            <h1>CyberAgent Developers Blog</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-solarized-dark dark:bg-solarized-light inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 md:space-y-0 space-y-6">
            <Element
              title="疎結合アーキテクチャにおける ogen-go/ogen によるプロデューササイドリクエストバリデーション"
              description="2024年10月4日投稿"
              thumbnail={
                <img
                  src="https://developers.cyberagent.co.jp/blog/wp-content/uploads/2024/09/thumbnail-1.png"
                  alt="ogen"
                />
              }
              link="https://developers.cyberagent.co.jp/blog/archives/49986/"
            />
            <Element
              title="Go製DBマイグレーションツール liamstask/goose から pressly/goose へのスムーズな移行"
              description="2023年3月10日投稿"
              thumbnail={
                <img
                  src="https://developers.cyberagent.co.jp/blog/wp-content/uploads/2023/03/17db55667deaaf8db8a6f6cac09f8a72-1.png"
                  alt="pressly-goose"
                />
              }
              link="https://developers.cyberagent.co.jp/blog/archives/41187/"
            />
            <Element
              title="私がやった Amazon S3 コストカット全ステップ"
              description="2022年12月23日投稿"
              thumbnail={
                <img
                  src="https://developers.cyberagent.co.jp/blog/wp-content/uploads/2022/12/b974697ce993dc618d0ec04567bfca05.png"
                  alt="s3-cost"
                />
              }
              link="https://developers.cyberagent.co.jp/blog/archives/38950/"
            />
          </div>
          <div className="text-center m-10">
            <h1>ASKUL Engineering BLOG</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-solarized-dark dark:bg-solarized-light inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 md:space-y-0 space-y-6">
            <Element
              title="Kotlin の emptyList.all { false } が true になるということ"
              description="2022年4月8日投稿"
              thumbnail={
                <img
                  src="https://cdn.image.st-hatena.com/image/scale/49395b11a6c3645262012a282f45aede2bb517ce/backend=imagemagick;height=1200;version=1;width=1200/https%3A%2F%2Fcdn.user.blog.st-hatena.com%2Fdefault_entry_og_image%2F151513001%2F1531459019222627"
                  alt="kotlin-empty-list-all"
                />
              }
              link="https://tech.askul.co.jp/entry/2022/04/08/090000"
            />
            <Element
              title="Kotlin で DX がめちゃくちゃ改善されました"
              description="2021年12月2日投稿"
              thumbnail={
                <img
                  src="https://cdn.image.st-hatena.com/image/scale/f44f022719288ef777369fd9c723ffc728b56539/backend=imagemagick;height=1200;version=1;width=1200/https%3A%2F%2Fstorage.googleapis.com%2Ftech-askul-co-jp%2Fimages%2F2021%2Faskul_shunm%2Frepl.png"
                  alt="kotlin-dx"
                />
              }
              link="https://tech.askul.co.jp/entry/2021/12/02/090000"
            />
            <Element
              title="新人エンジニア(新卒)が語るアスクルの魅力"
              description="2021年3月5日投稿"
              thumbnail={
                <img
                  src="https://cdn.image.st-hatena.com/image/scale/5d669ae9cd88ba58f5a32861ef6b1a1bada7de94/backend=imagemagick;height=1200;version=1;width=1200/https%3A%2F%2Fstorage.googleapis.com%2Ftech-askul-co-jp%2Fimages%2F2021%2Faskul_shunm%2Faskul_entrance.jpg"
                  alt="askul-new-grad"
                />
              }
              link="https://tech.askul.co.jp/entry/2021/03/05/110000"
            />
          </div>
          <div className="text-center m-10">
            <h1>Yahoo! JAPAN Tech Blog</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-solarized-dark dark:bg-solarized-light inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 md:space-y-0 space-y-6">
            <Element
              title="新卒入社3カ月目にしてプロジェクトリーダーをした話。"
              description="2020年7月17日投稿"
              thumbnail={
                <img
                  src="https://s.yimg.jp/images/tecblog/2020-H1/hack14/ogp.png"
                  alt="project-leader"
                />
              }
              link="https://techblog.yahoo.co.jp/entry/2020071730014127/"
            />
          </div>
          <div className="text-center m-10">
            <h1>Qiita</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-solarized-dark dark:bg-solarized-light inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 md:space-y-0 space-y-6">
            {qiitaPosts.map((post, index) => (
              <Element
                key={index} // NOTE: コンポーネント内でリストコンポーネントをレンダリングする場合に必要
                title={post.title}
                description={`${post.createdAt}投稿`}
                thumbnail={<img src={post.thumbnailUrl} alt={post.title} />}
                link={post.url}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
