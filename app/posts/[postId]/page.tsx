import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

// TYPES Definitions
type postParamsType = {
  params: {
    postId: string;
  };
};

// ===== Fetching post's comments
const getComments = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${parseInt(id, 10)}/comments`
  );
  if (!response.ok) return undefined;
  const data = await response.json();
  return data;
};

// ===== Fetching  Post
const getPost = async (id: string) => {
  const response = await fetch(
    `https://656f2b6d6529ec1c62377a9a.mockapi.io/api/post/${parseInt(id, 10)}`,
    { next: { revalidate: 60 } }
  );
  if (!response.ok) return undefined;
  const data = await response.json();
  return data;
};
const page = async ({ params: { postId } }: postParamsType) => {
  const post: PostType = await getPost(postId);
  const comments: Array<CommentType> = await getComments(postId);
  if (!comments) return notFound();
  if (!post) return notFound();
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
