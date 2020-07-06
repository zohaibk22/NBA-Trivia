import React, { useState, useEffect, useParams } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GameMenu.css";

function GameMenu(props) {
  return (
    <div className="body-container">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bangers&family=Black+Han+Sans&family=Comic+Neue:wght@700&family=Gravitas+One&family=Holtwood+One+SC&family=Pathway+Gothic+One&family=Sigmar+One&display=swap');
      </style>
      <h1 className="main-menu">Main Menu</h1>
      <div className="menu-container">
        <div className="option">
          <Link className="links" to={`/Game/pts`}>
            Points Per Game Questionaire
          </Link>
        </div>
        <div className="option">
          <Link className="links" to={`/Game/ast`}>
            Assists Per Game Questionaire
          </Link>
        </div>
        <div className="option">
          <Link className="links" to={`/Game/reb`}>
            Rebounds Per Game Questionaire
          </Link>
        </div>
        <div className="option">
          <Link className="links" to={`/Game/stl`}>
            Steals Per Game Questionaire
          </Link>
        </div>
        <div className="option">
          <Link className="links" to={`/Game/blk`}>
            Blocks Per Game Questionaire
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameMenu;
