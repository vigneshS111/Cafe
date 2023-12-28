import React from "react";
import cart1 from "../assets/cart1.png";
const Button = () => {
  return (
    <div className="flex flex-row items-center flex-wrap text-lg gap-3 px-5 py-3 bg-secondary text-white rounded-3xl cursor-pointer">
      Order now
      <img
        src={cart1}
        className=" inline w-[22px] h-[22px] object-cover rounded-[50%]"
      />
    </div>
  );
};

export default Button;
