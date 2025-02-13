import React from "react";
import RegistrationFees from "../components/RegistrationFees";
import "./Registration.css"
import ImportantRules from "../components/ImportantRules";

const Registration = () => {
  return (
    <div className="reg-page">
    <div>
      <RegistrationFees />
    </div>
    <div className="bank-payment-container">
    <h2 className="note-heading">Note:</h2>
    <p className="note-text">
      The registration fee for listeners/co-author/extra registration is <b>Rs 2500 (with conference kit)</b> or <b>Rs 1500 (without conference kit)</b> (India) / <b>$75</b> (outside India). 
      This registration includes access to all the paper presentation sessions, Breakfast and Lunch during the conference period, Tea and Coffee during sessions, and a certificate. 
      <br />
      There will be two tutorial sessions. The tutorial session charges for Indian listeners/co-author/extra registration are <b>Rs 200</b> for one session and <b>Rs 300</b> for both sessions. 
      For foreign participants, it is <b>$10/session</b>.
    </p>

    <button className="payment-button">Bank Payment Information-</button>

    <table className="payment-table">
      <tbody>
        <tr>
          <td>Name of Account:</td>
          <td>Conference and Workshop</td>
        </tr>
        <tr>
          <td>Account No.:</td>
          <td>19990100018885</td>
        </tr>
        <tr>
          <td>Bank Name:</td>
          <td>Indian Overseas Bank</td>
        </tr>
        <tr>
          <td>Account Type:</td>
          <td>Saving</td>
        </tr>
        <tr>
          <td>Branch Name:</td>
          <td>GLA Engineering College, AJAHI</td>
        </tr>
        <tr>
          <td>Bank Address:</td>
          <td>Agra-Delhi Road, Near Vill- AJAHI, Mathura</td>
        </tr>
        <tr>
          <td>IFSC Code:</td>
          <td>IOBA0001999</td>
        </tr>
        <tr>
          <td>MICR Code:</td>
          <td>281020006</td>
        </tr>
        <tr>
          <td>Swift Code:</td>
          <td>IOBAINBB266</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <ImportantRules/>
  </div>
  </div>
  );
};

export default Registration;