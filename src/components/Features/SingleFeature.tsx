import { Feature } from "@/types/feature";

'use client';

import { Brand } from "@/types/brand";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SingleFeature = ({ feature, delay = 0 }: { feature: Feature; delay?: number }) => {
  const { icon, title, paragraph } = feature;
  const [ref, isVisible] = useScrollReveal() as [React.RefObject<HTMLDivElement>, boolean];
  
  return (
    <div 
      ref={ref}
      className={`w-full transform opacity-0 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="group h-full">
        <div className="relative h-full rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 transition-all duration-300 group-hover:scale-110 dark:from-orange-900/20 dark:to-orange-900/10 dark:text-orange-400">
            {icon}
          </div>
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {paragraph}
          </p>
          {/* Decorative gradient line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
