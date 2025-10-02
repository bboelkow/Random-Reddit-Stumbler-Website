import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative z-10 pt-[120px] pb-[90px] overflow-hidden"
      >
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4">
            <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/10 blur-3xl dark:from-orange-600/5 dark:to-orange-700/5"></div>
          </div>
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4">
            <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-orange-500/10 to-orange-600/10 blur-3xl dark:from-orange-600/5 dark:to-orange-700/5"></div>
          </div>
        </div>

        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-gray-900 dark:text-white sm:text-4xl md:text-[45px]">
              Main Features
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 md:text-lg">
              Discover Reddit's hidden gems with multiple Reddit enhancing features! Enhance your Reddit experience by utilizing an advanced overlay system, keyboard shortcuts, custom subreddit favorites lists, custom feeds, a better search bar, and much more! Browse randomly through 250,000+ SFW subreddits and 80,000+ NSFW communities with lightning-fast performance and enhanced security features.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <SingleFeature 
                key={feature.id} 
                feature={feature} 
                delay={(index % 3) * 0.1} // Stagger animation delays
              />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="https://chromewebstore.google.com/detail/glhocjfoicokdkkbfeaijffjeooledmm?utm_source=item-share-cb"
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:from-orange-600 dark:to-orange-700"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="relative flex items-center">
                Start Exploring Now
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
