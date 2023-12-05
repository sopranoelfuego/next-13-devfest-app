import Link from "next/link";
import React from "react";

const fetchPost = async () => {
  const posts = await fetch(
    "https://656f2b6d6529ec1c62377a9a.mockapi.io/api/post",
    {
      cache: "no-cache",
    }
  );
  return posts.json();
};
const posts = async () => {
  const posts: [PostType] = await fetchPost();
  return (
    <div className="p-4">
      <button className="p-2 m-2 bg-sage-700">
        <Link href="/">Home</Link>
      </button>
      {posts.slice(0, 10).map((p: PostType) => (
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
