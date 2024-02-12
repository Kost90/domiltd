import React from "react";
import { motion } from "framer-motion";
import {
  side_block_bg,
  side_block_caontainer,
  content_container,
  yellow_container,
} from "./Sideblock.module.css";

function Sideblock() {
  return (
    <div className={side_block_bg}>
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.3 },
        }}
        viewport={{ amount: 0.2, once: true }}
        className={side_block_caontainer}
      >
        <Contentblock count={1236} text={"Project Done"} />
        <Contentblock count={24} text={"People Working"} />
        <Contentblock count={8} text={"Business Partner"} />
        <Contentblock count={"1000+"} text={"Happy Customers"} />
      </motion.div>
    </div>
  );
}

export const Contentblock = ({ count, text }) => {
  return (
    <div className={content_container}>
      <div className={yellow_container}>{count}</div>
      <p>{text}</p>
    </div>
  );
};

export default Sideblock;
