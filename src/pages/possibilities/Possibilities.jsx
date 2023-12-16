import React from "react";

import "./possibilities.scss";

import banner from "../../assets/possibility.svg";

const Possibilities = () => {
  return (
    <>
      <section className="possibilities section-padding">
        <div className="possibilities-img">
          <img src={banner} alt="" />
        </div>
        <div className="possibilities-info">
          <span>Request Early Access to Get Started</span>
          <h2 className="text-gradient">
            The possibilities are <br /> beyond your imagination
          </h2>
          <p className="section-subtitle">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <span>Request Early Access to Get Started</span>
        </div>
      </section>
    </>
  );
};

export default Possibilities;
