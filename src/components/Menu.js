

export const Menu = (props) => {
    return (
        <div className={`${props.isOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 h-screen flex-col w-[320px] bg-white z-[9999]`}>
            <div className="flex flex-row p-4 justify-between items-center">
                <h1 className="text-3xl"><b>SS</b></h1>
                <div onClick={props.toggle}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12L12 24" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 12L24 24" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className=" flex flex-col gap-4 p-4 text-base font-medium">
                <p>About</p>
                <p>Work</p>
                <p>Testimonials</p>
                <p>Contact</p>
            </div>
            <div className="flex flex-col p-4 gap-4">
                <div className="flex flex-row items-center justify-between ">
                    <p className="text-base font-normal">Switch theme</p>
                    <svg
                        width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 8V10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 26V28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.9299 10.93L12.3399 12.34" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.6599 23.66L25.0699 25.07" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 18H10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26 18H28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.3399 23.66L10.9299 25.07" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.0699 10.93L23.6599 12.34" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <button className="w-full  bg-gray-900 rounded-xl text-white " >Download CV</button>


            </div>

        </div>


    )
}