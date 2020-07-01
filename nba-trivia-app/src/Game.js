import React, { useState, useEffect } from "react";
import "./Game.css";

const Game = (props) => {
  return (
    <>
      <div className="left-card">
        <h1>{props.playerOnePoints}</h1>
      </div>
      <div className="right-card">
        <h1>{props.playerTwoPoints}</h1>
      </div>

      <button>Submit Answer</button>
      <button>Next Question</button>
    </>
  );
};

export default Game;
