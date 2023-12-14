import { ButtonIcons } from "../components/Logos";
export function FirstPage() {
  return (
    <div
      className="w-screen h-fit flex flex-col bg-[#FFFFFF] py-[64px] px-[16px] items-center sm:w-screen 
    sm:py-[96px] sm:px-[80px] dark:bg-[#030712] dark:text-[#D1D5DB] "
    >
      <div
        className="w-fit h-[752px] flex flex-col items-center
           sm:flex-row-reverse sm:w-full sm:justify-around  sm:h-fit "
      >
        <div
          className="w-[343px] h-[300px] flex flex-col items-center relative
           sm:w-[320px] sm:h-[360px]"
        >
          <div
            className="w-[240px] h-[280px] border-[8px] border-white z-10 bg-white 
          sm:absolute sm:top-0 sm:left-0 sm:w-[280px] sm:h-[320px]
          dark:bg-[#030712] dark:border-[#030712]"
          >
            <img className="w-full h-full" src="/ungabunga.jpeg" />
          </div>
          <div
            className="w-[280px] h-[280px] bg-[#E5E7EB] mt-[20px] absolute z-auto border-[8px] border-white
          sm:absolute sm:bottom-0 sm:right-0 sm:h-[320]
          dark:border-[#030712] dark:bg-[#374151]"
          ></div>
        </div>
        <div className="w-[343px] h-[404px] flex flex-col gap-[48px] items-start mt-[48px] ">
          <div className="w-fit h-fit">
            <h1
              className="w-[260px] h-[40] text-[#111827] text-[36px] sm:w-fit
            dark:text-[#F9FAFB]"
            >
              Hi, I’m Sagar 👋
            </h1>
            <p
              className="w-[343px] h-[168px] text-[16px] leading-[24px] text-[#4B5563] mt-[8px]
            dark:text-[#D1D5DB] "
            >
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="h-[56px] w-full flex flex-col justify-between items-start">
            <div className="h-[24px] w-full flex gap-8px items-center">
              <img
                className="w-[24px] h-[24px] dark:invert"
                src="/location.png"
              />
              <p className="text-[#4B5563] h-[24px] text-[16px] dark:text-[#D1D5DB]">
                Ahmedabad, India
              </p>
            </div>
            <div className="h-[24px] w-full flex gap-8px items-center">
              <div className="w-[24px] h-[24px] flex justify-center items-center">
                <div className="w-[8px] h-[8px] rounded-[20px] bg-[#10B981]"></div>
              </div>
              <p className="text-[#4B5563] h-[24px] text-[16px] dark:text-[#D1D5DB]">
                Available for new projects
              </p>
            </div>
          </div>
          <ButtonIcons />
        </div>
      </div>
    </div>
  );
}
