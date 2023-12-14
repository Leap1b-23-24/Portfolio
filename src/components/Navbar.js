import { Moon } from "@/assets/svg/Moon";
import { Sunsvg } from "@/assets/svg/Sun.svg";
import { XSvg } from "@/assets/svg/X.svg";

export function NavBar(props) {
  return (
    <div
      className={` h-screen ${
        props.open ? "right-[0%] " : "right-[-100%]"
      }  z-10 top-0 fixed md:hidden right-0 transition-all flex w-full ease-linear delay-300 duration-300`}
    >
      <div className="w-[20%] to-transparent "></div>
      <div className=" w-full h-full bg-white dark:bg-black">
        <header className="p-[16px] w-full flex justify-between items-center">
          <div className="text-[28px] font-bold text-black dark:text-white">
            &lt;SS&#47;&gt;
          </div>
          <div className="grid place-content-center p-[6px]">
            <XSvg
              onClick={() => {
                props.onClose(false);
              }}
            />
          </div>
        </header>
        <main className="p-[16px] flex flex-col gap-[16px] w-full border-y text-gray-600 text-base font-medium leading-6  dark:text-[#D1D5DB]">
          <a>About</a>
          <a>Work</a>
          <a>Testimonials</a>
          <a>Contact</a>
        </main>
        <footer className="p-[16px] flex flex-col gap-[16px]">
          <div
            className={`flex justify-between w-full text-gray-600 dark:text-[#D1D5DB] `}
          >
            <p>Switch Theme</p>
            {props.bad === "white" ? (
              <Moon
                onClick={() => {
                  props.hi();
                }}
              />
            ) : (
              <Sunsvg
                onClick={() => {
                  props.hi();
                }}
              />
            )}
          </div>
          <div className=" dark:bg-white dark:text-black bg-gray-900 py-[6px] w-full rounded-xl grid place-content-center text-center text-white flex">
            Download CV
          </div>
        </footer>
      </div>
    </div>
  );
}
