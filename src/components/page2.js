import { P2Header } from '../components/p2.header'
import { P2Body } from '../components/p2.body'

export const PageTwo = () =>{
    return   <div className='p-4 flex flex-col gap-5 sm:w-screen sm:h-screen  bg-gray-50 dark:bg-gray-900 sm:px-80 sm:py-40 sm:flex sm:gap-10 sm:flex-col'>
    <P2Header />
    <P2Body />

  </div>
}