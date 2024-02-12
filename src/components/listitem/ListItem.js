import React from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import {
  listitem_flex_container,
  text_flex_container,
} from "./ListItem.module.css";

export const ListItem = ({ titel, text, i }) => {
  const variants = {
    hidden: {
      x: 20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 * i },
    },
  };
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ amount: 0.2, once: true }}
      variants={variants}
      className={listitem_flex_container}
    >
      <div>
        <StaticImage
          src="../../images/svg/Icon-svg-listitem-whychoose-sec.svg"
          alt="svg-icon"
          style={{ width: "32px" }}
        />
      </div>

      <div className={text_flex_container}>
        <h6>{titel}</h6>
        <p>{text}</p>
      </div>
    </motion.div>
  );
};
