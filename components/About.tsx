import React from "react";

const VerticalLine = () => (
  <svg
    width="4"
    height="500"
    viewBox="0 0 4 720"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="2" y1="0" x2="1.99997" y2="720" stroke="black" strokeWidth="4" />
  </svg>
);

export default function AboutComponent() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      <div className="w-full max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center">
          {/* Left side - Text content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-4">
            <div className="max-w-[500px]">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-black tracking-tight leading-none mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                ABOUT
              </h1>
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                Phantasia, the flagship event of the Fullstack Club, has evolved
                from a multi-event tech fest into a full-scale hackathon that
                celebrates innovation and collaboration. This year, it brings
                together developers, designers, and creators to tackle
                real-world challenges across multiple sponsor-driven tracks,
                pushing the limits of technology and full-stack development.
              </p>
            </div>
          </div>

          {/* Vertical line separator */}
          <div className="hidden lg:flex items-center justify-center shrink-0">
            <VerticalLine />
          </div>

          {/* Right side - Images grid */}
          <div className="flex-1 grid grid-rows-2 gap-3 sm:gap-4 px-4 sm:px-6 md:px-12 py-4 sm:py-6 md:py-8 w-full">
            {/* Top image */}
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/about1.png"
                alt="Phantasia Event Team 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom image */}
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/about2.png"
                alt="Phantasia Event Team 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
