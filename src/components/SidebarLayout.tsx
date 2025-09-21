"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebare";
import Navbare from "@/components/navbare";
import Activitypanel from "@/components/activitypanel";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setSidebarOpen(false);
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbare toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <main className="flex-1 overflow-auto p-4 bg-gray-100">{children}</main>
      </div>
      <div className="hidden lg:block">
        <Activitypanel />
      </div>
    </div>
  );
}
