import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Reddit Stumbler – Find random subreddits with a click!",
  description: "Add a random subreddit button to Reddit for free! Instantly jump to random subreddits using the random subreddit generator, filter by size, save favorites, browse favorites, and more with the Random Reddit Stumbler browser extension.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}

