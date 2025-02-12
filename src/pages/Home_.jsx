import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";
import logo from "../assets/logo.webp";
import img1 from "../assets/image-1.webp";
import img2 from "../assets/image-2.webp";
import img3 from "../assets/image-3.webp";
import img4 from "../assets/image-4.webp";
import Announcement from "../components/Announcement";
import PastConferences from "../components/PastConferences";

function Home() {
  const navigate = useNavigate(); // ✅ Initialize navigation hook

  return (
    <div className="home">
      <div className="overlay">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="overlay-text">
          4<sup>th</sup> International Conference on Power Electronics & IoT Application in Renewable Energy and its Control
          ( PARC 2026 )
        </h1>
        <p className="overlay-subtext">Next Year</p>
      </div>

      <div className="carousel-container">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="swiper-container"
        >
          <SwiperSlide><img src={img1} alt="Slide 1" className="carousel-image" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="Slide 2" className="carousel-image" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="Slide 3" className="carousel-image" /></SwiperSlide>
          <SwiperSlide><img src={img4} alt="Slide 4" className="carousel-image" /></SwiperSlide>
        </Swiper>
      </div>

      <div>
        <Announcement />
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>About GLA University, Mathura, UP, INDIA</h2>
            <hr />
            <p>
            GLA University is one of the premier universities in India, situated in Northern India. The university was established by our present Chancellor, Shri Narayan Das Agrawal in 1998. The chancellor envisioned GLA as a quality educational institution to serve the higher education needs of the youth of the region and beyond. The institute was accorded the status of the university under the U.P. State Legislative Act of 2009 (UP Act 21 of 2010). Recently the University was accredited with 'A+' grade by NAAC. It spread across 110 acres of land and is home to more than 12,000 students, enrolled in a variety of professional courses. It boasts of well-designed and maintained buildings, contemporary laboratories, spacious residential complexes, and recreational facilities. The facilities of such kind and grandeur make the GLA campus one of the best in the region, providing its students an ideal environment to hone their skills in an increasingly competitive and demanding world.
            The ubiquity of information technology and computer power can be applied in many areas ranging from industrial production to everyday. Therefore, it is essential to develop better understandings and design methodologies for large scale pervasive systems for various domains, and for the societal challenges....
            </p>
            {/* ✅ Working Navigation Button */}
            <button className="know-more" onClick={() => navigate("/about")}>
              Know More
            </button>
          </div>
          <div className="about-image">
            <img src={img1} alt="GLA University" />
          </div>
        </div>
      </div>
      <PastConferences/>

      <div class="parc">
    <div class="container">
        <h2 class="section-title">About PARC 2026</h2>
        <div class="parc-content">
            <div class="parc-text">
                <p>
                The Department of Electrical Engineering will organize the PARC 2026 from 21st -22nd  February 2026 at GLA University, Mathura, India. With the conference theme on "Power Electronics, IoT and Renewable Energy applications", PARC 2026 would have tutorials, keynotes, panel discussion, paper & poster presentations, and opportunities for industry/trade exhibits, with separate industry sessions and student competitions as an integral part of the conference. It would offer ample networking opportunities for scientific & industrial collaboration.
                </p>
                <p>
                This conference will explore these research areas further by examining the importance of power electronics and IoT and their applications in the modern smart grid and the increasing Integration of renewable energy due to increasing environmental concerns. 
                </p>
                <p>
                Power electronics is an essential area of electrical engineering and a crucial technology for using renewable power generation in modern power grids. These devices convert electricity from one stage to the other, leading to a power electronic-based power system. With the high penetration of electronic-based power generators, several technical challenges will appear in power grids. A new research platform is needed to design and test power electronic-based generators and their Integration with the power grid. 
                </p>
                <p>
                Power network operators are rapidly embracing renewable power generation into their power grids to meet the targets in power generation. Renewable energies such as wind and solar have become an inevitable part of power generation in current grid scenarios.  However, unlike conventional power generation sources, renewable energy sources' output is intermittent.  Advanced control strategies are required to handle the system's changing dynamics, nonlinearities, and uncertainties.  Efficient control strategies would increase the number of operational hours of the system and reduce the cost of the electricity produced.
                </p>
                <p>
                At the same time, renewable energy companies face pressure to increase their profits and productivity as the industry scales worldwide. To keep up with growing demand, these companies continually expand their capacity and thus want improved methods to manage these large capacities in remote areas. That's where IoT analytics can help. IoT analytics can provide - Big data analytics and quicker analysis of sensor outputs, Horizontal Integration and vertical application, Decentralization and Integration of advanced analytics and machine learning. With the world relying more heavily on renewables as a critical energy source, we need a way to harness IoT data quickly and accurately to scale renewable energy across the globe successfully. IoT is arguably one of the main distinguishers for the winners in the next growth stage in the renewable energy sector.
                </p>
                <p>This conference aims to explore the challenges in Future Grid-Interactive Power Converters regarding control strategies, optimal operation, and corrective actions. PARC 2024 also targets presenting the latest research on new techniques for overcoming the technical challenges of grid integration of renewable energy systems, such as synchronization of interfaced converters with the power grid and operation and control of different power converters in power systems with large shares of renewable energies. The other area of focus of this conference is the application of IoT analytics in the renewable energy sector.
                </p>
            </div>
            <div class="parc-image">
                <img src="assets/images/parc2024.jpg" alt="PARC 2026 Conference"/>
            </div>
        </div>
    </div>
</div>


    </div>
  );
}

export default Home;
