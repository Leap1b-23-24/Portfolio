export const About = (props) => {
    return (
        <div className=" w-full bg-gray-50 dark:bg-[#111827] dark:text-white flex flex-col py-16 px-4 sm:px-20 sm:py-24 gap-12 items-center">
            <div className="w-fit bg-gray-200 py-1 px-5 rounded-xl dark:bg-[#374151] text-center text-gray-600">
                <p className="text-sm font-medium  dark:text-[#D1D5DB] ">About me</p>
            </div>
            <div className="flex flex-col gap-12 sm:flex-row w-full ">
                <div className="sm:w-6/12 flex justify-center">
                    <div className=" relative w-[280px] h-[360px] sm:w-[400px] sm:h-[480px] sm:ml-10">
                        <div className="absolute bg-gray-200 w-[320px] h-[360px] sm:w-full sm:h-full top-5 sm:top-10 sm:right-10"></div>
                        <div className="relative border-solid border-3 ">
                            <img src="/Pic.jpg" className="w-full h-full" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col grow gap-6 sm:w-6/12">
                    <h1 className=" text-2xl sm:text-3xl font-semibold">Curious about me? Here you have it:</h1>
                    <div className=" flex flex-col gap-4 text-base font-normal text-gray-600 dark:text-[#D1D5DB] ">
                        <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                        <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                        <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                        <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                        <p>Finally, some quick bits about me.</p>
                        <div className="flex gap-8 pl-3.5 ">
                            <ul>
                                <li className="list-disc">B.E. in Computer Engineering</li>
                                <li className="list-disc">Full time freelancer</li>
                            </ul>
                            <ul>
                                <li className="list-disc">Avid learner</li>
                                <li className="list-disc">Aspiring indie hacker</li>
                            </ul>
                        </div>
                        <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                    </div>

                </div>
            </div>
        </div>
    )
}