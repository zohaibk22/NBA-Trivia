import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Game.css";

const Game = () => {
  const [playerOneStatsInfo, setPlayerOneStatsInfo] = useState([]);
  const [playerTwoStatsInfo, setPlayerTwoStatsInfo] = useState([]);
  const [PlayerOneMetrics, setPlayerOneMetrics] = useState([]);
  const [PlayerTwoMetrics, setPlayerTwoMetrics] = useState([]);
  const [score, setScore] = useState(0);
  const [playerOneGif, setPlayerOneGif] = useState("");
  const [playerTwoGif, setPlayerTwoGif] = useState("");
  const [count, setCounter] = useState(1);
  const params = useParams;

  const apiCallStatsPlayerOne = async () => {
    let randomNum = Math.floor(Math.random() * 400);
    const dataStats = await axios.get(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
    );
    console.log(dataStats.data.data[0].pts);
    let temp = dataStats.data.data[0].pts;
    while (temp === null) {}
    setPlayerOneStatsInfo(dataStats.data.data[0].pts);

    const dataGeneralInfo = await axios.get(
      `https://www.balldontlie.io/api/v1/players/${randomNum}`
    );

    let playerOneFirstName = dataGeneralInfo.data.first_name;
    let playerOneLastName = dataGeneralInfo.data.last_name;

    setPlayerOneMetrics(playerOneFirstName + " " + playerOneLastName);

    console.log(playerOneFirstName + " " + playerOneLastName);

    const gifData = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=cLVkasFAvpiN8CTvAkRlGkoBTskbN71s&q=${
        playerOneFirstName + playerOneLastName
      }&limit=25&offset=0&rating=G&lang=en`
    );
    console.log(gifData.data.data[0].url);

    setPlayerOneGif(gifData.data.data[0].url);
  };

  const apiCallStatsPlayerTwo = async () => {
    let randomNum = Math.floor(Math.random() * 400);
    const data = await axios.get(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
    );
    console.log(data.data.data[0].pts);
    setPlayerTwoStatsInfo(data.data.data[0].pts);

    const dataGeneralInfo = await axios.get(
      `https://www.balldontlie.io/api/v1/players/${randomNum}`
    );

    let playerTwoFirstName = dataGeneralInfo.data.first_name;
    let playerTwoLastName = dataGeneralInfo.data.last_name;

    setPlayerTwoMetrics(playerTwoFirstName + " " + playerTwoLastName);

    console.log(playerTwoFirstName + " " + playerTwoLastName);

    const gifData = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=cLVkasFAvpiN8CTvAkRlGkoBTskbN71s&q=${
        playerTwoFirstName + playerTwoLastName
      }&limit=25&offset=0&rating=G&lang=en`
    );
    console.log(gifData.data.data[0].url);

    setPlayerTwoGif(gifData.data.data[0].url);
  };

  const isEmpty = () => {
    do {
      apiCallStatsPlayerOne();
      apiCallStatsPlayerTwo();
    } while (setPlayerOneStatsInfo === false || setPlayerTwoStatsInfo === null);
  };

  useEffect(() => {
    apiCallStatsPlayerOne();
    apiCallStatsPlayerTwo();
  }, []);

  while (count <= 10) {
    return (
      <>
        <div className="left-card">
          <h1>{PlayerOneMetrics}</h1>
          <img src={playerOneGif}></img>
        </div>
        <div className="right-card">
          <h1>{PlayerTwoMetrics}</h1>
          <img src={playerTwoGif} sameSite="none" />
        </div>

        <button
          onClick={() => {
            // isEmpty();
            setCounter(count + 1);
          }}
        >
          Submit Answer
        </button>

        <div>
          <p>{count}</p>
        </div>
        <button>Next Question</button>
      </>
    );
  }
  return (
    <>
      <h1> Game Over</h1>
      <p>
        <Link to="/Results">See Results</Link>
      </p>
    </>
  );
};

export default Game;
