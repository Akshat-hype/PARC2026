import React from "react";
import "./Venue.css";

const Venue = () => {
  return (
    <div className="ven">
    <div className="venue-container">
      <div className="venue-details">
        <h2>Department of Electrical Engineering</h2>
        <h3>GLA University, Mathura</h3>
        <p>17km Stone, NH-2, Mathura-Delhi Road, Chaumuhan</p>
        <p>Uttar Pradesh-281406, India</p>
      </div>
      <div className="venue-map">
        <iframe
          title="GLA University Electronics & Communication Department Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2497875038434!2d77.5927717!3d27.6060607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce46564bc57%3A0xebc075e19a93ff87!2sDepartment%20of%20Electronics%20%26%20Communication%2C%20GLA%20University%2C%20Mathura!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Venue;
