import React from "react";
import "./SpeakerCard.css";

const speakersData = [
  {
    name: "Prof. R.K. Singh",
    title: "Professor",
    designation: "Professor, Electrical Engineering and Computer Science",
    university: "MNIT, Jaipur",
    image: "/path/to/vinod-khadkikar.jpg",
  },
  {
    name: "Prof. R.C. Bansal",
    title: "Professor",
    designation: "University of Sharjah",
    university: "UAE",
    image: "/path/to/rc-bansal.jpg",
  },
  {
    name: "Dr. Asheesh Kumar Singh",
    title: "SMIEEE, Professor",
    designation: "Department of Electrical Engineering",
    university: "Motilal Nehru National Institute of Technology Allahabad",
    image: "/path/to/asheesh-kumar-singh.jpg",
  },
  {
    name: "Mr. Arun Kumar Paul",
    title: "Technical Director",
    designation: "Electronics Devices Worldwide Pvt Ltd",
    university: "India",
    image: "/path/to/arun-kumar-paul.jpg",
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
