import React from "react";

import "./footer.scss";

import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <section className="footer section-padding">
      <div className="background"></div>
      <div className="footer-heading">
        <h1 className="text-gradient section-main-title">
          Do you want to step in to the future before others
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className="footer-links">
        <div className="footer-link">
          <img src={logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-link">
          <h3 className="footer-link-title">Links</h3>
          <a href="">Overons</a>
          <a href="">Social Media</a>
          <a href="">Counters</a>
          <a href="">Contact</a>
        </div>
        <div className="footer-link">
          <h3 className="footer-link-title">Company</h3>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Contact</a>
        </div>
        <div className="footer-link">
          <h3 className="footer-link-title">Get in touch</h3>
          <a href="">
            Crechterwoord K12 <br /> 182 DK Alknjkcb
          </a>
          <a href="">085-132567</a>
          <a href="">info@payme.net</a>
        </div>
      </div>
      <div className="footer-copy">© 2021 GPT-3. All rights reserved.</div>
    </section>
  );
};

export default Footer;
