"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center lg:items-start">
            {/* Text Content */}
            <div className="w-full px-4 lg:w-2/5 xl:w-1/3">
              <div className="mx-auto max-w-[600px] text-center lg:text-left">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                  Random Reddit Stumbler
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl">
                  Add a random subreddit button to Reddit! Use Random Reddit Stumbler to explore thousands of subreddits you never knew existed. Finding a random subreddit to spark a new interest has never been easier!
                </p>
                <p className="mb-8 text-base leading-relaxed text-body-color/80 dark:text-body-color-dark/80">
                  Find something you like? Add it to a favorites list and browse directly from the list you created! Available for Chrome, Firefox, Edge, Opera, Brave and more!
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">                  <Link
                    href="https://chromewebstore.google.com/detail/glhocjfoicokdkkbfeaijffjeooledmm?utm_source=item-share-cb"
                    className="hero-button inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5"
                    style={{ 
                      backgroundColor: '#ea580c', 
                      borderColor: '#ea580c',
                      border: '2px solid #ea580c',
                      backgroundImage: 'none',
                      boxShadow: 'none',
                      color: 'white',
                      background: '#ea580c'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#c2410c';
                      e.currentTarget.style.borderColor = '#c2410c';
                      e.currentTarget.style.background = '#c2410c';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ea580c';
                      e.currentTarget.style.borderColor = '#ea580c';
                      e.currentTarget.style.background = '#ea580c';
                    }}
                  >
                    Install on Chrome
                  </Link>
                  <Link
                    href="https://addons.mozilla.org/en-US/firefox/addon/random-reddit-stumbler/"
                    className="hero-button inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5"
                    style={{ 
                      backgroundColor: '#ea580c', 
                      borderColor: '#ea580c',
                      border: '2px solid #ea580c',
                      backgroundImage: 'none',
                      boxShadow: 'none',
                      color: 'white',
                      background: '#ea580c'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#c2410c';
                      e.currentTarget.style.borderColor = '#c2410c';
                      e.currentTarget.style.background = '#c2410c';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ea580c';
                      e.currentTarget.style.borderColor = '#ea580c';
                      e.currentTarget.style.background = '#ea580c';
                    }}
                  >
                    Install on Firefox
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500"
                  >
                    See Features
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Video Promo */}
            <div className="mt-16 w-full px-4 lg:mt-0 lg:w-3/5 xl:w-2/3">
              <div className="mx-auto max-w-[800px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-700/50">
                <video 
                  className="w-full h-auto"
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
        
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        </div>
      </section>
    </>
  );
};

export default Hero;
