import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../../../data/Products";

export const selectCartStore = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
    selectCartStore,
    (state: CartState) => state.items
);
