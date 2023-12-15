"use client";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { MenuIcon } from "/assets/MenuIcon";
import { SunIcon } from "/assets/SunIcon";
import { MoonIcon } from "/assets/MoonIcon";
import { useTheme } from "../app/page";

//Menu Open
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  const { theme, toggleThemeSwitch } = useTheme();

  return (
    <div className="font-semibold md:p-4 p-5 pl-3 pr-3 bg-gray-100  h-16 dark:bg-neutral-900 dark:text-white shadow-md">
      <div className="flex gap-x-8 gap-x-flex place-content-between items-center">
        <Link href="/">
          <span className="cursor-pointer">&#60;SS&#47;&#62;</span>
        </Link>

        <div className="hidden md:flex gap-6 text-gray-800 items-center dark:text-[#D1D5DB]">
          <Link href="/about">
            <span className="md:flex hidden cursor-pointer">About</span>
          </Link>
          <Link href="/work">
            <span className="md:flex hidden cursor-pointer">Work</span>
          </Link>
          <Link href="/testimonials">
            <span className="md:flex hidden cursor-pointer">Testimonials</span>
          </Link>
          <Link href="/contact">
            <span className="md:flex hidden cursor-pointer">Contact</span>
          </Link>

          {theme === "light" ? (
            <SunIcon toggleThemeSwitch={toggleThemeSwitch} />
          ) : (
            <MoonIcon toggleThemeSwitch={toggleThemeSwitch} />
          )}

          <div className="w-[136px] h-[36px] gap-2 items-center justify-center bg-black text-white rounded-xl cursor-pointer md:flex hidden dark:bg-white">
            <p className="text-sm dark:text-black">Download CV</p>
          </div>
        </div>
        <MenuIcon toggleNavbar={toggleNavbar} />
      </div>
      <Navbar
        theme={theme}
        gg={menuOpen}
        toggleNavbar={toggleNavbar}
        themeChange={toggleThemeSwitch}
      />
    </div>
  );
}
