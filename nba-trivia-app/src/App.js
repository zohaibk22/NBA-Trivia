import React, { useState, useEffect, useParams } from "react";
import { Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import GameMenu from "./GameMenu";
import Game from "./Game";
import Results from "./Results";

import axios from "axios";

function App() {
  // //All State Values that will be changed
  // const [playerOneStatsInfo, setPlayerOneStatsInfo] = useState([]);
  // const [playerTwoStatsInfo, setPlayerTwoStatsInfo] = useState([]);
  // const [PlayerOneMetrics, setPlayerOneMetrics] = useState([]);
  // const [PlayerTwoMetrics, setPlayerTwoMetrics] = useState([]);
  // const [playerOneGif, setPlayerOneGif] = useState("");
  // const [playerTwoGif, setPlayerTwoGif] = useState("");
  // const [count, setCounter] = useState(1);
  // const [score, setScore] = useState(0);
  // const [rightDivAnswer, setRightDivAnswer] = useState(false);
  // const [leftDivAnswer, setLeftDivAnswer] = useState(false);
  // const [ifClicked, setIfClicked] = useState(false);

  // let params = useParams;

  // const apiCallStatsPlayerOne = async () => {
  //   try {
  //     let randomNum = Math.floor(Math.random() * 400 + 1);
  //     const dataStats = await axios.get(
  //       `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
  //     );
  //     console.log(dataStats.data.data[0].pts);
  //     setPlayerOneStatsInfo(dataStats.data);

  //     const dataGeneralInfo = await axios.get(
  //       `https://www.balldontlie.io/api/v1/players/${randomNum}`
  //     );

  //     let playerOneFirstName = dataGeneralInfo.data.first_name;
  //     let playerOneLastName = dataGeneralInfo.data.last_name;

  //     setPlayerOneMetrics(playerOneFirstName + " " + playerOneLastName);

  //     console.log(playerOneFirstName + " " + playerOneLastName);

  //     const gifData = await axios.get(
  //       `https://api.giphy.com/v1/gifs/search?api_key=cLVkasFAvpiN8CTvAkRlGkoBTskbN71s&q=${
  //         playerOneFirstName + "-" + playerOneLastName
  //       }&limit=25&offset=0&rating=G&lang=en`
  //     );

  //     setPlayerOneGif(gifData.data.data[0].images.downsized.url);
  //     // console.log(gifData.data.data[0].url);
  //   } catch (error) {
  //     if (error instanceof TypeError) {
  //       apiCallStatsPlayerOne();
  //     } else {
  //       setTimeout(function () {
  //         apiCallStatsPlayerOne();
  //       }, 30000);
  //       console.log(error);
  //     }
  //   }
  // };

  // const apiCallStatsPlayerTwo = async () => {
  //   try {
  //     let randomNum = Math.floor(Math.random() * 400);
  //     const data = await axios.get(
  //       `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
  //     );
  //     console.log(data.data.data[0].pts);
  //     setPlayerTwoStatsInfo(data.data.data[0].pts);

  //     const dataGeneralInfo = await axios.get(
  //       `https://www.balldontlie.io/api/v1/players/${randomNum}`
  //     );

  //     let playerTwoFirstName = dataGeneralInfo.data.first_name;
  //     let playerTwoLastName = dataGeneralInfo.data.last_name;

  //     setPlayerTwoMetrics(playerTwoFirstName + " " + playerTwoLastName);

  //     console.log(playerTwoFirstName + " " + playerTwoLastName);

  //     const gifData = await axios.get(
  //       `https://api.giphy.com/v1/gifs/search?api_key=cLVkasFAvpiN8CTvAkRlGkoBTskbN71s&q=${
  //         playerTwoFirstName + "-" + playerTwoLastName
  //       }&limit=1&offset=0&rating=G&lang=en`
  //     );
  //     console.log(gifData.data.data[0]);

  //     setPlayerTwoGif(gifData.data.data[0].images.downsized.url);
  //   } catch (error) {
  //     if (error instanceof TypeError) {
  //       apiCallStatsPlayerTwo();
  //     } else {
  //       setTimeout(function () {
  //         apiCallStatsPlayerTwo();
  //       }, 30000);
  //       console.log(error);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   apiCallStatsPlayerOne();
  //   apiCallStatsPlayerTwo();
  // }, []);

  // const getPlayer = () => {
  //   apiCallStatsPlayerOne();
  //   apiCallStatsPlayerTwo();
  // };

  // const checkAnswerLeft = () => {
  //   if (playerOneStatsInfo > playerTwoStatsInfo) {
  //     setScore(score + 1);
  //     setLeftDivAnswer(true);
  //   } else {
  //     setScore(score);
  //     setLeftDivAnswer("");
  //   }
  // };

  // const checkAnswerRight = () => {
  //   if (playerOneStatsInfo < playerTwoStatsInfo) {
  //     setScore(score + 1);
  //     setRightDivAnswer(true);
  //   } else {
  //     setScore(score);
  //     setRightDivAnswer("");
  //   }
  // };

  // const clickEvent = () => {
  //   setIfClicked(true);
  // };

  // useEffect(() => {
  //   apiCallStatsPlayerOne();
  //   apiCallStatsPlayerTwo();
  // }, []);

  return (
    <>
      <Header />
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Menu">
          <GameMenu />
        </Route>
        <Route path="/Game/:myVar">
          <Game />
        </Route>
      </main>
    </>
  );
}

export default App;
