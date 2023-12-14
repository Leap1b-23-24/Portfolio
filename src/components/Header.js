"use client"

import { useContext, useState } from "react"
import { Menu } from "./menu"
import { DarkContext } from "@/app/page"

export const Header = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { setDark, dark } = useContext(DarkContext)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className="bg-white sm:bg-white flex flex-col sm:px-20 sm:py-4 sm:dark:bg-black dark:text-white">
                <div className=" flex flex-row p-4 justify-between   sm: flex flex-row sm:px-8 justify-between items-center sm:py-5" >
                    <h1 className="text-3xl"><b>SS</b></h1>
                    <svg
                        onClick={toggleMenu}
                        className="sm:hidden m-1.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 6H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 18H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div className=" hidden sm:flex flex-row justify-between text-base font-medium items-center gap-6">
                        <div className="flex flex-row gap-6">
                            <p>About</p>
                            <p>Work</p>
                            <p>Testimonials</p>
                            <p>Contact</p>
                            <p>|</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div onClick={() => {
                                setDark(!dark)
                            }} >
                                {dark ? <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18 8V10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18 26V28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.9299 10.93L12.3399 12.34" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23.6599 23.66L25.0699 25.07" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 18H10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M26 18H28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.3399 23.66L10.9299 25.07" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.0699 10.93L23.6599 12.34" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> : "Light"}
                            </div>
                            <button className="w-fit px-4 py-1  bg-gray-900 rounded-xl text-white dark:bg-[#F9FAFB] dark:text-black " >Download CV</button>
                        </div>
                    </div>
                </div>
            </div>

            <Menu
                toggle={toggleMenu}
                isOpen={isMenuOpen}
            />
        </>
    )
}