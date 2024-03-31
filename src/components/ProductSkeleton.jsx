import { BiImage } from "react-icons/bi";
import React from 'react'

const ProductSkeleton = () => {
    return (
        <div className='p-[20px] border-[1px] border-gray-200 min-h-[420px] animate-pulse min-w-[260px] max-w-[350px] rounded-sm shadow-sm flex flex-col justify-between'>
            <div>
                <div className='overflow-hidden rounded-sm border p-3'>
                    <div className='w-full h-full min-h-[200px] max-h-[200px] rounded-sm bg-gray-300 flex justify-center items-center'>
                        <BiImage className="w-[50px] h-[50px] text-gray-400 " />
                    </div>
                </div>
                <div className='p-2 flex flex-col gap-3'>
                    <div className='w-[200px] h-[20px] bg-gray-300 rounded-sm'></div>
                    <div className='w-[120px] h-[15px] bg-gray-300 rounded-sm'></div>
                    <div className='w-[50px] h-[20px] bg-gray-300 rounded-sm'></div>
                </div>
            </div>
            <div className="flex gap-2 justify-between mt-2">
                <div className="w-full rounded-sm bg-gray-300 h-[25px]"></div>
                <div className="w-full rounded-sm bg-gray-300 h-[25px]"></div>
            </div>
        </div>
    )
}

export default ProductSkeleton