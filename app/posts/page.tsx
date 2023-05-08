import Link from "next/link";
import React from "react";

const fetchPost = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  return posts.json();
};
const posts = async () => {
  const posts: [PostType] = await fetchPost();
  return (
    <div className="w-full ">
      {posts.map((p: PostType) => (
        <Link key={p.id} href={`/posts/${p.id}`} as={`posts/${p.id}`}>
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
export async function generateStaticParams() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostType[] = await data.json();
  const postSplice = posts.splice(0, 10);
  return postSplice.map((p: PostType) => ({ postId: p.id.toString() }));
}

export default posts;
