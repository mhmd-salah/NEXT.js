"use client";
import { ApiResult } from "@/lib/types/api";
import { IUser } from "@/lib/types/users";
import React, { use } from "react";

interface IProps {
  userPromise: Promise<ApiResult<IUser[]>>;
}

const UserList = ({ userPromise }: IProps) => {
  const usersR = use(userPromise);
  console.log(usersR.data);
  return <div>users-list</div>;
};

export default UserList;
