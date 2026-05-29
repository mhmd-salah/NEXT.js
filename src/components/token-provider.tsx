"use client"
import { createContext, useContext } from "react";

interface IToken {
  jwt: string;
}

const tkn: IToken = {
  jwt: "default",
};

const TokenContext = createContext<IToken>(tkn);

const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  return <TokenContext value={tkn}>{children}</TokenContext>;
};

export default TokenProvider;
export const useToken = () => useContext(TokenContext);
