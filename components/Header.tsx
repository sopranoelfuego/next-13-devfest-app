import Link from 'next/link'
import React from 'react'

const Header = () => {
 return (
  <header className="p-7 mx-auto bg-sage-900 text-white">
   <div className="flex justify-between items-center">
    <div className="font-bold border  border-solid px-1 rounded-sm">
     <Link href="/" as="/">
      logo
     </Link>
    </div>
    <ul className="flex gap-2 font-bold">
     <li id="home">
      <Link href="/" as="/">
       Home
      </Link>
     </li>
     <li id="services">
      <Link href="#">services</Link>
     </li>
     <li id="contact">
      <Link href="#">contact</Link>
     </li>
    </ul>
   </div>
  </header>
 )
}

export default Header
