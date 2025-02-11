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
                    The International Conference on Power Electronics & IoT Applications in Renewable Energy and its Control (PARC 2026) 
                    will be organized by the Department of Electrical Engineering, GLA University, Mathura, India, during next year. 
                    The focus is on "Power Electronics, IoT, and Renewable Energy applications," addressing modern smart grids, renewable energy, 
                    and control strategies.
                </p>
                <p>
                    PARC 2026 will feature tutorials, keynotes, panel discussions, paper & poster presentations, and industry/trade exhibits. 
                    The event will offer networking opportunities for scientific & industrial collaboration.
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
