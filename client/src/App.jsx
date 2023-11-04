import "./App.css";
import topLeft from "./assets/top-left.svg";
import planet from "./assets/planet.svg";
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function handleClick() {
    return inputRef.current.value;
  }

  return (
    <>
      <div className="container">
        <div className="title-link">
          <p>
            <a href={"#"}> find.your.name </a>
            <p> {mess} </p>
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
          <form>
            <input type="text" className="search-input" ref={inputRef}></input>
            <button
              type="button"
              className="search-button"
              onClick={handleClick}
            >
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
