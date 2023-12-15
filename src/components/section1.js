"use client";

export default function Home() {
  return (
    <div className="w-full max-w-1400 m-auto">
      <Section1 />
    </div>
  );
}

export const Section1 = (props) => {
  return (
    <section className="bg-[#000]">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between w-full h-full md:px-[80px] md:py-[96px] px-[16px] py-[64px] ">
        <div className="flex justify-start flex-col">
          <div className="flex justify-start flex-col md:w-[40rem]">
            <h2 className="text-[50px] text-[600] text-white mb-8   ">
              Heil, I&apos;m Adolf Catler 🙋‍♂️
            </h2>
            <p className="text-[16px] text-[400] leading-[24px] text-[#D1D5DB] mb-10">
              I&apos;m a full stack developer (React.js & Node.js) with a focus
              on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="flex mb-5 gap-3">
            <img src="/location.svg" className=""></img>
            <p className="text-[16px] text-[400] text-[#D1D5DB]">
              Berlin, German
            </p>
          </div>
          <div className="ml-2 flex items-center mb-16 gap-5">
            <span className="w-2 h-2 rounded-[50%] bg-[green] "></span>
            <p className="text-[16px] text-[400] text-[#D1D5DB]">
              Available for WW3 project
            </p>
          </div>
          <div className="flex items-center gap-5">
            <img src="/first.svg"></img>
            <img src="/second.svg"></img>
            <img src="/third.svg"></img>
          </div>
        </div>
        <div className="relative ml-10 mb-20">
          <img
            src="/catler.png"
            className="md:w-[15rem] md:h-[20rem] w-[13rem] h-[18rem] flex items-start justify-center relative z-20 md:border-r-[8px] md:border-b-[8px] border-[8px] border-black mr-12"
          ></img>
          <div className="md:w-[15rem] md:h-[19.5rem] h-[17rem] w-[15rem] bg-[#374151] absolute z-10 md:top-[40px] md:right-[16px] top-[30px] right-[31px]"></div>
        </div>
      </div>
    </section>
  );
};
