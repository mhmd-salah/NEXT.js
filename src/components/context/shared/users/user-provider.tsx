"use client";

import { IUsersResponse } from "@/lib/types/users";
import { createContext } from "react";

interface IProps {
  children: React.ReactNode;
  userPromise: Promise<IUsersResponse>;
}

export const UserContext = createContext<Promise<IUsersResponse> | null>(null);

const UserProvider = ({ children, userPromise }: IProps) => {
  return <UserContext value={userPromise}>{children}</UserContext>;
};

export default UserProvider;
