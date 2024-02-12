import React from "react";
import { motion } from "framer-motion";
import {
  contact_sec_wrapper,
  flex_container_form,
} from "./Contactsec.module.css";
import Contactform from "../../components/form/Contactform";

function Contactsec() {
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
  return (
    <div className={contact_sec_wrapper}>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ amount: 0.2, once: true }}
        variants={variants}
        className={`container ${flex_container_form}`}
      >
        <h1>Leave your message and we contact you</h1>
        <Contactform />
      </motion.div>
    </div>
  );
}

export default Contactsec;
