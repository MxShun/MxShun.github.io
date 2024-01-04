export default function Home() {
  return (
      <main className="relative h-screen overflow-hidden font-mono bg-white dark:bg-gray-800">
        <header className="z-30 flex items-center w-full h-24 sm:h-32">
          <div className="container flex items-center justify-between px-6 mx-auto">
            <div className="flex items-center text-lg font-black text-gray-800 dark:text-white">
              <a href="https://twitter.com/MxShun" rel="noopener noreferrer" target="_blank" className="flex items-center hover:text-black">
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
              <nav className="items-center hidden text-lg text-gray-800 font-sen dark:text-white lg:flex">
                <a href="#" className="flex px-6 py-2 hover:text-black">
                  Works
                </a>
                <a href="#" className="flex px-6 py-2 hover:text-black">
                  Resume
                </a>
                <a href="#" className="flex px-6 py-2 hover:text-black">
                  Services
                </a>
                <a href="#" className="flex px-6 py-2 hover:text-black">
                  Contact
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
          <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
            <div className="flex flex-col">
              <img src="/mxshun.jpg" className="mx-auto rounded-full w-28"/>
              <p className="my-6 text-3xl text-center dark:text-white">
                Hi, I&#x27;m Charlie 🤘
              </p>
              <h2 className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl dark:text-white">
                Building digital products, brands, and experiences.
              </h2>
              <div className="flex items-center justify-center mt-4">
                <a href="#"
                   className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                  CONNECT WITH ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
