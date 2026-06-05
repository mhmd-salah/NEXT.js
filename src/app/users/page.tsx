import UserList from "@/components/users/users-list";
import { getUsers } from "@/lib/api/users/user.api";
import React from "react";

const userPage = () => {
  const usersPromise = getUsers();
  return (
    <>
      <h1>User Page</h1>
      <UserList userPromise={usersPromise} />
    </>
  );
};

export default userPage;
