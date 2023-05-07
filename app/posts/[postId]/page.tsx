import React from "react";

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
    `https://jsonplaceholder.typicode.com/posts/${parseInt(id, 10)}`
  );
  return data.json();
};
const page = async ({ params: { postId } }: postParamsType) => {
  const post: PostType = await getPost(postId);
  const comments: [CommentType] = await getComments(postId);
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* post here */}
      <div className="d p-3 hover:bg-sage-700  mt-2 bg-sage-700 mx-auto">
        <p className="font-bold pb-3">
          <small> post#{post.id}-</small>
          {post.title}
        </p>
        <p>{post.body}</p>
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
