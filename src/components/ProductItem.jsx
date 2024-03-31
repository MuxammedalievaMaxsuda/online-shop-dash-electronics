import React, { useEffect } from 'react'
import { FaStarHalf } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { getCategories } from '../getData/getDataAxios';
import { useDispatch, useSelector } from 'react-redux';

const ProductItem = ({ item,setItemId,handleDeleteOpen,handleUpdateOpen }) => {

  const halfStar = item.rating.toString().split('.')[1] == 5 ? true : false
  let starCount = Math.trunc(item.rating)
  let arr = []
  while (starCount != 0) {
    arr = [...arr, starCount]
    starCount--
  }

  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.category)

  function openAlertDelete(id){
    setItemId(id)
    handleDeleteOpen()
  }
  function openAlertUpdate(id){
    setItemId(id)
    handleUpdateOpen()
  }

  useEffect(() => {
    getCategories('https://dbonlineshop2.onrender.com/categories', dispatch)
  }, [])

  return (
    <div className='p-[20px] border-[1px] border-gray-200 min-h-[420px] min-w-[260px] max-w-[350px] rounded-sm shadow-sm flex flex-col justify-between'>
      <div className='relative'>
        <div className='overflow-hidden rounded-sm border p-3'>
          <img src={item.image[0]} className="w-full h-full min-h-[200px] max-h-[200px] object-contain rounded-sm" alt="" />
        </div>
        <div className='absolute bg-[#2E3134] opacity-60  rounded-sm py-1 px-2 text-white text-[12px] top-0 right-0'>
          {categories.find(catItem=>catItem.id==item.categoryId)?.title}
        </div>
        <div className='p-2 flex flex-col gap-3'>
          <h4 className='text-[18px] tracking-tight text-gray-800 font-[500]'>{item.title.slice(0, 30)}...</h4>
          <div className="flex gap-1">
            {arr.map(item => (
              <AiFillStar key={item} className="text-[16px] text-[#FFC633]" />
            ))}
            {halfStar ?
              <FaStarHalf className="text-[16px] text-[#FFC633]" />
              :
              ''}
          </div>
          <p className='text-[24px] text-gray-800 font-[500]'>${item.price}</p>
        </div>
      </div>
      <div className='flex gap-2 justify-center'>
        <button onClick={()=>openAlertUpdate(item.id)} className='px-5 py-1 w-full  rounded-sm border-none outline-none bg-blue-500 text-white font-[500] text-[14px] hover:opacity-90 active:scale-95'>Update</button>
        <button  onClick={()=>openAlertDelete(item.id)}   className='px-5 py-1 w-full rounded-sm border-none outline-none bg-red-500 text-white font-[500] text-[14px] hover:opacity-90 active:scale-95'>Delete</button>
      </div>
    </div>
  )
}

export default ProductItem