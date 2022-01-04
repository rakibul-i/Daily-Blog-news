import React from "react";
import "./about.css";
import Button from "@restart/ui/esm/Button";
import Header from "../shared/Header/Header";
import Footer from "../shared/footer/Footer";

const AboutUs = () => {
  return (
    <section>
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto">
        <div className="about-us">
          <div className="flex items-center">
            {/* <img src={img} className="about-img" alt="" /> */}
            <img
              className="about-img"
              src="https://i.ibb.co/LPjS5s3/photo-1455390582262-044cdead277a.jpg"
              alt=""
            />
          </div>

          <div className="about-desc">
            <h1 className="top-title text-center mb-4">About Us</h1>
            <p className="details-us">
              When you use OneTravel, you can search for travel accommodations
              by destination and flight, simplifying the search process and
              letting you quickly and easily find the best options for your
              trip. You can also search by travel theme, flight type and flight
              price.
              <br />
              <br />
              <p className="xl:block hidden">
                OneTravel also lets you book hotels, rental cars and vacation
                packages. The company offers last-minute deals on hotels and
                discount codes to save money on flights and vacation packages.
                You earn reward points for each dollar spent on the site, and
                you earn double points when you book using the app.
              </p>
            </p>
            <p className="2xl:block hidden">
              If you find a lower rate on OneTravel or another U.S.-based travel
              site within four hours of booking, OneTravel will credit or refund
              you the difference. After four hours (but no later than 24 hours),
              you get a $50 coupon for future bookings if you find a lower
              price.
              <br />
            </p>
            <Button className="about-us-btn">Read More</Button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutUs;
