import Texts from "./Texts";
export function Page1() {
  return (
    <div className="px-[16px] py-[64px] w-full dark:bg-[#030712] dark:text-[#F9FAFB] xl:px-[80px]">
      <div className="flex flex-col items-center gap-[48px] xl:flex-row">
        <div className="w-6/12 flex justify-center ">
          <img src="profile.svg" className="w-1/2" />
        </div>
        <div className="xl:w-6/12">
          <div className="flex flex-col items-center gap-[48px] ">
            <h1 className="text-[36px] leading-10 font-semibold">
              Hi, I am Sagar
            </h1>
            <img></img>
          </div>
          <Texts text="I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new." />
        </div>
      </div>
    </div>
  );
}
