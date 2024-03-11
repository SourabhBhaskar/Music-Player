import React from 'react';
import { Icon } from '@iconify/react';
import icons from '../../constants/icons.constant';


function Song(){
  return (
    <div className='px-6'>
      <a href='/song-name' className='w-full h-[60px] flex gap-2 my-1 duration-300'>
        <div className='w-[60px] h-[60px] flex-shrink-0 rounded-md'>
          <img src='#' alt='name' className='w-full h-full rounded-md' />
        </div>
        <div className='flex-grow flex flex-col justify-center'>
          <h1 className='text-primary font-semibold'>Hip Hop</h1>
          <p className='text-secondary text-sm'>Yo Yo Honey Singh</p>
        </div>
        <div className='w-[60px] h-[60px] flex-shrink-0 flex justify-center items-center'>
          <span className='text-secondary'>3:59</span>
        </div>
      </a>
    </div>
  )
}


function Sidebar() {
  return (
    <div className='w-full h-full flex flex-col rounded-md bg-primary py-6'>
      <div className='flex-shrink-0 flex items-center gap-2 text-primary pb-6 px-6'>
        <Icon icon={icons.favorites} fontSize={24} />
        <h1 className='font-semibold text-xltransition-all'>Your Favorites</h1>
      </div>
      <div className='flex-grow relative overflow-hidden'>
        <ul className='w-full h-full absolute overflow-y-scroll custom-scrollbar'>
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
        </ul>
      </div>
    </div>
  )
}


export default Sidebar;


  