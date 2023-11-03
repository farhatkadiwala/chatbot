import "./App.css";
import topLeft from "./assets/top-left.svg";
import planet from "./assets/planet.svg";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <p>
            <a href={"#"}> find.your.name </a>
          </p>
        </div>

        <div className="row">
          <p className="find-the" style={{ marginTop: "6rem" }}>
            {" "}
            Find the{" "}
          </p>
        </div>

        <div className="row">
          <p className="meaning"> meaning </p>
        </div>

        <div className="row">
          <div className="col">
            <p className="find-the" style={{ marginTop: "-10rem" }}>
              of your
            </p>
          </div>

          <div className="col">
            <p className="name-word">name</p>
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
