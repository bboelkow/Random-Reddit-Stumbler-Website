import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            {/* Text Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto max-w-[600px] text-center lg:text-left">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Random Reddit Stumbler
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl md:text-2xl">
                  Discover Reddit's hidden gems for free! Instantly jump to random subreddits, filter by size, save favorites, and more with the Random Reddit Stumbler browser extension.
                </p>
                <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Break out of your Reddit bubble and explore thousands of communities you'd never find on the front page. One click, endless discovery.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
                  <Link
                    href="https://chromewebstore.google.com/detail/glhocjfoicokdkkbfeaijffjeooledmm?utm_source=item-share-cb"
                    className="rounded-xs bg-orange-600 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-orange-700"
                  >
                    Install on Chrome
                  </Link>
                  <Link
                    href="#features"
                    className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    See Features
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Video Promo - Replacing GIF */}
            <div className="mt-12 w-full px-4 lg:mt-0 lg:w-1/2">
              <div className="mx-auto max-w-[600px]">
                <video 
                  className="w-full rounded-lg shadow-lg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/images/hero/RRS-Promo-for-Website2-Webm.webm" type="video/webm" />
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
