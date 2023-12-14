import { useTheme } from "@/app/page";

export const Drawer = (props) => {
  const { toggleDarkMode } = useTheme();

  return (
    <div
      className={`h-full absolute right-0 top-[80px] z-20 w-[320px] border-[1px] bg-black text-white dark:bg-white dark:text-black sm:hidden  ${
        props.open ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between p-[16px]">
        <h1 className="text-3xl font-bold">&#60;SS &#47;&#62;</h1>
        <button className="text-3xl font-bold " onClick={props.openDrawer}>
          X
        </button>
      </div>
      <div className="flex flex-col gap-y-[16px] p-[16px]">
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col gap-y-[16px] p-[16px]">
        <div className="flex justify-between ">
          <p>Switch Theme</p>
          <div onClick={toggleDarkMode}>
            <img className="w-[40px] h-[40px]" src="Dark.png"></img>
          </div>
        </div>
        <p className="p-y-[6px] p-x-[16px] bg-white  text-black dark:bg-black dark:text-white text-center rounded-xl">
          Download CV
        </p>
      </div>
    </div>
  );
};
