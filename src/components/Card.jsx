import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import cart1 from "../assets/cart1.png";
import {
  addToCart,
  increase,
  decrease,
  removeItem,
} from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ item, desc }) => {
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState({
    id: "",
    price: "",
    image: "",
    title: "",
    amount: 0,
  });
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    // If the item is in the cart, set the cartItem state
    if (itemInCart) {
      setCartItem(itemInCart);
    } else {
      // If the item is not in the cart, set cartItem to a default value
      setCartItem({
        id: item.id,
        price: item.price,
        image: item.image,
        title: item.title,
        amount: 0,
      });
    }
  }, [cartItems, item.id]);
  const id = item.id;
  return (
    <div
      className={`flex flex-col px-4 py-2 justify-center gap-4 md:w-[275px] w-[280px] md:h-[280px] h-[265px] shadow-3xl bg-slate-50 rounded-lg`}
    >
      <div>
        <img
          src={item.image}
          className="w-full h-[145px] object-cover rounded-md"
          alt={item.title}
        />
      </div>
      <div className="flex flex-row justify-between px-2">
        <p className="font-medium font-poppins text-[20px]">{item.title}</p>
        <p className="font-bold font-poppins text-[20px]">Rs {item.price}</p>
      </div>
      <div className="flex flex-row justify-between px-2">
        <div className="flex flex-row gap-6">
          {desc ? (
            <p className="font-poppins text-slate-gray text-wrap w-[160px] text-[12px] pb-3">
              {item.description}
            </p>
          ) : (
            <>
              <div
                className={`flex justify-center items-center ${
                  !item.hot && "opacity-25"
                } font-poppins w-[55px] h-[32px] p-2 border-2 rounded-lg border-primary`}
              >
                Hot
              </div>
              <div
                className={`flex justify-center items-center ${
                  item.hot && "opacity-25"
                } font-poppins w-[55px] h-[32px] p-2 border-2 rounded-lg border-primary`}
              >
                Cold
              </div>
            </>
          )}
        </div>

        {cartItem?.amount === 0 ? (
          <img
            src={cart1}
            className="w-[42px] h-[42px] object-contain aspect-auto rounded-[50%] cursor-pointer"
            alt="Add to Cart"
            onClick={() => {
              dispatch(
                addToCart({
                  item: {
                    id: item.id,
                    price: item.price,
                    image: item.image,
                    title: item.title,
                    amount: 1,
                  },
                })
              );
            }}
          />
        ) : (
          <div className="flex flex-row justify-center items-center">
            <button
              className="amount-btn"
              onClick={() => {
                if (cartItem.amount === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrease({ id }));
              }}
            >
              <FiMinus />
            </button>

            <p className="amount py-2">{cartItem?.amount}</p>
            <button
              className="amount-btn"
              onClick={() => {
                dispatch(increase({ id }));
              }}
            >
              <IoMdAdd />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
