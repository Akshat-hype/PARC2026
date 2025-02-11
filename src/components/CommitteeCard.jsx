import React from "react";
import "./CommitteeCard.css"; // Import CSS for styling

const CommitteeCard = ({ title, image, name, designation, institution }) => {
  return (
    <div className="committee-card">
      <div className="committee-title">{title}</div>
      <img src={image} alt={name} className="committee-image" />
      <p className="committee-name">{name}</p>
      <p className="committee-designation">{designation}</p>
      <p className="committee-institution">{institution}</p>
    </div>
  );
};

export default CommitteeCard;
