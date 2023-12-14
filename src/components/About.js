import { useContext } from "react";
import { Button } from "../components/buttons"
export function About() {
    const {isDark} = useContext(DarkContext);
    return (
        <div className=" pl-20 pt-10 pb-20 w-[1440px] dark:bg-[#111827] bg-[#f4f4f5] justify-items-center items-center gap-20">
            <div>
                <Button button="About me"/>
            </div>
            <div className="flex flex-row pt-10 justify-items-center items-center">
                <div className="w-[700px] ">
                    <div className="absolute  bg-[#e5e7eb] dark:bg-[#374151] w-[384px] h-[494px]"></div>
                    <div className=" bottom-10 start-10 relative  border-solid border-3  ">
                        <img src="/shil.png" width={384} height={494} ></img>
                    </div>
                </div>
                <div className=" flex flex-col gap-10 w-[600px]">
                    <p className="font-bold text-xl dark:text-[#D1D5DB]" >Curious about me? Here you have it:</p>
                    <p className="dark:text-[#D1D5DB]">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                    <p className="dark:text-[#D1D5DB]">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                    <p className="dark:text-[#D1D5DB]">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                    <p className="dark:text-[#D1D5DB]">When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                    <p className="dark:text-[#D1D5DB]">Finally, some quick bits about me.</p>
                    <div className="flex flex-row gap-10">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-ro gap-3" >
                                <div className="w-[8px] h-[8px] bg-black rounded gap-10 dark:bg-[#D1D5DB]"></div>
                                <p className="dark:text-[#D1D5DB]"> B.E. in Computer Engineering</p>
                            </div>
                            <div className="flex flex-row gap-3" >
                                <div className="w-[8px] h-[8px] bg-black rounded gap-10 dark:bg-[#D1D5DB]"></div>
                                <p className="dark:text-[#D1D5DB]"> Full time freelancer</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row gap-3" >
                                <div className="w-[8px] h-[8px] bg-black rounded gap-10 dark:bg-[#D1D5DB]"></div>
                                <p className="dark:text-[#D1D5DB]">Avid learner</p>
                            </div>
                            <div className="flex flex-row gap-3" >
                                <div className="w-[8px] h-[8px] bg-black rounded gap-10 dark:bg-[#D1D5DB]"></div>
                                <p className="dark:text-[#D1D5DB]"> Aspiring indie hacker</p>
                            </div>
                        </div>
                    </div>
                    <p className="dark:text-[#D1D5DB]">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                </div>


            </div>
        </div >

    );

}