import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import useSound from "use-sound";
// import basketball from "https://www.youtube.com/watch?v=NsIB3-t2j3A";

function Home() {
  // const [play] = useSound(basketball);

  return (
    <div className="main-container">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bangers&family=Black+Han+Sans&family=Chakra+Petch:wght@500&family=Comic+Neue:wght@700&family=Gravitas+One&family=Holtwood+One+SC&family=Pathway+Gothic+One&family=Sigmar+One&display=swap');
      </style>
      <h1 className="app-name">NBA Trivia</h1>

      <button className="enter">
        <Link to="/Menu">Enter Game</Link>
      </button>

      <p className="instructions instruct-one">
        Do you think you're an NBA stats expert? You do? Well lets put that to a
        test!
      </p>

      <p className="instructions instruct-two">
        There are five categories of stats that you can test yourself on
      </p>
      <p className="instructions instruct-three">
        There are over 400 players to account for when playing the game
      </p>
      <p className="instructions instruct-four">Good Luck!</p>

      <img
        className="nba-gif gif-one"
        src="https://media.giphy.com/media/12Tob44HkDJty8/giphy.gif"
      />
      <img
        className="nba-gif gif-two"
        src="https://media.giphy.com/media/3oEdv5e5Zd2gsczAhG/giphy.gif"
      />
      <img
        className="nba-gif gif-three"
        src="https://media.giphy.com/media/l0IxZLrBjtBafTOHm/giphy.gif"
      />
      <img
        className="nba-gif gif-four"
        src="https://media.giphy.com/media/F3tPNVyStwEq4/giphy.gif"
      />

      <img
        className="basketball"
        src="https://cdn0.iconfinder.com/data/icons/sports-equipment-flat/64/sport-05-512.png"
      />

      <div className="court"></div>
    </div>
  );
}

export default Home;
