import "../components/App.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Chat() {
  const [name, setName] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleNameSubmit = async () => {
    try {
      const response = await fetch("/checkName", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        const data = await response.json();
          if (data.meaning) {
            console.log(data.meaning)
          setMeaning(data.meaning);
        } else {
          // Prompt user to provide the meaning and send it to the server for an update
        }
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="row">
      <div className="response">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            className="search-input"
            placeholder="Enter a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleNameSubmit}
            className="search-button"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.50)",
              border: "none",
              fontSize: "12px",
            }}
          >
            Submit
          </button>
        </div>
        <div></div>
        {meaning && (
          <div className="row" style={{ backgroundColor: "white" }}>
            Meaning: {meaning}
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
