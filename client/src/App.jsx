import "./App.css";
import topLeft from "./assets/top-left.svg";
import planet from "./assets/planet.svg";
import { useRef, useState } from "react";
import useNavigate from 'react-router-dom'

function App() {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  function handleClick(event) {
    event;
    return inputRef.current.value;
  }

  return (
    <>
      <div className="container">
        <div className="title-link">
          <p>
            <a href={"#"}> find.your.name </a>
          </p>
        </div>

        <div className="row">
          <p className="find-the">Find the</p>
        </div>

        <div className="row">
          <p className="meaning"> meaning </p>
        </div>

        <div className="row">
          <div>
            <p className="find-the" style={{ marginTop: "-10rem" }}>
              of your
            </p>
          </div>
        </div>

        <div className="row">
          <p
            className="name-word"
            style={{
              marginTop: "-18rem",
              position: "relative",
              marginLeft: "10rem",
            }}
          >
            name
          </p>
        </div>

        <div className="row search">
          <form
            onSubmit={handleClick}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                handleClick(e);
              }
            }}
          >
            <input type="text" className="search-input" ref={inputRef}></input>
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>

        <div className="row">
          <img src={planet} className="planet" />
        </div>
      </div>
    </>
  );
}

export default App;
