import { GithubIcon } from '../assetss/github'
import { TwitterIcon } from '../assetss/twitter'
import { FigmaIcon } from '../assetss/figma'
import { LocationJ } from '../assetss/location'


export const IntroPart = (props) => {
  return <div className='flex flex-col-reverse  justify-center items-center sm:px-80 sm:py-40 gap-20 sm:flex-row' >
    <div className='flex-col  flex gap-10 '>
      <div className='flex gap-5 flex-col'>
        <div className=''>
          <h1 className='text-4xl sm:text-8xl dark:text-gray-50'>Hi, I’m Xavier 👋</h1>
        </div>
        <p className='text-gray-600 dark:text-gray-300'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
      </div>
      <div className='flex gap-5 flex-col'>
        <div className='flex row-auto gap-2'>
          <LocationJ />
          <p className='dark:text-gray-300'>Ahmedabad, India</p>
        </div>
        <div className='flex row-auto items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-green-500'></div>
          <p className='dark:text-gray-300'>Available for new projects</p>
        </div>
      </div>
      <div className='flex row-auto gap-4 items-center'>
        <GithubIcon color={props.isDark ? "#D1D5DB" : "#4B5563"}/>
        <TwitterIcon color={props.isDark ? "#D1D5DB" : "#4B5563"} />
        <FigmaIcon color={props.isDark ? "#D1D5DB" : "#4B5563"}/>
      </div>
    </div>
    <div>
      <div className='sm:w-[400px] sm:h-[360px] sm:basis-1/3 sm:relative'>
        <img className='w-48 sm:w-96 sm:border-[5px] sm:border-white sm:dark:border-gray-950 sm:dark:shadow-gray-700  shadow-gray-200 border-white dark:shadow-gray-700 dark:border-gray-950  border-[5px]	 sm:relative sm:z-10 sm:shadow-[-22px_22px_2px_6px_#00000024] shadow-[0px_24px_0px_14px_#374151] ' src='https://yt3.googleusercontent.com/AtDmcakkM5JXFP9TrkScXtS4nFS7aquETkQV-Tf9KsxkHDIPvzysQ5p5uajvA7UvJe0_nbYg=s900-c-k-c0x00ffffff-no-rj'></img>
        <div className="sm:w-[280px] sm:h-[320px] sm:bg-[#E5E7EB] sm:absolute sm:top-[25px] sm:left-[25px]"></div>
      </div>
    </div>
  </div>
}