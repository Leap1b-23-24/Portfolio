import { Forms } from "./Forms"
const data = [
    {
        tit: "Fiskil",
        par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        langs: [
            "React",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Tailwindcss",
            "Figma",
            "Cypress",
            "Storybook",
            "Git"





        ]

    },
    {
        tit: "Fiskil",
        par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        langs: [
            "React",
            "Next.js",
            "Typescript",
            "Nest.js",
            "PostgreSQL",
            "Tailwindcss",
            "Figma",
            "Cypress",
            "Storybook",
            "Git"

        ]

    },
    {
        tit: "Fiskil",
        par: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        langs: [
            "React",
            "Next.js",
            "Typescript",
            "Nest.js","PostgreSQL",
            "Tailwindcss",
            "Figma",
            "Cypress",
            "Storybook",
            "Git"


        ]

    }
]



export const Work = (props) => {
    return (
        <div className="w-full flex flex-col bg-white px-4 py-16 gap-6 sm:px-20 sm:py-24 sm:gap-12 items-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-fit text-sm bg-gray-200 text-gray-600 px-5 py-1 text-center rounded-[12px]">
                    <p>Work</p>
                </div>
                <p>Some of the noteworthy projects I have built:</p>
            </div>
            {data.map((items, index) => {
                return <Forms key={index} reverse={index % 2 === 1} tit={items.tit} par={items.par} langs={items.langs} />
            })}
        </div>
    )

}