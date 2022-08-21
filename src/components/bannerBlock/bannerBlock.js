import style from "./style.module.scss";

import React from "react";

const BannerBlock = () => (
  <section className={style.banner_block}>
    <div className={style.container}>
      <div className={style.text}>
        <p>The title of the component</p>
        <h1>Very visible component to promote something.</h1>
      </div>
      <button className={style.btn}>Book an Appointment</button>
    </div>
  </section>
);

export default BannerBlock;
