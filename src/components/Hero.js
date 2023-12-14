import { Location } from "@/components/assets/Location";
import { Github } from "./assets/Github";
import { Twitter } from "./assets/Twitter";
import { Figma } from "./assets/Figma";

export const Hero = () => {
  return (
    <>
      <div className="relative px-[80px] py-[96px]">
        <div className="flex sm:flex-row flex-col-reverse px-[32px] gap-[48px]">
          <div className="basis-2/3">
            <h1 className="text-[60px] mb-[8px] font-bold">Hi, I’m Sagar 👋</h1>
            <p className="text-[16px] mb-[48px]">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
            <div className="flex">
              <Location />
              Ahmedabad, India
            </div>
            <div className="flex items-center">
              <img className="w-[24px] h-[24px]" src="Icon.png"></img>
              Available for new projects
            </div>
            <div className="flex mt-[48px] gap-[12px]">
              <Github />
              <Twitter />
              <Figma />
            </div>
          </div>
          <div className="w-[400px] h-[360px] basis-1/3 relative">
            <img
              className="sm:w-[280px] sm:h-[320px] w-[240px] h-[280px] border-[5px] border-white relative z-10"
              src="Pic2.png"
            ></img>
            <div className="sm:w-[280px] sm:h-[320px] w-[280px] h-[280px] bg-[#E5E7EB] absolute sm:top-[25px] sm:left-[20px] top-[20px] left-[-20px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
