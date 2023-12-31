import React, { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import Button from "../components/Button";
import { hideCart, clearCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import emptyCartImg from "../assets/cartEmpty.png";
import OrderConfirmationModal from "../components/OrderConfirmationModal";
const CartContainer = () => {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleCheckOut = () => {
    console.log("order clicked", isOrderConfirmed);
    setIsOrderConfirmed(true);
  };
  const handleCloseModal = () => {
    setIsOrderConfirmed(false);
  };
  return (
    <>
      <div
        data-aos="slide-left"
        data-aos-duration="600"
        className="fixed top-0 right-0 z-[100] w-full md:w-[375px] h-screen bg-slate-50 flex flex-col overflow-y-scroll snap-y "
      >
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
          <>
            <div className="w-full flex flex-col px-3">
              {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </div>
            <div className=" w-full md:w-[350px]  bg-coffee  pt-10 pb-10 flex items-center flex-col">
              <h4 className="capitalize flex justify-between items-center font-poppins font-semibold text-secondary  px-4 md:w-full  mb-4">
                total{" "}
                <span className="max-sm:ml-52">
                  <FaRupeeSign className="inline pb-1 " />
                  {total.toFixed(2)}
                </span>
              </h4>
              <div onClick={handleCheckOut}>
                <Button checkOut={true}>Check Out</Button>
              </div>
            </div>
            {isOrderConfirmed && (
              <OrderConfirmationModal
                onClose={handleCloseModal}
                className="max-md:block hidden"
              />
            )}
          </>
        ) : (
          <div className="flex justify-center items-center h-[300px] flex-col gap-6 pt-32">
            <img
              src={emptyCartImg}
              className="w-[300px] h-[300px] object-contain"
            />
            <h2 className="font-poppins font-semibold text-xl tracking-wide">
              Grab a coffee
            </h2>
          </div>
        )}
      </div>
      {isOrderConfirmed && (
        <OrderConfirmationModal onClose={handleCloseModal} />
      )}
    </>
  );
};

export default CartContainer;
