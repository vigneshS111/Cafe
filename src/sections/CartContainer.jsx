import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";

import { hideCart, clearCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 right-0 z-[100] w-full md:w-[375px] h-screen bg-slate-50 flex flex-col overflow-y-scroll snap-y">
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <MdOutlineKeyboardBackspace
          className="text-secondary text-3xl"
          onClick={() => {
            dispatch(hideCart());
          }}
        />
        <p className="text-secondary text-lg font-semibold font-poppins">
          Cart
        </p>

        <div
          className="flex font-poppins items-center gap-2 p-1 px-2 my-2 bg-dark-coffee rounded-md hover:shadow-md  cursor-pointer text-secondary text-base"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear <RiRefreshFill />
        </div>
      </div>
      {amount > 0 ? (
        <div className="w-full flex flex-col px-3">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[300px]">
          <h2 className="font-poppins font-semibold text-xl tracking-wide">
            Cart is empty
          </h2>
        </div>
      )}
      <div className="fixed w-full md:w-[350px] bottom-0 bg-coffee pb-3 py-10 flex items-center">
        <h4 className="capitalize flex justify-between items-center font-poppins font-semibold text-secondary  px-4 md:w-full  mb-4">
          total{" "}
          <span className="max-sm:ml-52">
            <FaRupeeSign className="inline pb-1 " />
            {total.toFixed(2)}
          </span>
        </h4>
      </div>
    </div>
  );
};

export default CartContainer;
