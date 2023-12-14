import { useState } from "react";
import { Button } from "./Button";

export const Experience = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: "/logo-upwork.png",
      title: "Sr. Frontend Developer",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      text: "Nov 2021 - Present",
    },
    {
      id: 2,
      image: "/logo-upwork.png",
      title: "Team Lead",
      description: [
        "Sed quis justo ac magna..",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna..",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      text: "Jul 2017 - Oct 2021",
    },
    {
      id: 3,
      image: "/logo-upwork.png",
      title: "Full Stack Developer",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      text: "Dec 2015 - May 2017",
    },
  ]);

  return (
    <>
      <div className="px-[80px] py-[96px] bg-[#D1D5DB] dark:bg-[#374151]">
        <div className="px-[32px] flex flex-col  items-center">
          <div className="flex flex-col text-center mb-[48px]">
            <div className="w-100% flex justify-center mb-[16px]">
              <Button text="Experience" />
            </div>
            <p>Here is a quick summary of my most recent experiences:</p>
          </div>
          {data.map((item) => {
            return (
              <Text
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export const Text = (props) => {
  return (
    <>
      <div className="sm:flex border-[1px] gap-[48px] mb-[48px]  p-[32px] max-w-fit">
        <img className="w-[102px] h-[28px]" src={props.image} />
        <div className="max-w-[384px]">
          <h2 className="mb-[16px] text-[20px] font-bold">{props.title}</h2>
          <ul>
            {props.description.map((item) => {
              return <li className="list-disc">{item}</li>;
            })}
          </ul>
        </div>
        <div>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};
