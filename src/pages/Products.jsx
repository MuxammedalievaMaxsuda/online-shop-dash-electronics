import React, { useEffect, useState } from 'react'
import { getProducts } from '../getData/getDataAxios'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'
import ProductSkeleton from '../components/ProductSkeleton'
import ProductDelete from '../components/ProductDelete'
import ProductUpdate from '../components/ProductUpdate'

const Products = () => {

  const dispatch = useDispatch()
  const { products, isLoading } = useSelector(state => state.product)
  const arr = [1, 2, 3, 4, 5]
  const [change, setChange] = useState(false)

  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => setDeleteOpen(!deleteOpen);
  const [itemId, setItemId] = useState()
  const [updateOpen, setUpdateOpen] = useState(false)
  const handleUpdateOpen = () => setUpdateOpen(!updateOpen)

  useEffect(() => {
    getProducts('https://dbonlineshop2.onrender.com/products', dispatch)
    setChange(false)
  }, [change])

  return (
    <div className='flex justify-center items-center my-5'>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-2  gap-3'>
        {
          isLoading ?
            arr.map(item => (
              <ProductSkeleton key={item} />
            ))
            :
            products.map(item => (
              <ProductItem key={item.id} item={item} setItemId={setItemId} handleUpdateOpen={handleUpdateOpen} deleteOpen={deleteOpen} handleDeleteOpen={handleDeleteOpen} />
            ))
        }
      </div>
      <div className='w-[0px] h-[0px]'>
        <ProductDelete className="m-20 text-center w-full h-full" setChange={setChange} open={deleteOpen} handleOpen={handleDeleteOpen} itemId={itemId} />
        <ProductUpdate className="m-20 text-center w-full h-full" setChange={setChange} open={updateOpen} handleOpen={handleUpdateOpen} itemId={itemId} />
      </div>
    </div>
  )
}

export default Products