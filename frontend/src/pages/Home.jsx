import React, { useState } from "react";

import "../styles/home.css";

function Home() {
  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="home">
      <input
        placeholder="Your checklist name"
        value={title}
        onChange={handleInputChange}
      />
      <img
        src="https://source.unsplash.com/random/390×250/?landscape"
        alt="random landscape"
      />
    </div>
  );
}

export default Home;
