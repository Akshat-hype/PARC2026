import React from "react";
import "./ImportantDates.css";

const ImportantDates = () => {
  return (
    <div className="important-dates">
      <h2 className="title">Important Dates</h2>
      <table className="dates-table">
        <tbody>
          <tr>
            <td>Paper submission Date:</td>
            <td>1st May 2025</td>
          </tr>
          <tr>
            <td>Last Date Of Paper Submission:</td>
            <td>30 November 2025</td>
          </tr>
          <tr>
            <td>Acceptance Notification:</td>
            <td>1st July 2025 ONWARDS</td>
          </tr>
          <tr>
            <td>Last Date Of Registration:</td>
            <td>15th January 2026</td>
          </tr>
          <tr>
            <td>Camera Ready Submission:</td>
            <td>20th January 2026</td>
          </tr>
          <tr>
            <td className="highlight-text">Conference Dates:</td>
            <td className="highlight-date">February 21th - February 22th, 2026</td>
          </tr>
        </tbody>
      </table>

      <p className="note">
        <span className="note-highlight">Note:</span> In case of student registration, only the student is allowed to
        present the paper at the time of presentation. However, in case of faculty registration, student or faculty both can
        present the paper.
      </p>
    </div>
  );
};

export default ImportantDates;
