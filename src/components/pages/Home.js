import React from "react";
import Blogs from "../Blogs/Blogs";
import RecentBlogs from "../Blogs/RecentBlogs";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";
import Reviews from "../shared/Reviews";

const Home = () => {
  return (
    <div>
      <Header />
      <RecentBlogs />
      <Blogs />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
