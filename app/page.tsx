import Link from 'next/link'
import React from 'react'

const page = () => {
 return (
  <div className=" w-full h-[30rem] flex items-center justify-center">
   <section className="">
    <Link href="/posts" className="p-2 m-2 bg-yellow">
     view posts
    </Link>

    <Link href="/todos" className="p-2 m-2 bg-sage-700">
     view todos
    </Link>
   </section>
  </div>
 )
}

export default page
