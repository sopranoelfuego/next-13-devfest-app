import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" w-full h-full flex  items-center justify-center ">
      <div className="font-semibold">
        <button className="p-2 m-2 bg-yellow">
          <Link href="/posts">view posts</Link>
        </button>
        <button className="p-2 m-2 bg-sage-700">
          <Link href="/posts">create post</Link>
        </button>
      </div>
    </div>
  );
};

export default page;
