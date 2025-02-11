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
            <th colSpan="2">Early Bird (up to 31th Dec)</th>
            <th colSpan="2">Standard</th>
          </tr>
          <tr>
            <th></th>
            <th>IEEE</th>
            <th>Non-IEEE</th>
            <th>IEEE</th>
            <th>Non-IEEE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Participants from Industries/Utilities/R&D organisations (INR)</strong></td>
            <td>9,000</td>
            <td>11,000</td>
            <td>10,000</td>
            <td>12,000</td>
          </tr>
          <tr>
            <td><strong>Participants from academic Institutes (INR)</strong></td>
            <td>7,000</td>
            <td>8,500</td>
            <td>8,000</td>
            <td>9,500</td>
          </tr>
          <tr>
            <td><strong>Students participants (INR)</strong></td>
            <td>5,000</td>
            <td>6,500</td>
            <td>5,500</td>
            <td>7,000</td>
          </tr>
          <tr>
            <td><strong>Foreign participants (USD)</strong></td>
            <td>250</td>
            <td>300</td>
            <td>350</td>
            <td>400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationFees;
