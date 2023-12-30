import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  cartShow:false,
};




const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state,{payload})=>{
        console.log('Adding to cart:', payload.item);
        state.cartItems = [...state.cartItems, payload.item];    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if(cartItem){
        cartItem.amount = cartItem.amount + 1;

      }
    },
    decrease: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        if (cartItem && cartItem.amount > 0) {
          cartItem.amount = cartItem.amount - 1;
        }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    showCart:(state)=>{
        state.cartShow=true
    },
    hideCart:(state)=>{
        state.cartShow=false
    }
  },
 
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals,showCart,hideCart ,addToCart} =
  cartSlice.actions;

export default cartSlice.reducer;