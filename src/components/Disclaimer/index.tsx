import React from "react";

const Disclaimer = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
              Disclaimer and Privacy Policy
            </h2>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Last updated: July 16, 2025
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Not Affiliated with Reddit
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                <p>
                  Random Reddit Stumbler is an independent browser extension and is not affiliated with Reddit, Inc.
                </p>
                <p>
                  Reddit and the Reddit alien logo are registered trademarks of Reddit, Inc. All subreddit and creator data used by this extension is sourced from publicly available information and is used strictly for discovery purposes under fair use.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Adult Content Disclaimer
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                <p>
                  This extension includes access to NSFW (Not Safe For Work) and adult-oriented content. Access to such content is restricted to users who are 18 years of age or older.
                </p>
                <p className="font-semibold">
                  By enabling NSFW features, you confirm that:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>You are at least 18 years old, or of legal age in your jurisdiction.</li>
                  <li>You understand that enabling this feature may expose you to explicit content.</li>
                  <li>You are solely responsible for complying with all applicable laws and regulations regarding such content.</li>
                </ul>
                <p>
                  NSFW features are disabled by default and can only be enabled through an age-confirmation gate within the extension.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Privacy Policy
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                <p>
                  Random Reddit Stumbler is designed with privacy in mind. The extension does not collect, store, or transmit any personal user data.
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>All randomization, filtering, and browsing features operate entirely within the user&apos;s local browser environment.</li>
                  <li>No analytics, tracking technologies, or telemetry are used.</li>
                  <li>All user preferences, favorites, and settings are stored locally in the browser and never transmitted to any external server.</li>
                  <li>If a user upgrades to the Premium version, payment processing is handled securely by a third-party provider. Random Reddit Stumbler does not collect or store any payment information or personal data in connection with Premium purchases.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Contact
              </h3>
              <div className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                <p>
                  For any questions regarding this policy or the extension, please contact:{" "}
                  <a 
                    href="mailto:probrowserextension.help@gmail.com"
                    className="text-primary hover:underline"
                  >
                    probrowserextension.help@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
