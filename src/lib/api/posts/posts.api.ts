import { IApiPostsResponse } from "@/lib/types/posts";
import { cache } from "react";

// export async function getPosts(): Promise<IApiPostsResponse> {
//   await new Promise((res) => setTimeout(res, 2000));

//   const response = await fetch("https://dummyjson.com/posts");
//   return response.json();

//   // return apiRequest("https://dummyjson.com/posts");
// }

export const getPosts = cache(async (): Promise<IApiPostsResponse> => {
  const response = await fetch("https://dummyjson.com/posts");
  return response.json();
});
