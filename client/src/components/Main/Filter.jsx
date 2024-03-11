import React from 'react';


function Filter() {
    const filterList = ['filter-1', 'filter-2', 'filter-3', 'filter-4', 'filter-4', 'filter-6'] 
    return (
    <div className='h-[64px] flex-shrink-0 flex items-center justify-start gap-3 px-6'>
        { filterList.map((f) => {
            return (
                <div className='rounded-2xl py-1 bg-hover'>
                    <p className='text-primary px-4'>{f}</p>
                </div>
            )
        })}
    </div>
    )
}

export default Filter;
