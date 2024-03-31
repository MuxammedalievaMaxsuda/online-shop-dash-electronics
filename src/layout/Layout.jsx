import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import React, { useState } from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Container from '../components/Container'
import Sidebar from '../components/Sidebar'


const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true)
  const dashboardClass = `min-w-[250px] z-20 border-r border-r-gray-300 h-[100vh] p-2 items-center absolute ${showSidebar ? 'xs:left-0' : 'xs:left-[-248px]'} md:left-0  transition duration-400 bg-white`
  return (
    <div className='flex'>
      <div className={dashboardClass}>
        <Sidebar setShowSidebar={setShowSidebar} />
        <div onClick={() => setShowSidebar(!showSidebar)} className="cursor-pointer xs:flex md:hidden transition duration-75 flex absolute left-[250px] top-[50%] xs:justify-center xs:items-center rounded-r-md bg-white border-r border-r-gray-300 border-b-gray-300 border-t-gray-300 border-b border-t w-[15px] h-[50px] ">
          {showSidebar ? <IoIosArrowBack className='text-[16px] text-gray-800' /> : <IoIosArrowForward className='text-[16px] text-gray-800' />}
        </div>
      </div>
      <div className='xs:w-full md:w-[calc(100%_-_250px)] absolute md:left-[250px] xs:left-0 right-0  flex flex-col'>
        <Header />
        <div className='max-h-[calc(100vh-77px)] overflow-y-auto py-2'>
          <Container>
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Layout