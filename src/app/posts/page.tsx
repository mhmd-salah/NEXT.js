import PostList from "@/components/posts/post-list";
import React, { Suspense } from "react";

const PostsPage = () => {
  return (
    <>
      <h1>Post Page </h1>
      <Suspense fallback={<h1>Posts loading</h1>}>
        <PostList />
      </Suspense>
    </>
  );
};

export default PostsPage;
