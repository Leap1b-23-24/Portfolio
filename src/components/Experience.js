import { Button } from "../components/buttons"
import { Box } from "./Box";

const data = [
    {
        title: "Sr. Frontend Developer",
        date: "Nov 2021 - Present",
        exps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        ]
        
    },
    {
        title: "Team Lead",
        date: "Jul 2017 - Oct 2021",
        exps: [
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    },
    {
        title: "Full Stack Developer",
        date: "Dec 2015 - May 2017",
        exps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    },
]

export function Experience() {
    return (
        <div className="dark:text-[#D1D5DB] pl-20 pt-10 pb-20 bg-[#f4f4f5] dark:bg-[#111827] w-[1440px] ">

            <div>
                <Button button="Experience" text="Here is a quick summary of my most recent experiences:" />
            </div>
            <div className="pt-10 ">

                <div className="flex flex-col gap-4 justify-items-center items-center">

                    {data.map((item, index) => {
                        return <Box key={index} title={item.title} date={item.date} exps={item.exps} />
                    })}

                </div>
            </div>

        </div>
    );
}