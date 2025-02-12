import React from "react";
import { PhoneCall, Mail } from "lucide-react";
import "./Accommodation.css"; // Import the CSS file

const Accommodation = () => {
  return (
    <div className="accommodation-container">
      <h1 className="title">Hotel Booking</h1>
      <p className="description">
        PARC 2024 committee has negotiated the tariff with the following hotels
        nearby GLA University. Participants are requested to book their
        accommodation directly (if required) through the following information.
      </p>

      <div className="hotel-card">
        <h2 className="hotel-name">Blue Men's Hotel, Vrindavan</h2>
        <p className="hotel-address">Omaxe, Vrindavan - 281406 (India)</p>
        <p className="hotel-facility">(Pick & Drop Facility Available)</p>

        <h3 className="section-title">Room Tariff</h3>
        <ul className="tariff-list">
          <li>Deluxe Category - Single Occupancy: ₹1500/-</li>
          <li>Deluxe Category - Double Occupancy: ₹1800/-</li>
        </ul>

        <p className="check-out-time">
          Check Out Time: 12:00 Noon (All tariffs are inclusive of GST)
        </p>

        <div className="hotel-images">
          <div className="image-placeholder">Image 1</div>
          <div className="image-placeholder">Image 2</div>
          <div className="image-placeholder">Image 3</div>
        </div>

        <h3 className="section-title">Contact Person</h3>
        <div className="contact-info">
          <p className="contact-item">
            <PhoneCall className="icon" /> Dr Mukesh Pushkarana: +91 75005 68588
          </p>
          <p className="contact-item">
            <Mail className="icon" /> Dr Ashish Sinha: ashish.sinha@gla.ac.in
          </p>
        </div>

        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Accommodation;