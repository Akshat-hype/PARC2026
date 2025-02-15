import React from "react";
import "./SpeakerCard.css";
import speaker from "../assets/ProfRKSingh.webp";
import speaker1 from "../assets/ProfRCBansal.webp";
import speaker2 from "../assets/ArunKumarPaul.webp";
import speaker3 from "../assets/AsheeshKumarSingh.webp";

const speakersData = [
  {
    name: "Prof. R.K. Singh",
    title: "Professor",
    designation: "Professor, Electrical Engineering and Computer Science",
    university: "MNIT, Jaipur",
    image: speaker,
  },
  {
    name: "Prof. R.C. Bansal",
    title: "Professor",
    designation: "University of Sharjah",
    university: "UAE",
    image: speaker1,
  },
  {
    name: "Dr. Asheesh Kumar Singh",
    title: "SMIEEE, Professor",
    designation: "Department of Electrical Engineering",
    university: "Motilal Nehru National Institute of Technology Allahabad",
    image: speaker3,
  },
  {
    name: "Mr. Arun Kumar Paul",
    title: "Technical Director",
    designation: "Electronics Devices Worldwide Pvt Ltd",
    university: "India",
    image: speaker2,
  },
];

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="speaker-card">
      <div className="speaker-image-container">
        <img src={speaker.image} alt={speaker.name} className="speaker-image" />
      </div>
      <div className="speaker-info">
        <h3 className="speaker-name">{speaker.name}</h3>
        <p className="speaker-title">{speaker.title}</p>
        <p className="speaker-designation">{speaker.designation}</p>
        {speaker.university && <p className="speaker-university">{speaker.university}</p>}
      </div>
    </div>
  );
};

export { SpeakerCard, speakersData };
