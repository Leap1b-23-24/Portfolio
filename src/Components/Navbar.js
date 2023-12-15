"use client";
import React from "react";
import Link from "next/link";
import { SunIcon } from "/assets/SunIcon";
import { MoonIcon } from "/assets/MoonIcon";
import { useTheme } from "@/app/page";

export const Navbar = (props) => {
  const { theme } = useTheme();
  return (
    <div
      className={
        props.gg
          ? "fixed right-0 top-0 w-[80%] md:hidden h-screen z-40 bg-[#F9FAFB] dark:bg-[#030712]  p-10 ease-in duration-100 "
          : "fixed left-[-100%] top-0 p-10 ease-in duration-100"
      }
    >
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <span className="cursor-pointer text-3xl">&#60;SS&#47;&#62;</span>
        </Link>
        <div
          onClick={props.toggleNavbar}
          className="cursor-pointer rounded-full bg-gray-200 p-1.5 hover:bg-gray-300"
        >
          <img src="Xmark.svg"></img>
        </div>
      </div>
      <hr className="m-3"></hr>
      <div className="flex flex-col gap-6 text-gray-800 items-start dark:text-[#D1D5DB] mt-10">
        <Link href="/about">
          <span className=" cursor-pointer text-xl">About</span>
        </Link>
        <Link href="/work">
          <span className="cursor-pointer text-xl">Work</span>
        </Link>
        <Link href="/testimonials">
          <span className=" cursor-pointer text-xl">Testimonials</span>
        </Link>
        <Link href="/contact">
          <span className="cursor-pointer text-xl ">Contact</span>
        </Link>
      </div>
      <hr className="mt-4"></hr>
      <div className="flex items-center justify-between mt-3">
        <span className="cursor-pointer text-xl">Switch Theme</span>

        {theme === "light" ? (
          <SunIcon toggleThemeSwitch={props.themeChange} />
        ) : (
          <MoonIcon toggleThemeSwitch={props.themeChange} />
        )}
      </div>
      <div className="w-full h-[36px] gap-2 items-center justify-center bg-black text-white rounded-xl cursor-pointer flex dark:bg-white mt-5">
        <p className="text-sm dark:text-black">Download CV</p>
      </div>
    </div>
  );
};

export default Navbar;
