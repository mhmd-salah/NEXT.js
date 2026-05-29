"use client";
import React, { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};
interface IProps {
  children: React.ReactNode;
}

const defaultTheme: Theme = {
  colors: {
    primary: "red",
    secondary: "green",
  },
};
const ThemeContext = createContext<Theme>(defaultTheme);
const ThemeProvider = ({ children }: IProps) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
