
import { JsIcon } from '../assetss/js'
import { TypeIcon } from '../assetss/type'
import { ReactIcon } from '../assetss/reacticon'
import { NextIcon } from '../assetss/nexticon'
import { NodeIcon } from '../assetss/nodeicon'
import { ExIcon } from '../assetss/expressicon'
import { NestIcon } from '../assetss/nest'
import { SoIcon } from '../assetss/socket'
import { PoIcon } from '../assetss/pos'
import { MongoIcon } from '../assetss/mongo'
import { SassIcon } from '../assetss/Sass'
import { TailIcon } from '../assetss/tailwind'
import { FigIcon } from '../assetss/figmaa'
import { CypressIcon } from '../assetss/cypress'
import { StoryIcon } from '../assetss/story'
import { GitIcon } from '../assetss/git'



export const SkillBody = () => {
  return <div className='flex flex-col sm:flex-col sm:justify-center sm:gap-5 ' >
    <div className='flex flex-col sm:flex-row gap-10 justify-center '>
      <div className='flex flex-row sm:flex-row  gap-14 sm:gap-10'>
        <div>
          <JsIcon />

        </div>
        <div>
          <TypeIcon />
        </div>
        <div>
          <ReactIcon />
        </div>
      </div>
      <div className='flex flex-row sm:flex-row gap-14  sm:gap-10'>
        <div className='flex flex-col gap-3'>
          {/* <NextIcon/> */}

          <img className='w-16' src='https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png'></img>
          <p className='text-gray-600'>Next.js</p>
        </div>
        <div>
          <NodeIcon />
        </div>
      </div>
      <div className='flex flex-row sm:flex-row gap-14  sm:gap-10'>
        <div>
          <ExIcon />
        </div>
        <div>
          <NestIcon />
        </div>
        <div>
          <SoIcon />
        </div>
      </div>
    </div>
    <div className='flex sm:flex-row flex-col gap-10 justify-center'>
      <div className='flex flex-row sm:flex-row gap-14  sm:gap-10'>
        <div className='flex flex-col gap-3 text-center'>
          {/* <PoIcon/> */}
          <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'></img>
          <p className='text-gray-600'>PostgreSQL</p>
        </div>
        <div>
          <MongoIcon />
        </div>
        <div>
          <SassIcon />
        </div>
      </div>
      <div className='flex flex-row sm:flex-row gap-14  sm:gap-10'>
        <div className='flex flex-col gap-3 '>
          {/* <TailIcon /> */}

          <img className='w-16' src='https://avatars.githubusercontent.com/u/67109815?s=280&v=4'></img>
          <p className='text-gray-600'>Tailwind</p>
        </div>
        <div>  <FigIcon /></div>
        <div>  <CypressIcon /></div>
      </div>
      <div className='flex sm:flex-row flex-row gap-14  sm:gap-10'>
        <div>  <StoryIcon /></div>
        <div>  <GitIcon /></div>
      </div>

    </div>
  </div>
}