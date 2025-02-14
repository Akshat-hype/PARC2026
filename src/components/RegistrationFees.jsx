import React from "react";
import "./RegistrationFees.css";

const RegistrationFees = () => {
  return (
    <div className="registration-container">
      <h2 className="registration-title">Registration</h2>
      <div className="registration-divider"></div>
      <button className="registration-button">Registration Process</button>
      
      <table className="registration-table">
        <thead>
          <tr>
            <th>Category</th>
            <th colSpan="2">Standard</th>
          </tr>
          <tr>
            <th></th>
            <th>IEEE</th>
            <th>Non-IEEE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Participants from Industries/Utilities/R&D organisations (INR)</strong></td>
            <td>8,000</td>
            <td>9,500</td>
          </tr>
          <tr>
            <td><strong>Participants from academic Institutes (INR)</strong></td>
            <td>8,000</td>
            <td>9,500</td>
          </tr>
          <tr>
            <td><strong>Students participants (INR)</strong></td>
            <td>6,000</td>
            <td>7,000</td>
          </tr>
          <tr>
            <td><strong>Foreign participants (USD)</strong></td>
            <td>120</td>
            <td>150</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationFees;
