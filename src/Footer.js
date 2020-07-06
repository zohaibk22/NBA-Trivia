import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Audiowide&family=Nanum+Myeongjo&family=Orbitron:wght@500&display=swap');
        </style>
        <a href="https://github.com/zohaibk22/">
          <img
            class="footer-img margin-right"
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
            alt="Github"
          />
        </a>
        <a href="https://www.linkedin.com/in/zohaib-khan-10221997/">
          <img
            class="footer-img"
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
            alt="LinkedIn"
          />
        </a>
        <p class="name-symbol">
          <em>© 2020 Zohaib Khan.</em>
        </p>

        <p class="api-symbol">
          <em>Powered by BallDontLie and Giphy Services</em>
        </p>
      </footer>
    </>
  );
}

export default Footer;
