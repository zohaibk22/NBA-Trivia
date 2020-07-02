import React from "react";
import { Link } from "react-router-dom";

function GameMenu() {
  return (
    <>
      <h2>Game Menu Page</h2>
      <p>
        <Link to="/Game">Points Per Game Questionaire</Link>
      </p>
    </>
  );
}

export default GameMenu;
