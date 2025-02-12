import React from "react";
import "./TutorialPerson.css";

const TutorialPerson = () => {
  const tutorials = [
    {
      tutorialNumber: 1,
      image: "yugal-kishor.jpg",
      name: "Dr. Yugal Kishor",
      designation: "Manager R&D (Hardware)",
      company: "OGOEnergy India Pvt. Ltd.",
      title: "Thermal Modeling of Power Electronics Converter",
      description: "The tutorial will delve into thermal modelling of Power Electronics, including thermal modelling concepts, thermal modelling and simulation of power converters such as DC-DC Converters, inverters, etc. using PLECS (Plexim) environment. Participants will gain practical skills and learn how to apply these techniques to real-world scenarios.",
      profileBrief: "Yugal Kishor is a seasoned professional with a strong background in Electrical Engineering education and industry experience. As a Manager-R&D (Hardware) at OGOEnergy India Pvt. Ltd., he is playing a vital role in the design and development of EV Chargers, BMS for Telecom, Home ESS, AVGs, and EVs. Additionally, he is working towards completion of his Ph.D. in Electrical Engineering at the National Institute of Technology, Raipur, with a rich academic journey that includes a M.Tech. (Power Electronics) and B.E. (Electrical & Electronics). Prior to his current role, he served as an Assistant Professor in School of Engineering & Research at ITM University Raipur and Lecturer in the Department of Electrical Engineering, NIT Raipur, he has been instrumental in imparting knowledge in subjects such as Electrical Machines, Power Electronics, and Electric Drives. Additionally, he worked as Co-PI on a Govt. funded project. Mr. Yugal Kishor is a dynamic professional bridging the gap between academia and industry, with a good publishing record, research expertise, and a comprehensive skill set. He has published research articles in SCI indexed journals and IEEE/IES conferences, as well as filed three patents. He received ITS grant to attend IECON-2023 in Singapore from SERB and was the winner of ‘Som Nath Mahendra Memorial Student Travel Award’ given by MNIT Jaipur for PEDES-2022. Additionally, he received ‘Best Paper Award’ in 2021-IEEE International Conference on Emerging Trends in Industry 4.0.",
      date: "23/02/2024"
    },
    {
      tutorialNumber: 2,
      image: "aashish-bansal.jpg",
      name: "Aashish Bansal",
      designation: "Engineering Group Supervisor",
      company: "Bechtel India",
      title: "Battery Energy Storage System",
      description: "The tutorial will delve into Energy Storage Systems, including technical parameters governing it, power conversion system, inverters, battery management system, and commercially available latest technologies. Participants will gain Industrial updates and learn the different technologies prevailing with their application/ selection mythology.",
      profileBrief: "Aashish Bansal is a professional with a strong background in Electrical Engineering education and industry experience. His academic journey includes M.Tech. (Control and Instrumentation) from DTU, PGDBA in Operations Management from Symbiosis and B.E. (Electrical & Electronics) from GLA University first Batch of 2002. As a EGS in Bechtel India Pvt. Ltd., he is playing a vital role in the design and development of various Oil and Gas Mega projects including refineries, petrochemical complexes, fertiliser plants and downstream chemical projects. In Bechtel, he has undertaken multiple projects like the delayed coker unit of Marathon Petroleum in Louisiana, USA; Lake Charles LNG project feed validation of Shell in Louisiana, USA; OHIO petrochemicals of PTTGC and Daelim in the USA; FEED of Gas to gasoline project for Nacero in Texas, USA; Suez Petrochemical Refinery project in Egypt; PNG LNG for Papua New Guinea north of Australia; Delayed coker unit for Suez oil refining company in Egypt and looking forward to newer opportunities. Prior to his current role, he served for Dangote Refinery Team as client, Punj Lloyd group, Essar and Reliance Group for their projects and started his career from a public sector company HMT at Bangalore as Management Trainee. In previous companies, he has led the electrical design teams for Dangote refinery project, Shell Lube Oil and Grease manufacturing plant in Singapore, Ahmadi terminal depot in Kuwait, Matix Fertilizer plant in Durgapur, ONGC offshore D1 Platforms in Bombay high, Hydrogen Manufacturing unit in Vadinar, and various proposals like the SABIC TGU plant, HPCL Mahol Refinery expansion projects.",
      date: "24/02/2024"
    }
  ];

  return (
    <div>
      {tutorials.map((tutorial, index) => (
        <div key={index} className="tutorial-container">
          <h2 className="tutorial-title">TUTORIAL - {tutorial.tutorialNumber}</h2>
          <div className="tutorial-content">
            <div className="image-container">
              <img src={tutorial.image} alt={tutorial.name} className="speaker-image" />
            </div>
            <h3 className="speaker-name">{tutorial.name}</h3>
            <p className="speaker-designation">{tutorial.designation}</p>
            <p className="speaker-company">{tutorial.company}</p>

            <div className="tutorial-details">
              <h4 className="section-title">Title:</h4>
              <p className="tutorial-title-text">{tutorial.title}</p>  
              
              <h4 className="section-title">Description:</h4>
              <p className="tutorial-description">{tutorial.description}</p>

              <h4 className="section-title">Profile Brief:</h4>
              <p className="profile-text">{tutorial.profileBrief}</p>

              <p className="date"><strong>Date:</strong> {tutorial.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TutorialPerson;
