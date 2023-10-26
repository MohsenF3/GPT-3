import React from "react";

import "./header.scss";

import banner from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
  return (
    <>
      <header className="header section-padding" id="home">
        <div class="background "></div>
        <div className="header-content">
          <h1 className="header-title text-gradient section-main-title">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <div className="header-description">
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <form>
              <input type="email" placeholder="Your Email Address" />
              <button className="input-btn">Get Started</button>
            </form>
          </div>
          <div className="header-people">
            <img src={people} />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="header-banner">
          <img src={banner} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
