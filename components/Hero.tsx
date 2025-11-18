"use client";
export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 min-h-screen h-screen text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-black">

      <nav className="flex flex-row justify-between items-center absolute p-2 sm:p-3 top-4 sm:top-6 md:top-8 left-4 right-4 sm:left-8 sm:right-8 md:left-16 md:right-16 bg-phantasia-blue h-10 sm:h-12 md:h-14 lg:h-15 rounded-lg sm:rounded-xl md:rounded-2xl">
        <img src={"/fs.svg"} className="h-6 sm:h-8 md:h-10 w-auto" alt="FS Logo" />
        <img src={"/menu.svg"} className="h-6 sm:h-8 md:h-10 w-auto" alt="Menu" />
      </nav>

      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-7xl">
        <div className="text-center text-sm sm:text-base md:text-xl lg:text-2xl">
          <div>31st Jan - 1st Feb</div>
          <div>2026</div>
        </div>
        <img src={"/phantasia.svg"} className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-4" alt="Phantasia Logo" />
        <div className="text-base sm:text-xl md:text-2xl lg:text-3xl">
          Hackathon
        </div>
      </div>


      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-24 w-fit px-6 sm:px-12 md:px-20 lg:px-32 bg-phantasia-blue text-lg sm:text-2xl md:text-3xl lg:text-4xl rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 font-medium cursor-pointer hover:opacity-90 transition-opacity">
        Register Now
      </a>
    </section>
  );
}
