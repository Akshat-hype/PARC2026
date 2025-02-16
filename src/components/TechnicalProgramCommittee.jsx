import React from "react";
import "./TechnicalProgramCommittee.css";

const TechnicalProgramCommittee = () => {
  const columns = [
    [
      { name: "Prof. M.V. Aware", designation: "Professor, VNIT, NAGPUR" },
      { name: "Dr. Pradyumn Chaturvedi", designation: "Assistant prof., VNIT, NAGPUR" },
      { name: "Dr. Jay Prakash Singh", designation: "Assistant prof., VNIT, NAGPUR" },
      { name: "Prof. Rajive Tiwari", designation: "Professor, MNIT, Jaipur" },
      { name: "Dr. Nitin Gupta", designation: "Associate Professor,	Dept. of Electrical Engineering	MNIT, Jaipur " },
      { name: "Dr. Jay Prakash Singh", designation: "Assistant Professor,	Dept. of Electrical Engineering	VNIT, Nagpur" },
      { name: "Dr. Navneet Singh", designation: "Associate Professor, MNIT Pryagraj" },
      { name: "Dr. Ramsha Karampuri ", designation: "Assistant Professor,	Dept. of Electrical Engineering	VNIT, Nagpur" },
      { name: "Dr. Prerna Jain", designation: "Associate Professor,	Dept. of Electrical Engineering	MNIT, Jaipur" },
      { name: "Dr. V. P. Singh", designation: "Associate Professor,	Dept. of Electrical Engineering	MNIT, Jaipur" },
      { name: "Shelly Vadhera", designation: "Associate Professor,	School of Renewable Energy and EfficiencyElectrical Engg	NIT, Kurukshetra" },
      { name: "Dr. Navneet Kumar Singh", designation: "Assistant Professor,	Dept. of Electrical Engineering	MNNIT, Allahabad" },
    ],
    [
      { name: "Dr. Dipti Saxena", designation: "Associate Professor, MNIT, Jaipur" },
      { name: "Dr. Rohit Bhakar", designation: "Associate Professor, MNIT, Jaipur" },
      { name: "Dr. Akhilesh Mathur", designation: "Assistant Professor, MNIT, Jaipur" },
      { name: "Dr. Man Mohan Garg", designation: "Assistant Professor, MNIT, Jaipur" },
      { name: "Dr. Nitin Singh", designation: "Associate Professor, MNIT Pryagraj" },
      { name: "Dr. Ravita Lamba", designation: "Assistant Professor,	Dept. of Electrical Engineering	M.N.I.T. Jaipur" },
      { name: "Dr Pradyumn Chaturvedi", designation: "Associate Professor,	Dept. of Electrical Engineering	VNIT, Nagpur" },
      { name: "Deepak Kumar", designation: "Associate Professor,	Dept. of Electrical Engineering	MNNIT, Allahabad" },
      { name: "K. K. Sharma", designation: "Associate professor,	Dept. of Electrical Engineering	NIT, Kurukshetra" },
      { name: "M.Venkatesh Naik", designation: "Assistant Professor,	Dept. of Electrical Engineering	MNNIT, Allahabad" },
      { name: "Dr. Dipayan Guha", designation: "Assistant Professor 	Dept. of Electrical Engineering	MNNIT, Allahabad" },
      { name: "Dr. Satish Sharma", designation: "Assistant Professor,	Dept. of Electrical Engineering	MNIT, Jaipur" },
    ],
    [
      { name: "Dr. Nitin Gupta", designation: "Assistant Professor, MNIT, Jaipur" },
      { name: "Dr. Ravita Lamba", designation: "Assistant Professor, MNIT, Jaipur" },
      { name: "Dr. Kapil Shukla", designation: "Assistant Professor, MNIT, Jaipur" },
      { name: "Dr. Man Mohan Garg", designation: "Assistant Professor	Dept. of Electrical Engineering	MNIT, Jaipur " },
      { name: "Dr. Akhilesh Mathur", designation: "Assistant Professor	Dept. of Electrical Engineering	MNIT, Jaipur " },
      { name: "Dr. Dipti Saxena", designation: "Associate Professor	Dept. of Electrical Engineering	MNIT, Jaipur " },
      { name: "Dr. Kapil Shukla", designation: "Assistant Professor,	Dept. of Electrical Engineering	MNIT, Jaipur " },
      { name: "M. P. R. Prasad", designation: "Assistant Professor	Dept. of Electrical Engineering	NIT, Kurukshetra" },
      { name: "Prof. Ankesh Jain", designation: "Associate Professor,	Dept. of Electrical Engineering	IIT, Delhi" },
      { name: "Dr. Saumendra Sarangi", designation: "Assistant Professor	Dept. of Electrical Engineering	MNNIT, Allahabad" },
      { name: "Shashi Bhushan Singh", designation: "Assistant Professor	Dept. of Electrical Engineering	NIT, Kurukshetra" },
      { name: "Dr. Prashant Kumar Tiwari", designation: "Associate Professor,	Dept. of Electrical Engineering	MNNIT, Allahabad" },
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
