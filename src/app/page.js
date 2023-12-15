"use client";
import { InfoPage } from "@/components/InfoPage";
import { MainPage } from "../components/MainPage";
import { Skills } from "../components/Skills";
import { Upwork } from "../components/Upwork";
import { Work } from "../components/Work";
import { Footer } from "../components/Footer";
import { Header } from "../components/header";
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
