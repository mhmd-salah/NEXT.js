import { ApiResult } from "@/lib/types/api";
import { apiRequest } from "../apiReq";
import { IUsersResponse } from "@/lib/types/users";

export async function getUsers(): Promise<ApiResult<IUsersResponse>> {
  return apiRequest("https://dummyjson.com/users");
}
