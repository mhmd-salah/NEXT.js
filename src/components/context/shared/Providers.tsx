import React from "react";
import ReactQueryProvider from "./components/react-query-provider";
import UserProvider from "./users/user-provider";
import { getUsers } from "@/lib/api/users/user.api";

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  const usersPromise = getUsers();
  return (
    <ReactQueryProvider>
      <UserProvider userPromise={usersPromise}>{children}</UserProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
