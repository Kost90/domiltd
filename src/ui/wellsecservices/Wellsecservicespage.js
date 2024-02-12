import React from 'react'
import { motion } from "framer-motion";
import {wellsection_wrapper,
    section_bg,
    content_container,} from './Wellsecservicespage.module.css'

function Wellsecservicespage() {
  return (
    <div className={wellsection_wrapper}>
      <div className={section_bg}>
        <div className={content_container}>
          <motion.h1
            initial={{
              y: 10,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            viewport={{ amount: 0.2, once: true }}
          >
            Our Services
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Wellsecservicespage