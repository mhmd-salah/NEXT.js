import { IApiPostsResponse, IPosts } from "@/lib/types/posts";
import { apiRequest } from "../apiReq";
import { ApiResult } from "@/lib/types/api";

export async function getPosts(): Promise<ApiResult<IApiPostsResponse>> {
  // await new Promise((res) => setTimeout(res, 9000));

  // const response = await fetch("https://dummyjson.com/posts");
  // if (!response.ok) throw new Error("failed fetch posts");
  // return response.json();

  return apiRequest("https://dummyjson.com/posts");
}
