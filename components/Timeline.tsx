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
    <div className="flex flex-col w-full h-full rounded-2xl px-6 sm:px-12 lg:px-24 font-extrabold gap-8 text-black">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center sm:text-left">
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
    <div className="flex flex-col w-full gap-8 p-4 sm:p-8 pt-0">
      {/* Title */}
      <div className="flex justify-center">
        <h2 className="bg-black text-white text-2xl sm:text-4xl lg:text-5xl w-fit p-5 rounded-2xl text-center">
          {title}
        </h2>
      </div>

      <div className="relative flex flex-col items-center gap-6 sm:gap-3 py-8">
        {/* Center line */}
        <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-black hidden sm:block"></div>

        {scheduleEntry.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex w-full text-lg sm:text-2xl font-light ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              } justify-center`}
            >
              <div
                className="border-2 border-black rounded-lg px-3 py-4 sm:w-[45%] w-[90%] bg-white shadow-sm"
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
