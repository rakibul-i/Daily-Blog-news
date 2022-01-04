import React from "react";
import Helmet from "react-helmet";
import Footer from "../shared/footer/Footer";
import Header from "../shared/Header/Header";
import "./Features.css";

const Features = () => {
  return (
    // container starts from here
    <section>
      {/* makeing seo */}
      <Helmet>
        <title>Features </title>
        <meta name="description" content="features page" />
      </Helmet>
      {/* seo ends  */}
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto py-5">
        <div className="feature-container">
          {/* sales part  */}

          <div className="feature write">
            <i className="fas fa-edit feature-icon-design"></i>
            <h3 className="feature-title">Write</h3>
            <p className="feature-desc">
              We believe in providing our customers with a high quality product
              at an affordable price. We use only quality name brand products.
            </p>
          </div>

          {/* rentals part  */}

          <div className="feature read">
            <i className="fas fa-book-reader feature-icon-design"></i>
            <h3 className="feature-title">Read</h3>
            <p className="feature-desc">
              We know it isa not always economical to purchase new equipment,
              that's why we offer a variety of rental options with daily, weekly
              and monthly rates.
            </p>
          </div>

          {/* feature part  */}

          <div className="feature make">
            <i className="far fa-bookmark feature-icon-design"></i>
            <h3 className="feature-title">Make</h3>
            <p className="feature-desc">
              We're not just your average safety store! Our experts know what
              you're looking for and we can show you how to use it.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Features;
