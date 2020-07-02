import React, { useState, useEffect, useParams } from "react";
import { Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import GameMenu from "./GameMenu";
import Game from "./Game";
import Results from "./Results";

import axios from "axios";

function App() {
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
          <Game />
        </Route>
        <Route path="/Results">
          <Results />
        </Route>
      </main>
    </>
  );
}

export default App;
