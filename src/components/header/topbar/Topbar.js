import React from "react";
import "./Topbar.module.css";
import {
  topbar_section,
  topbar_content_flex_cntr,
  social_icons_container,
  social_icon_svg,
} from "./Topbar.module.css";
import Instalogo from "../../../images/assets/insta.svg";
import FacebookLogo from "../../../images/assets/facebook.svg";

function Topbar() {
  return (
    <div className={topbar_section}>
      <div className={`${topbar_content_flex_cntr} container`}>
        <p>Opening Hours: 08:00am - 17:00pm</p>
        <div className={social_icons_container}>
          <a href="#" target="blanc">
            <img
              src={Instalogo}
              alt="Instagramm logo"
              className={social_icon_svg}
            />
          </a>
          <a href="#" target="blanc">
            <img
              src={FacebookLogo}
              alt="Facebook logo"
              className={social_icon_svg}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
