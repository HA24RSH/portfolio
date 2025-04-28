import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import "../styles/Exp.css";

const Exp = () => {
  return (
    <div className="exp-accordian-container">
      <div className="exp-accordian-effect">
        <Accordion className="exp-accordian">
          <AccordionSummary>
            <div className="exp-heading-container">
              <div className="exp-head-left">
                <div className="exp-logo">
                  <img
                    src=""
                    alt="P-Cube Technologies"
                    className="exp-logo"
                  />
                </div>
                <div>
                  <h3>P-Cube Technologies</h3>
                  <p className="post-color">Web-developer Intern</p>
                </div>
              </div>
              <div>
                <p>June 2023 - July 2023</p>
              </div>
            </div>
          </AccordionSummary>
          <hr />
          <AccordionDetails className="exp-details">
            <ul>
              <li>
                Developed Full Stack website.
              </li>
              <li>
                Designed, implemented, and optimized 3 distinct features for
                project, enhancing functionality and user experience ensuring
                efficient backend integration with robust frontend designs.
              </li>
              <li>
                Conducted testing and debugging to ensure high-quality code and
                seamless user interaction.
              </li>
            </ul>
            <a
              className="about-me-button"
              href="https://drive.google.com/file/d/1B0QRTauIVROfAmXEaW7c-i60HgKt_GGK/view?usp=drive_link"
              target="_blank"
            >
              Experience Certificate | Letter of Recommendation
            </a>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Exp;
