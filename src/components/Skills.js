import { Button } from "./Button";
import { Javascript } from "./Javacript";
import { useTheme } from "@/app/page";

export const Skills = (props) => {
  const darkmode = useTheme();
  let data = [
    {
      text: "Javascript",
      src: "/icon-javscript.png",
    },
    {
      text: "Typescript",
      src: darkmode ? "/icon-typescript.svg" : "/icon-typescript.svg",
    },
    {
      text: "React",
      src: darkmode ? "/icon-react.svg" : "/icon-react.svg",
    },
    {
      text: "Next.js",
      src: darkmode ? "/icon-nextjs.svg" : "/Group.svg",
    },
    {
      text: "Node.js",
      src: "/icon-nodejs.svg",
    },
    {
      text: "Express",
      src: darkmode ? "/icon-express.svg" : "/dicon-express.svg",
    },
    {
      text: "Nest.js",
      src: "/icon-nest.svg",
    },
    {
      text: "Socket.io",
      src: darkmode ? "/icon-socket.svg" : "/dicon-socket.svg",
    },
    {
      text: "PostgreSQL",
      src: "/icon-postgresql.svg",
    },

    {
      text: "MongoDB",
      src: "/icon-mongodb.svg",
    },
    {
      text: "Sass/Scss",
      src: "/icon-sass.svg",
    },
    {
      text: "Tailwindcss",
      src: "/icon-tailwindcss.svg",
    },
    {
      text: "Figma",
      src: "/icon-figma.svg",
    },
    {
      text: "Cypress",
      src: darkmode ? "/icon-cypress.svg" : "/dicon-cypress.svg",
    },
    {
      text: "Storybook",
      src: "/icon-storybook.svg",
    },
    {
      text: "Git",
      src: "/icon-git.svg",
    },
  ];

  return (
    <div className="w-full md:w-[80%] flex flex-col gap-[50px] items-center pb-[50px] dark:bg-[#030712]">
      <div className="mt-[50px]">
        <Button title="Skills"></Button>
      </div>
      <p className="font-normal text-[#4B5563] text-xl dark:text-[#D1D5DB]">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="w-full grid grid-cols-3 sm:grid-cols-8 gap-[100px] justify-center">
        {data.map((item) => {
          return (
            <div className="flex w-[64px] h-[64px] flex-col gap-[10px] items-center">
              <img className="w-[64px] h-[64px]" src={item.src} />
              <p className="dark:text-[#D1D5DB]">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
