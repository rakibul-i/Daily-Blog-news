import React from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";
import Comments from "./Comments";
import MakeComment from "./MakeComment";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs, comments } = useAuth();

  const blog = blogs.find((b) => b._id === id);
  const time = blog?.time;

  const blogComments = comments.data.filter((c) => c.blogId === id);

  return (
    <>
      {/* makeing seo */}
      <Helmet>
        <title>Blog details </title>
        <meta name="description" content="Blog details page" />
      </Helmet>
      {/* seo ends  */}
      <Header />
      <section className="lg:w-7/12 md:w-9/12 w-11/12 mx-auto py-5 ">
        <h1 className="text-center py-4 font-bold">{blog?.title}</h1>
        <p className="capitalize text-center ">
          {blog?.author} {new Date(time).toDateString()}
        </p>
        <div className="flex justify-center">
          <img src={blog?.blogImage} alt="" />
        </div>
        <p className="py-5">{blog?.description}</p>

        {/* add a comment  */}
        <div className="border py-4 px-2">
          <h3> {blogComments.length} Comments</h3>
          <MakeComment id={id}></MakeComment>
          {/* comments  */}
          <div className="py-3 px-2">
            {blogComments?.map((comment) => (
              <Comments key={comment._id} comment={comment}></Comments>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;
