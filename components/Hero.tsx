export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 h-screen text-xl sm:text-2xl md:text-3xl font-light text-black">

      <nav className="flex flex-row justify-between absolute p-3 top-4 sm:top-6 md:top-8 left-4 right-4 sm:left-8 sm:right-8 md:left-16 md:right-16 bg-phantasia-blue h-12 sm:h-14 md:h-15 rounded-xl sm:rounded-2xl">
        <img src={"/fs.svg"} />
        <img src={"/menu.svg"} />
      </nav>

      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full">
        <div className="text-center">
          <div>31st Jan - 1st Feb</div>
          <div>2026</div>
        </div>
        <img src={"/phantasia.svg"} className="w-full" alt="Phantaisa Logo" />
        <div>
          Hackathon
        </div>
      </div>


      <div className="absolute bottom-12 sm:bottom-16 md:bottom-24 w-fit px-12 sm:px-20 md:px-32 bg-phantasia-blue text-2xl sm:text-3xl md:text-4xl rounded-xl sm:rounded-2xl p-2 font-medium">
        Register Now
      </div>
    </section>
  )
}