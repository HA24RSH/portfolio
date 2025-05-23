import React, { useState } from "react";
import "../styles/Career.css";
import Project from "./Project";
import Edu from "./Edu";
import Exp from "./Exp";

const Career = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="career" className="tabs-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "education" ? "active" : ""}`}
          onClick={() => handleTabClick("education")}
        >
          Education
        </button>
        <button
          className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => handleTabClick("projects")}
        >
          Projects
        </button>
        <button
          className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => handleTabClick("experience")}
        >
          Experience
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "education" && (
          <div className="edu">
            <h2>Education</h2>
            <Edu className="edu-flex" />
          </div>
        )}
        {activeTab === "projects" && (
          <div className="edu">
            <h2>Projects</h2>
            <Project className="project-flex" />
          </div>
        )}
        {activeTab === "experience" && (
          <div className="edu">
            <h2>Experience</h2>
            <Exp />
          </div>
        )}
      </div>
    </div>
  );
};
export default Career;
