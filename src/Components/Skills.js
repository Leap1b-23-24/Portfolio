import { Button } from "./Buttons";
import { CypressIcon } from "../components/assets/CypressIcon";
import { ExpressIcon } from "../components/assets/ExpressIcon";
import { SocketIcon } from "../components/assets/SocketIcon";
export function Skills() {
  return (
    <div className="p-20 dark:text-[#D1D5DB]">
      <Button text="Skills" />

      <p className="flex justify-center m-auto mb-8 mt-8 text-center">
        The skills, tools and technologies I am really good at:
      </p>

      <div className="flex flex-wrap gap-[86px] place-content-around ">
        <div className="flex flex-col items-center">
          <img src="icon-javscript.svg"></img>
          <p>Javascript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon-typescript.svg"></img>
          <p>Typescript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon-react.svg"></img>
          <p>React</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon-nextjs.svg"></img>
          <p>Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon-nodejs.svg"></img>
          <p>Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <ExpressIcon />
          <p>Express</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon-nest.svg"></img>
          <p>Nest</p>
        </div>
        <div className="flex flex-col items-center">
          <SocketIcon />
          <p>Socket</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[62px] h-[64px]" src="icon-postgresql.svg"></img>
          <p>PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[30px] h-[64px]" src="icon-mongodb.svg"></img>
          <p>MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon-sass.svg"></img>
          <p>Sass</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon-tailwindcss.svg"></img>
          <p>TailwindCSS</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon-figma.svg"></img>
          <p>Figma</p>
        </div>
        <div className="flex flex-col items-center">
          <CypressIcon />
          <p>Cycpress</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon-storybook.svg"></img>
          <p>StoryBook</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="icon-git.svg"></img>
          <p>Git</p>
        </div>
      </div>
    </div>
  );
}
