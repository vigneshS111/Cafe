import Hero from "./Hero";
import DeliveryService from "./DeliveryService";
import AboutUs from "./AboutUs";
import SpecialMenu from "./SpecialMenu";
import PopularNow2 from "./PopularNow2";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../features/cart/cartSlice";
const Home = () => {
  const { amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <>
      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <Hero />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth  ">
          <PopularNow2 />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <DeliveryService />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <AboutUs />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <SpecialMenu />
        </div>
      </section>
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

export default Home;
