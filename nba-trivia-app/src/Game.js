import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import "./Game.css";

const Game = () => {
  const [playerOneStatsInfo, setPlayerOneStatsInfo] = useState([]);
  const [playerTwoStatsInfo, setPlayerTwoStatsInfo] = useState([]);
  const [PlayerOneMetrics, setPlayerOneMetrics] = useState([]);
  const [PlayerTwoMetrics, setPlayerTwoMetrics] = useState([]);
  const [playerGif, setPlayerGif] = useState("");
  const params = useParams;

  const apiCallStatsPlayerOne = async () => {
    let randomNum = Math.floor(Math.random() * 400);
    const dataStats = await axios.get(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
    );
    console.log(dataStats.data.data[0].pts);
    setPlayerOneStatsInfo(dataStats.data.data[0].pts);

    const dataGeneralInfo = await axios.get(
      `https://www.balldontlie.io/api/v1/players/${randomNum}`
    );

    let playerOneFirstName = dataGeneralInfo.data.first_name;
    let playerOneLastName = dataGeneralInfo.data.last_name;

    setPlayerOneMetrics(playerOneFirstName + " " + playerOneLastName);

    console.log(playerOneFirstName + " " + playerOneLastName);
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
  };

  const apiCallGifs = async () => {
    const data = await axios.get(
      "https://api.giphy.com/v1/gifs/search?api_key=cLVkasFAvpiN8CTvAkRlGkoBTskbN71s&q=lebron&limit=25&offset=0&rating=G&lang=en"
    );

    console.log(data);
  };

  useEffect(() => {
    apiCallStatsPlayerOne();
    apiCallStatsPlayerTwo();
    apiCallGifs();
  }, []);

  return (
    <>
      <div className="left-card">
        <h1>{PlayerOneMetrics}</h1>
      </div>
      <div className="right-card">
        <h1>{PlayerTwoMetrics}</h1>
      </div>

      <button>Submit Answer</button>
      <button>Next Question</button>
    </>
  );
};

export default Game;
