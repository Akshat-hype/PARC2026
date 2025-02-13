import React from "react";
import "./TechnicalProgramCommittee.css";

const TechnicalProgramCommittee = () => {
  const columns = [
    [
      { name: "Prof. M.V. Aware", designation: "Professor, VNIT, NAGPUR" },
      { name: "Dr. Pradyumn Chaturvedi", designation: "Assistant prof., VNIT, NAGPUR" },
      { name: "Dr. Jay Prakash Singh", designation: "Assistant prof., VNIT, NAGPUR" },
      { name: "Prof. Rajive Tiwari", designation: "Professor, MNIT, Jaipur" },
    ],
    [
      { name: "Dr. Dipti Saxena", designation: "Associate Professor, MNIT, Jaipur" },
      { name: "Dr. Rohit Bhakar", designation: "Associate Professor, MNIT, Jaipur" },
      { name: "Dr. Akhilesh Mathur", designation: "Assistant Professor, MNIT, Jaipur" },
      { name: "Dr. Man Mohan Garg", designation: "Assistant Professor, MNIT, Jaipur" },
    ],
    [
      { name: "Dr. Nitin Gupta", designation: "Assistant Professor, MNIT, Jaipur" },
      { name: "Dr. Ravita Lamba", designation: "Assistant Professor, MNIT, Jaipur" },
      { name: "Dr. Kapil Shukla", designation: "Assistant Professor, MNIT, Jaipur" },
    ],
  ];

  return (
    <section className="technical-program">
      <h2>Technical Program Committee</h2>
      <div className="technical-container">
        {columns.map((column, index) => (
          <div key={index} className="technical-column">
            {column.map((member, i) => (
              <p key={i}>
                <strong>{member.name}</strong>, {member.designation}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalProgramCommittee;
