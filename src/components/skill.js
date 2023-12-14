export const Skills =(props)=>{
    return (
        <div className="flex flex-col items-center my-10 gap-[10px]">
            <h2 className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Skills</h2>
            <p>The skills, tools and technologies i am really good at:</p>
            <div className="w-full grid grid-cols-3 md:grid-cols-8 gap-[5px]">
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>JavaScript</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>TypeScript</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>React</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Next.js</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Node.js</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Express.js</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Nest.JS</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Socket.io</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>PostgreSQL</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>MongoDB</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Sass/Scss</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Tailwindcss</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Figma</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Cypress</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Storybook</p>
                </div>
                <div className="flex flex-col items-center gap-[3px]">
                    <img className={props.pagemode > 0 ? "invert" : ""} src="/github-42.svg" width={64} height={64}/>
                    <p>Git</p>
                </div>
            </div>
        </div>
    )
}