import React from "react";

import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <input placeholder="Your checklist name" />
      <img
        src="https://source.unsplash.com/random/70×50/?landscape"
        alt="random landscape"
      />
    </div>
  );
}

export default Home;
