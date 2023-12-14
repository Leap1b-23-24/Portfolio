import { Button } from "../components/buttons"
import { Imgbox } from "./Imgbox";
const data = [
    {
        title: "Fiskil",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        exps: [
            "react",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Storybook",
            "Git",
            "Tailwindcss",
            "Figma",
            "Cypress"
        ]
    },
    {
        title: "Fiskil",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        exps: [
            "react",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Storybook",
            "Git",
            "Tailwindcss",
            "Figma",
            "Cypress"
        ]
    },
    {
        title: "Fiskil",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        exps: [
            "react",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Storybook",
            "Git",
            "Tailwindcss",
            "Figma",
            "Cypress"
        ]
    },
]
export function Work() {
    return (
        <div className=" pl-20 pt-10 pb-10 w-[1440px] dark:bg-neutral-900 justify-items-center items-center gap-20">
            <div>
                <Button button="Work" text="Some of the noteworthy projects I have built:" />
            </div>

            <div className="flex flex-col gap-10 justify-items-center items-center pt-10">

                {data.map((item, index) => {
                    return <Imgbox key={index} reverse={index % 2 === 1} title={item.title} text={item.text} exps={item.exps} />
                })}

            </div>


        </div>
    );
}