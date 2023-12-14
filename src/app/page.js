"use client"
import { Card } from '@/components/Card'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Work } from '@/components/Work'
import { Gettouch } from '@/components/Gettouch'
import { Footer } from '@/components/Footer'
import { createContext, useContext, useState } from 'react'

export const DarkContext = createContext();

export default function Home() {

  const [dark, setDark] = useState(false);


  return (
    <DarkContext.Provider value={{ dark, setDark }}>

      <div className={`flex flex-col items-center ${dark ? "dark" : ""}`}>
        <div className='w-full max-w-[1440px] min-w-[375px] bg-white dark:bg-black'>
          <Header></Header>
          <Hero name="Hi, I'm Binderiya 👋"
            about="I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new."
            place="Ulaanbaatar, Mongolia"
            avail="Available for new projets"></Hero>
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Work></Work>
          <Gettouch gmail="binderiyaenkhtuvshin@gmail.com" phone="+976 99109677"></Gettouch>
          <Footer></Footer>

        </div>
      </div>

    </DarkContext.Provider>



  )
}

export const useDark = () => useContext(DarkContext);
