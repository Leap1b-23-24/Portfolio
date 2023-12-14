import { TextBox } from '../assetss/textbox'
import { GithubIcon } from '../assetss/github'
import { TwitterIcon } from '../assetss/twitter'
import { FigmaIcon } from '../assetss/figma'
import { MessageIcon } from '../assetss/Message'
import { CopyIcon } from '../assetss/Copy'
import { CallIcon } from '../assetss/Call'


export const GetIn = (props) => {
  return <div className='sm:w-full flex dark:bg-gray-950 gap-10 p-4 sm:px-60 sm:py-10 flex-col'>
    <div className=' gap-7 flex  flex-col justify-center'>
      <div className='flex justify-center dark:bg-gray-700 dark:text-gray-300   bg-gray-200 m-auto rounded-xl w-fit px-4 py-2 text-gray-600'>
        <p>Get in touch</p>
      </div>
      <div className='text-gray-600 dark:text-gray-300 flex justify-center text-center'>
        <p>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
      </div>
    </div>
    <div className='flex flex-col'>
      <div className='flex flex-row items-center gap-4 justify-center'>
        <MessageIcon color={props.isDark ? "#D1D5DB" : "#4B5563"}/>
        <h2 className='sm:text-3xl text-lg text-gray-900 dark:text-gray-50'>reachsagarshah@gmail.com</h2>
        <CopyIcon color={props.isDark ? "#D1D5DB" : "#4B5563"}  />
      </div>
      <div className='flex flex-row items-center gap-4 justify-center'>
        <CallIcon color={props.isDark ? "#D1D5DB" : "#4B5563"}/>
        <h2 className='sm:text-3xl text-lg text-gray-900 dark:text-gray-50'>+91 8980500565</h2>
        <CopyIcon color={props.isDark ? "#D1D5DB" : "#4B5563"} />


      </div>
    </div>
    <div className='text-gray-600 dark:text-gray-300 flex justify-center flex-col items-center' >
      <p>You may also find me on these platforms!</p>

      <div className='flex items-center gap-4'>
        <GithubIcon color={props.isDark ? "#D1D5DB" : "#4B5563"} />
        <TwitterIcon color={props.isDark ? "#D1D5DB" : "#4B5563"} />
        <FigmaIcon color={props.isDark ? "#D1D5DB" : "#4B5563"} />
      </div>
    </div>
  </div>
}