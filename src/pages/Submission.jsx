import React from "react";
import "./Submission.css";
import { FaDownload } from "react-icons/fa";
import conferenceTemp from "../assets/conference-template-a4.docx";
import latextemp from "../assets/conference-latex-template.zip";

const Submission = () => {
  return (
    <div className="submission-container">
      <h2 className="submission-title">SUBMISSION</h2>
      <div className="submission-content">
        <div className="submission-txt">
        <h3 className="section-heading">Guidelines for Paper Submission:</h3>
        <p>All submissions must be in English only.</p>
        <p>
          Authors are invited to submit full paper as a PDF using the IEEE templates. 
          Paper drafts must be prepared in English with a maximum of six (6) printed pages 
          in IEEE format (10-point font, double-column and A4) including figures, tables, and references.
        </p>
        <p>
          Prospective authors are kindly invited to submit papers electronically to PARC2026
          through EasyChair with Microsoft CMT.
        </p>
        <p>
          The review process for this conference is <strong>BLINDED</strong>, meaning authors and 
          reviewers are restricted from seeing each other’s identity.
        </p>
        </div>
        <h3 className="section-heading">Template Download</h3>
        <div className="download-section">
          <p>
            The IEEE Word and LaTeX format can be accessed from the link: 
            <a href="https://www.ieee.org/conferences/publishing/templates.html"><span className="highlight"> IEEE Publishing Template</span></a>
          </p>
          <div className="download-buttons">
          <a href={conferenceTemp} download="template.docx">
            <button className="download-btn">
              <FaDownload /> IEEE Format (Word)
            </button>
          </a>
          <a href={latextemp} download="template.zip">
            <button className="download-btn">
              <FaDownload /> IEEE Format (LaTeX)
            </button>
          </a>
          </div>
        </div>

        <h3 className="section-heading">How to Submit Paper:</h3>
        <p>
          <strong>Log-in to:</strong> <a href="https://cmt3.research.microsoft.com/"><span className="highlight">Microsoft CMT</span></a>
        </p>
        <p className="note">
          Please note: The link will be active only from 1st March, 2025 till the closing date of submissions.
        </p>
      </div>
    </div>
  );
};

export default Submission;