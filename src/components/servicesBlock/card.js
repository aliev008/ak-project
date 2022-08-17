import React from "react";

const Card = (props) => {
  return (
    <div className={props.className}>
      <img src={props.imgSrc} alt=""></img>
      <p className="title">Front-end development</p>
      <p>{props.text}</p>
      <div className="services-block-grid-item-button">
        <a href="#main" target="_blank">
          <p> Read More /</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
