import React from "react";
import Helmet from "react-helmet";
import GoogleSignin from "../authentication/GoogleSignin";
import SingupForm from "../authentication/SingupForm";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";

const Signup = () => {
  return (
    <section>
      <Helmet>
        <title>Sign up</title>
        <meta name="description" content="sing up page" />
      </Helmet>
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto py-5 flex items-center justify-center">
        <div className="bg-gray-800 py-7 px-3 text-white rounded">
          <h1>Register Now!</h1>
          <SingupForm />
          <GoogleSignin />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Signup;
