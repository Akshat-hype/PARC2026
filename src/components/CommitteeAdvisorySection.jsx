import React from "react";
import "./CommitteeAdvisorySection.css"; // Import the CSS file

const CommitteeAdvisorySection = () => {
  const advisoryData = [
    [
      { name: "Prof. R.C. Bansal", position: " Electrical Engineering Department, University of Sharjah, UAE" },
      { name: "Dr. Jai Govind Singh", position: "AIT Thailand" },
      { name: "Prof. M.V. Aware", position: "Electrical Engineering Department, VNIT Nagpur, India" },
      { name: "Prof. Somesh Dhamija", position: "GLA University, Mathura, India" },
      { name: "Prof. Rohit Baskar", position: "Electrical Engineering Department Malaviya National Institute of Technology Jaipur India" },
      { name: "Prof. Vishal Goyal", position: "GLA University, Mathura, India" },
      { name: "Prof. Aniruddha Pradhan", position: "GLA University, Mathura, India" },
      { name: "Prof. Atul Bansal", position: "GLA University, Mathura, India" },
      { name: "Prof. Piyush Singhal", position: "GLA University, Mathura, India" },
      { name: "Prof. Ashok Bhansali", position: "GLA University, Mathura, India" },
      { name: "Dr. N P Patidar", position: "Professor,	Dept. of Electrical Engineering	MANIT, Bhopal" },

    ],
    [
      { name: "Prof. Dipak Kumar Das", position: "GLA University, Mathura, India" },
      { name: "Prof. Umesh Sharma", position: "GLA University, Mathura, India" },
      { name: "Mr. Sachin Soni", position: "Manager, Merit Controls, United States" },
      { name: "Mr. Ritesh Patel", position: "Director - Business Development, Happiest Minds Technologies, San Francisco Bay Area" },
      { name: "Dr. Sakshi Kaushal", position: "UIET Panjab University, Chandigarh" },
      { name: "Mr. Arun Kumar Paul", position: "Technical Director Electronics Devices Worldwide Pvt Ltd, India" },
      { name: "Dr.M.K.Khedkar", position: "Ex. Professor and Head, 	Dept. of Electrical Engineering	VNIT, Nagpur" },
      { name: "Prof. Richa Negi", position: "Professor,	Dept. of Electrical Engineering	MNNIT, Allahabad" },
      { name: "Dr. Vijay Kale", position: "Professor,	Dept. of Electrical Engineering	VNIT, Nagpur" },
      
    ],
    [
      { name: "Prof. Rajive Tiwari", position: "Professor,	Dept. of Electrical Engineering	MNIT, Jaipur " },
      { name: "Dr. Nitin Gupta", position: "Associate Professor	Dept. of Electrical Engineering	MNIT, Jaipur " },
      { name: "Prof. Rohit Bhakar", position: "Professor	Dept. of Electrical Engg/Centre for Energy	MNIT, Jaipur " },
      { name: "DR. NITA RAVINDRA PATNE", position: "Professor	Dept. of Electrical Engineering	VNIT, Nagpur" },
      { name: "Prof. Khaleequr Rehman Niazi", position: "Professor-HAG	Dept. of Electrical Engineering	MNIT, Jaipur" },
      { name: "Prof Rajesh Kumar", position: "Professor,	Department of Human Anatomy and Physiology	MNIT, Jaipur" },
      { name: "Prof. Lillie Dewan", position: "Professor (HAG),	Dept. of Electrical Engineering	NIT, Kurukshetra" },
      { name: "Prof. K. S. Sandhu", position: "Professor, 	Dept. of Electrical Engineering	NIT, Kurukshetra" },
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
