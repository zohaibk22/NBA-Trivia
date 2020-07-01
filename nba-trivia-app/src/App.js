import React, { useState, useEffect, useParams } from "react";
import { Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import GameMenu from "./GameMenu";
import Game from "./Game";

import axios from "axios";

function App() {
  const [playerInfo1, setPlayerInfo1] = useState([]);
  const [playerInfo2, setPlayerInfo2] = useState([]);
  const [playerGif, setPlayerGif] = useState("");
  const params = useParams;

  const apiCallStatsPlayerOne = async () => {
    let randomNum = Math.floor(Math.random() * 450);
    const data = await axios.get(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
    );
    console.log(data.data.data[0].pts);
    setPlayerInfo1(data.data.data[0].pts);
  };

  const apiCallStatsPlayerTwo = async () => {
    let randomNum = Math.floor(Math.random() * 400);
    const data = await axios.get(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
    );
    console.log(data.data.data[0].pts);
    setPlayerInfo2(data.data.data[0].pts);
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
      <Header />
      <main>
        <Link to="/">Home</Link>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Menu">
          <GameMenu />
        </Route>
        <Route path="/Game">
          <Game playerOnePoints={playerInfo1} playerTwoPoints={playerInfo2} />
        </Route>
      </main>
    </>
  );
}

export default App;
