import React from 'react';
import { Icon } from '@iconify/react';
import icons from '../../constants/icons.constant';


function Nav() {
    const handlePrev = () => {

    }

    const handleNext = () => {

    }

    return (
        <div className='w-full h-[64px] flex-shrink-0 flex items-center justify-between px-6'>
            <div className='flex gap-2 '>
                <button onClick={handlePrev} className='p-1 rounded-full text-secondary hover:text-primary bg-secondary transition-all'>
                    <Icon icon={icons.prev} fontSize={24} />
                </button>
                <button onClick={handleNext} className='p-1 rounded-full text-secondary hover:text-primary bg-secondary transition-all'>
                    <Icon icon={icons.next} fontSize={24} />
                </button>
            </div>
            <div>
                <div className='p-1 rounded-full text-secondary hover:text-primary transition-all'>
                    <Icon icon={icons.profile} fontSize={24} />
                </div>
            </div>
        </div>
    )
}


export default Nav;