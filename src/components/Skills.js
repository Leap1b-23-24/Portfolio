const data = [
    {
        title: "Javascript",
        image: "/icon-javscript.jpg"
    },
    {
        title: "Typescript",
        image: "/icon-typescript.jpg"
    },
    {
        title: "React",
        image: "/icon-react.jpg"
    },
    {
        title: "Next.js",
        image: "/icon-nextjs.jpg"
    },
    {
        title: "Node.js",
        image: "/icon-nodejs.jpg"
    },
    {
        title: "Express.js",
        image: "/icon-express.jpg"
    },
    {
        title: "Nest.js",
        image: "/icon-nest.jpg"
    },
    {
        title: "Socket.io",
        image: "/icon-socket.jpg"
    },
    {
        title: "PostgreSQL",
        image: "/icon-postgresql.jpg"
    },
    {
        title: "MongoDB",
        image: "/icon-mongodb.jpg"
    },
    {
        title: "Sass/Scss",
        image: "/icon-sass.jpg"
    },
    {
        title: "Tailwindcss",
        image: "/icon-tailwindcss.jpg"
    },
    {
        title: "Figma",
        image: "/icon-figma.jpg"
    },
    {
        title: "Cypress",
        image: "/icon-cypress.jpg"
    },
    {
        title: "Storybook",
        image: "/icon-storybook.jpg"
    },
    {
        title: "Git",
        image: "/icon-git.jpg"
    }
]

export const Skills = (props) => {
    return (
        <div className=" bg-white dark:bg-black flex flex-col py-16 px-4 sm:px-20 sm:py-24 gap-12">
            <div className="flex flex-col items-center dark:text-[#D1D5DB] gap-4">
                <div className="w-fit px-5 py-1 bg-gray-200 dark:bg-[#374151] rounded-xl text-center text-gray-600 dark:text-[#D1D5DB]">
                    <p className="text-sm font-medium ">Skills</p>
                </div>
                <p className=" text-center text-xl font-normal" >The skills, tools and technologies I am really good at:</p>
            </div>

            <div className="flex flex-wrap text-lg font-normal gap-y-4 sm:gap-y-12 p-8">

                {data.map((item, index) => {
                    return <div className="flex flex-col gap-2  items-center justify-between w-1/3 sm:w-[12%] ">
                        <img src={item.image} />
                        <p className="dark:text-[#D1D5DB]">{item.title}</p>
                    </div>
                })}


            </div>




            {/* <div className="flex flex-col text-lg font-normal gap-12 px-8">
                <div className="flex flex-wrap sm:flex-row justify-between">
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-javscript.jpg" />
                        <p>Javascript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-typescript.jpg" />
                        <p>Typescript</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-react.jpg" />
                        <p>React</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 ">
                        <img src="/icon-nextjs.jpg" />
                        <p>Next.js</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-nodejs.jpg" />
                        <p>Node.js</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-express.jpg" />
                        <p>Exoress.js</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-nest.jpg" />
                        <p>Nest.js</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-socket.jpg" />
                        <p>Socket.io</p>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap justify-between">
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-postgresql.jpg" />
                        <p>PostgreSQL</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-mongodb.jpg" />
                        <p>MongoDB</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-sass.jpg" />
                        <p>Sass/Scss</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-tailwindcss.jpg" />
                        <p>Tailwindcss</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-figma.jpg" />
                        <p>Figma</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-cypress.jpg" />
                        <p>Cypress</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-storybook.jpg" />
                        <p>Storybook</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/icon-git.jpg" />
                        <p>Git</p>
                    </div>
                </div>

            </div> */}

        </div>
    )
}