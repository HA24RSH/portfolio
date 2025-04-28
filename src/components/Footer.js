import React from "react";
import Contact from "../components/Contact";
import "../styles/Footer.css";
// import Contact from "./contact";

const Footer = () => {
  return (
    <footer className="footer">
      <Contact/>
      <div className="footer-container">
        <p className="footer-text">
          © 2024-25 Harshvardhan Gadagade. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
