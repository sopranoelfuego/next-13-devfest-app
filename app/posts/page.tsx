import Link from "next/link";
import React from "react";

type postData = {
  userId: number;
  id: 1;
  title: string;
  body: string;
};
const fetchPost = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return posts.json();
};
const posts = async () => {
  const posts: [postData] = await fetchPost();
  return (
    <div className="w-full ">
      {posts.map((p: postData) => (
        <Link key={p.id} href={`/posts/${p.id}`}>
          <div className="w-full max-w-md p-3 hover:bg-sage-700  mt-2 bg-yellow mx-auto">
            <p className="font-bold pb-3">
              <small> post#{p.id}-</small>
              {p.title}
            </p>
            <p>{p.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default posts;
