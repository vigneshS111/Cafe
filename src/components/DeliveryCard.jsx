import React from "react";
import coffee1 from "../assets/deliveryService/coffee-cup 1.png";
const DeliveryCard = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={item.image} className="w-[159px] h-[159px] object contain" />
      <h4 className="font-poppins font-semibold text-[24px] tracking-wide text-secondary">
        {item.para1}
      </h4>
      <p className="font-poppins tracking-wide text-secondary">{item.para2}</p>
    </div>
  );
};

export default DeliveryCard;
