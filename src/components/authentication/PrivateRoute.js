import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ReactLoading from "react-loading";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser, isLoading } = useAuth();
  if (isLoading) {
    return (
      <section
        className="flex items-center justify-center bg-gray-800"
        style={{ height: "100vh" }}
      >
        <ReactLoading type="spokes" color="#fff" height="60px" width="60px" />
      </section>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
