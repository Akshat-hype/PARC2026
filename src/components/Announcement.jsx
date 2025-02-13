import React from "react";
import { FaDownload, FaCamera, FaBook, FaSearch, FaUpload } from "react-icons/fa"; 
import "./Announcement.css";

const Announcement = () => {
  return (
    <div className="announcement-container">
      <h2 className="announcement-title">Announcement</h2>
      <hr className="underline" />

      <ul className="announcement-list">
        {/* <li><FaDownload className="icon" /> <strong>Download Conference Schedule</strong> <span className="download-link">[Click here to download]</span></li>
        <li><FaCamera className="icon" /> <strong>Download Conference Photograph</strong> <span className="download-link">[Click here to download]</span></li>
        <li><FaBook className="icon" /> <strong>Registration for the tutorial program has been started.</strong> Kindly get yourself registered.</li>
        <li><FaSearch className="icon" /> <strong>All accepted and presented papers</strong> in the conference will be submitted for publication on IEEE Xplore.</li>
        <li><FaUpload className="icon" /> <strong>Presenters are requested to upload their PPTs</strong> <span className="download-link">[Click here to submit]</span></li> */}
        <li>To Be Announced soon</li>
      </ul>

      {/* <a href="#" className="ppt-link">Sample PPT Clink</a> */}
    </div>
  );
};

export default Announcement;
