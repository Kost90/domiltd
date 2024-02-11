import React from "react";
import { service_sec, services_wraper, services_heading_text_container } from "./Services.module.css";

function Services() {
  return (
    <div className={service_sec}>
      <div className={`container ${services_wraper}`}>
        <div className={services_heading_text_container}>
          <h1>Our Services</h1>
          <p>
            Our company has fully qualified Gas Safe registered engineers who
            will provide a Boiler Installation Certificate or a Landlord
            Certificate . Our qualified electrician will provide Part P
            Certificate. The kitchen fitter is qualified and trained to provide
            a full design and fitting of high quality kitchens with many
            suppliers .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
