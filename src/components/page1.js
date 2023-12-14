import { HeaderPart } from '../components/header'
import { IntroPart } from '../components/intro'



export const PageOne = () =>{
    return   <div  className="w-screen h-screen p-22 flex sm:w-full  justify-center dark:bg-gray-950 bg-white flex-col">
    <div className="flex-col">
      <HeaderPart />
      <IntroPart />
    </div>

  </div>
}