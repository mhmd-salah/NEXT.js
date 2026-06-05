import { IComment, ICommentsResponse } from "@/lib/types/comments";

export async function getCommentsOnPost(postId: number) {
  await new Promise((res) => setTimeout(res, 2000));

  const res = await fetch(`https://dummyjson.com/comments/post/${postId}`);
  const data: ICommentsResponse = await res.json();
  return data?.comments || [];
}

export async function getComments() {
  await new Promise((res) => setTimeout(res, 1000));

  const res = await fetch("https://dummyjson.com/comments");
  const data: { comments: IComment[] } = await res.json();
  return data.comments || [];
}
