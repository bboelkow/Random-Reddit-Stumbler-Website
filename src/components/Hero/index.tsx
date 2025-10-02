"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container relative max-w-[1320px] mx-auto px-4">
          <div className="relative flex flex-col lg:flex-row items-start gap-16">
            {/* Text Content - Fixed width container */}
            <div className="w-full lg:w-[480px] flex-shrink-0">
              <div className="relative mx-auto text-center">
                <div className="animate-fade-in-up">
                  <h1 className="mb-6 text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-500 dark:to-orange-300 sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                    Random Reddit Stumbler
                  </h1>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl">
                    Add a random subreddit button to Reddit! Use Random Reddit Stumbler to explore thousands of subreddits you never knew existed. Finding a random subreddit to spark a new interest has never been easier!
                  </p>
                  <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    Find something you like? Add it to a favorites list and browse directly from the list you created! Available for Chrome, Firefox, Edge, Opera, Brave and more!
                  </p>
                </div>
                <div className="flex flex-col gap-4 animate-fade-in-up text-center lg:text-left" style={{ animationDelay: "0.2s" }}>
                  <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
                    <Link
                      href="https://chromewebstore.google.com/detail/glhocjfoicokdkkbfeaijffjeooledmm?utm_source=item-share-cb"
                      className="group relative flex-1 sm:flex-none sm:min-w-[160px] inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:from-orange-600 dark:to-orange-700"
                    >
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                      <span className="relative flex items-center whitespace-nowrap">
                        Install on Chrome
                        <svg className="ml-2 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      href="https://addons.mozilla.org/en-US/firefox/addon/random-reddit-stumbler/"
                      className="group relative flex-1 sm:flex-none sm:min-w-[160px] inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:from-orange-600 dark:to-orange-700"
                    >
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                      <span className="relative flex items-center whitespace-nowrap">
                        Install on Firefox
                        <svg className="ml-2 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <Link
                    href="#features"
                    className="group relative inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 ease-out hover:scale-105 hover:bg-gray-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <span className="relative flex items-center whitespace-nowrap">
                      See Features
                      <svg className="ml-2 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </Link>
                </div>
                
                {/* Stats Section */}
                <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-500">330K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Subreddits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-500">300+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
                  </div>
                  <div className="text-center sm:col-span-1 col-span-2">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-500">4.8★</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Promo */}
            <div className="relative z-10 animate-fade-in-up flex-grow w-full lg:max-w-[720px]" style={{ animationDelay: "0.3s" }}>
              <div className="group overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 to-orange-50 p-2 shadow-2xl transition-all duration-300 hover:shadow-orange-500/20 dark:from-orange-900/20 dark:to-orange-900/10">
                <div className="overflow-hidden rounded-2xl">
                  <video 
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/images/hero/RRS 1.3.0 Promo for Website2_compressedMORE.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-600/30 blur-3xl dark:from-orange-600/20 dark:to-orange-700/20"></div>
          </div>
          <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4">
            <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-orange-500/30 to-orange-600/30 blur-3xl dark:from-orange-600/20 dark:to-orange-700/20"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
