"use client";

import { useContext, useState } from "react";
import { Drawer } from "./Drawer";
import { useTheme } from "@/app/page";

export const Header = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { toggleDarkMode } = useTheme();

  const openDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="flex justify-between  h-20  items-center px-[80px]">
        <div className="text-3xl font-bold">&#60;SS &#47;&#62;</div>
        <img
          className="w-[30px] h-[30px] sm:hidden flex cursor-pointer"
          onClick={openDrawer}
          src="btn.png"
        ></img>
        <div className="hidden sm:flex gap-20">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <div className="flex items-center gap-[10px]">
            <div onClick={toggleDarkMode}>
              <img className="w-[40px] h-[40px]" src="Dark.png"></img>
            </div>
            <p className="border-[1px] bg-black color-white text-white p-[5px] rounded-[10px]">
              Download CV
            </p>
          </div>
        </div>
      </div>
      <Drawer
        toggleDarkMode={props.toggleDarkMode}
        open={isDrawerOpen}
        openDrawer={openDrawer}
      />
    </>
  );
};
