import React, { useState, useEffect, useParams } from "react";
import axios from "axios";

export default function NewPlayer() {
  const [playerOneStatsInfo, setPlayerOneStatsInfo] = useState([]);
  const [playerTwoStatsInfo, setPlayerTwoStatsInfo] = useState([]);
  const [PlayerOneMetrics, setPlayerOneMetrics] = useState([]);
  const [PlayerTwoMetrics, setPlayerTwoMetrics] = useState([]);

  const [playerOneGif, setPlayerOneGif] = useState("");
  const [playerTwoGif, setPlayerTwoGif] = useState("");

  const params = useParams;

  const apiCallStatsPlayerOne = async () => {
    try {
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

      const gifData = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=cLVkasFAvpiN8CTvAkRlGkoBTskbN71s&q=${
          playerOneFirstName + "-" + playerOneLastName
        }&limit=25&offset=0&rating=G&lang=en`
      );

      setPlayerOneGif(gifData.data.data[0].embed_url);
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

  //   const getPlayer = () => {
  //     apiCallStatsPlayerOne();
  //     // apiCallStatsPlayerTwo();
  //   };

  useEffect(() => {
    apiCallStatsPlayerOne();
    // apiCallStatsPlayerTwo();
  }, []);

  return (
    <>
      <div className="left-card">
        <h1>{PlayerOneMetrics}</h1>
        <img src={playerOneGif}></img>
      </div>
    </>
  );
}
