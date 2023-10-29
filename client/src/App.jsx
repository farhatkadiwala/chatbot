import "./App.css";

function App() {
  styles = {
    flex: flexbox,
    left: left,
  };

  return (
    <>
      <div
        className="container"
        style={{ display: styles.flex, flexDirection: styles.left }}
      >
        <p>
          <a href="#"> find.your.name </a>
        </p>
      </div>
    </>
  );
}

export default App;
