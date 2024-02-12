import React from "react";
import { motion } from "framer-motion";
import {
  content_block_wrapper,
  content_flex_container,
  sub_titel_container,
  list_flex_container,
  listitem_flex_container,
  text_flex_container,
} from "./Contentblock.module.css";
import { StaticImage } from "gatsby-plugin-image";

const listdata = [
  {
    titel: "15 Years of Experience",
    text: "With 15 years of experience, our construction company brings a wealth of knowledge, skill, and proven expertise to every project we undertake.",
  },
  {
    titel: "Excellence Certificates",
    text: "Our company has fully qualified Gas Safe registered engineers who will provide a Boiler Installation Certificate or a Landlord Certificate. Our qualified electrician will provide Part P Certificate.",
  },
  {
    titel: "Affordable Prices",
    text: "Benefit from our construction company's commitment to offering affordable prices without compromising on quality or craftsmanship.",
  },
];

function Contentblock() {
  const variants = {
    hidden: {
      x: 20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };
  return (
    <div className={content_block_wrapper}>
      <div className={content_flex_container}>
        <div className={sub_titel_container}>
          <StaticImage
            src="../../../images/svg/svg-icon-whychoos-sec.svg"
            alt="svg-icon"
          />
          <motion.p
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.2, once: true }}
            variants={variants}
          >
            Why choose us
          </motion.p>
        </div>
        <motion.h2
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ amount: 0.2, once: true }}
          variants={variants}
        >
          Few Reasons Why You Should Choose Us
        </motion.h2>
        <motion.p
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ amount: 0.2, once: true }}
          variants={variants}
        >
          Choose our construction company for unparalleled expertise, quality
          craftsmanship, and a commitment to exceeding your expectations every
          step of the way.
        </motion.p>
        <div className={list_flex_container}>
          {listdata.map((el, i) => (
            <ListItem titel={el.titel} text={el.text} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

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
          src="../../../images/svg/Icon-svg-listitem-whychoose-sec.svg"
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

export default Contentblock;
