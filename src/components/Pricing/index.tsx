"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4">
            <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500/15 to-orange-600/15 blur-3xl dark:from-orange-600/10 dark:to-orange-700/10"></div>
          </div>
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4">
            <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-orange-500/15 to-orange-600/15 blur-3xl dark:from-orange-600/10 dark:to-orange-700/10"></div>
          </div>
        </div>
        
      <div className="container relative">          <SectionTitle
            title="Simple and Affordable Premium Pricing"
            paragraph="Random Reddit Stumbler is free with advanced features! Premium users unlock NSFW mode and NSFW Creator mode, accessing 80,000+ carefully curated NSFW subreddits and 7,000+ creators. Enjoy advanced search through ALL subreddits (SFW + NSFW), multiple specialized favorites lists, and age-verified content for adults only."
            center
            width="665px"
          />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Free"
            price="0"
            duration="forever"
            subtitle="No credit card required. Start exploring now."
          >
            <OfferList text="SFW Mode (250,000+ subreddits)" status="active" />
            <OfferList text="SFW Search Bar" status="active" />
            <OfferList text="One Favorites List" status="active" />
            <OfferList text="Basic Random Discovery" status="active" />
            <OfferList text="Overlay Mode" status="active" />
            <OfferList text="NSFW Mode" status="inactive" />
            <OfferList text="NSFW Creator Mode" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Premium"
            price="0.99"
            duration="month"
            subtitle="$0.99/month or $4.99/year. Save 50% with yearly billing."
          >
            <OfferList text="NSFW Mode (80,000+ subreddits)" status="active" />
            <OfferList text="NSFW Creator Mode (7,000+ creators)" status="active" />
            <OfferList text="Advanced Search (All subreddits)" status="active" />
            <OfferList text="Multiple Favorites Lists" status="active" />
            <OfferList text="Age-Verified Content" status="active" />
            <OfferList text="Free Updates" status="active" />
            <OfferList text="Lifetime Access" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Lifetime"
            price="9.99"
            duration="lifetime"
            subtitle="One-time payment. Best value."
          >
            <OfferList text="NSFW Mode (80,000+ subreddits)" status="active" />
            <OfferList text="NSFW Creator Mode (7,000+ creators)" status="active" />
            <OfferList text="Advanced Search (All subreddits)" status="active" />
            <OfferList text="Multiple Favorites Lists" status="active" />
            <OfferList text="Age-Verified Content" status="active" />
            <OfferList text="Free Updates" status="active" />
            <OfferList text="Lifetime Access" status="active" />
          </PricingBox>
        </div>
      </div>


    </section>
  );
};

export default Pricing;
