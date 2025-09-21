"use client";

import SidebarLayout from "@/components/SidebarLayout";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
