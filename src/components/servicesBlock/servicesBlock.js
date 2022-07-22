import "./style.scss";

import React from "react";
import card1 from "../../assets/cards/Back-end Development-1.svg";
import card2 from "../../assets/cards/Back-end Development.svg";
import card3 from "../../assets/cards/ShopifyPlus Integration.svg";
import card4 from "../../assets/cards/Front-end Development.svg";
import card5 from "../../assets/cards/Back-end Development.svg";

const ServicesBlock = () => (
  <section className="services-block">
    <div className="services-block-grid">
      <div className="services-block-grid-item item-1">
        <img src={card1} alt=""></img>
        <p className="title">Front-end development</p>
        <p>
          Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh
          felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium.
          Mollis magna hac amet maecenas mauris malesuada ornare.
        </p>
        <div className="services-block-grid-item-button">
          <a href="" target="_blank">
            <p> Read More /</p>
          </a>
        </div>
      </div>
      <div className="services-block-grid-item item-2">
        <img src={card2} alt=""></img>
        <p className="title">back-end development</p>
        <p>
          Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh
          felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium.
          Mollis magna hac amet maecenas mauris.
        </p>
        <div className="services-block-grid-item-button">
          <a href="" target="_blank">
            <p> Read More /</p>
          </a>
        </div>
      </div>
      <div className="services-block-grid-item item-3">
        <img src={card3} alt=""></img>
        <p className="title">shopify plus integration</p>
        <p>
          Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh
          felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium.
          Mollis magna hac amet maecenas.
        </p>
        <div className="services-block-grid-item-button">
          <a href="" target="_blank">
            <p> Read More /</p>
          </a>
        </div>
      </div>
      <div className="services-block-grid-item item-4">
        <img src={card4} alt=""></img>
        <p className="title">Front-end development</p>
        <p>
          Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh
          felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium.
          Mollis magna hac amet maecenas mauris malesuada ornare.
        </p>
        <div className="services-block-grid-item-button">
          <a href="" target="_blank">
            <p> Read More /</p>
          </a>
        </div>
      </div>
      <div className="services-block-grid-item item-5">
        <img src={card5} alt=""></img>
        <p className="title">back-end development</p>
        <p>
          Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh
          felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium.
          Mollis magna hac amet maecenas mauris.
        </p>
        <div className="services-block-grid-item-button">
          <a href="" target="_blank">
            <p> Read More /</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesBlock;
