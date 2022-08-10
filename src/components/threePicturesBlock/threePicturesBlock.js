import style from "./style.module.scss";

import React from "react";
import image1 from "../../assets/images/image_2.png";
import image2 from "../../assets/images/image_4.png";
import image3 from "../../assets/images/image_2-1.png";

const ThreePicturesBlock = () => (

  <section className={style.three_picture_block}>
    <div className={style.three_picture_block__header}>
      <h3>This is a copy of 3 pictures module</h3>
      <p>
        Lotus root water spinach fennel kombu maize bamboo shoot green bean
        swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels
        sprout coriander water chestnut gourd swiss chard wakame kohlrabi
        beetroot carrot watercress.
      </p>
    </div>
    <div className={style.three_picture_block__images}>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
    </div>
    <div className={style.three_picture_block__bottom}>
      <h3>Best picks for woman collection</h3>
      <p>
        Lotus root water spinach fennel kombu maize bamboo shoot green bean
        swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels
        sprout coriander.
      </p>
    </div>
  </section>
);

export default ThreePicturesBlock;
