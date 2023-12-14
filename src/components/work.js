export const Work = (props)=>{
    return(
        <div className="flex flex-col items-center">
            <h2 className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} my-[20px] rounded-lg`}>Work</h2>
            <p className={`${props.pagemode > 0 ? "text-[#D1D5DB]":"text-[#4B5563]"} text-center text-[20px] md:w-[70%] md:my-[20px]`}>Some of the noteworthy projects I have built:</p>
            <div>
                <div className="w-full md:flex md:gap-x-[80px]">
                    <div className="md:w-1/2">
                        <div className="p-[32px] md:p-[48px] md:w-[480px] h-[380px]">
                            <img className="h-full w-full" src="/Picture.png"/>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                        <p className="my-[6px] text-[20px] font-semibold">Fiskil</p>
                        <p className="text-justify my-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                        <div className="flex flex-wrap gap-[10px]">
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>React</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Next.js</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>TypeScript</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Nest.js</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>PostgreSQL</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Tailwindcss</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Figma</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Cypress</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Storybook</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Git</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:flex md:gap-x-[80px]">
                    <div className="flex flex-col md:w-1/2">
                        <p className="my-[6px] text-[20px] font-semibold">Fiskil</p>
                        <p className="text-justify my-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                        <div className="flex flex-wrap gap-[10px]">
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>React</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Next.js</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>TypeScript</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Nest.js</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>PostgreSQL</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Tailwindcss</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Figma</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Cypress</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Storybook</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Git</p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="p-[32px] md:p-[48px] md:w-[480px] h-[380px]">
                            <img className="h-full w-full" src="/Picture.png"/>
                        </div>
                    </div>
                </div>
                <div className="w-full md:flex md:gap-x-[80px]">
                    <div className="md:w-1/2">
                        <div className="p-[32px] md:p-[48px] md:w-[480px] h-[380px]">
                            <img className="h-full w-full" src="/Picture.png"/>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                        <p className="my-[6px] text-[20px] font-semibold">Fiskil</p>
                        <p className="text-justify my-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                        <div className="flex flex-wrap gap-[10px]">
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>React</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Next.js</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>TypeScript</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Nest.js</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>PostgreSQL</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Tailwindcss</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Figma</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Cypress</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Storybook</p>
                            <p className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Git</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}