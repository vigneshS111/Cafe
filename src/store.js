// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './features/cart/cartSlice';

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

// Create and export the Redux store
export const store = configureStore({
  reducer: {
    cart: persistedReducer, // Use persisted reducer for the 'cart' slice
    // Add other slices as needed
  },
});

// Export the persistor for use in persisting the state
export const persistor = persistStore(store);
