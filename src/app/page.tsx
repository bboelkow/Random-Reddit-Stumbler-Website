import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
// import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
// import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Reddit Stumbler – Discover New Subreddits Instantly",
  description:
    "Break out of your Reddit bubble! Instantly jump to random subreddits, filter by size, save favorites, and more with the Random Reddit Stumbler browser extension.",
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
      {/* <Brands /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
