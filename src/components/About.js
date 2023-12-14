import { Button } from "./Button";
import { themeContext } from "@/app/page";
import { useContext } from "react";

export const About = () => {
  const { value } = useContext(themeContext);

  return (
    <div
      id="About"
      className="sm:h-[962px] dark:bg-[#111827] bg-[#F9FAFB] py-[64px] px-[16px] sm:px-[80px] sm:py-[96px]"
    >
      <div className="sm:px-[32px] flex flex-col items-center">
        <Button text="About me" />
        <div className="flex flex-col sm:flex-row gap-[48px]">
          <div className="h-[380px] sm:w-[584px] sm:h-[694px]">
            <img
              className="absolute w-[320px] h-360px sm:w-[400px] sm:h-[480px] left-[50%] sm:left-[0] sm:top-[40px] translate-x-[-50%] sm:translate-x-[0]"
              src={!value ? "lightAbBack.png" : "darkAbBack.png"}
            />
            <img
              className="absolute w-[280px] h-[360px] sm:w-[400px] left-[50%] sm:h-[480px] sm:left-[40px] translate-x-[-50%] sm:translate-x-[0]"
              src={!value ? "lightAbout.png" : "darkAbout.png"}
            />
          </div>
          <div className="w-fill sm:w-[584px] sm:h-[694px]">
            <h2 className="mb-[24px] font-semibold text-[30px] leading-[36px] dark:text-[#F9FAFB] text-[#111827]">
              Curious about me? Here you have it:
            </h2>
            <div className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-[16px] leading-[24px]">
              <p className="mb-[16px]">
                I'm a passionate,{" "}
                <a className="underline" href="wwww.google.com">
                  self-proclaimed designer
                </a>{" "}
                who specializes in full stack development (React.js & Node.js).
                I am very enthusiastic about bringing the technical and visual
                aspects of digital products to life. User experience, pixel
                perfect design, and writing clear, readable, highly performant
                code matters to me.
              </p>
              <p className="mb-[16px]">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="mb-[16px]">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="mb-[16px]">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on{" "}
                <a className="underline" href="www.google.com">
                  Twitter
                </a>{" "}
                where I share tech-related bites and build in public, or you can
                follow me on{" "}
                <a className="underline" href="www.google.com">
                  GitHub
                </a>
                .
              </p>
              <p className="mb-[16px]">Finally, some quick bits about me.</p>
              <div className="flex gap-[80px] mb-[16px]">
                <ul>
                  <li>&#x2022; B.E. in Computer Engineering</li>
                  <li>&#x2022; Full time freelancer</li>
                </ul>
                <ul>
                  <li>&#x2022; Avid learner</li>
                  <li>&#x2022; Aspiring indie hacker</li>
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
  );
};
