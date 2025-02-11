import React from "react";
import CommitteeCard from "./CommitteeCard";
import "./CommitteeTree.css"; // Import styles

const CommitteeTree = () => {
  return (
    <div className="committee-tree">
      {/* Level 1 - Top (One Card) */}
      <div className="tree-level">
        <CommitteeCard
          title="Chief Patron"
          image="/images/narayan-das-agrawal.jpg"
          name="Shri. Narayan Das Agrawal"
          designation="Hon'ble Chancellor"
          institution="GLA University, Mathura, India"
        />
      </div>

      {/* Level 2 - Three Cards */}
      <div className="tree-level">
        <CommitteeCard
          title="Co-Chief Patron"
          image="/images/person1.jpg"
          name="Prof. XYZ"
          designation="Vice Chancellor"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Patron"
          image="/images/person2.jpg"
          name="Prof. ABC"
          designation="Director"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Patron"
          image="/images/person3.jpg"
          name="Prof. PQR"
          designation="Dean"
          institution="GLA University, Mathura, India"
        />
      </div>

      {/* Level 3 - Four Cards */}
      <div className="tree-level">
        <CommitteeCard
          title="Chairperson"
          image="/images/person4.jpg"
          name="Dr. LMN"
          designation="HOD, CSE"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Facilitator"
          image="/images/person5.jpg"
          name="Mr. UVW"
          designation="Senior Lecturer"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="General Chair"
          image="/images/person6.jpg"
          name="Prof. XYZ"
          designation="Professor"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Technical Chair"
          image="/images/person7.jpg"
          name="Dr. RST"
          designation="Researcher"
          institution="GLA University, Mathura, India"
        />
      </div>

      {/* Level 4 - Four Cards */}
      <div className="tree-level">
        <CommitteeCard
          title="Finance Chair"
          image="/images/person8.jpg"
          name="Dr. DEF"
          designation="Finance Head"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Organizing Chair"
          image="/images/person9.jpg"
          name="Dr. GHI"
          designation="Event Coordinator"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Publications Chair"
          image="/images/person10.jpg"
          name="Dr. JKL"
          designation="Editor"
          institution="GLA University, Mathura, India"
        />
        <CommitteeCard
          title="Technical Program Chair"
          image="/images/person11.jpg"
          name="Dr. MNO"
          designation="Conference Head"
          institution="GLA University, Mathura, India"
        />
      </div>
    </div>
  );
};

export default CommitteeTree;
