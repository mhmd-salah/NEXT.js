"use client";
import { IUsersResponse } from "@/lib/types/users";
import React, { use } from "react";

interface IProps {
  userPromise: Promise<IUsersResponse>;
}

const UserList = ({ userPromise }: IProps) => {
  const usersResponse = use(userPromise);
  console.log(usersResponse.users);
  return (
    <div>
      {usersResponse.users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </div>
  );
};

export default UserList;
