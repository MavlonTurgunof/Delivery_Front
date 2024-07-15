import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            necessitatibus placeat corporis debitis sint ex molestias ut,
            voluptatem culpa similique cum ipsam repudiandae perspiciatis,
            perferendis doloremque in omnis, inventore qui?
          </p>
        </div>
        <div className="footer-content-center"></div>
        <div className="footer-content-right"></div>
      </div>
    </div>
  );
}

export default Footer;
