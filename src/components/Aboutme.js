import { Activedot } from "./Activedot";
import { Button } from "./Button";
import { useTheme } from "@/app/page";

export const Aboutme = (props) => {
  const { darkmode } = useTheme();
  return (
    <div
      id="about"
      className="w-full bg-[#F9FAFB] flex flex-col items-center gap-[50px] pb-[100px] dark:bg-[#111827] p-[5px]"
      ref={props.ref}
    >
      <div className="mt-[50px]">
        <Button title="About"></Button>
      </div>
      <div className="w-[100%] md:w-[80%] flex flex-col md:flex-row justify-center items-center gap-[50px] justify-between">
        <div className="w-[350px] h-[320px] relative mt-[50px] md:w-[450px] md:h-[480px] ">
          <img
            className="w-[350px] h-[320px] object-cover md:w-[420px] md:h-[480px]"
            src="/Background.png"
          ></img>
          <div className="w-[280px] h-[320px] flex justify-center items-center bg-blacks absolute -top-5 left-9 md:-left-10 md:-top-10 md:w-[420px] md:h-[480px]">
            <img
              className="w-[100%] h-[100%] object-cover  "
              src="/catcat.jpeg"
            />
          </div>
        </div>

        <div className="flex flex-col w-[100%] p-[5px] md:w-[50%] gap-[30px]">
          <p className="text-3xl font-semibold text-black dark:text-[#F9FAFB]">
            Curious about me? Here you have it:
          </p>
          <p className="font-normal dark:text-[#D1D5DB] dark:text-[#D1D5DB] text-[#4B5563] font-inter">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="font-normal dark:text-[#D1D5DB] dark:text-[#D1D5DB] text-[#4B5563] font-inter">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="font-normal dark:text-[#D1D5DB] dark:text-[#D1D5DB] text-[#4B5563] font-inter">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="font-normal dark:text-[#D1D5DB] dark:text-[#D1D5DB] text-[#4B5563] font-inter">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="font-normal dark:text-[#D1D5DB] dark:text-[#D1D5DB] text-[#4B5563] font-inter">
            Finally, some quick bits about me.
          </p>
          <div className="flex flex-row gap-[50px]">
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"}></Activedot>
                ) : (
                  <Activedot color={"#4B5563"}></Activedot>
                )}
              </div>
              <p className="font-normal dark:text-[#D1D5DB] dark:text-[#D1D5DB] text-[#4B5563] font-inter">
                B.E. in Computer Engineering
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"}></Activedot>
                ) : (
                  <Activedot color={"#4B5563"}></Activedot>
                )}
              </div>
              <p className="font-normal dark:text-[#D1D5DB] dark:text-[#D1D5DB] text-[#4B5563] font-inter">
                B.E. in Computer Engineering
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[50px]">
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"}></Activedot>
                ) : (
                  <Activedot color={"#4B5563"}></Activedot>
                )}
              </div>
              <p className="font-normal dark:text-[#D1D5DB] dark:text-[#D1D5DB] text-[#4B5563] font-inter">
                B.E. in Computer Engineering
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                {darkmode ? (
                  <Activedot color={"#D1D5DB"}></Activedot>
                ) : (
                  <Activedot color={"#4B5563"}></Activedot>
                )}
              </div>
              <p className="font-normal dark:text-[#D1D5DB] dark:text-[#D1D5DB] text-[#4B5563] font-inter">
                B.E. in Computer Engineering
              </p>
            </div>
          </div>

          <p className="font-normal dark:text-[#D1D5DB] dark:text-[#D1D5DB] text-[#4B5563] font-inter">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
