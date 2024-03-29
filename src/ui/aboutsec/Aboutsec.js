import React from "react";
import { motion } from "framer-motion";
import {
  about_sec,
  about_sec_content_wrapper,
  about_content_text,
  subtitel_text,
  experience_container,
  first_block,
  second_block,
  side_image,
} from "./Aboutsec.module.css";
import { StaticImage } from "gatsby-plugin-image";

function Aboutsec() {
  return (
    <div className={about_sec}>
      <div className={`container ${about_sec_content_wrapper}`}>
        <motion.div
          initial={{
            x: -10,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          viewport={{ amount: 0.2, once: true }}
        >
          <StaticImage
            src="../../images/pictures/about-sec.jpg"
            alt="about construction company picture"
            className={side_image}
          />
        </motion.div>

        <motion.div
          className={about_content_text}
          initial={{
            x: 10,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          viewport={{ amount: 0.2, once: true }}
        >
          <div className={subtitel_text}>
            <StaticImage
              src="../../images/svg/svg-icon-about-sec.svg"
              alt="svg-icon"
            />
            <p>Welcome domiLTD</p>
          </div>
          <h2>We Provide Your Future</h2>
          <p>
            Our team has huge experience in the domestic and commercial sectors,
            we have a great work ethic, and we are polite and professional. We
            offer outstanding workmanship in all aspects of our work by ensuring
            every project is completed to a high standard. Firstly all our
            tools, equipment and work clothes are kept clean,we discuss the
            client's expectations, timescale and agree before any work
            commences.we only undertake duties that we are competent in and have
            adequate training for.
          </p>
          <div className={experience_container}>
            <di v className={first_block}>
              <span>15</span>
              <h6>
                Years of <br />
                Experience
              </h6>
            </di>
            <ul className={second_block}>
              <li>- Interior</li>
              <li>- Loft conversion</li>
              <li>- Painting</li>
              <li>- Tiles</li>
              <li>- Decorations</li>
              <li>- Brick work</li>
              <li>- Roof repairs</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutsec;
