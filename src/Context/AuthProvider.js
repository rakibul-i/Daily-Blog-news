import React, { createContext } from "react";
import useBlogs from "../hooks/useBlogs";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { blogs } = useBlogs();

  return (
    <AuthContext.Provider value={{ blogs }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
