import { createSelector } from "@reduxjs/toolkit";

// Get cart items
export const selectCartItems = (state) => state.cart.items;

// Calculate total quantity
export const selectTotalItems = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce((total, item) => total + item.quantity, 0)
);

// Calculate total price
export const selectTotalPrice = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
);