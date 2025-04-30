import { createReducer, on } from "@ngrx/store";
import { CartState } from "../../../data/Products";
import { addToItem} from './cart.actions';

export const initialState: CartState = {
    items: [],
    total: 0
};

export const cartReducer = createReducer(
    initialState,
    on(addToItem, (state, {product}) => {
        return {
            ...state,
            items: [...state.items, product],
        }
    })
);
