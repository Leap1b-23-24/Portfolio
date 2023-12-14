import { Card } from "./Card"

const data = [
    {
        title: "Sr. Frontend Developer",
        date: "Nov 2021 - Present",
        exps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    },
    {
        title: "Team Lead",
        date: "Jul 2017 - Oct 2021",
        exps: [
            "Sed quis justo ac magna.",
            "Sed quis justo ac magna.",
            "Cupidatat nisi excepteur fugiat nostrud velit."
        ]
    },
    {
        title: "Full Stack Developer",
        date: "Dec 2015 - May 2017",
        exps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    }
]

export const Experience = () => {
    return (
        <div className='w-full flex flex-col bg-gray-50 px-4 py-16 gap-6 sm:px-20 sm:py-24 sm:gap-12 items-center'>
            <div className='flex flex-col gap-4 items-center'>
                <div className='bg-gray-200 text-gray-600 text-sm px-5 py-1 w-fit rounded-[12px] '>
                    <p>Experience</p>
                </div>
                <p>Here is a quick summary of my most recent experiences:</p>
            </div>

            {data.map((item, index) => {
                return <Card key={index} title={item.title} exps={item.exps} date={item.date} />
            })}

        </div>
    )
}