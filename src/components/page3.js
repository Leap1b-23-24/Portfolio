import { SkillHeader } from '../components/skillhd'
import { SkillBody } from '../components/Skillss'

export const PageThree = () =>{
    return     <div className='sm:max-h-100 p-4  bg-white  dark:bg-gray-950 sm:px-80 sm:py-40 flex gap-10 flex-col'>
    <SkillHeader />
    <SkillBody />

  </div>
}