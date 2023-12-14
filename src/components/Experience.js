import { Button } from "./Button";
import { Activedot } from "./Activedot";
import { useTheme } from "@/app/page";

export const Experience = (props) => {
  const darkmode = useTheme();
  return (
    <div
      className="bg-[#F9FAFB] w-full flex flex-col gap-[40px] mt-[50px] items-center pb-[50px] dark:bg-[#111827]"
      id="ex"
    >
      <div className="bg-[#F9FAFB] w-full flex flex-col gap-[40px] mt-[50px] items-center dark:bg-[#111827]">
        <div className="mt-[50px]">
          <Button title="Experience"></Button>
        </div>
        <p className="font-normal text-[#4B5563] dark:text-[#D1D5DB] text-xl">
          Here is a quick summary of my most recent experiences:
        </p>

        <div className="w-[100%] md:w-[60%] flex flex-col gap-[10px] md:flex md:flex-row bg-white p-[32px] rounded-[12px] shadow-md dark:bg-[#1F2937]">
          <div className="grow basis-0">
            <img src="/Clip path group.png"></img>
          </div>
          <div className="flex flex-col grow basis-0 gap-[15px] ">
            <p className="text-xl font-semibold text-black dark:text-[#F9FAFB]">
              Sr. Frontend Developer
            </p>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"} />
                ) : (
                  <Activedot color={"#4B5563"} />
                )}
              </div>
              <p className="font-normal text-[#4B5563] font-inter text-base dark:text-[#D1D5DB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"} />
                ) : (
                  <Activedot color={"#4B5563"} />
                )}
              </div>
              <p className="font-normal text-[#4B5563] font-inter dark:text-[#D1D5DB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"} />
                ) : (
                  <Activedot color={"#4B5563"} />
                )}
              </div>
              <p className="font-normal text-[#4B5563] font-inter dark:text-[#D1D5DB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"} />
                ) : (
                  <Activedot color={"#4B5563"} />
                )}
              </div>
              <p className="font-normal text-[#4B5563] font-inter dark:text-[#D1D5DB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className=" grow basis-0 flex md:justify-center">
            <p className="font-normal text-[#4B5563] text-base dark:text-[#D1D5DB]">
              Nov 2021 - Present
            </p>
          </div>
        </div>
        <div className="w-[100%] md:w-[60%] flex flex-col gap-[10px] md:flex md:flex-row bg-white p-[32px] rounded-[12px] shadow-md dark:bg-[#1F2937]">
          <div className="grow basis-0">
            <img src="/Clip path group.png"></img>
          </div>
          <div className="flex flex-col grow basis-0 gap-[15px] ">
            <p className="text-xl font-semibold text-black dark:text-[#F9FAFB]">
              Sr. Frontend Developer
            </p>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"} />
                ) : (
                  <Activedot color={"#4B5563"} />
                )}
              </div>
              <p className="font-normal text-[#4B5563] font-inter text-base dark:text-[#D1D5DB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"} />
                ) : (
                  <Activedot color={"#4B5563"} />
                )}
              </div>
              <p className="font-normal text-[#4B5563] font-inter dark:text-[#D1D5DB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"} />
                ) : (
                  <Activedot color={"#4B5563"} />
                )}
              </div>
              <p className="font-normal text-[#4B5563] font-inter dark:text-[#D1D5DB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"} />
                ) : (
                  <Activedot color={"#4B5563"} />
                )}
              </div>
              <p className="font-normal text-[#4B5563] font-inter dark:text-[#D1D5DB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className=" grow basis-0 flex md:justify-center">
            <p className="font-normal text-[#4B5563] text-base dark:text-[#D1D5DB]">
              Nov 2021 - Present
            </p>
          </div>
        </div>
        <div className="w-[100%] md:w-[60%] flex flex-col gap-[10px] md:flex md:flex-row bg-white p-[32px] rounded-[12px] shadow-md dark:bg-[#1F2937]">
          <div className="grow basis-0">
            <img src="/Clip path group.png"></img>
          </div>
          <div className="flex flex-col grow basis-0 gap-[15px] ">
            <p className="text-xl font-semibold text-black dark:text-[#F9FAFB]">
              Sr. Frontend Developer
            </p>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center ">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"} />
                ) : (
                  <Activedot color={"#4B5563"} />
                )}
              </div>
              <p className="font-normal text-[#4B5563] font-inter text-base dark:text-[#D1D5DB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className=" grow basis-0 flex md:justify-center">
            <p className="font-normal text-[#4B5563] text-base dark:text-[#D1D5DB]">
              Nov 2021 - Present
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
