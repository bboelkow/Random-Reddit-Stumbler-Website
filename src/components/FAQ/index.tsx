'use client';

import SectionTitle from "../Common/SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqData = [
  {
    id: 1,
    question: "What is Random Reddit Stumbler?",
    answer: (
      <>
        Reddit got rid of the r/random. So we created a new way to find random subreddits, but better. Random Reddit Stumbler is a free browser extension that helps you discover new subreddits and Reddit creators. The browser extension analyzes the filters you have chosen (subscribers, karma, top post time range) and then chooses a random subreddit or creator from a massive database that fits within those parameters. Break out of your Reddit bubble and explore communities you'd never find on the front page! This browser extension is available for{" "}
        <a 
          href="https://chromewebstore.google.com/detail/glhocjfoicokdkkbfeaijffjeooledmm?utm_source=item-share-cb" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          Google Chrome
        </a>
        ,{" "}
        <a 
          href="https://addons.mozilla.org/en-US/firefox/addon/random-reddit-stumbler/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          Mozilla Firefox
        </a>
        ,{" "}
        <a 
          href="https://chromewebstore.google.com/detail/glhocjfoicokdkkbfeaijffjeooledmm?utm_source=item-share-cb" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          Microsoft Edge
        </a>
        ,{" "}
        <a 
          href="https://chromewebstore.google.com/detail/glhocjfoicokdkkbfeaijffjeooledmm?utm_source=item-share-cb" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          Opera
        </a>
        ,{" "}
        <a 
          href="https://chromewebstore.google.com/detail/glhocjfoicokdkkbfeaijffjeooledmm?utm_source=item-share-cb" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          Brave
        </a>
        ,{" "}
        <a 
          href="https://apps.apple.com/us/app/orion-browser-by-kagi/id1484498200" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          Orion for iOS
        </a>
        {" "}and any other Chromium-based browser!
      </>
    )
  },
  {
    id: 2,
    question: "How do I install the extension?",
    answer: (
      <>
        You can install Random Reddit Stumbler directly from the{" "}
        <a 
          href="https://chromewebstore.google.com/detail/glhocjfoicokdkkbfeaijffjeooledmm?utm_source=item-share-cb" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          Chrome Web Store
        </a>
        {" "}or{" "}
        <a 
          href="https://addons.mozilla.org/en-US/firefox/addon/random-reddit-stumbler/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          Firefox Add-ons website
        </a>
        . Simply click the install button at the top of this website or search for 'Random Reddit Stumbler' in the respective browser store. Once installed, click on the extension icon (the puzzle piece), and you'll see the extension icon in the dropdown menu. Then click on the pin icon next to the Random Reddit Stumbler extension to pin it to your browser toolbar. Proceed to click the Random Reddit Stumbler icon on your browser toolbar to start discovering new subreddits and creators instantly!
      </>
    )
  },
  {
    id: 3,
    question: "Is Random Reddit Stumbler free?",
    answer: "Yes! Random Reddit Stumbler is completely free with all core features included. We offer an optional Premium upgrade that unlocks NSFW content and additional advanced features for users who want the complete experience. Check out the features section on this page for more details on the differences between the free and Premium versions."
  },
  {
    id: 4,
    question: "What's included in Premium?",
    answer: "Premium users get access to NSFW Mode featuring 80,000 NSFW subreddits, NSFW creator mode with 7,000+ curated creators, advanced search through ALL subreddits (SFW + NSFW), and specialized favorites lists for adult content."
  },
  {
    id: 5,
    question: "How many subreddits can I discover?",
    answer: "Our database includes over 250,000 active SFW subreddits! The free version gives you access to all SFW communities, while Premium adds access to 80,000 NSFW subreddits and 7,000 NSFW Creators as well."
  },
  {
    id: 6,
    question: "Does it work on mobile?",
    answer: (
      <>
        Currently, the only thoroughly tested way to access Random Reddit Stumbler on mobile is through the{" "}
        <a 
          href="https://apps.apple.com/us/app/orion-browser-by-kagi/id1484498200" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline font-medium"
        >
          Orion Mobile Browser for iOS
        </a>
        . With Orion Browser on iOS, the browser extension functions exactly as it does on desktop browsers with the exception to premium features. The functionality of premium features on Orion Browser for iOS is actively being worked on. Users have reported to be able to get Random Reddit Stumbler working on Android mobile browsers that support chrome extensions but we can not guarantee full functionality as we have yet to test them. A mobile application is planned for the future.
      </>
    )
  },
  {
    id: 7,
    question: "Can I save my favorite discoveries?",
    answer: "Absolutely! You can save your favorite subreddits and creators to multiple favorites lists. Premium users get additional specialized lists for organizing their NSFW discoveries. Once your lists are created, you can easily browse through them and manage them from the extension's favorites section. Create your own custom lists to keep track of the communities you love!"
  },
  {
    id: 8,
    question: "How often is the subreddit database updated?",
    answer: "We update our databases bi-monthly to include new active subreddits and remove inactive ones (Reddit is quick with banning and removing subreddits). This ensures you're always discovering fresh, active communities with real engagement."
  }
];

const FAQ = () => {
  return (
    <>
      <section className="relative z-20 overflow-hidden bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]">
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 blur-3xl dark:from-orange-600/10 dark:to-orange-700/10"></div>
          </div>
          <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4">
            <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-orange-500/20 to-orange-600/20 blur-3xl dark:from-orange-600/10 dark:to-orange-700/10"></div>
          </div>
        </div>
        <div className="container">
          <SectionTitle
            title="Frequently Asked Questions"
            paragraph="Get answers to the most common questions about Random Reddit Stumbler and discover how to make the most of your Reddit exploration experience."
            center
            width="665px"
          />

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:gap-x-12">
              {faqData.map((faq, index) => {
                const [ref, isVisible] = useScrollReveal() as [React.RefObject<HTMLDivElement>, boolean];
                return (
                  <div
                    key={faq.id}
                    ref={ref}
                    className={`transform rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark dark:shadow-three md:p-8 transition-all duration-1000 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="mb-4 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl">
                      {faq.question}
                    </h3>
                    <p className="text-base leading-relaxed text-body-color dark:text-gray-300">
                      {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default FAQ;
