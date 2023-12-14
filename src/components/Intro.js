import { Activedot } from "./Activedot";
import { useTheme } from "@/app/page";

export const Intro = () => {
  const { darkmode } = useTheme();
  return (
    <div className="w-[100%] flex flex-col-reverse items-center gap-[50px] md:flex md:w-[80%] md:flex-row justify-center p-[10px] dark:bg-[#030712] mt-[180px]">
      <div className=" w-[100%] flex items-center md:w-[70%] flex-col gap-[50px]">
        <div className="flex justify-center flex-col gap-[40px]">
          <p className="text-3xl font-bold dark:text-[#F9FAFB]">
            Hi, Hairtuudaa 👋
          </p>
          <p className="w-[100%] md:w-[90%] font-normal text-[#4B5563] font-inter dark:text-[#D1D5DB]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-row gap-[10px]">
              {darkmode ? <img src="/nightloc.svg" /> : <img src="/Icon.svg" />}
              <p className="font-normal text-[#4B5563] font-inter dark:text-[#D1D5DB]">
                Ulaanbaatar Mongolia
              </p>
            </div>
            <div className="flex flex-row gap-[18px] ml-[8px]">
              {/* <img src="/icon-dot-emerald-500.svg" /> */}
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#10B981"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter dark:text-[#D1D5DB]">
                Unavailable for you
              </p>
            </div>
          </div>
          {darkmode ? (
            <div className="flex gap-[10px]">
              <img src="/dgit.svg" />
              <img src="/dtwi.svg" />
              <img src="/dfig.svg" />
            </div>
          ) : (
            <div className="flex gap-[10px]">
              <img src="/n.svg" />
              <img src="/twi.svg" />
              <img src="/fig.svg" />
            </div>
          )}
        </div>
      </div>
      <div className="w-[350px] h-[320px] relative mt-[50px] ">
        <img
          className="w-[350px] h-[320px] object-cover md:w-[280px]"
          src="/Background.png"
        ></img>
        <div className="w-[280px] h-[320px] flex justify-center items-center bg-blacks absolute -top-5 left-9 md:-left-10 md:-top-10">
          <img
            className="w-[100%] h-[100%] object-cover  "
            src="/catcat.jpeg"
          />
        </div>
      </div>
    </div>
  );
};
