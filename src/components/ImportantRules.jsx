import React from "react";
import "./ImportantRules.css";

const ImportantRules = () => {
  return (
    <div className="important-rules-container">
      <section className="section">
        <h2 className="section-title">Important</h2>
        <ul className="section-list">
          <li>At least one author per paper has to register and present the paper. Non-presented papers will not be submitted for inclusion to IEEE Xplore as per IEEE policy.</li>
          <li>Registration fees are non-refundable and non-transferable.</li>
          <li>Each registration entitles the author to present one paper only.</li>
          <li>Offline Author Registration fee includes access to all the paper presentation sessions of the conference, access to tutorial session, Conference Proceedings and Conference Kit, Breakfast and Lunch during the conference period, and Gala conference dinner, Tea and Coffee during sessions and certificate.</li>
          <li>Tutorial registration includes access to tutorial sessions and certificate of attendance.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Rules</h2>
        <ul className="section-list">
          <li>At least one author per paper has to register and present the paper. Non-presented papers will not be submitted for inclusion to IEEE Xplore as per IEEE policy.</li>
          <li>Only Full-Time Students are considered under Student’s Registration. If an author is registered as a student, then he/she must show/send a copy of a valid Student ID.</li>
          <li>Everybody who has paid the conference fees will receive an official receipt at the conference venue.</li>
          <li>No CANCELLATION & REFUND of Registration Fee.</li>
          <li>Please note that the registration fee is only for paper publication and attending the conference. Authors should bear all lodging and boarding expenses on their own. (Subsidized accommodation can be provided on campus on prior request).</li>
          <li>Please mail to us the filled registration form, copyright, and camera-ready copy at: <a href="mailto:parc2024@gla.ac.in" className="email-link">parc2024@gla.ac.in</a></li>
        </ul>
      </section>
    </div>
  );
};

export default ImportantRules;
