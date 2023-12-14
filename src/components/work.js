import { useState } from "react";
import { Button } from "./Button";

export const Work = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: "/Picture.png",
      title: "Fiskil",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      description: ["Javascript", "Java", "React"],
    },
    {
      id: 2,
      image: "/Picture.png",
      title: "Fiskil",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      description: ["Javascript", "Java", "React"],
    },
    {
      id: 3,
      image: "/Picture.png",
      title: "Fiskil",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      description: ["Javascript", "Java", "React"],
    },
  ]);
  return (
    <>
      <div className="px-[80px] py-[96px]">
        <div className="px-[32px] flex gap-[48px] flex-col">
          <div className="text-center">
            <div className="w-100% flex justify-center mb-[16px]">
              <Button text="Work" />
            </div>
            <p>Some of the noteworthy projects I have built:</p>
          </div>
          {data.map((item, index) => {
            return (
              <Card
                reverse={index % 2 === 1}
                key={item.id}
                image={item.image}
                title={item.title}
                text={item.text}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export const Card = (props) => {
  return (
    <div className={`flex sm:${props.reverse ? "flex" : "flex-row"} flex-row`}>
      <img className="p-[48px] " src={props.image}></img>
      <div className="p-[48px] flex flex-col gap-[24px]">
        <h2 className="text-[20px] font-bold">{props.title}</h2>
        <p>{props.text}</p>
        <div className="flex flex-wrap gap-[8px]">
          {props.description.map((item) => {
            return (
              <button className="border-[1px] max-w-fit px-[20px] py-[4px] rounded-[10px] bg-[#E5E7EB] dark:bg-[#374151]">
                {item}
              </button>
            );
          })}
        </div>
        <img className="w-[24px] h-[24px] " src="Icon Button.png"></img>
      </div>
    </div>
  );
};
