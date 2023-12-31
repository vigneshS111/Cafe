import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const OrderConfirmationModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md text-center">
        <AiOutlineClose
          onClick={onClose}
          className="text-secondary w-5 cursor-pointer"
        />
        <p className="text-xl font-semibold mb-4 font-poppins">Order placed!</p>
        <p>Thank you for buying a coffee.</p>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
