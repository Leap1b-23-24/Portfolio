"use client";

export default function Home() {
  return (
    <div className="w-full max-w-1400 m-auto">
      <Footer />
    </div>
  );
}

export const Footer = (props) => {
  return (
    <footer className="bg-black">
      <div className="flex flex-col items-center px-[80px] py-[96px] w-full h-full gap-8">
        <p className="text-[20px] text-[400] text-[#D1D5DB] px-[330px] text-center  ">
          What&apos;s next? Feel free to reach out to me if you&apos;re looking
          for a developer, have a query, or simply want to connect.
        </p>
        <div className="flex flex-col items-center">
          <div className="flex gap-5">
            <img src="/letter.svg"></img>
            <h2 className="text-[36px] text-[600] text-white">
              reachsagarshah@gmail.com
            </h2>
            <img src="/copy.svg"></img>
          </div>
          <div className="flex gap-5">
            <img src="/call.svg"></img>
            <h2 className="text-[36px] text-[600] text-white">
              +91 8980500565
            </h2>
            <img src="/copy.svg"></img>
          </div>
        </div>
        <p className="text-[20px] text-[400] text-[#D1D5DB]">
          You may also find me on these platforms!
        </p>
        <div className="flex gap-5">
          <img src="/first.svg"></img>
          <img src="/second.svg"></img>
          <img src="/third.svg"></img>
        </div>
      </div>
      <div className="px-[80px] py-[24px] bg-[#111827]">
        <div className="flex items-center justify-center gap-2">
          <img src="/c.svg"></img>
          <p className="text-[14px] text-[400] text-[#D1D5DB]">
            2023 | Designed and coded with ❤️️ by Sagar Shah
          </p>
        </div>
      </div>
    </footer>
  );
};
