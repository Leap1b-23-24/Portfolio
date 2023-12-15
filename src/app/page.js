"use client";

import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Skill } from "../components/Skill";
import { Work } from "../components/Work";
import { createContext, useContext, useState } from "react";

const DarkContext = createContext();

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  return (
    <DarkContext.Provider value={{ isDark, toggleDarkMode }}>
      <div
        className={`${
          isDark ? "dark" : ""
        } w-full dark:bg-white flex flex-col items-center`}
      >
        <div className="w-[80%] bg-white dark:bg-black dark:text-white">
          <Header />
          <Hero />
          <About />
          <Skill />
          <Experience />
          <Work />
          <Contact />
          <Footer />
        </div>
      </div>
    </DarkContext.Provider>
  );
}

export const useTheme = () => useContext(DarkContext);
