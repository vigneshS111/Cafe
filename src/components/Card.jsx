import React from "react";
import coffee1 from "../assets/coffee1.jpg";
import cart1 from "../assets/cart1.png";

const Card = ({ item, desc }) => {
  return (
    <div
      className={`flex flex-col px-4 py-2 justify-center gap-4 md:w-[275px] w-[280px] md:h-[280px] h-[265px] shadow-3xl bg-slate-50 rounded-lg`}
    >
      <div>
        <img
          src={item.image}
          className=" w-full h-[145px] object-cover rounded-md"
        />
      </div>
      <div className="flex flex-row justify-between px-2">
        <p className="font-medium font-poppins text-[20px]">{item.title}</p>
        <p className="font-bold font-poppins text-[20px]">Rs {item.price}</p>
      </div>
      <div className="flex flex-row justify-between px-2">
        <div className="flex flex-row gap-6 ">
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
        <img
          src={cart1}
          className="  w-[42px] h-[42px] object-contain aspect-auto rounded-[50%] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Card;
