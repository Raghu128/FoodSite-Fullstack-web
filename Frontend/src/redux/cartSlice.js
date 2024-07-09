import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "blocked",
  initialState: {
    block: false,
    cartItems: [],
    totalAmount: 0,
  },
  reducers: {
    updateBlock: (state, action) => {
      state.block = !state.block;
    },
    addCartItem: (state, action) => {
      state.totalAmount += action.payload.price;
      let checked = true;
      
      state.cartItems.forEach((item) => {
        if (item[1]._id === action.payload._id) {
          item[0]++;
          checked = false;
          return;
        }
      });
      
      if (checked === true) {
        console.log("Added");
        state.cartItems.push([1, action.payload]);
      }
      console.log(state.cartItems);
    },
    removeCartItem: (state, action) => {
      state.totalAmount -= action.payload.price;
      state.cartItems = state.cartItems
        .map((item) => {
          if (item[1]._id === action.payload._id) {
            if (item[0] > 1) {
              return [item[0] - 1, item[1]];
            }
            return null;
          }
          return item;
        })
        .filter((item) => item !== null);
    },
  },
});

export const { updateBlock, addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
