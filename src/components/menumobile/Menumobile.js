import React, { useState } from "react";
import { Link } from "gatsby";
import MenuIcon from "../../images/svg/three-horizontal-lines-icon.svg";
import CloseIcon from "../../images/svg/math-multiplication-icon.svg";
import {
  mobilemenu_wrapper,
  navlinks_bar,
  menu_button,
} from "./Menumobile.module.css";
import { motion } from "framer-motion";

function Menumobile() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuVariants = {
    hidden: {
      opacity: 0,
      x: "-50%",
    },
    visible: {
      opacity: 1,
      x: "0",
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: "-50%",
      transition: { duration: 0.5 },
    },
  };

  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={mobilemenu_wrapper}>
      <button type="button" onClick={handelClick} className={menu_button}>
        {isOpen === true ? (
          <img src={CloseIcon} alt="Close icon" />
        ) : (
          <img src={MenuIcon} alt="Menu icon" />
        )}
      </button>

      <>
        <motion.div
          initial={"hidden"}
          animate={isOpen ? "visible" : "exit"}
          variants={MenuVariants}
          exit="exit"
          className={navlinks_bar}
          when={isOpen}
        >
          <Link to="/" onClick={handelClick}>
            Home
          </Link>
          <Link to="/aboutus" onClick={handelClick}>
            About Us
          </Link>
          <Link to="/services" onClick={handelClick}>
            Services
          </Link>
          <button
            type="button"
            className="btn_large_blue"
            onClick={handelClick}
          >
            <Link to="/contactus">Contact us</Link>
          </button>
        </motion.div>
      </>
    </div>
  );
}

export default Menumobile;
