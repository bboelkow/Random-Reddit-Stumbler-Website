import SectionTitle from "../Common/SectionTitle";

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
    answer: "Yes! Random Reddit Stumbler is completely free with all core features included. We offer an optional Premium upgrade that unlocks NSFW content and additional advanced features for users who want the complete experience."
  },
  {
    id: 4,
    question: "What's included in Premium?",
    answer: "Premium users get access to NSFW subreddit discovery, NSFW creator mode with 10,000+ curated creators, advanced search through ALL subreddits (SFW + NSFW), and specialized favorites lists for adult content."
  },
  {
    id: 5,
    question: "How many subreddits can I discover?",
    answer: "Our database includes over 270,000+ active subreddits/creators! The free version gives you access to all SFW communities, while Premium adds access to NSFW subreddits and NSFW Creators as well."
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
        . With Orion Browser on iOS, the browser extension functions exactly as it does on desktop browsers. Users have reported to be able to get Random Reddit Stumbler working on Android mobile browsers that support chrome extensions but we can not guarantee full functionality as we have yet to test them. A mobile application is planned for the future.
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
      <section id="faq" className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Frequently Asked Questions"
            paragraph="Get answers to the most common questions about Random Reddit Stumbler and discover how to make the most of your Reddit exploration experience."
            center
            width="665px"
          />

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:gap-x-12">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark dark:shadow-three md:p-8"
                >
                  <h3 className="mb-4 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl">
                    {faq.question}
                  </h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-gray-300">
                    {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-[-1]">
          <svg
            width="239"
            height="601"
            viewBox="0 0 239 601"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-184.451"
              y="600.973"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -184.451 600.973)"
              fill="url(#paint0_linear_93:235)"
            />
            <rect
              opacity="0.3"
              x="-188.201"
              y="385.272"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -188.201 385.272)"
              fill="url(#paint1_linear_93:235)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_93:235"
                x1="-90.1184"
                y1="420.414"
                x2="-90.1184"
                y2="1131.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_93:235"
                x1="-159.441"
                y1="204.714"
                x2="-159.441"
                y2="915.952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default FAQ;
