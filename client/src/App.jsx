import "./App.css";
import img from "./assets/top-left.svg";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <img src={img} className="top-left" alt="image" />
          <div className="col">
            <p>
              <a href={"#"}> find.your.name </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
