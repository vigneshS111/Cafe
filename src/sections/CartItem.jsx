import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, image, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="bg-dark-coffee px-2 text-sm h-[20px] rounded-md font-poppins font-medium text-secondary hover:shadow-md"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <IoMdAdd />
        </button>
        <p className="amount py-2">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <FiMinus />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
