import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    // footer container starts from here

    <div className="footer-container">
      {/* news letter part */}

      <div className="newsletter">
        <h2>Daily Blog News</h2>
        <p>
          Stay connected! Subscribe to our Daily Blog News to stay informed of
          all the latest products and services
        </p>
        <button className="sign-up-btn">Sign Up</button>
      </div>

      {/* main part */}

      <div className="main-footer">
        <div className="footer-contact">
          {/* fisrt conatct part */}
          <div className="contact-us">
            <p>
              <span className="footer-design">Office</span> 1161 40th Avenue NE{" "}
              <br />
              <span className="footer-address">
                Calgary, Alberta, T2E 6M9
              </span>{" "}
            </p>

            <p className="footer-style">
              <span className="footer-design">Phone</span>(403) 769 - 1799
            </p>

            <p className="footer-style-2">
              <span className="footer-design">Email</span> info@orionsafety.ca{" "}
            </p>
          </div>

          {/* second conatct part */}

          <div className="contact-us">
            <p className="footer-style">
              <span className="footer-design">Weekdays</span> 8:00am - 4:30pm
            </p>

            <p className="footer-style-2">
              <span className="footer-design">Weekends</span> Call for hours
            </p>

            {/* social media part */}
            <div className="social">
              <p>
                <span className="footer-design">Social Media</span>
              </p>
              <div className="footer-social-media">
                <i className="fab fa-facebook-f icon-design-2"></i>
                <i className="fab fa-instagram icon-design-2"></i>
                <i className="fab fa-linkedin-in icon-design-2"></i>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://i.ibb.co/whB22BY/daily-notes-logo.jpg"
            className="footer-img"
            alt=""
          />
        </div>
      </div>

      {/* copyright part */}

      <div className="copyright-part">
        <p>Powered by Instalogic Inc.</p>
        <p> &copy; 2020 Orion Safety Equipement Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
