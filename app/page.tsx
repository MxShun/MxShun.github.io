import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-solarized-light dark:bg-solarized-dark text-solarized-light dark:text-solarized-dark">
      <Header activePage="/" />
      <div className="relative z-20 flex h-full items-center">
        <div className="container flex-col justify-between h-2/3 mx-auto">
          <div className="text-center">
            <img
              src="/mxshun.jpg"
              className="mx-auto rounded-full w-28"
              alt="mxshun"
            />
            <p className="my-6 text-3xl font-bold">しゅん＠MxShun</p>
            <h2 className="max-w-5xl py-12 mx-auto text-lg">
              サイバーエージェントという会社で PM / スクラムマスター /
              バックエンドエンジニア をしています 💻
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
