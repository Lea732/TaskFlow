import React, { useState, useEffect } from "react";

import { addTitle, readTitleById, updateTitle } from "../services/titleService";

import "../styles/checklistTitle.css";

function ChecklistTitle() {
  const [title, setTitle] = useState({});

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
      console.info("Title avant l'appel à updateTitle :", { title });
      await updateTitle({ title });
      console.info("Réponse du serveur: envoyé", { title });
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
