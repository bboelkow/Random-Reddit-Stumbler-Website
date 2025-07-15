"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">          <SectionTitle
            title="Simple and Affordable Premium Pricing"
            paragraph="Random Reddit Stumbler is free with advanced features! Premium users unlock NSFW mode and NSFW Creator mode, accessing 10,000+ carefully curated NSFW subreddits and creators. Enjoy advanced search through ALL subreddits (SFW + NSFW), multiple specialized favorites lists, and age-verified content for adults only."
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
  );
};

export default Pricing;
