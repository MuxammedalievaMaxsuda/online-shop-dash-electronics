import React, { useEffect, useState } from 'react'
import { getCategories } from '../getData/getDataAxios'
import { useDispatch, useSelector } from 'react-redux'
import CategoryItem from '../components/CategoryItem'
import CategorySkeleton from '../components/CategorySkeleton'
import CategoryDelete from '../components/CategoryDelete'
import CategoryUpdate from '../components/CategoryUpdate'


const Categories = () => {
  const dispatch = useDispatch()
  const { categories, isLoading } = useSelector(state => state.category)
  const arr = [1, 2, 3, 4, 5]
  const [change, setChange] = useState(false)

  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => setDeleteOpen(!deleteOpen);
  const [itemId, setItemId] = useState()
  const [updateOpen, setUpdateOpen] = useState(false)
  const handleUpdateOpen = () => setUpdateOpen(!updateOpen)

  useEffect(() => {
    getCategories('https://dbonlineshop2.onrender.com/categories', dispatch)
    setChange(false)
  }, [change])

  return (
    <div className='flex justify-center my-5 relative'>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-2  gap-3'>

        {
          isLoading ?
            arr.map(item => (
              <CategorySkeleton key={item} />
            ))
            :
            categories.map(item => (
              <CategoryItem key={item.id} item={item} setItemId={setItemId} updateOpen={updateOpen} handleUpdateOpen={handleUpdateOpen} deleteOpen={deleteOpen} handleDeleteOpen={handleDeleteOpen} />
            ))
        }
      </div>
      <div className='w-[0px] h-[0px]'>
        <CategoryDelete setChange={setChange} open={deleteOpen} handleOpen={handleDeleteOpen} itemId={itemId} />
        <CategoryUpdate setChange={setChange} open={updateOpen} handleOpen={handleUpdateOpen} itemId={itemId} />
      </div>
    </div>
  )
}

export default Categories