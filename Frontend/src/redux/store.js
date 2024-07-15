import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice.js'
import cardDataSlice from './cardData.js';
import userSlice from './user.js';
import searchSlice from './searchFood.js';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cardData: cardDataSlice,
    userLogin: userSlice,
    searchFood: searchSlice,
  },
});

export default store;
