import React, { useState } from "react";
import Swal from "sweetalert2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyBlog = (props) => {
  const { author, _id, blogImage, description, title } = props.blog;

  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  // delete blog
  const deleteBlog = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://protected-eyrie-86885.herokuapp.com/blogs/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="py-3 lg:px-3 px-3 rounded lg:m-4 m-2  cursor bg-white shadow hover:shadow-md">
      <div>
        <div className="text-right relative">
          <button onClick={isOpenHandler}>
            <BsThreeDotsVertical className="text-xl my-3" />
          </button>
          <div
            className={
              isOpen
                ? "absolute top-8 bg-whit bg-gray-700 px-3 py-3 rounded right-2 block"
                : "hidden"
            }
          >
            <button
              onClick={() => deleteBlog(_id)}
              className="bg-white  rounded px-3 py-2 block border"
            >
              Delete
            </button>

            <button className="bg-white rounded px-3 py-2 border w-full mt-3">
              Edit
            </button>
          </div>
        </div>
        <img className="w-full h-56" src={blogImage} alt={title} />
        <p className="flex justify-center items-center pt-2 capitalize">
          {author}
        </p>
      </div>
      <div>
        <h1 className="text-center text-xl font-serif pb-3">
          {title.slice(0, 30)}
        </h1>
        <p className="text-sm text-gray-500 ">{description.slice(0, 200)}...</p>
        <div className="text-center pt-4">
          <Link to={`/blogs/${_id}`} className="hover:text-pink-600">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
