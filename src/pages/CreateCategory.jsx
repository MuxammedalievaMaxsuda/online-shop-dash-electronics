import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCategory = () => {

  const [title, setTitle] = useState('')

  function createCat(e) {
    e.preventDefault()
    const data = { title }
    axios.post('https://dbonlineshop2.onrender.com/categories', data)
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
  }


  return (
    <div className='my-3'>
      <form onSubmit={(e) => createCat(e)}>
        <div className='flex flex-col gap-2'>
          <p className='text-[16px] text-gray-800'>Name</p>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='border border-gray-300 rounded-sm outline-none text-gray-800 text-[16px] py-1 px-5' placeholder='Enter the name' />
        </div>
        <button type='submit' className='rounded-sm py-1 px-5 float-right mt-3 bg-blue-500 border-none outline-none text-white text-[16px] font-[500] hover:opacity-90 active:scale-95'>Submit</button>
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

export default CreateCategory