"use client";
import { InfoPage } from "@/Components/InfoPage";
import { MainPage } from "@/Components/MainPage";
import { Skills } from "@/Components/Skills";
import { Upwork } from "@/Components/Upwork";
import { Work } from "@/Components/Work";
import { Footer } from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { createContext, useContext, useState } from "react";

export const ColorContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ColorContext.Provider value={{ theme, toggleThemeSwitch }}>
      <div className={`${theme === "dark" ? "dark" : ""} `}>
        <div className=" dark:bg-black">
          <div className="max-w-[1440px] m-auto dark:bg-neutral-900 ">
            <Header />
            <MainPage />
            <InfoPage />
            <Skills />
            <Upwork />
            <Work />
            <Footer />
          </div>
        </div>
      </div>
    </ColorContext.Provider>
  );
}

export const useTheme = () => useContext(ColorContext);
