"use client";

import { Button } from "./btn";

export default function Home() {
  return (
    <div className="w-full max-w-1400 m-auto">
      <Section2 />
    </div>
  );
}

export const Section2 = (props) => {
  return (
    <section className="bg-[#111827] md">
      <div className="flex items-center flex-col px-[80px] py-[96px] w-full h-full">
        <Button text="About me"></Button>
        <div className="flex gap-[200px] mt-10">
          <div className="relative ">
            <img
              src="/kitten.png"
              className="w-[24rem] h-[28rem] border-l-[8px] relative z-20 border-b-[8px] border-[#111827] ml-[55px] mt-4 "
            ></img>
            <div className="w-[24rem] h-[28rem] bg-[#374151] absolute z-10 top-[65px] left-0"></div>
          </div>
          <div className="flex flex-col gap-7 w-[37rem]">
            <h2 className="text-[30px] text-[600] text-white">
              Curious about me? Here you have it:
            </h2>
            <p className="text-[16px] font-[400] text-[#D1D5DB]">
              I&apos;m a passionate, self-proclaimed designer who specializes in
              full stack development (React.js & Node.js). I am very
              enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.
            </p>
            <p className="text-[16px] font-[400] text-[#D1D5DB]">
              I began my journey as a web developer in 2015, and since then,
              I&apos;ve continued to grow and evolve as a developer, taking on
              new challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I&apos;m building cutting-edge web
              applications using modern technologies such as Next.js,
              TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p className="text-[16px] font-[400] text-[#D1D5DB]">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="text-[16px] font-[400] text-[#D1D5DB]">
              When I&apos;m not in full-on developer mode, you can find me
              hovering around on twitter or on indie hacker, witnessing the
              journey of early startups or enjoying some free time. You can
              follow me on Twitter where I share tech-related bites and build in
              public, or you can follow me on GitHub.
            </p>
            <p className="text-[16px] font-[400] text-[#D1D5DB]">
              Finally, some quick bits about me.
            </p>
            <ul className="text-[16px] font-[400] text-[#D1D5DB] flex flex-wrap w-[650px] h-15 gap-[120px] list-disc ml-7">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
            </ul>
            <ul className="text-[16px] font-[400] text-[#D1D5DB] flex flex-wrap w-[650px] h-15 gap-[195px] list-disc ml-7">
              <li>Full time freelancer</li>
              <li>Aspiring indie hacker</li>
            </ul>
            <p className="text-[16px] font-[400] text-[#D1D5DB]">
              One last thing, I&apos;m available for freelance work, so feel
              free to reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
