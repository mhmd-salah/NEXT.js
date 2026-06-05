import {
  getComments,
  getCommentsOnPost,
} from "@/lib/api/comments/comments.api";
import { getPosts } from "@/lib/api/posts/posts.api";
import React from "react";

const PostList = async () => {
  // const [{ posts }, commentsPayload] = await Promise.all([
  //   getPosts(),
  //   getComments(),
  // ]);
  const { posts } = await getPosts();

  // const crimePosts = posts.find((post) => post.tags.includes("crime"));
  // if (!crimePosts) {
  //   return <h1>crime post not founded</h1>;
  // }
  // const crimePostComments = await getCommentsOnPost(crimePosts.id);
  // console.log(crimePostComments);
  return (
    <>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
};

export default PostList;
