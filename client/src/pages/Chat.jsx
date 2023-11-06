import "../components/App.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Chat = () => {
  const [responseText, setResponseText] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Define a function for making the API request
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: location.state.name,
          }),
        });

        //   console.log(responseText)

        if (response.ok) {
          const data = await response.json();
          setResponseText(data.dataReceived);
        } else {
          console.error(
            "API request failed:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [location.state.prompt]);

  //   function generateUniqueId() {
  //     const timestamp = Date.now();
  //     const randomNumber = Math.random();
  //     const hexadecimalString = randomNumber.toString(16);

  //     return `id-${timestamp}-${hexadecimalString}`;
  //   }

  return (
    <div className="row">
      <div className="response">{responseText}</div>
    </div>
  );
};

export default Chat;
