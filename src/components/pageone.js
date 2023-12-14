export const Pageone = (props)=>{
    return(
        <div className="my-5 md:flex gap-[80px]">
            <div className="flex items-center md:w-3/10">
                <div className="flex w-[240px] h-[280px] md:w-[280px] md:h-[320px] m-auto justify-center relative">
                    <img className="w-full h-full z-10 absolute md:bot-[40px] md:right-[40px]" style={
                        {border: `8px solid ${props.pagemode > 0 ? "black":"white"}`, zIndex:"1"}
                    } src="/profile-picture.jpeg"/>
                    <div className="w-[280px] h-[280px] md:w-[280px] md:h-[320px] bg-slate-200 absolute top-6 md:bot-0 md:right-0" style={{border: `8px solid ${props.pagemode > 0 ? "black":"white"}`, backgroundColor:`${props.pagemode > 0 ? "#374151" : "#E5E7EB"}`}}>
                    </div>
                </div>
            </div>

            <div className="flex-col w-full justify-center    md:w-7/10 md:order-first">
                <div className="justify-center text-justify">
                    <h2 className="text-4xl font-bold my-10">Hi, I'm Sagar</h2>
                    <p>I'm a full stack developer (React.js & Node.js) with focus on creating (and occasionally designing) exceptional digital experiences that are, fast acessible, visually appealing, and responsive, Even though i have been creating web applications for over 7 years, i still love it as if it was something new.</p>
                </div>
                <div className="my-5">
                    <div className="flex my-3">
                        <img className={props.pagemode > 0 ? "invert" : ""} src="/location-21.svg" width={16} height={16}/>
                        <p>Ahmedabad, India</p>
                    </div>
                    <div className="flex my-3">
                        <img src="/online-13.svg" width={16} height={16}/>
                        <p>Available for new projects</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={30} height={30}/>
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/twitter-154.svg" width={30} height={30}/>
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/figma-2.svg" width={30} height={30}/>
                </div>
            </div>
        </div>
    )
}