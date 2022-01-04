import React from "react";
import Helmet from "react-helmet";
import Blogs from "../Blogs/Blogs";
import RecentBlogs from "../Blogs/RecentBlogs";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";
import Reviews from "../shared/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Daily Blog News</title>
        <meta name="description" content="home page" />
      </Helmet>
      <Header />
      <RecentBlogs />
      <Blogs />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
