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
    {
      imgSrc: card1,
      text: "Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris malesuada ornare.",
    },

    {
      imgSrc: card2,
      text: "Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris.",
    },

    {
      imgSrc: card3,
      text: "Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas.",
    },

    {
      imgSrc: card4,
      text: "Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris malesuada ornare.",
    },

    {
      imgSrc: card5,
      text: "Lorem built ipsum dolor sit amet. Eget vestibulum volutpat id nibh felis dignissim. Aliquet porta ultrices orci metus. Ut aenean pretium. Mollis magna hac amet maecenas mauris.",
    },
  ];

  return (
    <section className={styles.services_block}>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <Card
            key={index}
            className={styles.card}
            imgSrc={card.imgSrc}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesBlock;
