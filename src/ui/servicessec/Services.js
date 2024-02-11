import React from "react";
import {motion} from 'framer-motion'
import { service_sec, services_wraper, services_heading_text_container, cards_container } from "./Services.module.css";
import Card from "../../components/card/Card";

function Services() {
  const variants = {
    hidden:{
      y: 100,
      opacity: 0,
    },
    visible:{
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    }
  }
  return (
    <div className={service_sec}>
      <div className={`container ${services_wraper}`}>
        <div className={services_heading_text_container}>
          <motion.h1 initial={"hidden"} whileInView={"visible"} viewport={{ amount: 0.2, once: true }} variants={variants}>Our Services</motion.h1>
          <motion.p initial={"hidden"} whileInView={"visible"} viewport={{ amount: 0.2, once: true }} variants={variants}>
            Our company has fully qualified Gas Safe registered engineers who
            will provide a Boiler Installation Certificate or a Landlord
            Certificate . Our qualified electrician will provide Part P
            Certificate. The kitchen fitter is qualified and trained to provide
            a full design and fitting of high quality kitchens with many
            suppliers .
          </motion.p>
        </div>
        <div className={cards_container}>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default Services;
