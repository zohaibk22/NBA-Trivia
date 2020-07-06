import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./Results.css";

function Results(props) {
  const refresh = () => {
    window.location.reload(false);
  };
  return (
    <div className="main-container">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bangers&family=Black+Han+Sans&family=Comic+Neue:wght@700&family=Gravitas+One&family=Holtwood+One+SC&family=Pathway+Gothic+One&family=Sigmar+One&display=swap');
      </style>
      <h1 className="heading">Results</h1>

      <p className="score">Your Score is: {props.score}0% </p>

      <p className="comment">
        If you would like to play again, click on button Below
      </p>

      <button class="return-btn" onClick={refresh}>
        PLAY AGAIN
      </button>
    </div>
  );
}

export default withRouter(Results);
