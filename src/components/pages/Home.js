import React from "react";
import Blogs from "../Blogs/Blogs";
import RecentBlogs from "../Blogs/RecentBlogs";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <RecentBlogs />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
