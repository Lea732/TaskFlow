/* eslint-disable react/prop-types */
import React, { useState } from "react";

import ListItem from "./ListItem";
import UserListItem from "./UserListItem";

import "../styles/addButton.css";

function AddButton({ items }) {
  const [newItems, setNewItems] = useState([]);

  const handleAddButtonClick = () => {
    const newItem = <UserListItem />; // Utiliser les données de l'API pour créer le nouvel élément de liste
    setNewItems([...newItems, newItem]);
  };

  return (
    <div className="list_item">
      <button type="button" onClick={handleAddButtonClick}>
        + Add
      </button>
      {items.map((item) => (
        <ListItem items={item} />
      ))}

      {newItems.map((newItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>{newItem}</div> // Utiliser l'index du tableau comme clé pour chaque élément de liste
      ))}
    </div>
  );
}

export default AddButton;
