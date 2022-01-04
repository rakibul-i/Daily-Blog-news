import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";
import MyBlog from "./MyBlog";

const MyBlogs = () => {
  const { blogs, currentUser } = useAuth();
  const userBlogs = blogs.filter((blog) => blog?.email === currentUser?.email);
  return (
    <section>
      {/* makeing seo */}
      <Helmet>
        <title>My Blogs</title>
        <meta name="description" content="My blogs page" />
      </Helmet>
      {/* seo ends  */}
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto py-10">
        <span className="text-2xl font-bold py-2">My Blogs</span>
        {userBlogs.length ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10">
            {userBlogs.map((blog) => (
              <MyBlog key={blog._id} blog={blog}></MyBlog>
            ))}
          </div>
        ) : (
          <h2 className="py-10">
            You haven't write a blog yet!{" "}
            <Link to="/writeBlog">Write a blog</Link>{" "}
          </h2>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default MyBlogs;
