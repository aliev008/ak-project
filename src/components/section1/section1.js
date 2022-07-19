import "./style.scss";

import React from "react";
import image from "../../assets/images/image_1.png";

const Section1 = () => {
  return (
    <section className="frame-174">
      <div className="frame-174-left-blog">
        <h3>Be surprised</h3>
        <p>
          Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
          dandelion okra wakame tomato.
        </p>
        <button className="btn" target="_blank">
          Discover now
        </button>
      </div>
      {/* <img src="http://127.0.0.1:8887/ak-project/src/assets/images/image_1.png" alt=""/> */}
      <img src={image} alt="" />
    </section>
  );
};

export default Section1;
