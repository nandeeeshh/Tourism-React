import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="footer-icon">
        <h6 className="footer-icon-text"> Get Connected</h6>

        <a href="https://twitter.com/example">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com/example">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://facebook.com/example">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://youtube.com/example">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      <div className="footer-mid-text">

       <p className="footer-text-l">Created by @username</p>
       <p className="footer-text-l">Made with ❤️ by the Tech Tribe</p>
       <p>Note: This project is made for educational purposes only.</p>
        
      </div>


      <div className="qr-div">

      </div>
    </div>
  );
};

export default Footer;
