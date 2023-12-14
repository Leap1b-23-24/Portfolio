import { Button } from "./Button";
import { useContext } from "react";
import { themeContext } from "@/app/page";

export const Skills = () => {
  const { value } = useContext(themeContext);
  const skills = [
    { logo: "tech.svg", text: "Javascript" },
    { logo: "tech2.svg", text: "Typescript" },
    { logo: "tech3.png", text: "React" },
    { logo: "tech4.png", text: "Next.js" },
    { logo: "tech5.svg", text: "Node.js" },
    {
      logo: !value ? "tech6.svg" : "darkexpress.png",
      text: "Express.js",
    },
    { logo: "tech7.svg", text: "Nest.js" },
    { logo: !value ? "tech8.svg" : "darksocket.png", text: "Socket.io" },
    { logo: "tech9.svg", text: "PostgreSQL" },
    { logo: "tech10.svg", text: "MongoB" },
    { logo: "tech11.svg", text: "Sass/Scss" },
    { logo: "tech12.svg", text: "Tailwindcss" },
    { logo: "tech13.svg", text: "Figma" },
    { logo: !value ? "tech16.svg" : "darkcypress.png", text: "Cypress" },
    { logo: "tech15.svg", text: "Storybook" },
    { logo: "tech16.svg", text: "Git" },
  ];

  return (
    <div
      id="Testimonials"
      className="w-full sm:h-[560px] dark:bg-[#030712] bg-[#FFFFFF] px-[16px] py-[64px] sm:px-[80px] sm:py-[96px]"
    >
      <div className="w-full sm:px-[32px] flex flex-col items-center">
        <Button text="Skills" />
        <p className="text-center mb-[48px] dark:text-[#D1D5DB] text-[#4B5563] font-normal text-xl">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="w-full sm:w-full">
          <div className="grid grid-cols-3 sm:grid-cols-8 gap-y-[48px]">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-[8px] items-center">
                <img className="w-[64px] h-[64px]" src={skill.logo} />
                <p className="dark:text-[#D1D5DB] text-[#4B5563] text-lg font-normal">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
