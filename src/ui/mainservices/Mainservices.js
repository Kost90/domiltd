import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import {
  main_services_sec,
  main_services_content_wrapper,
  main_sec_top_content,
  buttons_group,
  active,
  div_bg,
} from "./Mainservices.module.css";
import Tab from "../../components/tabs/Tab";

function Mainservices() {
  const [tabcontent, setTabContent] = useState("housedecoration");
  const id = tabcontent;
  const variants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const handelChange = (id) => {
    setTabContent(id);
  };
  return (
    <div className={main_services_sec}>
      <div className={`container ${main_services_content_wrapper}`}>
        <div className={main_sec_top_content}>
          <motion.h2
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.2, once: true }}
            variants={variants}
          >
            Main Services
          </motion.h2>
          <motion.p
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.2, once: true }}
            variants={variants}
          >
            We have experience on construction. But our main services are:
            Interior, loft conversion, painting, tiles, decorations, brick work,
            roof repairs. We do all refurbishment of the all house tiles plater
            plasterboard laminate floor and all the carpentry work fitting
            kitchen (plumbing electrician ) Ground work & Garden.
          </motion.p>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.2, once: true }}
            variants={variants}
            className={buttons_group}
          >
            <button
              type="button"
              onClick={() => handelChange("housedecoration")}
              className={tabcontent === "housedecoration" ? active : null}
            >
              <StaticImage
                src="../../images/svg/interior-svg.svg"
                alt="svg-icon"
                style={{ width: "44px" }}
              />
              Interior
            </button>
            <button
              type="button"
              onClick={() => handelChange("loftconversations")}
              className={tabcontent === "loftconversations" ? active : null}
            >
              <StaticImage
                src="../../images/svg/loft-conversions-svg.svg"
                alt="svg-icon"
                style={{ width: "44px" }}
              />
              Loft conversation
            </button>
            <button
              type="button"
              onClick={() => handelChange("paint")}
              className={tabcontent === "paint" ? active : null}
            >
              <StaticImage
                src="../../images/svg/paint-svg.svg"
                alt="svg-icon"
                style={{ width: "44px" }}
              />
              Paint
            </button>
          </motion.div>
        </div>
        <div>
          <Tab id={id} />
        </div>
      </div>
      <div className={div_bg}></div>
    </div>
  );
}

export default Mainservices;
