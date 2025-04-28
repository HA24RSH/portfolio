import React from "react";
import TechStack from "../utils/TechStack";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div id="skills" className="tech-stack-container">
        <h2>Skills</h2>
      <div className="tech-stack-marquee">
        {TechStack.map((tech, index) => (
          <div className="tech-stack-item" key={index}>
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
