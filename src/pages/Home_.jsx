import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";
import logo from "../assets/logo.webp"; // Add your logo here
import img1 from "../assets/image-1.webp";
import img2 from "../assets/image-2.webp";
import img3 from "../assets/image-3.webp";
import img4 from "../assets/image-4.webp";

function Home() {
  return (
    <div className="home">
      {/* Overlay Container for Text & Logo */}
      <div className="overlay">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="overlay-text">4<sup>th</sup> International Conference on Power Electronics & IoT Application in Renewable Energy and its Control
        ( PARC 2024 )</h1>
        <p className="overlay-subtext">Next Year</p>
      </div>

      {/* Swiper Carousel */}
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
    </div>
  );
}

export default Home;
