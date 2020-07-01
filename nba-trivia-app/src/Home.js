import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <p>
        <Link to="/Menu">Go to game Menu</Link>
      </p>
    </div>
  );
}

export default Home;
