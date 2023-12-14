export const P2Body = () => {
  return <div className=' flex gap-10 flex-col sm:flex-row grow basis-0'>
    <div className='flex grow basis-0 justify-center sm:justify-start'>
      <div className="sm:w-[400px] sm:h-[360px] sm:basis-1/3 sm:relative">
        <img className='max-w-screen-lg sm:h-96 h-60 sm:border-[5px] sm:border-white sm:dark:border-gray-950 sm:dark:shadow-gray-700  shadow-gray-200 border-gray-50 dark:shadow-gray-700 dark:border-gray-950  border-[5px]	 sm:relative sm:z-10 sm:shadow-[-22px_22px_2px_6px_#00000024] shadow-[0px_24px_0px_14px_#374151]                  	' src='https://pbs.twimg.com/profile_images/1607576872589889537/mQxBneCJ_400x400.jpg'></img>
        <div className="sm:w-[280px] sm:h-[320px] sm:bg-[#E5E7EB] sm:absolute sm:top-[25px] sm:left-[25px]"></div>
      </div>
    </div>

    <div className='flex grow basis-0'>
      <div className='flex gap-6 flex-col'>
        <div className='text-3xl '>
          <h1  className='dark:text-gray-50'>Curious about me? Here you have it:</h1>
        </div>
        <div className='flex gap-10 flex-col text-gray-600 dark:text-gray-300'>
          <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
          <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
          <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
          <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
          <p>Finally, some quick bits about me.
            <div className='flex gap-9'>
              <div>
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </div>
              <div>
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </div>
            </div>
          </p>
          <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>

        </div>
      </div>

    </div>
  </div>

}