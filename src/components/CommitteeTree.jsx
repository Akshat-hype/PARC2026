import React from "react";
import CommitteeCard from "./CommitteeCard";
import "./CommitteeTree.css"; // Import styles
import chiefParton from "../assets/chiefParton.webp";
import Parton1 from "../assets/Parton1.webp";
import Parton2 from "../assets/Parton2.webp";
import Parton3 from "../assets/Parton3.webp";
import HonoraryGeneralChair from "../assets/honoraryGeneralChair.webp";
import Facilitator1 from "../assets/facilator1.webp";
import Facilitator2 from "../assets/facilator2.webp";
import Facilitator3 from "../assets/facilator3.webp";
import ChairPerson from "../assets/chairPerson.webp";
import GeneralChair from "../assets/generalChair1.webp";
import GeneralChair2 from "../assets/generalChair2.webp";
import GeneralChair3 from "../assets/generalChair3.webp";
import TechnicalProgramChair from "../assets/ProfRKSingh.webp";
import OrganizingChair from "../assets/organizingChair.webp";
import OrganizingChair2 from "../assets/organizingChair2.webp";
import OrganizingChair3 from "../assets/organizingChair3.webp";
import OrganizingChair4 from "../assets/organizingChair4.webp";
import FinanceChair from "../assets/financeChair.webp";
import PublicationsChair from "../assets/publicationChair.webp";


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
          title="Patron"
          image={Parton1}
          name="Mr Neeraj Agrawal"
          designation="CEO"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Patron"
          image={Parton2}
          name="Mr Vivek Agarwal"
          designation="CFO"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Patron"
          image={Parton3}
          name="Prof Anoop Gupta"
          designation="Vice Chancellor"
          institution="GLA University, Mathura, India"
        />
      </div>

      {/* Level 3 - Four Cards */}
      <div className="tree-level">
      <CommitteeCard
          title="Honorary General Chair"
          image={HonoraryGeneralChair}
          name="Prof S N Singh"
          designation="Professor"
          institution="IIT Kanpur, UP, India"
        />
        <CommitteeCard
          title="Facilitator"
          image={Facilitator1}
          name="Mr A K Singh"
          designation="Registrar"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Facilitator"
          image={Facilitator2}
          name="Prof Kamal Sharma"
          designation="Dean R & D"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Facilitator"
          image={Facilitator3}
          name="Prof Dilip Sharma"
          designation="Dean"
          institution="(International Relations & Academic Collaborations)"
        />
        
      </div>

      {/* Level 4 - Four Cards */}
      <div className="tree-level">
      <CommitteeCard
          title="Chairperson"
          image={ChairPerson}
          name="Prof Ashish Kumar Sharma"
          designation="Dean Academics"
          institution="GLA University, Mathura"
        />
        <CommitteeCard
          title="General Chair"
          image={GeneralChair}
          name="Prof. Asheesh K. Singh"
          designation="Professor, Department of Electrical Engineering"
          institution="MNNIT Allahabad, UP, India"
        />
        <CommitteeCard
          title="General Chair"
          image={GeneralChair2}
          name="Prof Vinay Deolia"
          designation="Professor & Head, EE and EC"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="General Chair"
          image={GeneralChair3}
          name="Prof Md Rihan"
          designation="Director General"
          institution=" NISE, Gurugram"
        />
      </div>

      {/* Level 5 - Four Cards */}
      <div className="tree-level">
      <CommitteeCard
          title="Technical Program Chair"
          image={TechnicalProgramChair}
          name="Prof R K Singh"
          designation="Professor, Department of Electrical Engineering"
          institution=" MNNIT Allahabad, UP, India"
        />
        <CommitteeCard
          title="Organizing Chair"
          image={OrganizingChair}
          name="Dr Sanjay Kumar Maurya"
          designation="Associate Professor, EED"
          institution=" GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Organizing Chair"
          image={OrganizingChair2}
          name="Dr Sachin Goyal"
          designation="Assistant Professor, Department of Electrical Engineering"
          institution=" GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Organizing Chair"
          image={OrganizingChair3}
          name="Dr Indresh Yadav"
          designation="Assistant Professor, Department of Electrical Engineering"
          institution="GLA University, Mathura, India"
        />
      </div>

      {/* Level 6 - Three Cards */}
      <div className="tree-level">
        <CommitteeCard
          title="Organizing Chair"
          image={OrganizingChair4}
          name="Dr Bhupendra Singh Chauhan"
          designation="Professor, Department of Mechanical Engineering"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Finance Chair"
          image={FinanceChair}
          name="Dr Vivek Srivastava"
          designation="Assistant Professor, Department of Electrical Engineering"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Publication Chair"
          image={PublicationsChair}
          name="Dr Kiran Patnaik"
          designation="Associate Professor"
          institution="Indian Institute of Information Technology, Gwalior"
        />
      </div>
    </div>
  );
};

export default CommitteeTree;
