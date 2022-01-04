import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Header from "../shared/Header/Header";
import { useForm } from "react-hook-form";
import axios from "axios";
import Footer from "../shared/footer/Footer";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Helmet from "react-helmet";

const WriteBlog = () => {
  const { currentUser } = useAuth();
  const history = useHistory();
  const [image, setImage] = useState(
    "https://www.kindpng.com/picc/m/244-2446073_icons8-flat-gallery-icon-logo-gallery-png-transparent.png"
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const blogDetails = {
      blogImage: image,
      title: data.title,
      email: data.email,
      author: data.author,
      description: data.description,
      time: new Date(Date.now()),
    };

    fetch("https://protected-eyrie-86885.herokuapp.com/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/");
          Swal.fire("Blog published Successfully", "success");
        }
      });
  };

  // handle banner image
  const bannerImageHandler = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section>
      {/* makeing seo */}
      <Helmet>
        <title>Write Blog</title>
        <meta name="description" content="My blogs page" />
      </Helmet>
      {/* seo ends  */}
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto py-4 px-3 my-3 border">
        <h3> {"Blogs > Blog Post"}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
          <h6>Upload an image</h6>
          <div>
            <label
              className="py-1 relative cursor-pointer"
              htmlFor="banner-image"
            >
              <img
                className="rounded bg-gray-800 p-2  md:h-96 h-56 w-full"
                src={image}
                alt=""
              />
            </label>
            <input
              id="banner-image"
              type="file"
              className="border hidden"
              onChange={bannerImageHandler}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className=" md:mr-2 mr-0">
              <h6>Blog Author</h6>
              <input
                className=" form-control md:mb-0 mb-3 py-2 rounded px-1 focus:outline-none"
                defaultValue={currentUser?.displayName}
                {...register("author", { required: true })}
              />
            </div>
            <div>
              <h6>Blog Author email</h6>
              <input
                className=" form-control py-2 rounded px-1 focus:outline-none "
                defaultValue={currentUser?.email}
                readOnly={true}
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="py-1">
            <h6>Blog Title</h6>
            <input
              className="form-control block py-2 rounded px-1 focus:outline-none"
              {...register("title", { required: true })}
            />
          </div>

          <div>
            <h6>Blog Intro</h6>
            <textarea
              className="form-control bg-transparent  px-1 py-2 h-40 rounded"
              {...register("description", { required: true })}
            ></textarea>
          </div>

          <div className="py-3">
            <input
              className="py-2 px-3  rounded bg-blue-500 text-white"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default WriteBlog;
