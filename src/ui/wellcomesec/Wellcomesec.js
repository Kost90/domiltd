import React from "react";
import { Link } from "gatsby";
import SvgIcon from "../../images/svg/svg_wellsec.svg";
import { motion } from "framer-motion";
import {
  section_bg,
  wellsection_wrapper,
  content_container,
  subtext_container,
} from "./Wellcomesec.module.css";

function Wellcomesec() {
  return (
    <div className={wellsection_wrapper}>
      <div className={section_bg}>
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          viewport={{ amount: 0.2, once: true }}
          className={`${content_container} container`}
        >
          <div className={subtext_container}>
            <img src={SvgIcon} alt="svg icon" />
            <p>
              We provide all house refurbishment, kitchen replacement,
              <br /> bathroom and other services.
            </p>
          </div>
          <h1>
            We are Professional
            <br />
            Quality Services
          </h1>
          {/* Make anchor link to the services section */}
          <button>
            <Link to="/services">Our Services</Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Wellcomesec;
