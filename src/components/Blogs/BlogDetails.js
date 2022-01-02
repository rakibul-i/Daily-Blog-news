import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useAuth();

  const blog = blogs.find((b) => b._id === id);

  const time = blog?.time;

  return (
    <>
      <Header />
      <div className="lg:w-7/12 md:w-9/12 w-11/12 mx-auto py-5 ">
        <h1 className="text-center py-4 font-bold">{blog?.title}</h1>
        <p className="capitalize text-center ">
          {blog?.author} {new Date(time).toDateString()}
        </p>
        <div className="flex justify-center">
          <img src={blog?.blogImage} alt="" />
        </div>
        <p className="pt-5">{blog?.description}</p>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
