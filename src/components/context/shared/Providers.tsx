import React from "react";
import ReactQueryProvider from "./components/react-query-provider";

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
