import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
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
  const [tabcontent, setTabContent] = useState("1");
  const id = tabcontent;

  const handelChange = (id) => {
    setTabContent(id);
  };
  return (
    <div className={main_services_sec}>
      <div className={`container ${main_services_content_wrapper}`}>
        <div className={main_sec_top_content}>
          <h2>Main Services</h2>
          <p>
            We have experience on construction. But our main services are:
            Interior, loft conversion, painting, tiles, decorations, brick work,
            roof repairs. We do all refurbishment of the all house tiles plater
            plasterboard laminate floor and all the carpentry work fitting
            kitchen (plumbing electrician ) Ground work & Garden.
          </p>
          <div className={buttons_group}>
            <button
              type="button"
              onClick={() => handelChange("1")}
              className={tabcontent === "1" ? active : null}
            >
              <StaticImage
                src="../../images/svg/interior-svg.svg"
                alt="svg-icon"
              />
              Interior
            </button>
            <button
              type="button"
              onClick={() => handelChange("2")}
              className={tabcontent === "2" ? active : null}
            >
              <StaticImage
                src="../../images/svg/loft-conversions-svg.svg"
                alt="svg-icon"
              />
              Loft conversation
            </button>
            <button
              type="button"
              onClick={() => handelChange("3")}
              className={tabcontent === "3" ? active : null}
            >
              <StaticImage
                src="../../images/svg/paint-svg.svg"
                alt="svg-icon"
              />
              Paint
            </button>
          </div>
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
