import React from "react";
import socialmedia from "./Assets/image copy 7.png";
const Footer = () => (
  <>
    <div className="footer-container">
      <div className="subscribe-container">
        <div>
          {" "}
          <b>
            {" "}
            <p>
              Subscribe to our newsletter for regular updates about Offers,
              Coupons & more
            </p>
          </b>
          <p>
            {" "}
            <input type="email" placeholder="enter your email " />{" "}
            <button>subscribe</button>
          </p>
        </div>
        <div>
          <h4>FOLLOW US</h4>
          <img src={socialmedia} height={38} width={250} />
        </div>
      </div>

      <div className="link-container">
        <div className="div-1">
          {" "}
          <p style={{ fontWeight: "bold" }}>Company</p> <p>About</p>{" "}
          <p>Careers</p> <p>Partnerships</p> <p>Blog</p> <p>How we work</p>
        </div>
        <div className="div-2">
          {" "}
          <p style={{ fontWeight: "bold" }}>Policies</p> <p>Privacy</p>{" "}
          <p>Terms of Use</p> <p>Accessibility</p> <p>Cookies</p>
        </div>
        <div className="div-3">
          {" "}
          <p style={{ fontWeight: "bold" }}>Help</p> <p>Support</p>{" "}
          <p>Cancel your booking</p> <p>Refund policies</p> <p>Use a coupon</p>{" "}
          <p>Travel documents</p>
        </div>
        <div className="div-4">
          {" "}
          <p style={{ fontWeight: "bold" }}>More</p>
          <p>Airline fees</p>
          <p>Airlines</p>
          <p>Low fare trips</p>
          <p>Badges & Certificates</p>
          <p>Advertising</p>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
