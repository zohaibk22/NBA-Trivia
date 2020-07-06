import React, { useState, useEffect, useParams } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./Game.css";
import Results from "./Results";

const Game = (props) => {
  //All State Values that will be changed
  const [playerOneStatsInfo, setPlayerOneStatsInfo] = useState([]);
  const [playerTwoStatsInfo, setPlayerTwoStatsInfo] = useState([]);
  const [PlayerOneMetrics, setPlayerOneMetrics] = useState([]);
  const [PlayerTwoMetrics, setPlayerTwoMetrics] = useState([]);
  const [playerOneGif, setPlayerOneGif] = useState("");
  const [playerTwoGif, setPlayerTwoGif] = useState("");
  const [count, setCounter] = useState(1);
  const [score, setScore] = useState(0);
  const [rightDivAnswer, setRightDivAnswer] = useState(null);
  const [leftDivAnswer, setLeftDivAnswer] = useState(null);
  const [ifClicked, setIfClicked] = useState(false);
  const [paramVal, updateParamVal] = useState([props.match.params.myVar]);
  const [showStats, setShowStats] = useState("");
  let params = useParams;

  const apiCallStatsPlayerOne = async () => {
    try {
      let randomNum = Math.floor(Math.random() * 400 + 1);
      const dataStats = await axios.get(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
      );

      setPlayerOneStatsInfo(dataStats.data.data[0][props.match.params.myVar]);

      const dataGeneralInfo = await axios.get(
        `https://www.balldontlie.io/api/v1/players/${randomNum}`
      );

      let playerOneFirstName = dataGeneralInfo.data.first_name;
      let playerOneLastName = dataGeneralInfo.data.last_name;

      setPlayerOneMetrics(playerOneFirstName + " " + playerOneLastName);

      const gifData = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=cLVkasFAvpiN8CTvAkRlGkoBTskbN71s&q=${
          playerOneFirstName + "-" + playerOneLastName
        }&limit=25&offset=0&rating=G&lang=en`
      );

      setPlayerOneGif(gifData.data.data[0].images.downsized.url);
    } catch (error) {
      if (error instanceof TypeError) {
        apiCallStatsPlayerOne();
      } else {
        setTimeout(function () {
          apiCallStatsPlayerOne();
        }, 30000);
        console.log(error);
      }
    }
  };

  const apiCallStatsPlayerTwo = async () => {
    try {
      let randomNum = Math.floor(Math.random() * 400);
      const data = await axios.get(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
      );
      setPlayerTwoStatsInfo(data.data.data[0][props.match.params.myVar]);

      const dataGeneralInfo = await axios.get(
        `https://www.balldontlie.io/api/v1/players/${randomNum}`
      );

      let playerTwoFirstName = dataGeneralInfo.data.first_name;
      let playerTwoLastName = dataGeneralInfo.data.last_name;

      setPlayerTwoMetrics(playerTwoFirstName + " " + playerTwoLastName);

      const gifData = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=cLVkasFAvpiN8CTvAkRlGkoBTskbN71s&q=${
          playerTwoFirstName + "-" + playerTwoLastName
        }&limit=1&offset=0&rating=G&lang=en`
      );

      setPlayerTwoGif(gifData.data.data[0].images.downsized.url);
    } catch (error) {
      if (error instanceof TypeError) {
        apiCallStatsPlayerTwo();
      } else {
        setTimeout(function () {
          apiCallStatsPlayerTwo();
        }, 30000);
        console.log(error);
      }
    }
  };

  const getPlayer = () => {
    apiCallStatsPlayerOne();
    apiCallStatsPlayerTwo();
  };

  const checkAnswerLeft = () => {
    if (playerOneStatsInfo > playerTwoStatsInfo) {
      setScore(score + 1);
      setLeftDivAnswer("correct-answer");
    } else {
      setScore(score);
      setLeftDivAnswer("incorrect-answer");
    }
  };

  const checkAnswerRight = () => {
    if (playerOneStatsInfo < playerTwoStatsInfo) {
      setScore(score + 1);
      setRightDivAnswer("correct-answer");
    } else {
      setScore(score);
      setRightDivAnswer("incorrect-answer");
    }
  };

  const clickEvent = () => {
    setIfClicked(true);
  };

  const gameType = () => {
    if (props.match.params.myVar === "pts") {
      updateParamVal("Points Per Game");
    } else if (props.match.params.myVar === "ast") {
      updateParamVal("Assists Per Game");
    } else if (props.match.params.myVar === "reb") {
      updateParamVal("Rebounds Per Game");
    } else if (props.match.params.myVar === "stl") {
      updateParamVal("Steals Per Game");
    } else if (props.match.params.myVar === "blk") {
      updateParamVal("Blocks Per Game");
    }
  };

  const updateStats = () => {
    setShowStats("block");
  };

  useEffect(() => {
    apiCallStatsPlayerOne();
    apiCallStatsPlayerTwo();
    gameType();
  }, []);

  while (count <= 10) {
    return (
      <div className="body-container">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bangers&family=Black+Han+Sans&family=Comic+Neue:wght@700&family=Gravitas+One&family=Holtwood+One+SC&family=Pathway+Gothic+One&family=Sigmar+One&display=swap');
        </style>
        <h1 className="title">{paramVal}</h1>
        <div className="cards">
          <div
            className={`left-card both-div  ${leftDivAnswer}  `}
            onClick={() => {
              checkAnswerLeft();
              clickEvent();
              updateStats();
            }}
            disabled={ifClicked}
          >
            <img className="gif" src={playerOneGif}></img>
            <h1 className="name">{PlayerOneMetrics}</h1>
            <h2 className="stats" style={{ display: showStats }}>
              {`${paramVal}: ${playerOneStatsInfo}`}
            </h2>
          </div>

          <div
            className={`right-card both-div ${rightDivAnswer}`}
            onClick={() => {
              checkAnswerRight();
              clickEvent();
              updateStats();
            }}
          >
            <img className="gif" src={playerTwoGif} />
            <h1 className="name">{PlayerTwoMetrics}</h1>
            <h2 className="stats" style={{ display: showStats }}>
              {`${paramVal}: ${playerTwoStatsInfo}`}
            </h2>
          </div>
        </div>
        <div>
          <img
            className="bball ball-one"
            src="https://cdn0.iconfinder.com/data/icons/sports-equipment-flat/64/sport-05-512.png"
          />
          <img
            className="bball ball-two"
            src="https://cdn0.iconfinder.com/data/icons/sports-equipment-flat/64/sport-05-512.png"
          />
          <h2 className="question-number">Question #: {count}</h2>
        </div>
        <button
          className="question-btn"
          onClick={() => {
            getPlayer();
            setCounter(count + 1);
            setLeftDivAnswer(null);
            setRightDivAnswer(null);
            setShowStats("none");
          }}
        >
          Next Question
        </button>
      </div>
    );
  }
  return (
    <>
      <Results score={score} />
    </>
  );
};

export default withRouter(Game);
