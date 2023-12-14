import ThemeButton from "@/components/DarkmodeBtn";
import { useState } from "react";
import { DrawBar } from "@/components/drawBar";
import { NavButtons } from "@/components/NavButtons";
export function NavBar(props) {
  const [isShown, setShow] = useState(true);
  const showBanner = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {<DrawBar function={showBanner} isShown={isShown} />}
      <div
        className="w-screen h-[60px] flex justify-center items-center bg-[#FFFFFF] text-black
         dark:bg-[#030712] dark:text-[#D1D5DB] fixed top-0 z-20 "
      >
        <div className=" w-[343px] h-[36px] flex justify-between items-center sm:w-[80%]">
          <h1 className="text-[30px] w-fit h-full flex items-center">
            {props.head}
          </h1>
          <div
            onClick={showBanner}
            className="w-[24px] h-[24px] flex flex-col justify-around sm:hidden"
          >
            <div className="w-[16px] h-fit border-[2px] rounded-md border-[#4B5563]"></div>
            <div className="w-[16px] h-fit border-[2px] rounded-md border-[#4B5563]"></div>
            <div className="w-[16px] h-fit border-[2px] rounded-md border-[#4B5563]"></div>
          </div>
          <div className="bg-transparent w-fit px-5 items-center gap-[24px] hidden h-fit sm:flex show:bg-white">
            <div className="flex w-fit gap-[24px] dark:text-[#F3F4F6] text-[#1F2937] ">
              <NavButtons text="About" id="Aboutsections" />
              <NavButtons text="Work" id="Worksections" />
              <NavButtons text="Testomonials" id="Testomonialssections" />
              <NavButtons text="Contact" id="Contactsections" />
            </div>
            <p className="text-[#F3F4F6] dark:text-[#1F2937]">|</p>
            <div className="w-fit flex items-center bg-transparent gap-[10px]">
              <div className="w-[30px] h-[30px] cursor-pointer">
                <ThemeButton />
              </div>
              <p>|</p>
              <button className="bg-[#111827] rounded-md text-[#F9FAFB] px-2 dark:bg-[#F9FAFB] dark:text-[#111827]">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
