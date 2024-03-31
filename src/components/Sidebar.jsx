import React from 'react'
import buttons from '../info/constants'
import { Link } from 'react-router-dom'

const Sidebar = ({setShowSidebar}) => {
  return (
    <div className='bg-white'>
      <div className='border-b border-b-gray-300 pt-4 pb-5 text-center'>
        <h1 className='text-[22px] text-gray-800 font-[600]'>Dashboard</h1>
      </div>
      <div className='py-2 flex flex-col gap-2'>
        {
          buttons.map(item => (
            <Link to={item.path} key={item.id}>
              <button onClick={()=>setShowSidebar(false)} className='hover:bg-gray-50 active:scale-95 transition duration-75 border bg-white outline-none rounded-sm text-[16px] font-[500] text-gray-800 py-2 px-5 w-full'>
                <p>{item.title}</p>
              </button>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar