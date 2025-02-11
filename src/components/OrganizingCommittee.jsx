import React from "react";
import "./OrganizingCommittee.css";

const OrganizingCommittee = () => {
  const committees = [
    [
      {
        title: "Technical Program Committee Co-Chair",
        members: [
          { name: "Dr. Deepak", designation: "MNNIT, Prayagraj, UP, India" },
          { name: "Dr. MD Zuhaib", designation: "GLA University, Mathura, India" },
          { name: "Dr. Swapnil Srivastava", designation: "Dean Planning and Development, UCER, Prayagraj, India" },
          { name: "Dr. Rajiv Kumar Chauhan", designation: "GGITS, Jabalpur, MP, India" },
          { name: "Dr. Sulabh Sachan", designation: "GLA University, Mathura, India" },
          { name: "Dr. Mukesh Pushkarna", designation: "GLA University, Mathura, India" },
        ],
      },
      {
        title: "Publication Co-Chair",
        members: [
          { name: "Dr. Ashish Shukla", designation: "GLA University, Mathura, India" },
          { name: "Dr. Subhash Chandra", designation: "GLA University, Mathura, India" },
        ],
      },
      {
        title: "Finance Co-Chair",
        members: [
          { name: "Mr. Ravi Shankar Tiwari", designation: "GLA University, Mathura, India" },
          { name: "Dr. Jai Prakash", designation: "GLA University, Mathura, India" },
          { name: "Ms. Hiya Agarwal", designation: "Student Volunteer, GLA University, Mathura, India" },
        ],
      },
    ],
    [
      {
        title: "Website & Media Committee",
        members: [
          { name: "Mr. Mayak Goyal", designation: "GLA University, Mathura, India" },
          { name: "Mr. Amit Kumar Yadav", designation: "Student Volunteer, GLA University, Mathura, India" },
          { name: "Mr. Anubhav Singh", designation: "Student Volunteer, GLA University, Mathura, India" },
          { name: "Mr. Anshul Chauhan", designation: "Student Volunteer, GLA University, Mathura, India" },
        ],
      },
      {
        title: "Invitation & Registration Committee",
        members: [
          { name: "Mr. Ram Naresh Mishra", designation: "GLA University, Mathura, India" },
          { name: "Mr. Puranjay", designation: "President, Electrical Society, GLA University, Mathura, India" },
          { name: "Mr. Chitij Aditya", designation: "Vice-president, Electrical Society, GLA University, Mathura, India" },
        ],
      },
      {
        title: "Hospitality & Transport Committee",
        members: [
          { name: "Mr. Mukesh Pushkarna", designation: "GLA University, Mathura, India" },
          { name: "Mr. Vikas Kumar", designation: "GLA University, Mathura, India" },
          { name: "Dr. Ashish Sinha", designation: "GLA University, Mathura, India" },
        ],
      },
    ],
  ];

  return (
    <div>
      <h2 className="organizing-title">Organizing Committee</h2>
      {committees.map((row, rowIndex) => (
        <div key={rowIndex} className="committee-row">
          {row.map((committee, index) => (
            <section key={index} className="committee-section">
              <div className="committee-header">{committee.title}</div>
              <div className="committee-container">
                {committee.members.map((member, i) => (
                  <p key={i}>
                    <strong>{member.name}</strong>, {member.designation}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrganizingCommittee;
