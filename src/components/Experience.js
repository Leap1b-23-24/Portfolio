import { Button } from "./Button";

export const Experience = () => {
  const exps = [
    {
      logo: "logoUp.png",
      position: "Sr. Frontend Developer",
      exp: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      per: "Nov 2021 - Present",
    },
    {
      logo: "logoUp.png",
      position: "Team Lead",
      exp: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      per: "Jul 2017 - Oct 2021",
    },
    {
      logo: "logoUp.png",
      position: "Full Stack Developer",
      exp: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
      per: "Dec 2015 - May 2017",
    },
  ];
  return (
    <div className="w-full sm:h-[1140px] dark:bg-[#111827] bg-[#F9FAFB] px-[16px] py-[64px] sm:px-[80px] sm:py-[96px]">
      <div className="w-full sm:px-[32px] flex flex-col items-center">
        <Button text="Experience" />
        <p className="text-center mb-[48px] dark:text-[#D1D5DB] text-[#4B5563] font-normal text-xl">
          Here is a quick summary of my most recent experiences:
        </p>

        {exps.map((exp, index) => (
          <div
            key={index}
            className="sm:w-fill p-[32px] dark:bg-[#1F2937] bg-[#FFFFFF] rounded-[12px] mb-[24px] sm:mb-[48px] shadow-md"
          >
            <div className="gap-[16px] sm:gap-[0] sm:w-fill flex flex-col sm:flex-row sm:justify-between">
              <div className="sm:w-[206px]">
                <img className="w-[102px] h-[28px]" src={exp.logo} />
              </div>
              <div className="order-1 sm:order-0 sm:w-[384px]">
                <p className="text-xl dark:text-[#F9FAFB] text-[#111827] font-semibold mb-[16px]">
                  {exp.position}
                </p>
                <ul className="text-base dark:text-[#D1D5DB] text-[#4B5563] font-normal flex flex-col gap-[4px]">
                  {exp.exp.map((item, index) => {
                    return (
                      <li key={index} className="flex gap-[5px]">
                        <span> &#x2022;</span>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p className="text-base sm:order-1 dark:text-[#E5E7EB] text-[#4B5563] font-normal">
                {exp.per}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
