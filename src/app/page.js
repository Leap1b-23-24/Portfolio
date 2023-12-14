"use client";
import { NavBar } from "@/Pages/Navbar";
import { FirstPage } from "@/Pages/Page1";
import { SecondPage } from "@/Pages/Page2";
import { PageThree } from "@/Pages/Page3";
import { PageFour } from "@/Pages/Page4";
import { PageFive } from "@/Pages/Page5";
import { PageSix } from "@/Pages/Page6";
import { PageSeven } from "@/Pages/Page7";
import { useState, useRef, useEffect, createContext, useContext } from "react";

export const DarkContext = createContext();
export default function Home() {
  const [isDark, setDark] = useState(false);

  const lightOff = (id) => {
    const mydiv = document.querySelector(`#${id}s`);
    mydiv.style.backgroundColor = "transparent";
  };
  const intersectHandler = (id) => {
    const myDiv = document.querySelector(`#${id}s`);
    myDiv.style.backgroundColor = "green";
  };
  const myRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((items) => {
        if (items.isIntersecting === true) {
          intersectHandler(items.target.id);
        } else if (items.isIntersecting === false) {
          lightOff(items.target.id);
        }
      });
    });
    observer.observe(myRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <DarkContext.Provider value={{ isDark, setDark }}>
      <div className={`${isDark && "dark"}`}>
        <NavBar head="zailaa hu" />
        <FirstPage /> <SecondPage pageHead="About" refValue={myRef} />{" "}
        <PageThree refValue={myRef} />
        <PageFour />
        <PageFive refValue={myRef} />
        <PageSix refValue={myRef} />
        <PageSeven />
      </div>
    </DarkContext.Provider>
  );
}
export const useDark = () => useContext(DarkContext);
