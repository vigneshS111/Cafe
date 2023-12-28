import React, { useState } from "react";
import { menu } from "../constants/coffee_data";
import Card from "../components/Card";

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
    menu_type = "menu";
  }

  return (
    <div className="sm:pt-[101px] pt-56 ">
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
  );
};

export default MainMenu;
