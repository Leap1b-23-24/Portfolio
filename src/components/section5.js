"use client";

import { Button } from "./btn";
import { Col } from "./col";

export default function Home() {
  return (
    <div className="w-full max-w-1400 m-auto">
      <Section5 />
    </div>
  );
}
const data = [
  {
    title: "Fiskil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    btn: [
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
    ],
  },
  {
    title: "Fiskil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    btn: [
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
    ],
  },
  {
    title: "Fiskil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    btn: [
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
      "React",
      "Cat.js",
      "Typescript",
      "Nest.js",
    ],
  },
];

export const Section5 = (props) => {
  return (
    <section className="bg-black md">
      <div className="flex flex-col items-center px-[80px] py-[96px] w-full h-full gap-8">
        <Button text="Get in touch"></Button>
        <p className="text-[20px] text-[400] text-white mb-6">
          The skills, tools and technologies i am really good at:
        </p>
        {data.map((item) => {
          return <Col title={item.title} text={item.text} btn={item.btn} />;
        })}
      </div>
    </section>
  );
};
