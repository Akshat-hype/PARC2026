import React from "react";
import "./CommitteeAdvisorySection.css"; // Import the CSS file

const CommitteeAdvisorySection = () => {
  const advisoryData = [
    [
      { name: "Mr Neeraj Agarwal", position: "CEO, GLA University, Mathura" },
      { name: "Mr Vivek Agarwal", position: "CFO, GLA University, Mathura" },
      { name: "Prof Anoop Gupta", position: "Vice Chancellor, GLA University, Mathura, India" },
      { name: "Prof S N Singh", position: "Professor, IIT Kanpur, UP, India" },
      { name: "Mr A K Singh", position: "Registrar, GLA University, Mathura, India" },
      { name: "Prof Kamal Sharma", position: "Dean R& D, GLA University, Mathura, India" },
      { name: "Prof Dilip Sharma", position: "Dean (International Relations & Academic Collaborations)" },
      { name: "Prof Ashish Kumar Sharna", position: "Dean Academics, GLA University, Mathura" },
      { name: "Prof. Asheesh K. Singh", position: "Professor, Department of Electrical Engineering, MNNIT Allahabad, UP, India" },
      { name: "Prof Vinay Deolia", position: "Professor & Head, EE and EC, GLA University, Mathura, India" },
      { name: "Prof Md Rihan", position: "Director General, NISE, Gurugram" }
    ],
    [
      { name: "Prof R K Singh", position: "Professor, Department of Electrical Engineering, MNNIT Allahabad, UP, India" },
      { name: "Dr Sanjay Kumar Maurya", position: "Associate Professor, EED, GLA University, Mathura, India" },
      { name: "Dr Sachin Goyal", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Dr Indresh Yadav", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Dr Bhupendra Singh Chauhan", position: "Professor, Department of Mechanical Engineering, GLA University, Mathura, India" },
      { name: "Dr Vivek Srivastava", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Dr Kiran Patnaik", position: "Associate Professor, Indian Institute of Information Technology, Gwalior" },
      { name: "Dr Md Zuhaib", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Dr Swapnil Srivastava", position: "Director, United College of Engineering and Research Allahabad" },
    ],
    [
      
      { name: "Dr Ravi Sankar Tiwari", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Dr Subhash Chandra", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Dr Arvind Yadav", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Mr Mayank Goyal", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Mr Ram Naresh Mishra", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Dr Mukesh Pushkarna", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Dr Ashish Sinha", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Mr Vikas Kumar", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" },
      { name: "Dr Kundan Anand", position: "Assistant Professor, Department of Electrical Engineering, GLA University, Mathura, India" }
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
