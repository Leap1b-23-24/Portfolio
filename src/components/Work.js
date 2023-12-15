import { Button } from "./Button";
import { themeContext } from "@/app/page";
import { useContext } from "react";

export const Work = () => {
  const { value } = useContext(themeContext);
  const but = [
    "React",
    "Next.js",
    "Typescript",
    "Next.Js",
    "PostreSQL",
    "Tailwindcss",
    "Figma",
    "Cypress",
    "Storybook",
    "Git",
  ];
  const cards = [
    {
      img: "workpic.png",
      title: "Fiskil",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
      img: "workpic.png",
      title: "Fiskil",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
      img: "workpic.png",
      title: "Fiskil",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
  ];
  return (
    <div
      id="Work"
      className="w-full h-full dark:bg-[#030712] bg-[#FFFFFF] px-[16px] py-[64px] sm:px-[80px] sm:py-[96px]"
    >
      <div className="w-full sm:px-[32px] flex flex-col items-center">
        <Button text="Work" />
        <p className="text-center mb-[48px] dark:text-[#D1D5DB] text-[#4B5563] font-normal text-xl">
          Some of the noteworthy projects I have built:
        </p>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${
              index % 2 == 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } flex flex-col overflow-hidden sm:w-[1152px] rounded-[12px] shadow-md mb-[24px] sm:mb-[48px]`}
          >
            <div className="flex grow basis-0 p-[32px] sm:p-[48px] dark:bg-[#374151] bg-[#F3F4F6] border-r-[1px] dark:border-r-[#1F2937] border-r-[#F3F4F6]">
              <img src={card.img} />
            </div>
            <div className="dark:bg-[#1F2937]  flex grow basis-0 p-[32px] sm:p-[48px]">
              <div>
                <p className="font-semibold text-xl dark:text-[#F9FAFB] text-[#111827] mb-[24px]">
                  {card.title}
                </p>
                <p className="text-base font-normal dark:text-[#D1D5DB] text-[#4B5563] mb-[24px]">
                  {card.text}
                </p>
                <div className="flex flex-wrap gap-[8px] mb-[24px]">
                  {but.map((item, index) => (
                    <p
                      key={index}
                      className="dark:text-[#D1D5DB] text-[#4B5563] text-sm px-[20px] py-[4px] rounded-[12px] dark:bg-[#374151] bg-[#E5E7EB]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <div className="p-[6px] rounded-[8px]">
                  <img className="w-[36px] h-[36px]" src="workicon.png" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
