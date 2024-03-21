import React, { useState } from "react";

import ListItem from "./ListItem";

import "../styles/addButton.css";

function AddButton() {
  const [items, setItems] = useState([]);

  const handleAddButtonClick = () => {
    const newItem = <ListItem key={items.length} />;
    setItems([...items, newItem]);
  };

  return (
    <div className="list_item">
      <button type="button" onClick={handleAddButtonClick}>
        + Add
      </button>
      <ListItem />
      {items.map((item) => (
        <div key={items.length}>{item}</div>
      ))}
    </div>
  );
}

export default AddButton;
