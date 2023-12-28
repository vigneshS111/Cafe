import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./sections/Home";
import Search from "./sections/Search";
import Footer from "./components/Footer";
import MainMenu from "./sections/MainMenu";
import Signup from "./sections/SignUp";
import Login from "./sections/Login";
import { auth } from "./firebase.config.js";
import { useEffect, useState } from "react";
const App = () => {
  const [info, setInfo] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setInfo(user);
      } else {
        setInfo("");
      }
    });
  }, []);
  console.log(info);
  return (
    <main className="  w-full overflow-hidden ">
      <div className="paddingX flexCenter">
        <div className="boxWidth">
          <Nav info={info} setInfo={setInfo} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainMenu" element={<MainMenu />} />
        <Route path="/search/:searchTerm" element={<Search />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
