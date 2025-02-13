import React from "react";
import "./CallForPaper.css";
import TrackList from "../components/Track";
import ImportantDates from "../components/ImportantDates";

const CallForPaper = () => {
  return (
    <div className="call">
    <div className="call-for-paper">
      <h2>CALL FOR PAPER</h2>
      <hr />
      <p>
        The PARC 2024, with the conference theme on “Power Electronics, IoT and Renewable Energy applications,” 
        will explore the challenges in Future Grid-Interactive Power Converters regarding control strategies, 
        optimal operation, and corrective actions. It also targets the latest research on new strategies for 
        overcoming the technical challenges of grid integration of renewable energy systems, such as synchronizing 
        interfaced converters with the power grid operating and controlling different power converters in power 
        systems under large shares of renewable energies.
      </p>
    </div>
    <div>
      <TrackList/>
    </div>
    <div>
      <ImportantDates/>
    </div>
    </div>
  );
};

export default CallForPaper;
