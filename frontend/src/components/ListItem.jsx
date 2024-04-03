/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { deleteItem } from "../services/checklistService";

import "../styles/listItem.css";

function ListItem({ items }) {
  const [unlock, setUnlock] = useState(true);
  const [listItem, setListItem] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleChangeItem = (event) => {
    setListItem(event.target.value);
  };

  const handleClickUnlock = () => {
    setUnlock(!unlock);
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
            className={unlock ? "item" : "disabled"}
            value={items.item}
            onChange={handleChangeItem}
          />
          <div>
            <button
              type="button"
              onClick={handleClickUnlock}
              className={unlock ? "unlocked" : "locked"}
            >
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
