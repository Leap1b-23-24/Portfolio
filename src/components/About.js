import { Button } from "./Button";
export const About = () => {
  return (
    <>
      <div className="px-[80px] py-[96px] dark:bg-[#374151] bg-[#D1D5DB]">
        <div className=" px-[32px] gap-[48px]">
          <div className="w-100% flex justify-center mb-[48px]">
            <Button text="About me" />
          </div>
          <div className="sm:flex flex-row flex-column gap-[48px] relative">
            <div className="basis-1/2 mb-[48px]">
              <img
                className="w-[280px] h-[360px] sm:w-[400px] sm:h-[480px] relative z-10 border-white"
                src="Pic.png"
              ></img>
              <div className="sm:w-[400px] sm:h-[480px] w-[320px] h-[360px] bg-[#E5E7EB] absolute sm:top-[25px] sm:left-[-25px] top-[20px] left-[-20px]"></div>
            </div>
            <div className="basis-1/2 gap-[16px] ">
              <h2 className="text-3xl font-semibold mb-[24px]">
                Curious about me? Here you have it:
              </h2>
              <div className="flex flex-col gap-[16px] flex-wrap">
                <p>
                  I'm a passionate, self-proclaimed designer who specializes in
                  full stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me.
                </p>
                <p>
                  I began my journey as a web developer in 2015, and since then,
                  I've continued to grow and evolve as a developer, taking on
                  new challenges and learning the latest technologies along the
                  way. Now, in my early thirties, 7 years after starting my web
                  development journey, I'm building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </p>
                <p>
                  I am very much a progressive thinker and enjoy working on
                  products end to end, from ideation all the way to development.
                </p>
                <p>
                  When I'm not in full-on developer mode, you can find me
                  hovering around on twitter or on indie hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on Twitter where I share tech-related bites and
                  build in public, or you can follow me on GitHub.
                </p>
                <p>Finally, some quick bits about me.</p>
                <div className="flex gap-[30px] ">
                  <ul className="list-disc">
                    <li>B.E. in Computer Engineering</li>
                    <li>Full time freelancer</li>
                  </ul>
                  <ul className="list-disc">
                    <li>Avid learner</li>
                    <li>Aspiring indie hacker</li>
                  </ul>
                </div>
                <p>
                  One last thing, I'm available for freelance work, so feel free
                  to reach out and say hello! I promise I don't bite 😉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
