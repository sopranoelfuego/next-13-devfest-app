import './globals.css'
import React from "react"
import Header from "../components/Header"
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
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}
