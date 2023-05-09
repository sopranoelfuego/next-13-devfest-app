import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
type postParamsType = {
  params: {
    postId: string;
  };
};

const getComments = async (id: string) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${parseInt(id, 10)}/comments`
  );
  return data.json();
};
const getPost = async (id: string) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${parseInt(id, 10)}`,
    { next: { revalidate: 60 } }
  );
  return data.json();
};
const page = async ({ params: { postId } }: postParamsType) => {
  const post: PostType = await getPost(postId);
  const comments: [CommentType] = await getComments(postId);
  if (!post.id) return notFound();
  return (
    <div className=" max-w-lg  ">
      {/* post here */}
      <Link href="/posts" as="/posts">
        <button className="px-4 py-2 mt-3 bg-yellow">return</button>
      </Link>
      <div className="d p-3 hover:bg-sage-700  mt-2 bg-sage-700 mx-auto">
        <p className="font-extrabold pb-3">
          <small> post#{post.id}-</small>
          {post.title}
        </p>
        <p className="font-semibold">{post.body}</p>
        <div className="w-full flex justify-end ">
          {comments.length}comments
        </div>
      </div>
      {/* comment here here */}
      <div>
        {comments.map((c: CommentType) => (
          <div key={c.id}>{c.name}</div>
        ))}
      </div>
    </div>
  );
};

export default page;
