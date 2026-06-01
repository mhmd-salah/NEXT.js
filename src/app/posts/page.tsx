import { getPosts } from "@/lib/api/posts/posts.api";
import React from "react";

const PostsPage = async () => {
  const payloadPosts = await getPosts();
  return (
    <>
      {payloadPosts.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
};

export default PostsPage;
