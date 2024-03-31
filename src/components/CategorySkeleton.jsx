import React from 'react'

const CategorySkeleton = () => {
    return (
        <div className='text-gray-800  w-[250px] border rounnded-sm shadow-sm p-3 flex justify-between items-center animate-pulse'>
            <div className='flex justify-center items-center'>
                <h1 className='text-[16px] text-gray-800 font-[500] w-[120px] bg-gray-300 h-[25px]'></h1>
            </div>
            <div className="flex justify-center items-center gap-2">
                <div className='w-[25px] h-[25px] rounded-sm bg-gray-300'></div>
                <div className='w-[25px] h-[25px] rounded-sm bg-gray-300'></div>
            </div>
        </div>
    )
}

export default CategorySkeleton