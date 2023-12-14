


import { Button } from "../components/buttons"
// import { Icon } from "../components/Icon"
export function Skills() {
    return (
        <div className="w-[1440px] dark:bg-neutral-900 justify-items-center items-center py-20 pr-10 pl-20 gap-20">

            <div>
                <Button button="Skills" text="The skills, tools and technologies I am really good at:" />
            </div>
            <div className="flex flex-col gap-10 pt-20 justify-items-center items-center ">
                <div className="flex flex-row gap-40">
                    <div className="flex flex-col gap-3">
                        <img src="/icon-javscript.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">JavaScript</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img className="dark:invert" src="/icon-cypress.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">Cypress</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img src="icon-react.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">React</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img className="dark:invert" src="icon-express.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">Express.js</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img src="icon-figma.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">Figma</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img src="icon-git.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">JavaScript</p>
                    </div>
                </div>
                <div className="flex flex-row gap-40">
                    <div className="flex flex-col gap-3">
                        <img src="icon-nest.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">JavaScript</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img src="icon-postgresql.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">JavaScript</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img src="icon-storybook.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">JavaScript</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img src="icon-tailwindcss.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">JavaScript</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img src="icon-react.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">JavaScript</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img src="icon-typescript.png" width={64} height={64}></img>
                        <p className="dark:text-[#D1D5DB]">JavaScript</p>
                    </div>
                </div>


            </div>

        </div>

    );
}
