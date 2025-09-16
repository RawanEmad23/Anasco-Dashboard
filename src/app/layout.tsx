"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebare"
import Navbare from "@/components/navbare"
import Activitypanel from "@/components/activitypanel"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMounted, setIsMounted] = useState(false) 

  useEffect(() => {
    setIsMounted(true)
    const isMobile = window.innerWidth < 768
    setSidebarOpen(!isMobile)
  }, [])

  if (!isMounted) return null 

  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden bg-gray-50">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbare toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
          <main className="flex-1 overflow-auto p-4 bg-gray-100">
            {children}
          </main>
        </div>

        <div className="hidden lg:block">
          <Activitypanel />
        </div>
      </body>
    </html>
  )
}
