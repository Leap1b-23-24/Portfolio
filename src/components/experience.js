export const Experience =(props)=>{
    return(
        <div className="flex flex-col items-center gap-[10px] my-[10px]">
            <h2 className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Experience</h2>
            <p className="text-center">Here is a quick summary of my most recent experiences:</p>
            <div className="flex flex-col w-[80%] gap-[20px]">
                <div className="flex flex-col md:flex-row gap-[5px] rounded-lg shadow-lg p-[32px] my-[10px] md:gap-x-[20px]">
                    <div className="md:w-1/4">
                        <h2 className="text-[#66FF00] font-bold text-[24px]">UPWORK</h2>
                    </div>

                    <div className="md:w-1/4 md:order-last">
                        <p>Nov 2021 - present</p>
                    </div>

                    <div className="md:w-2/4">
                        <h3 className="font-semibold my-[10px] md:my-0">Sr.Frontend Developer</h3>
                        <ul className="flex flex-col list-disc gap-[5px] my-[10px]">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[5px] rounded-lg shadow-lg p-[32px] my-[10px] md:gap-x-[20px]">
                    <div className="md:w-1/4">
                        <h2 className="text-[#66FF00] font-bold text-[24px]">UPWORK</h2>
                    </div>

                    <div className="md:w-1/4 md:order-last">
                        <p>Jul 2017 - Oct 2021</p>
                    </div>

                    <div className="md:w-2/4">
                        <h3 className="font-semibold my-[10px] md:my-0">Team Lead</h3>
                        <ul className="flex flex-col list-disc gap-[5px] my-[10px]">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[5px] rounded-lg shadow-lg p-[32px] my-[10px] md:gap-x-[20px]">
                    <div className="md:w-1/4">
                        <h2 className="text-[#66FF00] font-bold text-[24px]">UPWORK</h2>
                    </div>

                    <div className="md:w-1/4 md:order-last">
                        <p>Dec 2015 - May 2017</p>
                    </div>

                    <div className="md:w-2/4">
                        <h3 className="font-semibold my-[10px] md:my-0">Team Lead</h3>
                        <ul className="flex flex-col flex-wrap list-disc gap-[5px] my-[10px]">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}