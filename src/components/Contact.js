import { Button } from "./Button";
import { useState } from "react";
import { Github } from "./assets/Github";
import { Twitter } from "./assets/Twitter";
import { Figma } from "./assets/Figma";
export const Contact = () => {
  const [data, setData] = useState([
    {
      id: 1,
      description: "reachsagarshah@gmail.com",
      text: "+91 8980500565",
    },
  ]);
  return (
    <>
      <div className="px-[80px] py-[96px]">
        <div className="flex flex-col px-[32px] gap-[48px]">
          <div className="flex flex-col text-center">
            <div className="w-100% flex justify-center mb-[16px]">
              <Button text="Get in touch" />
            </div>
            <p>
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
          {data.map((item) => {
            return (
              <MailPhone
                key={item.id}
                description={item.description}
                text={item.text}
              />
            );
          })}
          <div className="flex flex-col items-center ">
            <p>You may also find me on these platforms!</p>
            <div className="flex">
              <Github />
              <Twitter />
              <Figma />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const MailPhone = (props) => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <img className="w-[32px] h-[32px]" src="1.png"></img>
          <p className="text-[32px] font-bold">{props.description}</p>
          <img className="w-[32px] h-[32px]" src="2.png"></img>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-[32px] h-[32px]" src="3.png"></img>
          <p className="text-[32px] font-bold">{props.text}</p>
          <img className="w-[32px] h-[32px]" src="2.png"></img>
        </div>
      </div>
    </>
  );
};
