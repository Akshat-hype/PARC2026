import React from "react";
import { Link } from "react-router-dom";
import "./PastConferences.css"; // Ensure proper styling

function PastConferences() {
  return (
    <div className="past-conferences">
      <h2 className="section-title">Past Conferences</h2>
      <div className="conference-container">

        {/* Conference 1 */}
        <div className="card">
          <div className="circle circle-red">01</div>
          <h3><strong>PARC 2020</strong></h3>
          <p>
          First International Conference on Power Electronics & IoT Application in Renewable Energy and Its Control was technically Sponsored by IEEE-UP Section. This Conference was held on 28th-29th February 2020 at GLA University, in person mode only.
          </p>
          <Link to="https://www.gla.ac.in/parc2020/" className="button">Know More</Link>
        </div>

        {/* Conference 2 */}
        <div className="card">
          <div className="circle circle-green">02</div>
          <h3><strong>PARC 2022</strong></h3>
          <p>
          Second International Conference on Power Electronics & IoT Application in Renewable Energy and Its Control was technically Sponsored by IEEE-UP Section. This Conference was held on 21st -22nd January 2022 at GLA University in Online Mode due to the COVID-19 pandemic.
          </p>
          <Link to="https://www.gla.ac.in/parc2022/" className="button">Know More</Link>
        </div>

        {/* Conference 3 */}
        <div className="card">
          <div className="circle circle-blue">03</div>
          <h3><strong>PARC 2024</strong></h3>
          <p>
          The 2024 International Conference on Power Electronics, Automation, and Renewable Energy Control (PARC) was technically sponsored by IEEE-UP Section. The conference took place on 23rd - 24th February at GLA University in offline mode.
          </p>
          <Link to="https://www.gla.ac.in/parc2024/index.html" className="button">Know More</Link>
        </div>

      </div>
    </div>
  );
}

export default PastConferences;
