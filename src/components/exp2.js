import { UpWork } from "../assetss/upwork"

export const Exp2 = () =>{
    return   <div className='sm:p-20 flex flex-col gap-10'>
    <div className='sm:flex bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4 sm:p-20 sm:gap-60'>
      <div>
      <UpWork/>
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl dark:text-white'>Sr. Frontend Developer</h1>
        <div className='text-gray-600 dark:text-gray-300 flex justify-center flex-col'>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </div>
      </div>
      <div className='text-gray-700 dark:text-gray-300 flex sm:justify-end'>
        <p>Nov 2021 - Present</p>
      </div>
    </div>
    <div className='sm:flex bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4  sm:p-20 sm:gap-60'>
      <div>
       <UpWork/>
       
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl dark:text-white'>Team Lead</h1>
        <div className='text-gray-600 dark:text-gray-300 flex justify-center flex-col'>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </div>
      </div>
      <div className='text-gray-700 dark:text-gray-300 flex sm:justify-end'>
        <p>Jul 2017 - Oct 2021</p>
      </div>
    </div>
    <div className='sm:flex bg-white dark:bg-gray-800 rounded-xl flex flex-col sm:flex-row gap-4 p-4 sm:p-20 sm:gap-60'>
      <div>
      <UpWork/>
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl dark:text-white'>Full Stack Developer</h1>
        <div className='text-gray-600 dark:text-gray-300 flex justify-center flex-col'>
          <li>Lorem ipsum dolor sit amet, consectetur br adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
         
        </div>
      </div>
      <div className='text-gray-700 dark:text-gray-300 flex sm:justify-end'>
        <p>Dec 2015 - May 2017</p>
      </div>
    </div>
  </div>
}