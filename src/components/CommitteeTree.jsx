import React from "react";
import CommitteeCard from "./CommitteeCard";
import "./CommitteeTree.css"; // Import styles
import chiefParton from "../assets/chiefParton.webp";
import coChiefParton from "../assets/coChiefParton.webp";
import Parton1 from "../assets/Patron1.webp";
import Parton2 from "../assets/Parton2.webp";
import Parton3 from "../assets/Parton3.webp";
import ChairPerson from "../assets/ChairPerson.webp";
import ChairPerson2 from "../assets/ChairPerson2.webp";
import Facilitator from "../assets/facilator1.webp";
import HonoraryGeneralChair from "../assets/honoraryGeneralChair.webp";
import GeneralChair from "../assets/generalChair1.webp";
import TechnicalChair from "../assets/technicalProgrammeChair.webp";
import TechnicalChair2 from "../assets/technicalProgrammeChair2.webp";

// import FinanceChair from "../assets/financeChair.webp";
// import OrganizingChair from "../assets/organizingChair.webp";
// import PublicationsChair from "../assets/publicationsChair.webp";
// import TechnicalProgramChair from "../assets/technicalProgramChair.webp";

const CommitteeTree = () => {
  return (
    <div className="committee-tree">
      {/* Level 1 - Top (One Card) */}
      <div className="tree-level">
        <CommitteeCard
          title="Chief Patron"
          image={chiefParton}
          name="Shri. Narayan Das Agrawal"
          designation="Hon'ble Chancellor"
          institution="GLA University, Mathura, India"
        />
      </div>

      {/* Level 2 - Three Cards */}
      <div className="tree-level">
        <CommitteeCard
          title="Co-Chief Patron"
          image={coChiefParton}
          name="Prof. Durg Singh Chauhan"
          designation="Vice Chancellor"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Patron"
          image={Parton1}
          name="Prof Phalguni Gupta"
          designation="Vice Chancellor"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Patron"
          image={Parton2}
          name="Mr Neeraj Agrawal"
          designation="CEO"
          institution="GLA University, Mathura, India"
        />
      </div>

      {/* Level 3 - Four Cards */}
      <div className="tree-level">
      <CommitteeCard
          title="Patron"
          image={Parton3}
          name="Mr Vivek Agarwal"
          designation="CFO"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Chairperson"
          image={ChairPerson}
          name="Prof Anoop Gupta"
          designation="Pro Vice Chancellor"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Facilator"
          image={Facilitator}
          name="Mr A K Singh"
          designation="Registrar"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Chairperson"
          image={ChairPerson2}
          name="Prof Santanu Chowdhury"
          designation="Chief Technology Officer"
          institution="Azista Industries Private Limited, India"
        />
        
      </div>

      {/* Level 4 - Four Cards */}
      <div className="tree-level">
      <CommitteeCard
          title="Honorary General Chair"
          image={HonoraryGeneralChair}
          name="Prof S N Singh"
          designation="Professor"
          institution="IIT Kanpur, India"
        />
        <CommitteeCard
          title="General Chair"
          image={GeneralChair}
          name="Prof. Asheesh K. Singh"
          designation="Professor"
          institution="MNNIT Allahabad, UP, India"
        />
        <CommitteeCard
          title="Technical Program Chair"
          image={TechnicalChair}
          name="Dr Mohd. Rihan"
          designation="Professor"
          institution="AMU, Aligarh, UP, India"
        />
        <CommitteeCard
          title="Technical Program Chair"
          image={TechnicalChair2}
          name="Dr. Srinivas Bhaskar Karanki"
          designation="Associate Professor"
          institution="IIT Bhuvneshwar, India"
        />
      </div>
    </div>
  );
};

export default CommitteeTree;
