"use client";

import { Button } from "./btn";
import { Row } from "./row";

export default function Home() {
  return (
    <div className="w-full max-w-1400 m-auto">
      <Section4 />
    </div>
  );
}

const data = [
  {
    title: "Sr. Frontend Developer",
    date: "Nov 2021 - Present",
    exps: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Team Lead",
    date: "Jul 2017 - Oct 2021",
    exps: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Full Stack Developer",
    date: "Dec 2015 - May 2017",
    exps: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export const Section4 = (props) => {
  return (
    <section className="bg-[#111827] md">
      <div className="flex flex-col items-center px-[80px] py-[96px] w-full h-full gap-8">
        <Button text="Work"></Button>
        <p className="text-[20px] text-[400] text-white mb-6">
          The skills, tools and technologies i am really good at:
        </p>

        {data.map((item) => {
          return (
            <Row
              key={item}
              title={item.title}
              exps={item.exps}
              date={item.date}
            />
          );
        })}
      </div>
    </section>
  );
};
