import React, { useState, useEffect, useParams } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import "./Game.css";
import AnswerChoices from "./AnswerChoices";
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

  let params = useParams;

  const apiCallStatsPlayerOne = async () => {
    try {
      let randomNum = Math.floor(Math.random() * 400 + 1);
      const dataStats = await axios.get(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
      );
      console.log(dataStats.data.data[0][props.match.params.myVar]);
      setPlayerOneStatsInfo(dataStats.data.data[0][props.match.params.myVar]);

      const dataGeneralInfo = await axios.get(
        `https://www.balldontlie.io/api/v1/players/${randomNum}`
      );

      let playerOneFirstName = dataGeneralInfo.data.first_name;
      let playerOneLastName = dataGeneralInfo.data.last_name;

      setPlayerOneMetrics(playerOneFirstName + " " + playerOneLastName);

      console.log(playerOneFirstName + " " + playerOneLastName);

      const gifData = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=cLVkasFAvpiN8CTvAkRlGkoBTskbN71s&q=${
          playerOneFirstName + "-" + playerOneLastName
        }&limit=25&offset=0&rating=G&lang=en`
      );

      setPlayerOneGif(gifData.data.data[0].images.downsized.url);
      // console.log(gifData.data.data[0].url);
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
      console.log(data.data.data[0][props.match.params.myVar]);
      setPlayerTwoStatsInfo(data.data.data[0][props.match.params.myVar]);

      const dataGeneralInfo = await axios.get(
        `https://www.balldontlie.io/api/v1/players/${randomNum}`
      );

      let playerTwoFirstName = dataGeneralInfo.data.first_name;
      let playerTwoLastName = dataGeneralInfo.data.last_name;

      setPlayerTwoMetrics(playerTwoFirstName + " " + playerTwoLastName);

      console.log(playerTwoFirstName + " " + playerTwoLastName);

      const gifData = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=cLVkasFAvpiN8CTvAkRlGkoBTskbN71s&q=${
          playerTwoFirstName + "-" + playerTwoLastName
        }&limit=1&offset=0&rating=G&lang=en`
      );
      console.log(gifData.data.data[0]);

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

  useEffect(() => {
    apiCallStatsPlayerOne();
    apiCallStatsPlayerTwo();
  }, []);

  while (count < 10) {
    return (
      <>
        <div
          className={`left-card  ${leftDivAnswer}  `}
          onClick={() => {
            checkAnswerLeft();
            clickEvent();
          }}
          disabled={ifClicked}
        >
          <h1>{PlayerOneMetrics}</h1>
          <img src={playerOneGif}></img>
        </div>

        <div
          className={`right-card  + ${rightDivAnswer}`}
          onClick={() => {
            checkAnswerRight();
            clickEvent();
          }}
        >
          <h1>{PlayerTwoMetrics}</h1>
          <img src={playerTwoGif} />
        </div>

        <div>
          <p>Question: {count}</p>
          <p>Current Score: {score}</p>
        </div>
        <button
          onClick={() => {
            getPlayer();
            setCounter(count + 1);
            setLeftDivAnswer(null);
            setRightDivAnswer(null);
          }}
        >
          Next Question
        </button>
      </>
    );
  }
  return (
    <>
      {/* <h1> Game Over</h1>
      <p>
        <Link to="/Results">See Results</Link>
      </p> */}

      <Results score={score} />
    </>
  );
};

export default withRouter(Game);
