import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function handleSubmit(event) {
  const data = fetch("http://localhost:8080", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      prompt: data.get("prompt"),
    }),
  });
  console.log(data);
}

const Input = () => {
  return (
    <>
      <div className="col" style={{ marginTop: "-10rem" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Farhat"
          ></input>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Input;
