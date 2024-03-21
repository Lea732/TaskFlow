import React, { useState } from "react";

import ListItem from "./ListItem";

import "../styles/addButton.css";

function AddButton() {
  const [items, setItems] = useState([]);

  const handleAddButtonClick = () => {
    const newItem = <ListItem />;
    setItems([...items, newItem]);
  };

  return (
    <div className="list_item">
      <button type="button" onClick={handleAddButtonClick}>
        + Add
      </button>
      {items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default AddButton;
