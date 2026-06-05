import { IUsersResponse } from "./../../types/users";
import { cache } from "react";

// export async function getUsers(): Promise<ApiResult<IUsersResponse>> {
//   return apiRequest("https://dummyjson.com/users");
// }

export const getUsers = cache(async (): Promise<IUsersResponse> => {
  const res = await fetch("https://dummyjson.com/users");
  return res.json();
});
