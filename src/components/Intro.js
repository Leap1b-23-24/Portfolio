import { Loc } from "./icon/Introicon1";
import { LogoG } from "./icon/Introicon2";
import { Twit } from "./icon/Introicon3";
import { Social } from "./icon/Introicon4";
import { useContext } from "react";
import { themeContext } from "@/app/page";

export const Intro = () => {
  const { value } = useContext(themeContext);
  const logo = [LogoG, Twit, Social];
  return (
    <div className="dark:bg-[#030712] w-fill px-[16px] py-[64px] sm:w-full sm:px-[80px] sm:py-[96px]">
      <div className="w-fill sm:px-[32px] flex flex-col-reverse sm:flex-row gap-[48px]">
        <div className="w-fill sm:w-[768px]">
          <h2 className="dark:text-[#F9FAFB] mb-[8px] text-[#111827] text-4xl sm:text-6xl font-semibold sm:font-bold leading-10 ">
            Hi, I’m Sagar 👋
          </h2>
          <p className="dark:text-[#D1D5DB] text-left text-[#4B5563] text-[16px] font-normal leading-6">
            I&apos;m a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="font-normal text-[16px] text-[#4B5563] dark:text-[#D1D5DB] leading-6 flex gap-[8px] mt-[48px]">
            <Loc />
            <p>Ahmedabad, India</p>
          </div>
          <div className="font-normal text-[16px] text-[#4B5563] dark:text-[#D1D5DB] leading-6 flex gap-[8px] mt-[8px]">
            <img src="Icon2.png" />
            <p>Available for new projects</p>
          </div>
          <div className="flex mt-[48px]">
            {logo.map((Item, index) => (
              <Item key={index} />
            ))}
          </div>
        </div>

        <div className="sm:w-[400px] h-[300px] sm:h-[360px] relative">
          <img
            className="absolute w-[280px] h-[280px] sm:h-[320px] top-[20px] sm:top-[40px] left-[50%] sm:left-[120px] translate-x-[-50%] sm:translate-x-[0px]"
            src={!value ? "lightBackground.png" : "darkBackground.png"}
          />
          <img
            className="w-[240px] h-[280px] sm:w-[280px] sm:h-[320px] absolute left-[50%] sm:left-[80px] translate-x-[-50%] sm:translate-x-[0px]"
            src={!value ? "lightpic.png" : "darkpic.png"}
          />
        </div>
      </div>
    </div>
  );
};
