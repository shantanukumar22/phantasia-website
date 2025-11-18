export default function Timeline() {
  const schedule1 = [
    { time: "08:30 - 10:30", event: "Registration" },
    { time: "10:30 - 12:30", event: "Orientation" },
    { time: "12:00 Onwards", event: "Hackathon Begins", bold: true },
    { time: "15:00 - 17:00", event: "Idea Pitching" },
    { time: "15:00 - 17:00", event: "Snacks (By Us)" }
  ];

  const schedule2 = [
    { time: "08:00 Onwards", event: "Breakfast (By Us)" },
    { time: "12:00 (Sharp)", event: "Hackathon Ends", bold: true },
    { time: "12:30 - 14:30", event: "Evaluation Round" },
    { time: "15:00 Onwards", event: "Closing Ceremony" }
  ];

  return (
    <div className="flex flex-col w-full h-full rounded-2xl px-4 sm:px-6 md:px-12 lg:px-24 font-extrabold gap-6 sm:gap-8 text-black py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-center sm:text-left">
        TIMELINE
      </h1>
      <TimelineComponent title="31st Jan | Day 1" scheduleEntry={schedule1} />
      <TimelineComponent title="1st Feb | Day 2" scheduleEntry={schedule2} />
    </div>
  );
}

type ScheduleEntry = {
  time: string;
  event: string;
  bold?: boolean;
};

function TimelineComponent({
  title,
  scheduleEntry
}: {
  title: string;
  scheduleEntry: ScheduleEntry[];
}) {
  return (
    <div className="flex flex-col w-full gap-6 sm:gap-8 p-3 sm:p-4 md:p-8 pt-0">
      {/* Title */}
      <div className="flex justify-center">
        <h2 className="bg-black text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-fit p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl text-center">
          {title}
        </h2>
      </div>

      <div className="relative flex flex-col items-center gap-4 sm:gap-6 md:gap-3 py-6 sm:py-8">
        {/* Center line */}
        <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-black hidden sm:block"></div>

        {scheduleEntry.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              } justify-center`}
            >
              <div
                className="border-2 border-black rounded-lg px-3 py-3 sm:py-4 sm:w-[45%] w-[95%] max-w-md sm:max-w-none bg-white shadow-sm"
              >
                <span
                  className={item.bold ? "font-bold" : "font-light"}
                >
                  {item.time}
                </span>{" "}
                | <span>{item.event}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
