import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1 className="header-heading">NBA Trivia</h1>

      <ui>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Game Menu</Link>
        </li>
      </ui>
    </header>
  );
}

export default Header;
