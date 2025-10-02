'use client';

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import React from "react";

const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  const handleExtensionDownload = () => {
    if (typeof window !== 'undefined') {
      window.open(
        "https://chromewebstore.google.com/detail/glhocjfoicokdkkbfeaijffjeooledmm?utm_source=item-share-cb",
        "_blank"
      );
    }
  };



  const [ref, isVisible] = useScrollReveal() as [React.RefObject<HTMLDivElement>, boolean];

  return (
    <div className="w-full" ref={ref}>
      <div className={`shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-xs bg-white px-8 py-10 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-[32px] font-bold text-black dark:text-white">
            ${price}
            {duration !== "lifetime" && duration !== "forever" && (
              <span className="time text-body-color text-lg font-medium">
                /{duration}
              </span>
            )}
            {duration === "lifetime" && (
              <span className="time text-body-color text-lg font-medium"> lifetime</span>
            )}
          </h3>
          <h4 className="text-dark mb-2 text-xl font-bold dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="text-body-color mb-7 text-base">{subtitle}</p>
        <div className="border-body-color/10 mb-8 border-b pb-8 dark:border-white/10 flex flex-col gap-3">
          <button
            type="button"
            className="rounded-xs bg-orange-600 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-orange-700 cursor-pointer"
            onClick={handleExtensionDownload}
          >
            Extension Download
          </button>
        </div>
        <div>{children}</div>
        <div className="absolute right-0 bottom-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
