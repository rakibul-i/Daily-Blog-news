import React from "react";
import Blogs from "../components/Blogs/Blogs";
import RecentBlogs from "../components/Blogs/RecentBlogs";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/Header/Header";

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
