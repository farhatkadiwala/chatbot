import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Chat from "../pages/Chat";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default Routers;
