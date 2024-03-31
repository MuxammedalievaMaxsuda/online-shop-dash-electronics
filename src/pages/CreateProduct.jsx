import React, { useEffect, useState } from 'react'
import { getCategories } from '../getData/getDataAxios'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CreateProduct = () => {

  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.category)

  useEffect(() => {
    getCategories('https://dbonlineshop2.onrender.com/categories', dispatch)
  }, [])

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')
  const [imageUrl1, setImageUrl1] = useState('')
  const [imageUrl2, setImageUrl2] = useState('')
  const [imageUrl3, setImageUrl3] = useState('')
  const [categoryId, setCategoryId] = useState(categories[0]?.id)
  
  let image = [imageUrl1]
  if (imageUrl2) {
    image = [...image, imageUrl2]
  }
  if (imageUrl3) {
    image = [...image, imageUrl3]
  }

  function createPro(e) {
    e.preventDefault()
    setCategoryId(categoryId ? categoryId : categories[0].id)
    const data = { title, price, description, image, rating, categoryId }
    axios.post('https://dbonlineshop2.onrender.com/products', data)
      .then(res => {
        toast.success("Success Notification !", {
          position: 'top-right',
        });
      })
      .catch(err => {
        toast.error("Error Notification !", {
          position: 'top-right',
        });
      })
    setTitle('')
    setCategoryId(categories[0]?.id)
    setDescription('')
    setImageUrl1('')
    setImageUrl2('')
    setImageUrl3('')
    setPrice('')
    setRating('')
  }

  return (
    <div className='my-3'>
      <form onSubmit={(e) => createPro(e)}>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <p className='text-[16px] text-gray-800'>Name</p>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required className='border border-gray-300 rounded-sm outline-none text-gray-800 text-[16px] py-1 px-5' placeholder='Enter the name' />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-[16px] text-gray-800'>Price</p>
            <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" required className='border border-gray-300 rounded-sm outline-none text-gray-800 text-[16px] py-1 px-5' placeholder='Enter the price' />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-[16px] text-gray-800'>Image url(1)</p>
            <input value={imageUrl1} onChange={(e) => setImageUrl1(e.target.value)} type="url" required className='border border-gray-300 rounded-sm outline-none text-gray-800 text-[16px] py-1 px-5' placeholder='Enter the image url' />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-[16px] text-gray-800'>Image url(2)</p>
            <input value={imageUrl2} onChange={(e) => setImageUrl2(e.target.value)} type="url" className='border border-gray-300 rounded-sm outline-none text-gray-800 text-[16px] py-1 px-5' placeholder='Enter the image url' />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-[16px] text-gray-800'>Image url(3)</p>
            <input value={imageUrl3} onChange={(e) => setImageUrl3(e.target.value)} type="url" className='border border-gray-300 rounded-sm outline-none text-gray-800 text-[16px] py-1 px-5' placeholder='Enter the image url' />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-[16px] text-gray-800'>Rating</p>
            <input value={rating} onChange={(e) => setRating(e.target.value)} type="number" required className='border border-gray-300 rounded-sm outline-none text-gray-800 text-[16px] py-1 px-5' placeholder='Enter the rating' />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-[16px] text-gray-800'>Description</p>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='border border-gray-300 rounded-sm outline-none text-gray-800 text-[16px] py-1 px-5' placeholder='Enter the description' />
          </div>
          <div className="relative h-15 min-w-[300px] w-80 mt-2">
            <select value={categoryId} name='Select' required onChange={(e) => e.target.value ? setCategoryId(e.target.value) : ''}
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-400 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
              {
                categories.map(item => (
                  <option value={item.id} key={item.id}>{item.title}</option>
                ))
              }
            </select>
            <label
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select a City
            </label>
          </div>
        </div>
        <button className='cursor-pointer rounded-sm py-1 px-5 float-right mt-2 bg-blue-500 border-none outline-none text-white text-[16px] font-[500] hover:opacity-90 active:scale-95'>Submit</button>

      </form>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </div>
  )
}

export default CreateProduct