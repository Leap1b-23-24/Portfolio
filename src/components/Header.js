"use client";

import { Sunsvg } from "@/assets/svg/Sun.svg";
import { useState } from "react";
import { NavBar } from "./Navbar";
import { Menu } from "@/assets/svg/Menu";
import { Moon } from "@/assets/svg/Moon";
export function Header(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="relative ">
      <div className="p-[16px] w-full  dark:bg-[#030712]">
        <div className="flex justify-between items-center">
          <div className="text-[28px] font-bold text-black dark:text-[#F9FAFB]">
            &lt;SS&#47;&gt;
          </div>
          <div className="hidden gap-[24px] items-center md:flex text-gray-600 dark:text-[#D1D5DB]">
            <a>About</a>
            <a>Work</a>
            <a>Testimonials</a>
            <a>Contact</a>
            {/* <p
              id={props.text}
              onClick={(event) => {
                const id = event.target.id;
                document
                  .getElementById(`${id}section`)
                  .scrollIntoView({ behavior: "smooth" });
              }}
            ></p> */}
            {props.theme === "white" ? (
              <Moon
                onClick={() => {
                  props.toggle();
                }}
              />
            ) : (
              <Sunsvg
                onClick={() => {
                  props.toggle();
                }}
              />
            )}
            <div className=" dark:bg-white dark:text-black bg-gray-900 py-[6px] px-[16px] rounded-xl text-white">
              Download CV
            </div>
          </div>
          <div className="p-[6px] grid place-content-center  md:hidden">
            <Menu onClick={handleClick} />
          </div>
        </div>
      </div>

      <NavBar
        open={isDrawerOpen}
        onClose={setIsDrawerOpen}
        hi={props.toggle}
        bad={props.theme}
      />
    </div>
  );
}
