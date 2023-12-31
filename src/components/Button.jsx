import React from "react";
import cart1 from "../assets/cart1.png";
import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";

const Button = (props) => {
  return (
    <div className="flex flex-row items-center flex-wrap text-lg gap-3 px-6 py-3 bg-secondary text-white font-poppins rounded-3xl cursor-pointer min-w-max">
      {props.children}
      {props.checkOut ? (
        <FaRegCheckCircle className="w-[22px] h-[22px] text-dark-coffee " />
      ) : (
        <img
          src={cart1}
          className=" inline w-[22px] h-[22px] object-cover rounded-[50%] "
        />
      )}
    </div>
  );
};

export default Button;
