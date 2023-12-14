import { darkTheme } from "@/app/page"
import { useContext } from "react"

export const Navbar = (props) => {
    const {pagemode, setPagemode} = useContext(darkTheme)
    const pageModeDay = ()=>{setPagemode(1)}
    const pageModeNight = ()=>{setPagemode(0)}
    return (
        <div className="flex place-content-between items-center">
            <div className="block">
                <p>&#60;SS&#47;&#62;</p>
            </div>
            <div className="block gap-5">
                <img onClick={props.mobileMenuOpen} src="/icon.svg" className="sm:hidden"/>
                <div className="hidden sm:flex items-center gap-3">
                    <p>About</p>
                    <p>Work</p>
                    <p>Testimonials</p>
                    <p>Contact</p>
                    <div className="md:flex md:gap-5">
                        <img onClick={pageModeNight} className={pagemode == 0 ? 'hidden' : ''} src="/day-mode-1.svg" width={20} height={20}/>
                        <img onClick={pageModeDay} className={pagemode == 1 ? 'hidden' : ''} src="/night-mode-2.svg" width={20} height={20}/>
                    </div>
                    <p className={pagemode > 0 ? "bg-white text-black rounded-md p-2" : "bg-black text-white rounded-md p-2"}>Download CV</p>
                </div>
            </div>
        </div>
    )
}