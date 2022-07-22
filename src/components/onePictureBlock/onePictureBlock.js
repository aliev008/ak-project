import "./style.scss";

import React from "react";
import image from "../../assets/images/image_1.png";

const OnePictureBlock = () => (
  <section className="one-picture-block">
    <div className="one-picture-block__left">
      <h3>Be surprised</h3>
      <p>
        Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
        dandelion okra wakame tomato.
      </p>
      <button className="btn">
        Discover now
      </button>
    </div>
    <img src={image} alt="" />
  </section>
);

export default OnePictureBlock;
