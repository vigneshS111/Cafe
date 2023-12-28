import React from "react";
import DeliveryCard from "../components/DeliveryCard";
import { deliveryService } from "../constants";
const DeliveryService = () => {
  return (
    <div className="flex flex-col justify-start items-start padding-y sm:px-24 px-6 gap-12">
      <h3 className="font-poppins font-semibold text-[32px] tracking-wide text-black max-sm:mb-5">
        How to use delivery{" "}
        <span className="border-b-2 border-primary inline tracking-wide">
          Service
        </span>
      </h3>
      <div className="flex md:flex-row flex-col justify-around w-full max-sm:gap-6">
        {deliveryService.map((item, key) => {
          return <DeliveryCard key={key} item={item} />;
        })}
      </div>
    </div>
  );
};

export default DeliveryService;
