import React from "react";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";

const NotFound = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto flex justify-center py-10">
        <img
          src="https://i.ibb.co/2sxr1ZT/Error-page-not-found-404-internet-connection-problem-message-flat-vector-illustration-Broken-link-we.jpg"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
