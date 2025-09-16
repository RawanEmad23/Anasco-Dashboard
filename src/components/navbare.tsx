"use client"

import { FaSearch, FaRegBell, FaRegSun, FaCog } from "react-icons/fa"
import { PiNotebook } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { LuTimerReset } from "react-icons/lu";

import Image from "next/image"

interface NavbareProps {
  toggleSidebar: () => void
}

export default function Navbare({ toggleSidebar }: NavbareProps) {
  return (
    <header className="w-full h-16 px-6 py-4 flex items-center justify-between bg-white border-b-2 border-b-gray-300">
     
      <div className="flex items-center space-x-3 text-gray-600 text-sm">
       
 <button
  onClick={toggleSidebar}
  className="text-gray-600 text-2xl p-1 hover:bg-gray-200 rounded"
  aria-label="Toggle Sidebar"
>
  <PiNotebook />
</button>
<CiStar className=" text-xl text-black"/>

        <span className="text-gray-500">Dashboards</span>
        <span>/</span>
        <span className="font-medium text-gray-800">Default</span>
      </div>

   
      <div className="flex items-center space-x-4">
       
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        </div>

        <IoSunnyOutline className=" cursor-pointer text-black" />
     
        <LuTimerReset className=" cursor-pointer text-black" />
           <FaRegBell className=" cursor-pointer text-black" />
      </div>
    </header>
  )
}
