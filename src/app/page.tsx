import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import FAQ from "@/components/FAQ";
// import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
// import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Reddit Stumbler – Discover new Subreddits with a click!",
  description:
    "Discover Reddit's hidden gems for free! Instantly jump to random subreddits, filter by size, save favorites, browse favorites, and more with the Random Reddit Stumbler browser extension.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Testimonials />
      <Pricing />
      <FAQ />
      {/* <Brands /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
