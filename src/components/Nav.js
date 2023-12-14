"use client";
import { useRef, useState } from "react";
import styles from "../app/styles.module.css";
import { useTheme } from "@/app/page";

export const Nav = (props) => {
  const { darkmode, setDarkmode } = useTheme();
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    props.ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkmode((prev) => !prev);
  };
  const menuToggle = () => {
    props.setMenu((prev) => !prev);
  };

  // const change = () => {
  //   let a = window.scrollY;
  //   if (a >= 700 && a <= 1600) {
  //     setNavbar(true);
  //   } else if (a > 1600 && a <= 2350) {
  //     setNavbar(true);
  //   } else if (a > 2350 && a < 3600) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // window.addEventListener("scroll", change);

  return (
    <div className="flex w-[100%] flex-col gap-[20px] relative">
      <div className="w-[100%] pt-[50px] flex justify-center dark:text-white fixed z-10 h-fit bg-white dark:bg-[#030712] dark:opacity-100">
        <div className="w-[80%] flex justify-between">
          <div className="flex-row">
            <h3 className="text-3xl font-bold dark:bg-[#030712]">
              &#60;SS&#47;&#62;{" "}
            </h3>
          </div>
          <div className="hidden md:flex gap-x-10 text-base justify-center items-center dark:bg-[#030712]">
            <p onClick={handleClick}>About</p>
            <p
              onClick={() => {
                document.getElementById("work").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "start",
                });
              }}
            >
              Work
            </p>
            <p
              onClick={() => {
                document.getElementById("ex").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "start",
                });
              }}
            >
              Testimonials
            </p>
            <p
              onClick={() => {
                document.getElementById("get").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "start",
                });
              }}
            >
              Contact
            </p>
            <img src="/Divider.svg" />
            {darkmode ? (
              <img src="/moon.svg" onClick={toggleDarkMode} />
            ) : (
              <img src="/Icon Button.svg" onClick={toggleDarkMode} />
            )}
            <p className="p-[5px] bg-[#111827] rounded-lg text-white dark:bg-white dark:text-[#030712]">
              Download
            </p>
          </div>
          {darkmode ? (
            <img className=" md:hidden" src="/dmenu.svg" onClick={menuToggle} />
          ) : (
            <img className=" md:hidden" src="/menu.svg" onClick={menuToggle} />
          )}
        </div>
        {props.menu ? (
          <div className="w-full h-full bg-[#F3F4F6] dark:bg-[#030712]  flex-col gap-[20px] p-[20px] opacity-100 fixed top-[0] md:hidden">
            <button onClick={menuToggle}>kk</button>
            <div className="flex flex-col gap-[20px] ">
              <h3 className="text-3xl font-bold dark:bg-[#030712]">
                &#60;SS&#47;&#62;{" "}
              </h3>
              <hr></hr>
              <p onClick={menuToggle}>About</p>
              <p>Work</p>
              <p>Testimonials</p>
              <p>Contact</p>
              <hr></hr>
              <div className="flex justify-between" onClick={toggleDarkMode}>
                <p>Switch theme</p>
                <img src="/Icon Button.svg" />
              </div>
              <p className=" flex p-[5px] bg-[#111827] rounded-lg text-white dark:bg-white dark:text-[#030712] p-[10px] justify-center">
                Download CV
              </p>
            </div>
          </div>
        ) : null}
      </div>
      {/* <div className="flex w-[20%] gap-[20px] fixed top-[100px] left-[60%] z-110">
        <div className={navbar ? styles.kk.active : styles.kk}></div>
        <div className={navbar ? styles.kk.active : styles.kk}></div>
        <div className={navbar ? styles.kk.active : styles.kk}></div>
        <div className={navbar ? styles.kk.active : styles.kk}></div>
      </div> */}
    </div>
  );
};
