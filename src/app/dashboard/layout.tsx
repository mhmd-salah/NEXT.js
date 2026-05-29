import React from "react";

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <div>
      <h1 className="bg-red-500 text-white">Dashboard layout</h1>
      {children}
    </div>
  );
};

export default DashboardLayout;
