import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-5/6 w-full flex items-center justify-center">
      <section>
        <button className="p-2 m-2 bg-yellow">
          <Link href="/posts">view posts</Link>
        </button>
        <button className="p-2 m-2 bg-sage-700">
          <Link href="/posts">create post</Link>
        </button>
      </section>
    </div>
  );
};

export default page;
