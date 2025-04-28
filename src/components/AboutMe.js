import React from "react";
import "../styles/AboutMe.css";
import TranslateIcon from "@mui/icons-material/Translate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <h2 className="about-me-title">About Me</h2>
            <div className="about-me-content">
                <div className="about-me-left">
                    <p className="about-me-subtitle">
                        M-E-R-N Stack Developer | Mobile App Developer (React-Native)
                    </p>
                    <p className="about-me-description">
                        Passionate about web and mobile app development, I thrive in
                        collaborative team environments. With a strong command of both
                        front-end and back-end technologies, I am committed to delivering
                        high-quality solutions. My problem-solving skills, quick decision-making,
                        and confidence help drive project success. Adaptability, a positive attitude,
                        dedication, and a relentless work ethic are the pillars of my professional growth."
                    </p>
                </div>
                <div className="about-me-right">
                    <div className="about-me-details">
                        <div className="about-me-detail">
                            <span className="about-me-text">
                                <PersonIcon fontSize="large" style={{ color: "#4070f4" }}></PersonIcon>
                                19 years
                            </span>
                        </div>
                        <div className="about-me-detail">
                            <span className="about-me-text">
                                <TranslateIcon fontSize="large" style={{ color: "#4070f4" }}></TranslateIcon>
                                English, Marathi, Hindi
                            </span>
                        </div>
                        <div className="about-me-detail">
                            <span className="about-me-text">
                                <LocationOnIcon fontSize="large" style={{ color: "#4070f4" }}></LocationOnIcon>
                                Kolhapur, Maharashtra, India
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <a
        className="about-me-button"
        href="https://drive.google.com/file/d/18_zwu45pWLsoN8wV4YOP86IXmao6UzEn/view?usp=drive_link"
        target="_blank"
      >
            Resume
        </a>
    </div >
  );
};

export default AboutMe;
