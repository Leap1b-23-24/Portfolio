"use client";

import { useTheme } from "@/app/page";
import { FigmaIcon, FigmaIconDark } from "./assets/FigmaIcon";
import { GitIcon, GitIconDark } from "./assets/GitIcon";
import { LocationIcon, LocationIconDark } from "./assets/LocationIcon";
import { TwitterIcon, TwitterIconDark } from "./assets/TwitterIcon";

export function MainPage() {
  const { theme, toggleThemeSwitch } = useTheme();
  return (
    <div className=" md:p-20 p-8 md:flex min-h-[552px] gap-6  ">
      <img
        src="profile.png"
        className="max-w-80 max-h-80 md:hidden flex m-auto"
      ></img>
      <div className="justify-center ">
        <h1 className="text-4xl mb-5 text-black font-bold  md:mt-0 mt-8 dark:text-[#F9FAFB]">
          Hi, I'm Sagar{" "}
        </h1>
        <p className="text-gray-600 max-w-[788px] dark:text-[#D1D5DB] mb-4 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <div className="flex gap-2 mt-8 text-gray-700 md:mt-0 dark:text-[#D1D5DB]">
          {/* <img className="w-3" src="location.svg"></img> */}

          {theme === "light" ? (
            <LocationIcon toggleThemeSwitch={toggleThemeSwitch} />
          ) : (
            <LocationIconDark toggleThemeSwitch={toggleThemeSwitch} />
          )}
          <span>Ulan-Bator, Mongolia</span>
        </div>
        <div className="flex gap-2 mt-4 text-gray-700 dark:text-[#D1D5DB]">
          <div className="w-3 h-3 bg-green-600 rounded-full translate-y-1.5"></div>
          <span>Available for new projects</span>
        </div>
        <div className="flex gap-2 mt-12 text-gray-700 ">
          {theme === "light" ? (
            <GitIcon toggleThemeSwitch={toggleThemeSwitch} />
          ) : (
            <GitIconDark toggleThemeSwitch={toggleThemeSwitch} />
          )}

          {theme === "light" ? (
            <TwitterIcon toggleThemeSwitch={toggleThemeSwitch} />
          ) : (
            <TwitterIconDark toggleThemeSwitch={toggleThemeSwitch} />
          )}

          {theme === "light" ? (
            <FigmaIcon toggleThemeSwitch={toggleThemeSwitch} />
          ) : (
            <FigmaIconDark toggleThemeSwitch={toggleThemeSwitch} />
          )}
        </div>
      </div>
      <img src="profile.png" className="max-w-80 max-h-80 md:flex hidden"></img>
    </div>
  );
}
