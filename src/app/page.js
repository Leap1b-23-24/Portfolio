"use client";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Intro } from "@/components/Intro";
import { Aboutme } from "@/components/Aboutme";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { GetInTouch } from "@/components/GetInTouch";
import { createContext, useContext, useRef, useState } from "react";

export const Theme = createContext();

export const useTheme = () => useContext(Theme);

export default function Home(props) {
  const [darkmode, setDarkmode] = useState(false);
  const [menu, setMenu] = useState(false);
  const ref = useRef(null);

  return (
    <Theme.Provider value={{ darkmode, setDarkmode }}>
      <div
        className={
          darkmode ? "dark dark:bg-[#030712] dark:text-[#fff]" : undefined
        }
        id="work"
      >
        <div className="w-full flex flex-col items-center gap-y-28 dark:bg-[#030712]">
          <Nav menu={menu} setMenu={setMenu} ref={ref}></Nav>
          <Intro></Intro>
          <Aboutme></Aboutme>
          <Skills></Skills>
          <Experience></Experience>
          <Work></Work>
          <GetInTouch></GetInTouch>
        </div>
      </div>
    </Theme.Provider>
  );
}
