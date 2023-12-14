"use client";

import { Section1 } from "../../components/section1";
import { Section2 } from "../../components/section2";
import { Section3 } from "../../components/section3";
import { Section4 } from "../../components/section4";
import { Section5 } from "../../components/section5";
import { Footer } from "../../components/footer";
import { Themeswitch } from "@/components/themeswitch";
// import { Drawer } from "@/components/drawer";

export default function Home() {
  return (
    <div className="w-full max-w-[1400px] m-auto">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

const data = [
  {
    title: "drawer",
  },
];

export const Header = (props) => {
  return (
    <>
      {/* {data.map((item) => {
        return <Drawer title={item.title} />;
      })} */}
      <header className="bg-black">
        <nav className="h-68 w-full flex items-center justify-between md:px-[80px] px-[16px] py-[16px]">
          <div className="flex items-center justify-center">
            <h1 className="text-[30px] font-[700] flex justify-center items-center text-white">
              &#60; SS &#47;&#62;
            </h1>
          </div>
          <div className="hidden md:flex items-center justify-center gap-[24px">
            <ul className="flex items-center justify-center gap-[24px]">
              <li className="text-[16px] text-[500] text-white">About</li>
              <li className="text-[16px] text-[500] text-white">Work</li>
              <li className="text-[16px] text-[500] text-white">
                Testimonials
              </li>
              <li className="text-[16px] text-[500] text-white">contact</li>
            </ul>
            <span className="ml-[24px]">|</span>
            <Themeswitch />
            <button className="h-10 w-40 rounded-[12px] bg-white flex items-center justify-center gap-8">
              <h1 className="text-[16px] text-[500]  text-black">
                Downlaod CV
              </h1>
            </button>
          </div>
          <div className="flex md:hidden p-[6px]">
            <img src="/line.svg" />
          </div>
        </nav>
      </header>
    </>
  );
};
