import React, { useState, useEffect, useParams } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function GameMenu(props) {
  const [playerOneStatsInfo, setPlayerOneStatsInfo] = useState([]);
  const [playerTwoStatsInfo, setPlayerTwoStatsInfo] = useState([]);
  const apiCallStatsPlayerOne = async () => {
    try {
      let randomNum = Math.floor(Math.random() * 400 + 1);
      const dataStats = await axios.get(
        `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${randomNum}`
      );
      console.log(dataStats.data.data[0].pts);
      setPlayerOneStatsInfo(dataStats.data.data[0].pts);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   props.statType();
  // }, []);

  console.log(props.statType);
  return (
    <>
      {/* <h2>Game Menu Page</h2>
      {props.statType.map((stat) => (
        <div>
          <h2>{stat.pts}</h2>
        </div>
      ))} */}
      <ul>
        <li>
          <Link to={`/Game/pts`}>Points Per Game Questionaire</Link>
        </li>
        <li>
          <Link to={`/Game/ast`}>Assists Per Game Questionaire</Link>
        </li>
        <li>
          <Link to={`/Game/reb`}>Rebounds Per Game Questionaire</Link>
        </li>
        <li>
          <Link to={`/Game/stl`}>Steals Per Game Questionaire</Link>
        </li>
        <li>
          <Link to={`/Game/blk`}>Blocks Per Game Questionaire</Link>
        </li>
      </ul>
    </>
  );
}

export default GameMenu;
