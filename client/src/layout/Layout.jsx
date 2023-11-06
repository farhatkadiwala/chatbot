import React from "react";
import Routers from "../routes/Routers";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
