"use client"

import { FaSearch, FaRegBell } from "react-icons/fa"
import { PiNotebook } from "react-icons/pi"
import { CiStar } from "react-icons/ci"
import { IoSunnyOutline } from "react-icons/io5"
import { LuTimerReset } from "react-icons/lu"

interface NavbareProps {
  toggleSidebar: () => void
}

export default function Navbare({ toggleSidebar }: NavbareProps) {
  return (
    <header className="w-full h-16 px-4 md:px-6 py-4 flex items-center justify-between bg-white border-b-2 border-b-gray-300">
      
      
      <div className="flex items-center space-x-2 md:space-x-3 text-gray-600 text-sm">
      
        <button
          onClick={toggleSidebar}
          className="text-gray-600 text-2xl p-1 hover:bg-gray-200 rounded"
          aria-label="Toggle Sidebar"
        >
          <PiNotebook />
        </button>

       
        <CiStar className="hidden sm:block text-xl text-black" />

   
        <div className="hidden sm:flex items-center space-x-2">
          <span className="text-gray-500">Dashboards</span>
          <span>/</span>
          <span className="font-medium text-gray-800">Default</span>
        </div>
      </div>

      
      <div className="flex items-center space-x-2 md:space-x-4">
        
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        </div>

    
        <IoSunnyOutline className="cursor-pointer text-black text-lg" />
        <LuTimerReset className="cursor-pointer text-black text-lg" />
        <FaRegBell className="cursor-pointer text-black text-lg" />
      </div>
    </header>
  )
}
