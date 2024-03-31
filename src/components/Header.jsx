import { BiSearchAlt2 } from "react-icons/bi"; 
import { RiDashboardLine } from "react-icons/ri"; 
import React from 'react'
import Container from './Container'
import { useLocation } from "react-router-dom";
import buttons from "../info/constants";

const Header = () => {
  const {pathname}=useLocation()
  return (
    <div className='w-full bg-white border-b border-b-gray-300 z-0 p-[20px]'>
      <Container>
        <div className='flex justify-between items-center gap-2'>
          <div className="flex gap-3 items-center">
            <RiDashboardLine className="text-[24px] text-gray-800"/>
            <h4 className="text-[24px] text-gray-800 font-[600]">{buttons.find(item=>item.path==pathname).title}</h4>
          </div>
          <div className="flex justify-center items-center relative xs:hidden md:block">
            <input type="search" className="py-1 pl-10 pr-3 rounded-full border outline-none text-[16px] text-gray-600" placeholder="Search..."/>
            <BiSearchAlt2 className="text-[20px] text-gray-500 absolute top-2 left-3"/>
          </div>
          <BiSearchAlt2 className="xs:block md:hidden text-[20px] text-gray-500"/>
        </div>
      </Container>
    </div>
  )
}

export default Header