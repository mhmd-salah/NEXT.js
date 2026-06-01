import { IApiPostsResponse } from "@/lib/types/posts";

export async function getPosts(): Promise<IApiPostsResponse> {
  const response = await fetch("https://dummyjson.com/posts");
  if (!response.ok) throw new Error("failed fetch posts");
  return response.json();
}
