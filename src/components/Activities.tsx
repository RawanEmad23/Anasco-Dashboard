import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6"

export default function Activities() {
  const cards = [
    { title: "Views", value: "721K", percent: "+11.01%", bg: "#e3f5ff" },
    { title: "Visites", value: "38K", percent: "+8.45%", bg: "#e5ecf6" },
    { title: "New Users", value: "15.2K", percent: "+3.17%", bg: "#e3f5ff" },
    { title: "Active Users", value: "1.9K", percent: "+5.76%", bg: "#e5ecf6" },
  ]

  return (
    <div className="flex flex-wrap gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex-1 min-w-[250px] sm:min-w-[280px] md:min-w-[290px] lg:min-w-[230px] bg-white rounded-2xl p-6"
          style={{ backgroundColor: card.bg }}
        >
          <h2 className="text-xl font-bold mb-4">{card.title}</h2>
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold">{card.value}</span>
            <div className="flex items-center space-x-1 font-medium text-black">
              <span>{card.percent}</span>
              <FaArrowTrendUp />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
