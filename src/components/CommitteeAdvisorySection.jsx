import React from "react";
import "./CommitteeAdvisorySection.css"; // Import the CSS file

const CommitteeAdvisorySection = () => {
  const advisoryData = [
    [
      { name: "Shri. Neeraj Agrawal", position: "GLA University, Mathura, India" },
      { name: "Shri. Vivek Agrawal", position: "GLA University, Mathura, India" },
      { name: "Dr. K.C. Vora", position: "Sr. Dy. Director & Head, ARAI Academy" },
      { name: "Prof. R.C. Bansal", position: "Electrical Engineering, University of Sharjah, UAE" },
      { name: "Dr. G.L. Pahuja", position: "Electrical Engineering, NIT Kurukshetra, India" },
      { name: "Prof. Harpal Tiwari", position: "Electrical Engineering, MNIT Jaipur, India" },
      { name: "Prof. Khaleequr Rehman Niazi", position: "Electrical Engineering, MNIT Jaipur, India" }
    ],
    [
      { name: "Prof. Vishal Goyal", position: "GLA University, Mathura, India" },
      { name: "Prof. Vikas Tripathi", position: "GLA University, Mathura, India" },
      { name: "Prof. Aniruddha Pradhan", position: "GLA University, Mathura, India" },
      { name: "Prof. Ranjit", position: "Electrical Engineering, IIT BHU, India" },
      { name: "Prof. Ratna Dahiya", position: "Electrical Engineering, NIT Kurukshetra, India" },
      { name: "Prof. Richa Negi", position: "Electrical Engineering, MNNIT Allahabad, India" },
      { name: "Prof. Sukumar Mishra", position: "Electrical Engineering, IIT Delhi, India" }
    ],
    [
      { name: "Dr. Arvind K. Singh", position: "Scientist - ISRO" },
      { name: "Dr. Jai Govind Singh", position: "AIT Thailand" },
      { name: "Mr. Sachin Soni", position: "Manager, Merit Controls, United States" },
      { name: "Dr. Kumar Padmanabh", position: "Senior Researcher, EBTIC, Abu Dhabi" },
      { name: "Mr. Pankaj Rusia", position: "Regional VP at SAP SuccessFactors, South East Asia" },
      { name: "Mr. Prashant Kumar", position: "Founder & CEO at Flex1 & TechBlocks, Canada" },
      { name: "Mr. Ritesh Patel", position: "Director - Business Development, Happiest Minds Technologies, USA" },
      { name: "Mr. Arun Gupta", position: "Director, Medicare Product" }
    ]
  ];

  return (
    <div className="committee-advisory">
      <h2>Advisory Committee</h2>
      <div className="advisory-container">
        {advisoryData.map((column, index) => (
          <div className="advisory-column" key={index}>
            {column.map((member, i) => (
              <p key={i}>
                <strong>{member.name}</strong>, {member.position}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeAdvisorySection;
