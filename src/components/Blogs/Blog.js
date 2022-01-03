import React from "react";
import { useHistory } from "react-router-dom";

const Blog = (props) => {
  const history = useHistory();

  const blogTitle = props.blog?.title.slice(0, 30);
  const blogDesc = props.blog?.description.slice(0, 200);
  return (
    <div
      onClick={() => history.push(`/blogs/${props.blog._id}`)}
      className="grid cursor-pointer border  grid-cols-1 transition-shadow duration-300 items-center hover:shadow-xl py-2 px-4 m-3 rounded "
    >
      <div>
        <img
          className="rounded w-full h-56"
          src={props.blog?.blogImage}
          alt=""
        />
      </div>
      <div className="lg:px-3 md:py-0 md:mt-0 mt-3">
        <h1 className="text-xl font-serif pb-4">{blogTitle}...</h1>
        <p className="text-sm leading-6 text-gray-500">{blogDesc}...</p>
      </div>
    </div>
  );
};

export default Blog;
