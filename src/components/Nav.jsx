import { React, useState } from "react";
import coffee from "../assets/coffee.png";
import { navLinks, profile } from "../constants/index";
import SearchBar from "./SearchBar";
import { BsCart2 } from "react-icons/bs";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import Link from "./Link";
import { AiOutlineClose } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../features/cart/cartSlice";
const Nav = ({ info, setInfo }) => {
  //replace later
  const cartItems = [];

  const [toggle, settoggle] = useState(false);

  const toggleBtn = () => {
    settoggle(!toggle);
  };

  const removeInfo = async () => {
    toggleBtn();
    try {
      // Sign out the user
      await signOut(auth);

      // Use the onAuthStateChanged listener to handle state updates
      auth.onAuthStateChanged((user) => {
        if (user) {
          // User is still logged in, do nothing
        } else {
          // User is now signed out, update the state
          setInfo("");
        }
      });
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className="z-10 bg-coffee max-md:w-full md:gap-44 sm:px-20 px-8 py-6 flex md:justify-between justify-center items-center md:flex-row flex-col ">
      <Link to="/">
        <div className="flex flex-row items-center text-xl">
          <img
            src={coffee}
            alt="logo"
            style={{ width: 50, height: 50 }}
            className="object-contain"
          />
          <p className="font-satisfy font-semibold mr-2 xl:text-xl  text-primary">
            Cafe
          </p>
          <p className="font-satisfy font-bold xl:text-xl">Street</p>
        </div>
      </Link>

      <ul className="flex  items-center list-none gap-14 max-md:py-6 ">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className=" font-poppins font-medium cursor-pointer text-[18px] min-w-max hover:text-primary "
            >
              {/* <a href={link.to}>{link.title}</a> */}
              <Link to={link.to}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-8">
        <SearchBar />
        <div
          className="relative flex items-center justify-center"
          onClick={() => {
            dispatch(showCart());
          }}
        >
          <BsCart2 size={34} className="cursor-pointer" />{" "}
          {amount > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-dark-coffee flex items-center justify-center">
              <p className="text-sm text-primary font-bold">{amount}</p>
            </div>
          )}
        </div>
        <div className=" flex justify-end items-center">
          <img
            src={avatar}
            className="w-11 h-11 object-contain cursor-pointer "
            onClick={() => {
              !info ? navigate("/login") : toggleBtn();
            }}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } bg-dark-coffee absolute p-6 sm:top-20 top-44 sm:right-0 mx-4 my-2 min-w-[140px] rounded-s-xl sidebar`}
          >
            <AiOutlineClose
              className="absolute top-3 sm:left-3 right-3 cursor-pointer"
              onClick={toggleBtn}
            />

            <ul className="flex flex-col flex-1 justify-end items-center list-none gap-4">
              {profile.map((link, key) => {
                return (
                  <li
                    key={key}
                    className="text-primary font-poppins font-semibold cursor-pointer text-[16px]"
                  >
                    <Link to={link.to}>{link.title}</Link>
                  </li>
                );
              })}
              <li
                onClick={removeInfo}
                className="text-secondary font-poppins font-semibold cursor-pointer text-[16px]"
              >
                logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
