import React from "react";
import GoogleSignin from "../authentication/GoogleSignin";
import LoginForm from "../authentication/LoginForm";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";

const Login = () => {
  return (
    <section>
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto py-5 flex items-center justify-center">
        <div className="bg-gray-800 py-7 px-3 text-white rounded">
          <h1> Sign in!</h1>
          <LoginForm />
          <GoogleSignin />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
