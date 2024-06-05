import React from "react";
import { menu } from "../constants/coffee_data";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../features/cart/cartSlice";
const Search = () => {
  const { searchTerm } = useParams();
  const filteredMenu = menu.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const { amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" pt-10">
        <div className="flex flex-col padding-x py-10 gap-5 ">
          <h3 className="font-poppins font-semibold text-[32px] tracking-wide text-black max-sm:mb-5">
            {filteredMenu?.length ? "Search results:" : "No results found"}
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

export default Search;
