"use client"

import { useState, useEffect } from "react"
import { FiHome } from "react-icons/fi"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import Image from "next/image"
import clsx from "clsx"
import { RiShoppingBag4Line } from "react-icons/ri"
import { BsFolder } from "react-icons/bs"
import { FaBookOpen } from "react-icons/fa"
import { ImProfile } from "react-icons/im"
import { RiAccountBoxFill } from "react-icons/ri"
import { PiUsersThree } from "react-icons/pi"
import { TiMessages } from "react-icons/ti"

interface SidebarProps {
  open: boolean
  onClose?: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
   
    setOpenMenus({})

  }, [])

  const toggleMenu = (key: string) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const sections = [
    {
      title: "Dashboard",
      menus: [
        {
          key: "default",
          label: "Default",
          icon: <FiHome />,
          children: ["Profile", "Dashboard", "Settings"],
        },
        {
          key: "ecommerce",
          label: "eCommerce",
          icon: <RiShoppingBag4Line />,
          children: ["Orders", "Products", "Customers"],
        },
        {
          key: "projects",
          label: "Projects",
          icon: <BsFolder />,
          children: ["Active", "Completed"],
        },
        {
          key: "courses",
          label: "Courses",
          icon: <FaBookOpen />,
          children: ["React", "Next.js", "Tailwind"],
        },
      ],
    },
    {
      title: "Pages",
      menus: [
        {
          key: "profile",
          label: "User Profile",
          icon: <ImProfile />,
          children: ["Profile", "Dashboard", "Settings"],
        },
        {
          key: "account",
          label: "Account",
          icon: <RiAccountBoxFill />,
          children: ["Orders", "Products", "Customers"],
        },
        {
          key: "corporate",
          label: "Corporate",
          icon: <PiUsersThree />,
          children: ["Active", "Completed"],
        },
        {
          key: "blog",
          label: "Blog",
          icon: <FiHome />,
          children: ["React", "Next.js", "Tailwind"],
        },
        {
          key: "social",
          label: "Social",
          icon: <TiMessages />,
          children: ["Facebook", "Twitter", "LinkedIn"],
        },
      ],
    },
  ]

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-30 bg-black bg-transparent transition-opacity md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

     
      <div
        className={clsx(
          "fixed md:relative z-40 bg-white border-r border-gray-300 transition-all duration-300 flex flex-col p-3 h-full",
          open
            ? "w-[220px] translate-x-0"
            : "w-0 -translate-x-full md:w-20 md:translate-x-0"
        )}
      >
       
        <div className="flex items-center gap-3 p-4 ">
          <Image
            src="/logo.png"
            alt="شعار"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1
            className={`font-thin whitespace-nowrap text-base transition-opacity duration-300 ${
              !open && "hidden md:block md:opacity-0"
            }`}
          >
            ANASCO GROUP
          </h1>
        </div>

      
        {open && (
          <div className="mb-6">
            <div className="flex items-center justify-around text-sm text-gray-600">
              <span className=" text-[#a4a4a4]">Favorite</span>
              <span className=" text-[#d2d2d2]">Recently</span>
            </div>
            <ul className="mt-2 text-sm space-y-1 text-gray-700 px-8">
              <li className="flex items-center hover:bg-gray-200 p-1 rounded">
                <span className="w-2 h-2 rounded-full bg-[#d2d2d2] mr-2"></span>
                Projects
              </li>
              <li className="flex items-center hover:bg-gray-200 p-1 rounded">
                <span className="w-2 h-2 rounded-full bg-[#d2d2d2] mr-2"></span>
                Overview
              </li>
            </ul>
          </div>
        )}

       
        {sections.map((section) => (
          <div key={section.title} className="mb-4">
            <h2 className="text-gray-400 text-xs font-semibold tracking-wide px-2 mb-3 select-none">
              {section.title}
            </h2>
            <nav className="p-2 space-y-0.5">
              {section.menus.map((menu) => (
                <div key={menu.key}>
                  <button
                    onClick={() => toggleMenu(menu.key)}
                    className="flex items-center justify-between w-full p-1.5 rounded-md hover:bg-gray-200"
                  >
                    <div className="flex items-center gap-2">
                      {open &&
                        (openMenus[menu.key] ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        ))}
                      {menu.icon}
                      {open && <span>{menu.label}</span>}
                    </div>
                  </button>

                  {open && openMenus[menu.key] && (
                    <div className="ml-6 mt-1 flex flex-col space-y-1 text-sm">
                      {menu.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="p-1 rounded hover:bg-gray-200"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </>
  )
}
