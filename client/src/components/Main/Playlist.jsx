import React, { useEffect, useRef } from 'react';


function CategoryItem(){
    return (
        <div className='w-[200px] aspect-auto flex flex-col gap-1'>
            <div className='w-full aspect-square relative'>
                <img src='#' className='w-full h-full rounded-xl peer' />
                <div className='w-[50px] aspect-square rounded-full absolute bottom-0 right-3 opacity-0 peer-hover:block peer-hover:opacity-100 peer-hover:bottom-3 transition-all duration-300'></div>
            </div>
            <h1 className='text-primary font-semibold text-[1.2rem] line-clamp-1'>Albums</h1>
            <p className='font-semibold text-sm text-secondary line-clamp-3'>corrupti atque im optio earum nulla doloribus animi eum quis! ddfkldsfj sd;lkdsjf;ldskfjds;klfjsd;fkldsjf;dsklfjdsklfdsjf ;ldksfj ds</p>
        </div>
    )
}


function Category(){
    const listRef = useRef(null);
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div ref={listRef} className='px-6'>
            <div className='flex items-center justify-between py-2'>
                <h1 className='text-2xl font-semibold text-primary'>Category-1</h1>
                <p className='text-sm font-bold text-secondary hover:text-primary'>Show all</p>
            </div>
            <div className='flex justify-between'>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
        </div>            
    )
}


function Playlist() {
  return (
    <div className='flex-grow relative overflow-hidden'>
        <div className='w-full h-full flex flex-col gap-2 pb-6 absolute overflow-y-scroll custom-scrollbar'>
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </div>
    </div>
  )
}

export default Playlist
