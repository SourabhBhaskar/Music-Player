import React from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../constants/icons.constant';


function Navbar() {
  return (
    <div className='w-full h-full rounded-md bg-primary p-6'>
        <ul className='w-full h-full flex flex-col justify-center font-semibold'>
            <li>
              <a href='/home' className='flex items-center gap-2 py-2 text-secondary hover:text-primary transition-all'>
                <Icon icon={icons.home} fontSize={20} />
                <p>Home</p>
              </a>
            </li>
            <li>
              <a href='/search' className='flex items-center gap-2 py-2 text-secondary hover:text-primary transition-all'>
                <Icon icon={icons.search} fontSize={20}/>
                <p>Search</p>
              </a>
            </li>

        </ul>
    </div>
  )
}

export default Navbar;