import { Button } from "/Button";
export function InfoPage() {
  return (
    <div className="p-5  bg-gray-50 dark:bg-[#111827]">
      <div className="mt-8">
        <Button text="About me" />
      </div>

      <div className=" md:justify-around  mt-10 md:p-[112px] p-4 gap-5 items-center">
        <div className="h-[500px] w-[400px] m-auto float-left lg:mr-20 mr-4">
          <img src="Pic.png" className=" w-[100%] h-auto flex md:mr-5 "></img>
        </div>

        <div className="text-gray-900  dark:text-[#F9FAFB]  mt-4 m-auto text-justify">
          <h2 className="font-bold text-2xl mb-2">
            Curious about me? Here you have it:
          </h2>
          <p className="mb-2 text-gray-600 dark:text-[#D1D5DB] ">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="mb-2  text-gray-600 dark:text-[#D1D5DB]">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="mb-2  text-gray-600 dark:text-[#D1D5DB]">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="mb-2  text-gray-600 dark:text-[#D1D5DB]">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="mb-2  text-gray-600 dark:text-[#D1D5DB]">
            Finally, some quick bits about me.
          </p>
          <p className="mb-2  text-gray-600 dark:text-[#D1D5DB]">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
}
