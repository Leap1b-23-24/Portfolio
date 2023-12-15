"use client";

import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Get } from "@/components/Getintouch";
import { Footer } from "@/components/Footer";
import { createContext, useState } from "react";
import { useRef } from "react";
import { ScrollWrapper } from "@/components/ScrollWrapper";

export const themeContext = createContext();

export default function Home() {
  const [value, themeChange] = useState(false);

  const refAbout = useRef();
  const refWork = useRef();
  const refSkills = useRef();
  const refContact = useRef();

  const refs = {
    About: refAbout,
    Work: refWork,
    Testimonials: refSkills,
    Contact: refContact,
  };

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <themeContext.Provider value={{ value, themeChange }}>
      <div className={value ? "dark" : undefined}>
        <Header handleScroll={handleScroll} refs={refs} />
        <Intro />
        <ScrollWrapper ref={refAbout}>
          <About />
        </ScrollWrapper>
        <ScrollWrapper ref={refSkills}>
          <Skills />
        </ScrollWrapper>
        <Experience />
        <ScrollWrapper ref={refWork}>
          <Work />
        </ScrollWrapper>
        <ScrollWrapper ref={refContact}>
          <Get />
        </ScrollWrapper>
        <Footer />
      </div>
    </themeContext.Provider>
  );
}
