import React from 'react'
import { HiTrash } from "react-icons/hi"; 
import { BsPencilSquare } from "react-icons/bs";  


const CategoryItem = ({item,setItemId,handleDeleteOpen,handleUpdateOpen}) => {

  function openAlertDelete(id){
    setItemId(id)
    handleDeleteOpen()
  }
  function openAlertUpdate(id){
    setItemId(id)
    handleUpdateOpen()
  }

  return (
    <div className='text-gray-800  w-[250px] border rounnded-sm shadow-sm p-3 flex justify-between items-center'>
        <div className='flex justify-center items-center'>
            <h1 className='text-[16px] text-gray-800 font-[500]'>{item.title}</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
            <HiTrash onClick={()=>openAlertDelete(item.id)}  className="hover:scale-110 active:scale-95 cursor-pointer text-[24px] text-red-500 font-[500]"/>
            <BsPencilSquare onClick={()=>openAlertUpdate(item.id)} className="hover:scale-110 active:scale-95 cursor-pointer text-blue-500 text-[20px] font-[500]"/>
        </div>
    </div>
  )
}

export default CategoryItem