import React, { useState } from "react";
import "./Notebutton.scss"; //

const NoteButton = ({ content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`note-button ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="note-text">
        {expanded ? content : "Plus d'info sur mes projets ?"}
      </div>
    </div>
  );
};

export default NoteButton;
