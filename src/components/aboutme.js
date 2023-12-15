export const AboutMe = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center my-10 md:gap-[80px]">
      <div className="flex items-center w-full md:w-1/2 m-auto">
        <div className="flex w-[360px] h-[380px] md:w-[440px] md:h-[520px] m-auto justify-center relative">
          <img
            className="w-[280px] h-[360px] md:w-[400px] md:h-[480px] z-10 absolute md:top-0 md:left-[40px]"
            style={{
              border: `8px solid ${props.pagemode > 0 ? "black" : "white"}`,
              zIndex: "1",
            }}
            src="/profile-picture.jpeg"
          />
          <div
            className="w-[320px] h-[360px] md:w-[400px] md:h-[480px] bg-slate-200 absolute top-6 md:top-[40px] md:left-0"
            style={{
              border: `8px solid ${props.pagemode > 0 ? "black" : "white"}`,
              backgroundColor: `${props.pagemode > 0 ? "#374151" : "#E5E7EB"}`,
            }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full md:w-1/2 text-[16px] text-justify">
        <h2 className="text-[30px]">Curios about me? Here you have it:</h2>
        <p>
          I&apos;m a passionate,{" "}
          <span className="underline underline-offset-4 ...">
            self-proclaimed designer
          </span>{" "}
          who specialized in full stack development (React.js & Node.js).
          I&apos;m very enthusiastic about bringing the technical and visual
          aspects of digital product to life. User experience, pixel perfect
          design, and writing clear, readable, highly performant code matters to
          me.
        </p>
        <p>
          I began my journey as a web developer in 2015, and since then,
          i&apos;ve continued to grow and evolve as a developer, taking on new
          challenges and learning the latest technologies along the way. Now, in
          my early thirties, 7 years after starting my web development journey,
          i&apos;m building cutting-edge web applications using modern
          technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
          Supabase and much more.
        </p>
        <p>
          I am very much a progressive thinker and enjoy working on products end
          to end, from ideation all the way to development.
        </p>
        <p>
          When i&apos;m not in full-on developer mode, you can find me hovering
          around on twitter or on indie hacker, witnessing the journey of early
          startups or enjoying some free time. You can follow me on Twitter
          where i share tech-related bites and build in public, or you can
          follow me on{" "}
          <span className="underline underline-offset-4">Github</span>.
        </p>
        <p>Finally, some quick bits about me.</p>
        <div>
          <ul className="grid grid-cols-2 list-disc gap-x-[30px]">
            <li>B.E. in Computer Engineering</li>
            <li>Avid learner</li>
            <li>Full time freelancer</li>
            <li>Aspiring indie hacker</li>
          </ul>
        </div>
        <p>
          One last thing, I&apos;m available for freelance work, so feel free to
          reach out and say hello! I promise i don&apos;t bite
        </p>
      </div>
    </div>
  );
};
