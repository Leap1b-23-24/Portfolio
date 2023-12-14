"use client"

import { useState } from "react"
import { ExitIcon } from "../assetss/Exit"
import { SunIcon } from "../assetss/sun"
import { MoonIcon } from "../assetss/moon"


export const DrawerApp = (props) => {

    
    return <div className={`bg-white flex flex-col ${props.open ? "flex" : "hidden"} z-10 top-0 right-0  sm:hidden fixed  h-screen w-screen ltr dark:bg-gray-950`}>
        <div className="flex flex-row justify-between items-center border-b-2 border-gray-100 dark:border-gray-700 p-4">
            <div className="">
                <h1 className='text-2xl text-gray-950 dark:text-gray-50'>&#60;SS &#47;&#62;</h1>
            </div>
            <div className="cursor-pointer">
                <ExitIcon color={props.isDark ? "#D1D5DB" : "#4B5563"}  onClick={()=>{
                    props.onClose(false)
                }} />
            </div>
        </div>
        <div className=" flex flex-row  dark:text-gray-50  justify-between  border-b-2 border-gray-100 dark:border-gray-700 p-4">
            <div className="flex flex-col text-clip gap-3 text-left ">
              <a className="cursor-pointer">About</a>
              <a className="cursor-pointer">Work</a>
              <a className="cursor-pointer">Testimonials</a>
              <a className="cursor-pointer">Contact</a>
            </div>
            <div className="hidden">
                g11
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex p-4 flex-row justify-between items-center">
                <div>
                    <p className="dark:text-gray-50">Switch Theme</p>
                </div>
                <div onClick={props.toggleDarkMode} className="cursor-pointer" >
                    {props.isDark ? <MoonIcon color={props.isDark ? "#D1D5DB" : "#4B5563"} /> : <SunIcon color={props.isDark ? "#D1D5DB" : "#4B5563"} />}

                </div>
            </div>
            <div className="p-4 cursor-pointer">
                <button className='  bg-gray-950 h-fit max-w-fit text-gray-50 dark:text-gray-900 dark:bg-gray-50 p-2 rounded-lg '>Download CV</button>
            </div>
        </div>
    </div>
}