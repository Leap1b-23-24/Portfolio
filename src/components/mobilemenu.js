export const Mobilemenu = (props)=>{
    return(
        <div 
        className={props.mobileMenu > 0 ? 'hidden':'w-full h-screen m-auto fixed top-0 left-0 p-4 z-10'} 
        style={props.pagemode > 0 ? {backgroundColor:"black", color:"white"}:{backgroundColor:"white"}}>

            <div className="flex place-content-between items-center border-b-2 text-[24px]">
                <p>&#60;SS&#47;&#62;</p>
                <p onClick={props.mobileMenuClose}>X</p>
            </div>

            <div style={{display:"flex", margin:"20px 0px", flexDirection:"column", rowGap:'20px'}}>
                <p>About</p>
                <p>Work</p>
                <p>Testimonials</p>
                <p>Contact</p>
                <div className="flex place-content-between items-center">
                    <p>Switch Theme</p>
                    <img onClick={props.pageModeDay} className={props.pagemode == 0 ? 'hidden' : ''} src="/day-mode-1.svg" width={35} height={35}/>
                    <img onClick={props.pageModeNight} className={props.pagemode == 1 ? 'hidden' : ''} src="/night-mode-2.svg" width={35} height={35}/>
                </div>
                <p className={props.pagemode > 0 ? "bg-white text-center text-black rounded-md p-2" : "bg-black text-white rounded-md text-center p-2"}>Download CV</p>
            </div>
        </div>
    )
}