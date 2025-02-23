
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { payload: plant } = action;
      const existingItem = state.items.find(item => item.name === plant.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const {payload: plant} = action;
      state.items = state.items.filter(item => item.name !== plant.name);
    },
    updateQuantity: (state, action) => {
      const {payload: plant} = action;
      const itemInCart = state.items.find(item => item.name === plant.name);
      if (itemInCart) {
        itemInCart.quantity = plant.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
