import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarRatings from "react-star-ratings";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://protected-eyrie-86885.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="md:w-9/12 w-11/12 mx-auto py-10 bg-gray-100 my-10">
        <h1 className="md:text-3xl  text-center font-serif tracking-wide">
          User Reviews
        </h1>
        <p className="text-center text-gray-500 pb-7 pt-3">
          Total Reviews: {reviews.length}
        </p>
        <Slider {...settings}>
          {reviews.map((review) => {
            return (
              <div key={review._id}>
                <div className="bg-white lg:mx-10 lg:px-5 px-2 mx-2 py-5 rounded border text-center">
                  <StarRatings
                    rating={review.ratings}
                    starRatedColor="orange"
                    starDimension="20px"
                    starSpacing="5px"
                  />
                  <div className="flex justify-center py-3">
                    <img
                      src={review.image}
                      className=" h-12 w-12 "
                      alt=""
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                  <h6 className="capitalize text-black py-2">{review.name}</h6>
                  <p className="capitalize text-gray-300 text-sm">
                    {review.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
