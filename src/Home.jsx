import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to AifNN Website</h1>
      <p>This is the Home page.</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

export default Home;
