import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const GoogleSignin = () => {
  const history = useHistory();
  const location = useLocation();

  const { signInWithGoogle } = useAuth();

  return (
    <>
      <button
        onClick={() => signInWithGoogle(history, location)}
        className="w-full flex items-center justify-center bg-blue-500 mt-4 text-white py-2 rounded text-xl"
      >
        <FcGoogle className="text-xl mr-3" />
        Continue with Google
      </button>
    </>
  );
};

export default GoogleSignin;
