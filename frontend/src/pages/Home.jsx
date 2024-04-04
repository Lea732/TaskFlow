import React, { useEffect, useState } from "react";

import ApplicationName from "../components/ApplicationName";
import ChecklistTitle from "../components/ChecklistTitle";
import ListItem from "../components/ListItem";

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

      <div className="list_item">
        {items.map((item) => (
          <ListItem items={item} />
        ))}

        <ListItem items={items} />
        <ListItem items={items} />
        <ListItem items={items} />
        <ListItem items={items} />
        <ListItem items={items} />
        <ListItem items={items} />
        <ListItem items={items} />
      </div>

      <img
        src="https://source.unsplash.com/random/390×250/?landscape"
        alt="random landscape"
      />
    </div>
  );
}

export default Home;
