import React from "react";
import styles from "./style.module.scss";

const Card = (props) => {
  return (
    <div className={props.className}>
      <img src={props.imgSrc} alt="card"></img>
      <div className={styles.services_block__text}>
        <p className={styles.services_block__title}>Front-end development</p>
        <p>{props.text}</p>
      </div>
      <div className={styles.services_block__button}>
        <a href="#main" target="_blank">
          <p> Read More /</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
