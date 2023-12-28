import { React, useState } from "react";
import coffee from "../assets/coffee.png";
import { navLinks } from "../constants/index";
import SearchBar from "./SearchBar";
import { BsCart2 } from "react-icons/bs";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
const Nav = () => {
  //replace later
  const cartItems = [];
  return (
    <nav className="fixed z-10 bg-coffee max-md:w-full md:gap-44 sm:px-20 px-8 py-6 flex md:justify-between justify-center items-center md:flex-row flex-col ">
      <Link to="/">
        <div className="flex flex-row">
          <img
            src={coffee}
            alt="logo"
            style={{ width: 50, height: 28 }}
            className="object-contain"
          />
          <p className="font-satisfy font-semibold mr-2  text-primary">Cafe</p>
          <p className="font-satisfy font-bold">Street</p>
        </div>
      </Link>

      <ul className="flex  items-center list-none gap-14 max-md:py-6 ">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className=" font-poppins font-medium cursor-pointer text-[16px] min-w-max"
            >
              <a href={link.to}>{link.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-8">
        <SearchBar />
        <div
          className="relative flex items-center justify-center"
          onClick={() => {}}
        >
          <BsCart2 size={32} className="cursor-pointer" />{" "}
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-dark-coffee flex items-center justify-center">
              <p className="text-sm text-primary font-bold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <img
          src={avatar}
          className="w-10 h-10 object-contain cursor-pointer "
        />
      </div>
    </nav>
  );
};

export default Nav;
