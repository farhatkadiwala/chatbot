import React from "react";
import "../components/App.css";
import Input from "../components/input/Input";

const Home = () => {
  return (
    <>
      <div className="col" style={{ paddingLeft: "4rem" }}>
        <div className="row">
          <div className="row">
            <p className="find-the">Find the</p>
          </div>

          <div className="row">
            <p className="meaning"> meaning </p>
          </div>

          <div className="row">
            <p className="find-the" style={{ marginTop: "-10rem" }}>
              of your
            </p>
          </div>

          <div className="row">
            <p
              className="name-word"
              style={{
                marginTop: "-15rem",
                position: "relative",
                marginLeft: "10rem",
              }}
            >
              name
            </p>
          </div>
        </div>
        <div className="row" style={{ postion: "absolute", marginTop: "-10px" }}>
          <Input />
        </div>
      </div>
    </>
  );
};

export default Home;
