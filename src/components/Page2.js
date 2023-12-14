import Graybttn from "./Graybttn";
import Texts from "./Texts";
export function Page2() {
  return (
    <div
      className="py-[64px] px-[16px] w-full bg-gray-50 dark:bg-[#111827] xl:py-[96px] xl:px-[80px]"
      id="about"
    >
      <div className="flex flex-col items-center gap-[24px]">
        <Graybttn title="About me" />
        <div className=" gap-[24px] flex flex-col items-center xl:flex-row xl:gap-[48px] ">
          <div className="xl:w-6/12">
            <img className="w-full" src="page2img.svg"></img>
          </div>
          <div className="xl:w-6/12">
            <h2 className="text-[24px] font-semibold leading-8 dark:text-[#F9FAFB]">
              Curious about me? Here you have it:
            </h2>
            <div className="flex flex-col gap-[16px]">
              <Texts text="I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me." />
              <Texts text="I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more." />
              <Texts text="I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development." />
              <Texts text="When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub." />
              <Texts text="Finally, some quick bits about me." />
              <Texts text="One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
