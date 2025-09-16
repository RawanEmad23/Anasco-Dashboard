import React from "react"
import Image from "next/image"
import { FaBug, FaUserPlus } from "react-icons/fa"
import { MdOutlineNotifications } from "react-icons/md"
import { IoMdPerson } from "react-icons/io"

const notifications = [
  { icon: <FaBug className="text-blue-500" />, text: "You have a bug that needs...", time: "Just now" },
  { icon: <FaUserPlus className="text-green-500" />, text: "New user registered", time: "59 minutes ago" },
  { icon: <FaBug className="text-blue-500" />, text: "You have a bug that needs...", time: "12 hours ago" },
  { icon: <MdOutlineNotifications className="text-purple-500" />, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
]

const activities = [
  { text: "You have a bug that needs...", time: "Just now" },
  { text: "Released a new version", time: "59 minutes ago" },
  { text: "Submitted a bug", time: "12 hours ago" },
  { text: "Modified A data in Page X", time: "Today, 11:59 AM" },
  { text: "Deleted a page in Project X", time: "Feb 2, 2023" },
]

const contacts = [
  "Natali Craig",
  "Drew Cano",
  "Orlando Diggs",
  "Andi Lane",
  "Kate Morrison",
  "Koray Okumus",
]

export default function Activitypanel() {
  return (
    <aside className="w-[260px] h-screen bg-white border-l hidden lg:flex flex-col">

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
      
        <div>
          <h2 className="text-lg font-semibold mb-4 sticky top-0 bg-white">Notifications</h2>
          <ul className="space-y-4">
            {notifications.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-sm text-gray-700">{item.text}</p>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Activities */}
        <div>
          <h2 className="text-lg font-semibold mb-4 sticky top-0 bg-white">Activities</h2>
          <ul className="space-y-4">
            {activities.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Image
                  src="/logo.png"
                  alt="activity logo"
                  width={20}
                  height={20}
                  className="rounded"
                />
                <div>
                  <p className="text-sm text-gray-700">{item.text}</p>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h2 className="text-lg font-semibold mb-4 sticky top-0 bg-white">Contacts</h2>
          <ul className="space-y-3">
            {contacts.map((name, index) => (
              <li key={index} className="flex items-center gap-3">
                <IoMdPerson className="text-xl text-gray-500" />
                <span className="text-sm text-gray-700">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
