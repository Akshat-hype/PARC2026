import React from "react";
import { SpeakerCard, speakersData } from "../components/SpeakerCard";
import "./KeynoteSpeakers.css";

const KeynoteSpeakers = () => {
  return (
    <div className="keynote-speakers-container">
      <h2 className="section-title">Keynote Speakers</h2>
      <div className="speakers-grid">
        {speakersData.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
