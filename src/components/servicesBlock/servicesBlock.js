import styles from "./style.module.scss";

import React from "react";
import card1 from "../../assets/cards/Back-end Development-1.svg";
import card2 from "../../assets/cards/Back-end Development.svg";
import card3 from "../../assets/cards/ShopifyPlus Integration.svg";
import card4 from "../../assets/cards/Front-end Development.svg";
import card5 from "../../assets/cards/Back-end Development.svg";
import Card from "./card";

const ServicesBlock = () => {
  const cards = [
    [
      card1,
      "Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris malesuada ornare.",
    ],
    [
      card2,
      "Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris.",
    ],
    [
      card3,
      "Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas.",
    ],
    [
      card4,
      "Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris malesuada ornare.",
    ],
    [
      card5,
      "Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris.",
    ],
  ];

  return (
    <section className={styles.services_block}>
      <div className={styles.services_block__grid}>
        {cards.map((elem, index) => (
          <Card
            key={index}
            className={styles.services_block__card}
            imgSrc={elem[0]}
            text={elem[1]}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesBlock;
