import React from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { ListItem } from "../../../components/listitem/ListItem";
import {
  content_wrapper,
  flex_container_text,
  lists_container,
  cards_container,
} from "./Contentblockservices.module.css";
import Card from "../../../components/card/Card";

const firstlist = [
  "Bathroom",
  "Replacement toilet, shower etc",
  "Kitchen replacement",
  "Under floor heating",
  "House decoration",
  "Wood decoration",
  "Loft reconstruction",
];
const secondlist = [
  "Roof extensions",
  "Block and brick walls",
  "Foundation house",
  "All type of tiles",
  "Laminate floor",
  "All house refurbishment",
  "Plumbing repair and electrical",
];

function Contentblockservices() {
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
        viewport={{ amount: 0.2, once: true }}
        className={content_wrapper}
      >
        <h1>How We Works</h1>
        <div className={flex_container_text}>
          <h3>We can help you with the following services:</h3>
          <p>
            DomiLTD has 15 years experience on construction. Interior, loft
            conversion, painting, tiles, decorations, brick work, roof repairs.
            We do all refurbishment of the all house tiles plater plasterboard
            laminate floor and all the carpentry work fitting kitchen (plumbing
            electrician ) Ground work & Garden.
          </p>
          <StaticImage
            src="../../../images/pictures/service-page-photo.png"
            alt="service page photo"
          />
          <div className={lists_container}>
            <div style={{ width: "314px" }}>
              {firstlist.map((el, i) => (
                <ListItem text={el} i={i} />
              ))}
            </div>
            <div style={{ width: "314px" }}>
              {secondlist.map((el, i) => (
                <ListItem text={el} i={i} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className={cards_container}>
        <Card />
      </div>
    </div>
  );
}

export default Contentblockservices;
