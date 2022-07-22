import "./style.scss";

import React from "react";

const BannerBlock = () => (
  <section className="banner-block">
    <div className="banner">
      <div className="banner-text">
        <p>The title of the component</p>
        <h1>Very visible component to promote something.</h1>
      </div>
      <button className="banner-btn">Book an Appointment</button>
    </div>
  </section>
);

export default BannerBlock;
