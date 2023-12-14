"use client";

import { SunIcon } from "../assetss/sun"
import { DiviDer } from "../assetss/divider"
import { MoonIcon } from "../assetss/moon"
import { MenuIcon } from "../assetss/Menu"
import { useState } from "react"
import { DrawerApp } from "./Drawer"
import { useTheme } from "@/app/page";

export function HeaderPart(props) {
    const { isDark, toggleDarkMode} = useTheme()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleClick = () => {
        setIsDrawerOpen(true);
    };

    return (<div className=" flex justify-between space-x-4  sm:min-[345px] text-center sm:px-80 sm:py-16" >
        
        <div>
            <h1 className='text-2xl sm:text-6xl dark:text-gray-50 items-center'>&#60;SS &#47;&#62;</h1>
        </div>
        <div className="sm:hidden flex cursor-pointer items-center">
            <MenuIcon color={props.isDark ? "#D1D5DB" : "#4B5563"}  onClick={handleClick} />
        </div>
        <div className='sm:flex hidden row-auto gap-10 items-center'>
            <div className="flex  row-auto gap-8">
                <p className='dark:text-gray-300'>About</p>
                <p className='dark:text-gray-300'>Work</p>
                <p className='dark:text-gray-300'>Testimonials</p>
                <p className='dark:text-gray-300'>Contact</p>
            </div>
            <div className='text-grey-600 '>
                <DiviDer color={isDark ? "#D1D5DB" : "#4B5563"} />
            </div>
            <div className='flex row-auto gap-4 cursor-pointer'>
                <div onClick={toggleDarkMode} >
                    {isDark ? <MoonIcon color={isDark ? "#D1D5DB" : "#4B5563"} /> : <SunIcon color={props.isDark ? "#D1D5DB" : "#4B5563"} />}

                </div>
                <p className='bg-black dark:bg-white h-fit text-white dark:text-gray-900 p-1 rounded-lg'>Download CV</p>
            </div>
        </div>
        <DrawerApp isDark={isDark} toggleDarkMode={toggleDarkMode} open={isDrawerOpen} onClose={setIsDrawerOpen} hi={props.toggle}/>
    </div>
    )
}