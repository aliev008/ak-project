import styles from "./style.module.scss";

import React from "react";
import image from "../../assets/images/image_1.png";

const OnePictureBlock = () => (
  <section className={styles.one_picture_block}>
    <div className={styles.left_side}>
      <div className={styles.text}>
        <h3>Be surprised</h3>
        <p>
          Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
          dandelion okra wakame tomato.
        </p>
      </div>
      <button>Discover now</button>
    </div>
    <div className={styles.right_side}>
      <img src={image} alt="" />
    </div>
  </section>
);

export default OnePictureBlock;
