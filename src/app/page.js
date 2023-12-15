"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Page1 } from "@/components/Page1";
import { Page2 } from "@/components/Page2";
import { Page3 } from "@/components/Page3";
import { Page4 } from "@/components/Page4";
import { Page5 } from "@/components/Page5";
import { Page6 } from "@/components/Page6";
import { useState } from "react";

export default function Home() {
  const [onDark, offDark] = useState("white");

  const clickDark = () => {
    offDark(onDark === "dark" ? "white" : "dark");
  };

  // <handleClick />;
  return (
    <div
      className={`bg-white m-auto  xl:w-[1280px]  ${
        onDark === "dark" ? "dark" : ""
      }`}
    >
      <Header toggle={clickDark} theme={onDark} />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
    </div>
  );
}
