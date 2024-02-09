import React from "react";
import {
  footer_wrapper,
  footer_flex_container,
  logo_flex_container,
  contact_flex_wrapper,
  yellow_circle,
  contacts_container,
  navlinks_bar,
} from "./Footer.module.css";
import { Link } from "gatsby";
import Logo from "../../images/svg/Logo-footer.svg";
import MailIcon from "../../images/svg/Mail-Icon.svg";
import PhoneIcon from "../../images/svg/Phone-icon.svg";
import LocationIcon from "../../images/svg/Location-icon.svg";

function Footer() {
  return (
    <div className={footer_wrapper}>
      <div className={`container ${footer_flex_container}`}>
        <div className={logo_flex_container}>
          <img src={Logo} alt="Logo icon" />
          <h6>
            Domi<span>LTD</span>
          </h6>
        </div>
        <div className={contact_flex_wrapper}>
          <ContactItem
            svg={MailIcon}
            ptext={"Mail Us"}
            linktext={"domilondon046@gmail.com"}
            linktype={"mailto:"}
          />
          <ContactItem
            svg={PhoneIcon}
            ptext={"Call Us"}
            linktext={"+447415843156"}
            linktype={"tel:"}
          />
          <ContactItem
            svg={LocationIcon}
            ptext={"Location"}
            linktext={"Trinity close, London, E11 4GW"}
            linktype={"#"}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "#f4f4f4",
            marginBottom: "5px",
          }}
        ></div>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        <h6 style={{ color: "white" }}>Quick Links</h6>
        <div className={navlinks_bar}>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/services">Services</Link>
        </div>
      </div>
    </div>
  );
}

const ContactItem = ({ svg, ptext, linktext, linktype }) => {
  return (
    <>
      <div className={contacts_container}>
        <div className={yellow_circle}>
          <img src={svg} alt="Mail icon" />
        </div>
        <div>
          <p>{ptext}</p>
          <a href={`${linktype}${linktext}`}>{linktext}</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
