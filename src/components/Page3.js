import Texts from "./Texts";
import Graybttn from "./Graybttn";
import Work from "./Work";
import { Cypress } from "@/assets/svg/Cypress";
import { Express } from "@/assets/svg/Express";
export function Page3() {
  return (
    <div className="py-[64px] px-[16px] bg-white dark:bg-[#030712]" id="skills">
      <div className="flex flex-col items-center gap-[16px] xl:gap-[48px]">
        <Graybttn title="Skills" />
        <Texts text="The skills, tools and technologies I am really good at:" />
        <div className="grid grid-cols-3 gap-y-[20px] gap-x-[57px] xl:grid-cols-8">
          <Work imgs="/js.svg" work="Javascript" />
          <Work imgs="/typescript.svg" work="Typescript" />
          <Work imgs="/react.svg" work="React" />
          {/* <Work imgs="/next.svg" work="Next.js" /> */}
          <Work imgs="/nodejs.svg" work="Node.js" />
          <Work imgs="/express.svg" work="Express.js" />
          <Express />
          <Work imgs="/postgresql.svg" work="PostgreSQL" />
          <Work imgs="/mongodb.svg" work="MongoDB" />
          <Work imgs="/sass.svg" work="Sass/Scss" />
          <Work imgs="/tailwindcss.svg" work="Tailwindcss" />
          <Work imgs="/figma.svg" work="Figma" />
          <Work imgs="/cypress.svg" work="Cypress" />
          <Cypress />
          <Work imgs="/storybook.svg" work="Storybook" />
          <Work imgs="/git.svg" work="Git" />
        </div>
      </div>
    </div>
  );
}
