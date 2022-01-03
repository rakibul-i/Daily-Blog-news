import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";

const Comments = (props) => {
  const { _id, username, photoURL, text, date } = props.comment;
  const { currentUser } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  // delete comment
  const deleteHandler = (id) => {
    fetch(`https://protected-eyrie-86885.herokuapp.com/comments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="px-2 py-1 my-1 border flex items-center justify-between">
      <div>
        <div className="flex item-center">
          <img className="w-10 rounded-full" src={photoURL} alt="" />
          <h6 className="capitalize ml-1 font-serif mt-2">{username}</h6>
        </div>
        <h1 className=" py-1 text-sm">{text}</h1>
        <p className="mt-2 text-sm text-gray-400">
          {new Date(date).toDateString()}
        </p>
      </div>
      <button onClick={isOpenHandler} className="relative">
        <BsThreeDotsVertical className="text-xl" />
        <div
          className={
            isOpen
              ? "absolute shadow border bg-blue-50 rounded py-4 px-3 bottom-5 right-2"
              : "hidden"
          }
        >
          {currentUser?.displayName === username ? (
            <button
              onClick={() => deleteHandler(_id)}
              className="bg-white px-2 py-1"
            >
              Delete
            </button>
          ) : (
            <button className="bg-white px-2 py-1">Hide</button>
          )}
        </div>
      </button>
    </div>
  );
};

export default Comments;
