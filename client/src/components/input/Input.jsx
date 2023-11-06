import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="row" style={{ marginTop: "-16rem" }}>
        <form
          onSubmit={() => {
            navigate("/chat");
          }}
        >
          <button type="submit" className="search-button">
            Begin
          </button>
        </form>
      </div>
    </>
  );
};

export default Input;
