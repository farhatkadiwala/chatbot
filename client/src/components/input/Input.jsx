import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Input = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  return (
    <>
      <div className="col" style={{ marginTop: "-10rem" }}>
        <form
          onSubmit={() => {
            navigate("/chat", { state: { name: name } });
          }}
        >
          <input
            type="text"
            className="search-input"
            placeholder="Farhat"
            name="name"
            onChange={(event) => setName(event.target.value)}
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
