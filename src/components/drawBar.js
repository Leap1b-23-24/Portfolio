import { Moon } from "./sun";
import { Sun } from "./sun";
import { useDark } from "@/app/page";

export const DrawBar = (props) => {
  const { isDark, setDark } = useDark();
  const clickHandler = () => {
    setDark((prev) => !prev);
  };

  return (
    <div
      className={`transition-all duration-700 ease-in-out w-full h-screen bg-[#FFFFFF] border-[0.5px] dark:border-[#D1D5DB] fixed  top-0 
        ${props.isShown ? `left-[100%]` : `left-0`} z-40 dark:bg-[#030712]`}
    >
      <div className="w-full h-[68px]  p-[16px] flex justify-between border-b-[1px] border-[#F3F4F6] dark:border-[#1F2937]">
        <p className="text-[#111827] text-[24px] font-bold dark:text-[#F9FAFB]">
          zailaa hu
        </p>
        <p
          onClick={props.function}
          className="w-[36px] h-[36px] flex justify-center items-center text-black dark:text-white font-semibold "
        >
          X
        </p>
      </div>
      <div className="flex w-full gap-[8px] flex-col text-[#4B5563] dark:text-[#D1D5DB] p-[16px] border-b-[1px] border-[#F3F4F6] dark:border-[#1F2937]">
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
      </div>
      <div className="w-full h-fit p-[16px] flex flex-col items-center gap-4">
        <div className="w-full h-fit flex justify-between items-center">
          <p className="  text-[#4B5563] dark:text-[#D1D5DB] text-[16px]">
            Switch theme
          </p>
          <div
            onClick={clickHandler}
            className="h-[36px] w-[36px] text-black dark:text-white flex justify-center items-center cursor-pointerç"
          >
            {isDark ? <Sun /> : <Moon />}
          </div>
        </div>
        <button className="w-[90%] h-[36px] rounded-[20px] bg-[#111827] dark:bg-[#F9FAFB] text-[#F9FAFB] text-[16px] dark:text-[#111827]">
          Download CV
        </button>
      </div>
    </div>
  );
};
