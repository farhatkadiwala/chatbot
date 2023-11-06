import React from "react";
import "../components/App.css";
import Input from "../components/input/Input";

const Home = () => {
  return (
    <>
      <div className="row" style={{ paddingLeft: "4rem" }}>
        <div className="row">
          <p className="find-the">Find the</p>

          <p className="meaning"> meaning </p>

          <p className="find-the" style={{ marginTop: "-10rem" }}>
            of your
          </p>

          <p
            className="name-word"
            style={{
              marginTop: "-14rem",
              position: "relative",
              marginLeft: "10rem",
            }}
          >
            name
          </p>
        </div>

        <Input />
      </div>
    </>
  );
};

export default Home;
