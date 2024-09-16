export default function Home() {
  return (
      <main className="relative h-screen overflow-hidden bg-solarized-light dark:bg-solarized-dark">
        <header className="z-30 flex items-center w-full h-24 sm:h-32">
          <div className="container flex items-center justify-between px-6 mx-auto">
            <div className="text-lg text-solarized-light dark:text-solarized-dark">
              <a href="https://x.com/MxShun" rel="noopener noreferrer" target="_blank" className="flex items-center hover:text-solarized-hover">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </g>
                </svg>
                ＠MxShun
              </a>
            </div>
            <div className="flex items-center">
              <nav className="hidden text-lg text-solarized-light dark:text-solarized-dark lg:flex">
                <a href="/" className="flex px-6 py-2 text-solarized-active">
                  ホーム
                </a>
                <a href="/bio" className="flex px-6 py-2 hover:text-solarized-hover">
                  経歴
                </a>
                <a href="/honor" className="flex px-6 py-2 hover:text-solarized-hover">
                  資格
                </a>
                <a href="/talks" className="flex px-6 py-2 hover:text-solarized-hover">
                  登壇
                </a>
                <a href="/posts" className="flex px-6 py-2 hover:text-solarized-hover">
                  記事
                </a>
                <a href="/guitars" className="flex px-6 py-2 hover:text-solarized-hover">
                  ギター
                </a>
              </nav>
              <button className="flex flex-col ml-4 lg:hidden">
                    <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
              </button>
            </div>
          </div>
        </header>
        <div className="relative z-20 flex items-center">
          <div className="container flex-col justify-between px-6 py-24 mx-auto">
            <div className="text-center text-solarized-light dark:text-solarized-dark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mxshun.jpg" className="mx-auto rounded-full w-28" alt="MxShun"/>
              <p className="my-6 text-3xl font-bold">
                しゅん＠MxShun
              </p>
              <h2 className="max-w-5xl py-12 mx-auto text-lg">
                サイバーエージェントという会社で PM / スクラムマスター / Webバックエンドエンジニア をしています 💻<br/>
                Go (echo) / Kotlin (Spring) / AWS が基本スキルセット 🐧 私個人へのご依頼等は X DM まで 📧
              </h2>
            </div>
          </div>
        </div>
      </main>
  )
}
