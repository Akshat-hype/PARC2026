import React from "react";
import CommitteeTree from "../components/CommitteeTree";
import "./Committee.css"; // Import styles
import CommitteeAdvisorySection from "../components/CommitteeAdvisorySection";
import TechnicalProgramCommittee from "../components/TechnicalProgramCommittee";
import OrganizingCommittee from "../components/OrganizingCommittee";

const Committee = () => {
  return (
    <div className="committee-page">
      <h1 className="committee-title">Committee Structure</h1>
      <CommitteeTree />
      <CommitteeAdvisorySection/>
      <TechnicalProgramCommittee/>
      <OrganizingCommittee/>
    </div>
  );
};

export default Committee;
