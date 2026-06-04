import { getPosts } from "@/lib/api/posts/posts.api";
import React from "react";

const PostList = async () => {
  const postsRes = await getPosts();
  if (!postsRes.success) {
    return <div>{postsRes.error}</div>;
  }

  return (
    <>
      {postsRes.data.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
};

export default PostList;
