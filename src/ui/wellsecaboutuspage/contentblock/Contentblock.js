import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ListItem } from "../../../components/listitem/ListItem";
import {
  content_block_wrapper,
  side_block_container,
  subtitel_text,
  img,
} from "./Contentblock.module.css";

const data = [
  "We provide 24/7 services",
  "Greate Technology",
  "Qualified staff",
  "15 Years Experience",
];

function Contentblock() {
  return (
    <div className={`container ${content_block_wrapper}`}>
      <div className={side_block_container}>
        <div className={subtitel_text}>
          <StaticImage
            src="../../../images/svg/svg-icon-about-sec.svg"
            alt="svg-icon"
          />
          <p>Welcome domiLTD</p>
        </div>
        <h2>We are Commited to Quality</h2>
        <p>
          Our team has huge experience in the domestic and commercial sectors,
          we have a great work ethic, and we are polite and professional. We
          offer outstanding workmanship in all aspects of our work by ensuring
          every project is completed to a high standard.
        </p>
        {data.map((el, i) => (
          <ListItem titel={el} i={i} />
        ))}
      </div>
      <div>
        <StaticImage
          src="../../../images/pictures/photo-aboutus-page.png"
          alt="picture about us"
          className={img}
        />
      </div>
    </div>
  );
}

export default Contentblock;
