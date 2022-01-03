import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MakeComment = (id) => {
  const { currentUser } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const commentDetails = {
      text: data.text,
      blogId: id.id,
      username: currentUser?.displayName,
      photoURL: currentUser?.photoURL,
    };

    // post comment to database
    fetch("https://protected-eyrie-86885.herokuapp.com/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      {currentUser?.email ? (
        <form onSubmit={handleSubmit(onSubmit)} className="px-2 my-2">
          <input
            type="text"
            {...register("text", { required: true })}
            className="form-control px-3 py-1 border outline-none rounded-full"
            placeholder="Write a comment"
          />
          <button type="submit" className="my-2 bg-blue-400  px-3 py-1 rounded">
            Comment
          </button>
        </form>
      ) : (
        <div className="px-2 py-1">
          <h6 className="text-red-500">
            If you want to comment on this post, please make sure to
            <Link to="/login">login</Link>
          </h6>
        </div>
      )}
    </div>
  );
};

export default MakeComment;
