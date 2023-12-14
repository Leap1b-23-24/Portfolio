import { WorkPart } from '../components/work'
import { Work2Part } from '../components/work2'

export const PageFive = (props) =>{
    return    <div className='sm:w-screen sm:max-h-fit-screen  bg-white  dark:bg-gray-950 p-4 sm:px-80 sm:py-40 flex gap-4 flex-col'>
    <WorkPart />
    <Work2Part />
  </div>
}