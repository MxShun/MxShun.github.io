import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="relative h-screen overflow-y-auto bg-solarized-light dark:bg-solarized-dark text-solarized-light dark:text-solarized-dark">
      <Header activePage="/" />
      <div className="relative z-20 flex h-4/5 items-center">
        <div className="container flex-col justify-between mx-auto">
          <div className="text-center">
            <img
              src="/mxshun.jpg"
              className="mx-auto rounded-full w-36"
              alt="mxshun"
            />
            <p className="my-6 sm:text-3xl text-2xl font-bold">
              しゅん＠MxShun
            </p>
            <h2 className="max-w-5xl py-12 mx-auto text-lg">
              Sansan という会社で EM / 認定スクラムマスター / バックエンドエンジニアをしています 💻
              <br />
              Go (Echo) / Kotlin (Spring) / AWS が基本スキルセット 🐧
              私個人へのご依頼等は X DM まで 📧
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
