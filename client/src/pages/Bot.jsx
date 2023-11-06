import "../components/App.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

var meanings = {
  Farhat: "Peak of happiness",
  Nimitt: "Destiny",
};

const checkMeaning = (name) => {
  for (i in meanings) {
    if (name === i) {
      const responseMeaning = meanings[name];
      return responseMeaning;
    } else {
      return;
    }
  }
};

const Chat = () => {
  const [responseText, setResponseText] = useState("");
  const location = useLocation();

  checkMeaning(location.state.name);
  return (
    <>
      <div className="col" style={{ justifySelf: "center" }}>
        <div className="response" style={{}}></div>
      </div>
    </>
  );
};

export default Chat;
