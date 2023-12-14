"use client";


import { GetIn } from '../components/getin'
import { FooterD } from '@/components/footer'
// import { PageOne } from '@/components/page1'
import { PageTwo } from '@/components/page2'
import { PageThree } from '@/components/page3'
import { PageFour } from '@/components/page4'
import { PageFive } from '@/components/page5'
import { HeaderPart } from '@/components/header'
import { IntroPart } from '@/components/intro'
import { createContext, useContext, useState } from 'react'

const ColorContext = createContext()

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }
  return (
    <ColorContext.Provider value={{ isDark, toggleDarkMode }} >
      <div className={`${isDark ? "dark" : ""} w-full bg-gray dark:bg-white flex justify-center flex-col`}>

        <div className="sm:w-screen sm:h-screen p-4   justify-center dark:bg-gray-950 bg-white flex-col">
          <div className="flex-col flex gap-5">
            <HeaderPart />
            <IntroPart isDark={isDark} />
          </div>
        </div>
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
        <GetIn isDark={isDark} />
        <FooterD />
      </div>
    </ColorContext.Provider>
  )
}
export const useTheme = () => useContext(ColorContext)

