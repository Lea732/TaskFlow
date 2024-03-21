import React, { useState } from "react";

// import addTitle from "../services/titleService";

import "../styles/checklistTitle.css";

function ChecklistTitle() {
  const [unlock, setUnlock] = useState(true);
  const [title, setTitle] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleClickUnlock = () => {
    setUnlock(!unlock);
  };

  const handleDeleteTitle = () => {
    setTitle("");
  };

  // const sendDataToBackend = async () => {
  //   try {
  //     await addTitle({ title });
  //     console.info("Réponse du serveur: envoyé");
  //   } catch (error) {
  //     console.error("Erreur lors de l'envoi des données au serveur:", error);
  //   }
  // };

  return (
    <div className="checklist_title">
      <input
        placeholder="Your checklist name"
        type="text"
        className={unlock ? "" : "disabled"}
        value={title}
        onChange={handleChangeTitle}
      />
      <div>
        <button
          type="button"
          onClick={handleClickUnlock}
          className={unlock ? "unlocked" : "locked"}
        >
          {" . "}
        </button>
        <button type="button" className="delete" onClick={handleDeleteTitle}>
          {" . "}
        </button>
      </div>
    </div>
  );
}

export default ChecklistTitle;
