export const Hero = () => {
    return (
        <>
            <div className=" pt-20 pb-20 pl-20 w-[1440px] flex flex-row gap-40 justify-items-center dark:bg-neutral-900 ">
                <div className=" w-[900px] h-[152px] flex flex-col   gap-10" >
                    <img className="dark:invert" src="/text.png" width={250} height={50} ></img>   
                    <p className="text-lg color-[#52525b] dark:text-[#D1D5DB]">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <img className="dark:invert" src="2.png" width={25} height={6}></img>
                            <p className="dark:text-[#D1D5DB]">Ahmedabad,India </p>
                        </div>
                        <div className="flex  gap-2">
                          <img  src="/element.png"></img>
                            <p className="dark:text-[#D1D5DB]">Available for new projects</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 " >
                        <img className="dark:invert brightness-15" src="/Icon Button.png" width={30} height={30}></img>
                        <img className="dark:invert" src="/icon.png" width={20} height={20}></img>
                        <img className="dark:invert" src="/aa.png" width={30} height={30}></img>
                    </div>
                </div>
                <div className=" w-[620px] h-[360px] justify-items-center items-center">
                    <div className="absolute dark:bg-[#374151] bg-[#e5e7eb] w-[280px] h-[320px]"></div>
                    <div className=" bottom-10 end-10 relative  border-solid border-3  ">
                        <img src="/pic.png" width={280} height={320} ></img>
                    </div>

                </div>
            </div>

        </>
    );
}