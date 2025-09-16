import Activities from '@/components/Activities'
import Radialchart from '@/components/Radialchart'
import TotalUsersChart from '@/components/TotalUsersChart'
import TrafficByDevice from '@/components/TrafficByDevice'
import TrafficByWebsite from '@/components/TrafficByWebsite'
import { FaAngleDown } from "react-icons/fa6";

import React from 'react'

export default function Page() {
  return (
    <div className="space-y-6">
      <h3 className=' flex gap-3 items-center'>Today <FaAngleDown/></h3>
      <div>
        <Activities />
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
       
        <div className="md:col-span-9">
          <TotalUsersChart />
        </div>

        <div className="md:col-span-3">
          <TrafficByWebsite />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <TrafficByDevice />
        <Radialchart />
      </div>
    </div>
  )
}
