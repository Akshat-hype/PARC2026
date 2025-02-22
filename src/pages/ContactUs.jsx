import React from "react";
import "./ContactUs.css";
import { FaEnvelope, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">CONTACT US</h2>
      <div className="contact-content">
        <div className="contact-box">
          <FaUserTie className="contact-icon" />
          <h3>Organizing Chair(s)</h3>
          <p>PARC 2026</p>
          <p>Department of Electrical Engineering</p>
        </div>

        <div className="contact-box">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>GLA University, Mathura</p>
          <p>17km Stone, NH-2, Mathura-Delhi Road, Chaumuhan</p>
          <p>Uttar Pradesh-281406, India</p>
        </div>

        <div className="contact-box">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>
            <a href="mailto:parc2024@gla.ac.in" className="email-link">
              parc2026@gla.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;