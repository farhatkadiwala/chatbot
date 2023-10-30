import "./App.css";
import topLeft from "./assets/top-left.svg";
import planet from "./assets/planet.svg";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <img src={topLeft} className="top-left" alt="image" />
          <div className="col">
            <p>
              <a href={"#"}> find.your.name </a>
            </p>
          </div>
        </div>
        <div className="row">
          <img src={planet} className="planet" />
        </div>
      </div>
    </>
  );
}

export default App;
