import './globals.css'
import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
export const metadata = {
 title: 'Aubin Next blog',
 description: 'Simple blog with the latest features of react 18 and nextjs 13',
}
export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
  <html lang="en">
   <body className="h-screen ">
    <Header />
    <div className="flex w-full  gap-2 justify-center items-start  ">
     <SideBar />
     {children}
    </div>
   </body>
  </html>
 )
}
