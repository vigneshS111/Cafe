import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./sections/Home";
import Search from "./sections/Search";
import Footer from "./components/Footer";
import MainMenu from "./sections/MainMenu";
import Signup from "./sections/SignUp";
import Login from "./sections/Login";
import Profile from "./sections/Profile.jsx";
import { auth, firestore } from "./firebase.config.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import CartContainer from "./sections/CartContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice.js";
const App = () => {
  const [info, setInfo] = useState(null);
  const dispatch = useDispatch();
  const { cartShow, cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const db = getFirestore();
          const userDocRef = doc(db, "users", user.uid);
          const userData = await getDoc(userDocRef);

          if (userData.exists()) {
            setInfo(userData.data());
          } else {
            console.warn(
              "User data not found in Firestore. Waiting for data..."
            );
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setInfo(null);
        }
      } else {
        setInfo(null);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(info);

  return (
    <main className="w-full overflow-hidden">
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
        <Route path="/profile" element={<Profile info={info} />} />
      </Routes>
      {cartShow && <CartContainer />}
      <footer className="flexStart">
        <div className="boxWidth">
          <Footer />
        </div>
      </footer>
    </main>
  );
};

export default App;
