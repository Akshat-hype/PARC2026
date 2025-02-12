import React from "react";
import "./SpeakerCard.css";

const speakersData = [
  {
    name: "Dr. Vinod Khadkikar",
    title: "Fellow IEEE",
    designation: "Professor, Electrical Engineering and Computer Science",
    university: "Khalifa University, Abu Dhabi, UAE",
    image: "/path/to/vinod-khadkikar.jpg",
  },
  {
    name: "Prof. S.N. Singh",
    title: "Fellow IEEE",
    designation: "Director, Atal Bihari Vajpayee- Indian Institute Technology",
    university: "ABV-IIITM, Gwalior, India",
    image: "/path/to/sn-singh.jpg",
  },
  {
    name: "Dr. Ishaan Purohit",
    title: "Energy Specialist",
    designation: "International Finance Corporation (IFC)",
    university: "",
    image: "/path/to/ishaan-purohit.jpg",
  },
  {
    name: "Prof. R.C. Bansal",
    title: "Professor",
    designation: "University of Sharjah",
    university: "UAE",
    image: "/path/to/rc-bansal.jpg",
  },
  {
    name: "Dr. Jai Govind Singh",
    title: "Associate Professor",
    designation: "Asian Institute of Technology",
    university: "",
    image: "/path/to/jai-govind-singh.jpg",
  },
  {
    name: "Dr. Nitin Gupta",
    title: "Associate Professor",
    designation: "MNIT Jaipur",
    university: "",
    image: "/path/to/nitin-gupta.jpg",
  },
  {
    name: "Dr. Asheesh Kumar Singh",
    title: "SMIEEE, Professor",
    designation: "Department of Electrical Engineering",
    university: "Motilal Nehru National Institute of Technology Allahabad",
    image: "/path/to/asheesh-kumar-singh.jpg",
  },
  {
    name: "Dr. Sanjeev Singh",
    title: "Professor",
    designation: "Maulana Azad National Institute of Technology, Bhopal",
    university: "India",
    image: "/path/to/sanjeev-singh.jpg",
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
