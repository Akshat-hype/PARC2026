import React from "react";
import "./Sponsors.css"; // Import CSS file

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <h2 className="sponsors-title">SPONSORS</h2>
      <hr className="title-underline" />

      <p className="sponsors-description">
        <strong>Expected Gathering and Outcome:</strong>
        <br />
        The conference expects a gathering of around 120-150 dignitaries in total. This will include academicians from GLA University Mathura and other technical universities across the nation. Government officials and other corporate professionals from all across the country are expected. So, it will be a golden platform to showcase your business, product, and services and shape the conference for our mutual benefit.
      </p>

      <div className="table-container">
        <table className="sponsors-table">
          <thead>
            <tr>
              <th>Sponsorship Rates Particulars</th>
              <th>Amt. in Indian Rs</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Platinum Sponsor</td>
              <td>2,00,000/-</td>
              <td></td>
            </tr>
            <tr>
              <td>Gold Sponsor</td>
              <td>1,00,000/-</td>
              <td></td>
            </tr>
            <tr>
              <td>Silver Sponsor</td>
              <td>50,000/-</td>
              <td></td>
            </tr>
            <tr>
              <td>Technical Session Sponsorship</td>
              <td>50,000/-</td>
              <td>(per day)</td>
            </tr>
            <tr>
              <td>Conference Banquet Dinner</td>
              <td>1,50,000/-</td>
              <td>(on Feb 21, 2026)</td>
            </tr>
            <tr>
              <td>Delegate Kits</td>
              <td>1,50,000/-</td>
              <td></td>
            </tr>
            <tr>
              <td>High Tea Lunch</td>
              <td>75,000/-</td>
              <td>(per day)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sponsors;