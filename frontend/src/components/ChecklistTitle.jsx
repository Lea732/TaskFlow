import React, { useState, useEffect } from "react";

import { addTitle, readTitleById, updateTitle } from "../services/titleService";

import "../styles/checklistTitle.css";

function ChecklistTitle() {
  // eslint-disable-next-line no-unused-vars
  // const [unlock, setUnlock] = useState(true);
  const [title, setTitle] = useState("");

  const handleChangeTitle = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    console.info("new title :", newTitle);
  };

  const createTitle = async () => {
    try {
      await addTitle({ title });
      console.info("Réponse du serveur: envoyé", { title });
    } catch (error) {
      console.error("Erreur lors de l'envoi des données au serveur:", error);
    }
  };

  const modifyTitle = async () => {
    try {
      if (title && title.title) {
        await updateTitle(title); // Passer directement title
        console.info("Réponse du serveur: envoyé", title.title);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données au serveur:", error);
    }
  };

  useEffect(() => {
    readTitleById()
      .then((data) => {
        setTitle(data);
        console.info("réponse du get :", data);
      })
      .catch((error) => console.error("Error fetching title:", error));
  }, []);

  return (
    <div className="checklist_title">
      <input
        placeholder="Your checklist name"
        type="text"
        // className={!unlock ? "disabled" : ""}
        value={title !== undefined ? title.title : "Your checklist name"}
        onChange={handleChangeTitle}
      />
      <div>
        <button type="button" onClick={createTitle} className="unlocked">
          {" . "}
        </button>
        <button type="button" onClick={modifyTitle} className="locked">
          {" . "}
        </button>
      </div>
    </div>
  );
}

export default ChecklistTitle;
