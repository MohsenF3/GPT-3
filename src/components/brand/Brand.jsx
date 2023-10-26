import React from "react";

import "./brand.scss";

import { atlassian, dropbox, google, shopify, slack } from "./import";

const Brand = () => {
  return (
    <>
      <div className="brand section-padding ">
        <div className="brand-img">
          <img src={google} alt="" />
        </div>
        <div className="brand-img">
          <img src={slack} alt="" />
        </div>
        <div className="brand-img">
          <img src={atlassian} alt="" />
        </div>
        <div className="brand-img">
          <img src={dropbox} alt="" />
        </div>
        <div className="brand-img">
          <img src={shopify} alt="" />
        </div>
      </div>
    </>
  );
};

export default Brand;
