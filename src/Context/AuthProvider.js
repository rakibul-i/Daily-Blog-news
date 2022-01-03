import React, { createContext } from "react";
import useBlogs from "../hooks/useBlogs";
import useComments from "../hooks/useComments";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { blogs } = useBlogs();
  const { comments } = useComments();
  const {
    currentUser,
    error,
    isLoading,
    signupWithEmailAndPassword,
    signInWithGoogle,
    logInWithEmailAndPassword,
    logOut,
  } = useFirebase();

  return (
    <AuthContext.Provider
      value={{
        blogs,
        comments,
        currentUser,
        error,
        isLoading,
        signupWithEmailAndPassword,
        signInWithGoogle,
        logInWithEmailAndPassword,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
