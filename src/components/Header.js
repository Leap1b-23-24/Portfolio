import { useContext, useState } from "react";
import { HeadIcon } from "./icon/Headericon";
import { Xmenu } from "./icon/Xmenu";
import { themeContext } from "@/app/page";

export const Header = ({ handleScroll, refs }) => {
  const head = ["About", "Work", "Testimonials", "Contact"];

  const [bmenu, setMenu] = useState("hidden");
  const { value, themeChange } = useContext(themeContext);

  function toggleTheme() {
    themeChange((a) => !a);
  }

  return (
    <div className="dark:bg-[#030712] p-[16px] w-screen sm:w-full sm:px-[80px] sm:py-[16px] h-[68px]">
      <div className="w-fill sm:px-[32px] flex justify-between items-center relative">
        <div className="w-[96px] h-[36px] flex items-center">
          <p className="text-3xl font-bold text-[#111827] dark:text-[#F9FAFB]">{`<SS/>`}</p>
        </div>
        <div
          onClick={() => {
            setMenu("block");
          }}
          className="cursor-pointer sm:hidden"
        >
          <HeadIcon />
        </div>
        <div
          className={`${bmenu} flex z-10 fixed sm:static top-[0px] left-[0px] justify-end dark:bg-gray-900 bg-gray-300 w-[375px] h-screen w-full sm:w-fit sm:h-fit sm:flex `}
        >
          <div className="dark:bg-[#030712] bg-white w-[320px] sm:w-fit sm:gap-[48px] sm:flex">
            <div className="sm:flex sm:items-center sm:gap-[24px]">
              <div className="flex justify-between p-[16px] sm:hidden">
                <p className="text-2xl font-bold text-[#111827] dark:text-[#D1D5DB]">{`<SS/>`}</p>
                <div
                  onClick={() => {
                    setMenu("hidden");
                  }}
                  className="cursor-pointer"
                >
                  <Xmenu />
                </div>
              </div>
              <div className="p-[16px] sm:p-[0px] flex flex-col gap-[16px] sm:w-fit sm:items-center sm:flex-row">
                {head.map((item) => (
                  <p className="cursor-pointer dark:text-[#D1D5DB] text-[#4B5563]">
                    <a
                      onClick={() => {
                        handleScroll(refs[item]);
                        setMenu("hidden");
                      }}
                    >
                      {item}
                    </a>
                  </p>
                ))}
              </div>
            </div>
            <div className="block p-[16px] sm:p-[0] sm:flex sm:items-center sm:gap-[16px]">
              <div className="flex justify-between mb-[16px] sm:mb-[0px]">
                <p className="dark:text-[#D1D5DB] flex justify-center items-center text-[#4B5563] sm:hidden">
                  Swtich theme
                </p>
                <div onClick={toggleTheme} className="cursor-pointer ">
                  <img src={!value ? "/lightsun.svg" : "/darkmoon.svg"} />
                </div>
              </div>
              <p className="cursor-pointer flex justify-center items-center bg-[#111827] dark:bg-[#F9FAFB] text-white dark:text-[#111827] rounded-[12px] px-[16px] py-[6px]">
                Download CV
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
