import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./sections/Home";
import Search from "./sections/Search";
import Footer from "./components/Footer";
import MainMenu from "./sections/MainMenu";
const App = () => {
  return (
    <main className="  w-full overflow-hidden ">
      <div className="paddingX flexCenter">
        <div className="boxWidth">
          <Nav />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainMenu" element={<MainMenu />} />
        <Route path="/search/:searchTerm" element={<Search />} />
      </Routes>

      <footer className="flexStart">
        <div className="boxWidth ">
          {" "}
          <Footer />
        </div>
      </footer>
    </main>
  );
};

export default App;
