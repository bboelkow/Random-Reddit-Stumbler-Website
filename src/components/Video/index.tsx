"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="container">
          <SectionTitle
            title="See Random Reddit Stumbler in Action"
            paragraph="Watch how easily you can discover new subreddits, create a favorites list, browse your favorites list, filter by popularity, and break out of your algorithm bubble with just one click."
            center
            mb="80px"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[1000px] overflow-hidden rounded-md">
                <div className="relative aspect-video items-center justify-center group">
                  {!isPlaying ? (
                    <>
                      <div className="relative w-full h-full overflow-hidden rounded-xl">
                        <Image
                          src="/images/video/RRS 1.3.0 website thumbnail.jpg"
                          alt="Random Reddit Stumbler Demo Video"
                          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                          width={1920}
                          height={1080}
                          priority
                        />
                        <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0"></div>
                      </div>
                      <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                        <button
                          aria-label="Play video"
                          onClick={() => setPlaying(true)}
                          className="group/btn relative flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-all duration-300 hover:bg-white hover:scale-110"
                        >
                          <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping"></div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-orange-600 relative ml-1"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    </>
                  ) : (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/45TGyuznh7w?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4">
              <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/10 blur-3xl dark:from-orange-600/5 dark:to-orange-700/5"></div>
            </div>
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4">
              <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-orange-500/10 to-orange-600/10 blur-3xl dark:from-orange-600/5 dark:to-orange-700/5"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
