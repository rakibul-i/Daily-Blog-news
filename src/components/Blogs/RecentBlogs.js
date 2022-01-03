import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BsArrowRight } from "react-icons/bs";

const RecentBlogs = () => {
  const { blogs } = useAuth();
  const recentBlogs = blogs.slice(0, 2);

  const history = useHistory();

  // detailsHandler
  const detailsHandler = (id) => {
    history.push(`/blogs/${id}`);
  };
  return (
    <div className=" md:w-9/12 w-11/12 mx-auto py-4">
      <span className="py-3 px-3 text-2xl font-medium ">Recent Blogs</span>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center ">
        {recentBlogs?.map((blog) => {
          const blogTitle = blog?.title.slice(0, 30);
          const blogDesc = blog?.description.slice(0, 200);
          return (
            <div className="grid  grid-cols-1 items-center p-4 m-3 border rounded ">
              <div>
                <img
                  className="rounded w-full  2xl:h-64 lg:h-48 md:h-44 h-64"
                  src={blog?.blogImage}
                  alt=""
                />
              </div>
              <div className="lg:px-3 md:py-0 md:mt-0 mt-3">
                <h1 className="text-xl font-serif pb-4">{blogTitle}...</h1>
                <p className="text-sm leading-6 text-gray-500">{blogDesc}...</p>
                <button
                  onClick={() => detailsHandler(blog?._id)}
                  className=" font-bold hover:text-green-600 text-sm  px-3 py-2 rounded mt-4 flex items-center"
                >
                  Details <BsArrowRight className="ml-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentBlogs;
