import React, { useEffect, useState } from "react";

import ApplicationName from "../components/ApplicationName";
import ChecklistTitle from "../components/ChecklistTitle";
import AddButton from "../components/AddButton";

import { readItem } from "../services/checklistService";

import "../styles/home.css";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    readItem()
      .then((data) => {
        const dataArray = Object.values(data);
        setItems(dataArray);
        console.info("réponse du get item :", dataArray);
      })
      .catch((error) => console.error("Error fetching item:", error));
  }, []);

  return (
    <div className="home">
      <ApplicationName />
      <ChecklistTitle />
      <AddButton items={items} />

      <img
        src="https://source.unsplash.com/random/390×250/?landscape"
        alt="random landscape"
      />
    </div>
  );
}

export default Home;
