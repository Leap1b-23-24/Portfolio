import { PageHeader } from "@/components/pageHeader";

export const SecondPage = (props) => {
  return (
    <div
      ref={props.refValue}
      id="Aboutsection"
      className="w-screen h-fit py-[64px] px-[16px] bg-[#F9FAFB] dark:bg-[#111827] flex flex-col items-center "
    >
      <PageHeader head={props.pageHead} desc={props.pageDesc} />
      <div className="w-full h-fit flex flex-col gap-[48px] items-center  mt-[24px] sm:flex-row sm:items-start max-w-[1200px]">
        <div className="w-[343px] h-[380px] flex flex-col items-center sm:w-[50%] sm:h-full sm:items-start">
          <div
            className="w-[320px] h-[380px] dark:order-[8px] dark:border-[#111827]  relative flex flex-col items-center 
             sm:w-[440px] sm:h-[520px]"
          >
            <div
              className="w-[280px] h-[360px] border-[8px] dark:border-[#111827] border-[#F9FAFB] z-10
            sm:w-[400px] sm:h-[480px]  sm:absolute sm:right-0"
            >
              <img className="w-full h-full" src="/ungabunga.jpeg" />
            </div>
            <div
              className="w-[320px] h-[360px] border-[8px] border-[#F9FAFB] dark:border-[#111827] bg-[#E5E7EB] dark:bg-[#374151] absolute bottom-0 z-0
               sm:h-[480px]  sm:w-[400px] sm:left-0 "
            ></div>
          </div>
        </div>
        <div className="w-full gap-[24px] sm:w-[50%]">
          <h1 className="w-full h-[64px] text-[24px] leading-[32px] text-[#111827] font-semibold dark:text-[#F9FAFB]">
            Curious about me? Here you have it:
          </h1>
          <div className="w-full h-fit flex flex-col items-start  font-normal text-[16px] text-[#4B5563] leading-[24px] gap-[24px] dark:text-[#D1D5DB]">
            <p className="w-full h-fit">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <ul className="w-[343px] h-[106px] flex-wrap">
              <p className="text-red-500"> eniig draa yag shaana</p>
              {/* <li className="w-fit min-h-[48px] border-2">
                B.E. in Computer Engineering
              </li>
              <li className="min-w-[166.5px] min-h-[48px]">
                B.E. in Computer Engineering
              </li>
              <li className="min-w-[166.5px] min-h-[48px]">
                B.E. in Computer Engineering
              </li>
              <li className="min-w-[166.5px] min-h-[48px]">
                B.E. in Computer Engineering
              </li> */}
            </ul>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
