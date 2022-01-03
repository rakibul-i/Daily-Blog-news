import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const SingupForm = () => {
  const [photoURL, setPhotoURL] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { signupWithEmailAndPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signupWithEmailAndPassword(
      data.username,
      photoURL,
      history,
      location,
      data.email,
      data.password
    );
  };

  // image upload handler
  const imageUploadHandler = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setPhotoURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <form className="md:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 text-center  ">
          <input
            className="w-full border px-3 py-2 rounded focus:outline-none block"
            placeholder="photoURL"
            id="photoURL"
            type="file"
            {...register("photoURL", { required: true })}
            onBlur={imageUploadHandler}
          />
          {/* errors will return when field validation fails  */}
          {errors.photoURL && (
            <span className="text-sm text-red-500 block">
              photoURL is required
            </span>
          )}
        </div>
        <div className="my-4">
          <input
            className="w-full block border px-3 py-2 rounded text-black focus:outline-none "
            placeholder="username"
            {...register("username", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.username && (
            <span className="text-sm text-red-500 block">
              username is required
            </span>
          )}
        </div>
        <div className="my-4">
          <input
            className="w-full block border text-black px-3 py-2 rounded focus:outline-none "
            placeholder="email"
            type="email"
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className="text-sm text-red-500 block">
              email is required
            </span>
          )}
        </div>
        <div className="my-4">
          <input
            className="w-full block border text-black px-3 py-2 rounded focus:outline-none "
            placeholder="password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.{6,})/,
            })}
          />
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "required" && "password  is required"}
          </span>
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "pattern" &&
              "password must be 6 characters"}
          </span>
        </div>
        <p className="text-center py-3">
          Already have an account?{" "}
          <Link className="text-blue-600 underline" to="/login">
            Sign in
          </Link>{" "}
        </p>
        <div className="text-center">
          <input
            className="border btn-outline-light px-4 py-2 rounded cursor-pointer"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default SingupForm;
