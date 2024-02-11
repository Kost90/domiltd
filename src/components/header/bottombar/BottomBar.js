import React from "react";
import { motion } from "framer-motion";
import {
  bottom_bar_section,
  bottombar_content_flex_cntr,
  logo_flex_container,
  contact_flex_wrapper,
  contacts_container,
  yellow_circle,
} from "./BottomBar.module.css";
import Logo from "../../../images/svg/Logo.svg";
import MailIcon from "../../../images/svg/Mail-Icon.svg";
import PhoneIcon from "../../../images/svg/Phone-icon.svg";

function BottomBar() {
  return (
    <div className={bottom_bar_section}>
      <div className={`${bottombar_content_flex_cntr} container`}>
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
          className={logo_flex_container}
        >
          <img src={Logo} alt="Logo icon" />
          <h6>
            Domi<span>LTD</span>
          </h6>
        </motion.div>
        <div className={contact_flex_wrapper}>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ amount: 0.2, once: true }}
            className={contacts_container}
          >
            <div className={yellow_circle}>
              <img src={MailIcon} alt="Mail icon" />
            </div>
            <div>
              <p>Mail US</p>
              <a href="mailto:domilondon046@gmail.com">
                domilondon046@gmail.com
              </a>
            </div>
            <div className={contacts_container}>
              <div className={yellow_circle}>
                <img src={PhoneIcon} alt="Phone icon" />
              </div>
              <div>
                <p>Call US</p>
                <a href="tel:+447415843156">+447415843156</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
