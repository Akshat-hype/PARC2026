import React, { useState } from "react";
import "./Track.css";

const Track = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="track">
      <div
        className={`track-title ${isExpanded ? "active" : ""}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
      </div>
      {isExpanded && <p className="track-description">{description}</p>}
    </div>
  );
};

const TrackList = () => {
  const tracks = [
    {
      title: "Power Electronics Converter and Application",
      description: "Emerging technologies in power electronics, Power converter topologies and design, Multilevel and high power converters, Grid-Interactive Power Converters, Power electronics in HVDC, HVAC, and FACTS, DC transmission networks and other emerging power electronic-based power systems, Ancillary services through grid-interfacing power converters, Energy storage technologies for power electronics and energy systems.",
    },
    {
      title: "Sustainable Energy Source/Renewable energy",
      description: "Renewable Energy Systems (PV, Wind,  Biomass, Biofuel, Geothermal Energy, Wave Energy, Tidal energy, Hydrogen Energy & Fuel Cells), Green hydrogen production methods, Risk assessment and management strategies associated with green hydrogen production, storage, and transportation, Policy and regulatory considerations, Social and economic impacts, Renewables penetration, Grid integration of renewable energy systems, Standalone and grid-connected systems, principles of sustainable energy technologies and systems, Energy storage for renewable Energy Systems.",
    },
    {
      title: "IoT and Application",
      description: "Next-Generation IoT, IoT Devices/Applications, Big data analytics,  IoT Security, Data Analysis Challenges in the Future energy market, Cloud analytics for the Internet of Things (IoT), Energy Internet, IoT applications in the renewable sector.",
    },
    {
      title: "Electic Machine and Electric Vehicle",
      description: "High-efficiency motor designs for different vehicle types, Machine parameter optimisation, Integration of motor controllers, Novel motor topologies for specific applications, Smart charging algorithms, Wireless charging technology, Charging station placement and grid integration, Fast charging standards, Optimal driving profiles for energy efficiency, Regenerative braking control, Vehicle dynamics and control for improved handling, Vehicle Modelling.",
    },
    {
      title: "AI Applications and Control",
      description: "Control of power electronics converters, AI-based power converters, Harmonics and harmonic stability in renewable-based power plants, Control Techniques for Renewable Energy Systems, AI Applications on converters, Future Challenges and Directions for Renewable Energy Systems.",
    }
  ];

  return (
    <div className="track-list">
      <h2>Tracks/Sub Tracks for PARC 2026</h2>
      <hr />
      <p s>
      The PARC 2026 organizing committee will accept the original contributions from areas of power electronics and renewable energy systems, including, but not limited to, the following research tracks
      </p>
      <div className="track-container">
        {tracks.map((track, index) => (
          <Track key={index} title={track.title} description={track.description} />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
