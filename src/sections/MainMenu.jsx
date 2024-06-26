import React, { useState } from "react";
import { menu } from "../constants/coffee_data";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../features/cart/cartSlice";

const MainMenu = () => {
  const [hot, setHot] = useState(false);
  const [cold, setCold] = useState(false);

  let filteredMenu;
  let menu_type;
  if (hot) {
    filteredMenu = menu.filter((item) => item.hot);
    menu_type = "Hot";
  } else if (cold) {
    filteredMenu = menu.filter((item) => !item.hot);
    menu_type = "Cold";
  } else {
    filteredMenu = menu;
    menu_type = "Menu";
  }

  const { amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="flex flex-row sm:justify-start sm:px-16 justify-center gap-5 bg-dark-coffee py-5  ">
          <div
            className={`flex justify-center items-center 
            font-poppins w-[55px] h-[32px] p-2 border-2 rounded-lg border-primary cursor-pointer ${
              !hot && !cold ? "bg-primary text-white" : ""
            }`}
            onClick={() => {
              setHot(false);
              setCold(false);
            }}
          >
            All
          </div>

          <div
            className={`flex justify-center items-center 
            font-poppins w-[55px] h-[32px] p-2 border-2 rounded-lg border-primary cursor-pointer ${
              hot ? "bg-primary text-white" : ""
            }`}
            onClick={() => {
              setHot(true);
              setCold(false);
            }}
          >
            Hot
          </div>
          <div
            className={`flex justify-center items-center 
            font-poppins w-[55px] h-[32px] p-2 border-2 rounded-lg border-primary cursor-pointer ${
              cold ? "bg-primary text-white" : ""
            }`}
            onClick={() => {
              setHot(false);
              setCold(true);
            }}
          >
            Cold
          </div>
        </div>
        <div className="flex flex-col padding-x py-10 gap-5 ">
          <h3 className="font-poppins font-semibold text-[32px] tracking-wide text-black max-sm:mb-5">
            {menu_type}:
          </h3>
          <div className="flex justify-center md:flex-row flex-col flex-wrap gap-8">
            {/* Map over the filteredMenu */}
            {filteredMenu.map((item) => (
              <Card key={item.id} item={item} desc={true} />
            ))}
          </div>
        </div>
      </div>
      {amount > 0 && (
        <button
          onClick={() => {
            dispatch(showCart());
          }}
          className="fixed bg-blue-600 text-white font-bold px-2 text-center text-wrap w-[100px] h-[100px] max-sm:w-[70px] max-sm:h-[70px] max-sm:text-[10px] rounded-full bottom-16 z-[105] right-14"
        >
          GO TO CART
        </button>
      )}
    </>
  );
};

export default MainMenu;
