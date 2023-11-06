// import "./App.css";
// import topLeft from "./assets/top-left.svg";
// import planet from "./assets/planet.svg";
// import { useRef } from "react";
// // import useNavigate from "react-router-dom";

// function App() {
//   const inputRef = useRef(null);

//   function handleSubmit(event) {
//     const data = fetch("http://localhost:8080", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//         prompt: data.get("prompt"),
//       }),
//     });
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="title-link">
//           <p>
//             <a href={"#"}> find.your.name </a>
//           </p>
//         </div>

//         <div className="row">
//           <p className="find-the">Find the</p>
//         </div>

//         <div className="row">
//           <p className="meaning"> meaning </p>
//         </div>

//         <div className="row">
//           <div>
//             <p className="find-the" style={{ marginTop: "-10rem" }}>
//               of your
//             </p>
//           </div>
//         </div>

//         <div className="row">
//           <p
//             className="name-word"
//             style={{
//               marginTop: "-18rem",
//               position: "relative",
//               marginLeft: "10rem",
//             }}
//           >
//             name
//           </p>
//         </div>

//         <div className="row search">
//           <form onSubmit={handleSubmit}>
//             <input type="text" className="search-input" ref={inputRef}></input>
//             <button type="submit" className="search-button">
//               Search
//             </button>
//           </form>
//         </div>

//         <div className="row">
//           <img src={planet} className="planet" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <>
      <Layout />
    </>
  );
};

export default App;
