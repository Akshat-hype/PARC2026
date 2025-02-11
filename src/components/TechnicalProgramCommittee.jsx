import React from "react";
import "./TechnicalProgramCommittee.css";

const TechnicalProgramCommittee = () => {
  const columns = [
    [
      { name: "Dr. John Doe", designation: "Professor, MIT, USA" },
      { name: "Dr. Jane Smith", designation: "Research Scientist, NASA, USA" },
      { name: "Prof. Michael Johnson", designation: "AI Expert, Stanford, USA" },
      { name: "Dr. Emily Davis", designation: "Head of Robotics, Google, USA" },
    ],
    [
      { name: "Prof. Richard Lee", designation: "Data Science, Harvard, USA" },
      { name: "Dr. Olivia Martinez", designation: "Cybersecurity, Oxford, UK" },
      { name: "Prof. Ethan Williams", designation: "Machine Learning, CMU, USA" },
      { name: "Dr. Sophia Brown", designation: "Blockchain, University of Toronto, Canada" },
    ],
    [
      { name: "Dr. Liam Wilson", designation: "IoT Expert, ETH Zurich, Switzerland" },
      { name: "Dr. Ava Robinson", designation: "Quantum Computing, University of Cambridge, UK" },
      { name: "Prof. Lucas Hall", designation: "Software Engineering, UC Berkeley, USA" },
      { name: "Dr. Isabella Clark", designation: "Big Data, University of Sydney, Australia" },
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
