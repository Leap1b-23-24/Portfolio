"use client";

import { Button } from "./btn";
import { Planguage } from "./planguage";

export default function Home() {
  return (
    <div className="w-full max-w-1400 m-auto">
      <Section3 />
    </div>
  );
}

export const Section3 = (props) => {
  return (
    <section className="bg-black">
      <div className="flex flex-col items-center px-[80px] py-[96px] w-full h-full gap-8">
        <Button text="Exprience"></Button>
        <p className="text-[20px] text-[400] text-white mb-6">
          The skills, tools and technologies i am really good at:
        </p>
        <div className="flex flex-col items-center gap-10 text-white">
          <div className="flex justify-between items-center gap-x-10">
            <Planguage source="icon-javscript.png" text="Javascript" />
            <Planguage source="icon-typescript.png" text="Typescript" />
            <Planguage source="icon-react.png" text="React" />
            <Planguage source="icon-nextjs.png" text="Next.js" />
            <Planguage source="icon-nodejs.png" text="Node.js" />
            <Planguage source="icon-express.png" text="Express.js" />
            <Planguage source="icon-nest.png" text="Nest.js" />
            <Planguage source="icon-socket.png" text="Socket.io" />
          </div>
          <div className="flex justify-between items-center gap-x-10">
            <Planguage source="icon-postgresql.png" text="PostgreSQL" />
            <Planguage source="icon-mongodb.png" text="MongoDB" />
            <Planguage source="icon-sass.png" text="Sass/Scss" />
            <Planguage source="icon-tailwindcss.png" text="Tailwindcss" />
            <Planguage source="icon-figma.png" text="Figma" />
            <Planguage source="icon-cypress.png" text="Cypress" />
            <Planguage source="icon-storybook.png" text="Storybook" />
            <Planguage source="icon-git.png" text="Git" />
          </div>
        </div>
      </div>
    </section>
  );
};
