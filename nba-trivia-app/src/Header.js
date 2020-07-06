import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <img
        src="https://wallpaperplay.com/walls/full/7/f/8/109614.jpg"
        alt="nba-logo"
        className="logo"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&family=Orbitron:wght@500&display=swap"
        rel="stylesheet"
      ></link>

      <ui className="game-menu">
        <li className="option-one">
          <Link className="click-item" to="/">
            Home
          </Link>
        </li>
        <li className="option-two">
          <Link className="click-item" to="/Menu">
            Game Menu
          </Link>
        </li>
      </ui>
    </header>
  );
}

export default Header;
