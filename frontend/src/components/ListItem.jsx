/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { updateItem, deleteItem } from "../services/checklistService";

import "../styles/listItem.css";

function ListItem({ items }) {
  const [listItem, setListItem] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  const handleChangeItem = (event) => {
    const newItem = event.target.value;
    setListItem(newItem);
  };

  const modifyItem = async () => {
    try {
      console.info("items avant l'appel à updateTitle :", { listItem });
      const response = await updateItem({ id: items.id, item: listItem });
      console.info("Réponse du serveur:", response);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données au serveur:", error);
    }
  };

  const handleDeleteTitle = () => {
    setListItem("");
    setIsVisible(!isVisible);
    deleteItem(items.id);
  };

  return (
    <div>
      {isVisible && (
        <div>
          <div className="square" />
          <input
            placeholder="A thing you have to do is ..."
            type="text"
            className="item"
            defaultValue={
              items !== undefined ? items.item : "Your checklist name"
            }
            onChange={handleChangeItem}
          />
          <div>
            <button type="button" className="unlocked">
              {" . "}
            </button>
            <button type="button" onClick={modifyItem} className="locked">
              {" . "}
            </button>
            <button
              type="button"
              className="delete"
              onClick={handleDeleteTitle}
            >
              {" . "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItem;
