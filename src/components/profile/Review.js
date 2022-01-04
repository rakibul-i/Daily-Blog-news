import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Review = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const { currentUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const onSubmit = (data) => {
    const reviewInfo = {
      ratings: currentValue,
      name: data.username,
      description: data.message,
      image: currentUser?.photoURL,
    };
    axios
      .post("https://protected-eyrie-86885.herokuapp.com/reviews", reviewInfo)
      .then(function (response) {
        console.log(response);
        if (response.data._id) {
          Swal.fire("Added!", "review has been added.", "success");
          history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section>
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto py-5">
        <h3>
          Profile <span className="text-info font-bold">{">"}</span> Review
        </h3>
        <div className="bg-white py-5 flex justify-center px-5">
          <div className="">
            <h1 className="text-xl py-10 text-center">Rate Us</h1>
            <div className="flex justify-center">
              {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    size={24}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={
                      (hoverValue || currentValue) > index
                        ? colors.orange
                        : colors.grey
                    }
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                    }}
                  />
                );
              })}
            </div>{" "}
            <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="block border focus:outline-none px-10 text-center py-1 my-4 rounded"
                defaultValue={currentUser?.displayName}
                {...register("username", { required: true })}
              />
              <textarea
                className="border block p-3 focus:outline-none"
                cols="30"
                rows="5"
                placeholder="write something.."
                {...register("message", { required: true })}
              ></textarea>
              <div className="flex justify-center">
                <input
                  className="my-5 bg-blue-500 px-3 py-1 rounded text-white cursor-pointer"
                  type="submit"
                  value="Save"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Review;
