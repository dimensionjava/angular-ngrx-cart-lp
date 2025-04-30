import { createAction, props } from "@ngrx/store";
import { Product } from '../../../data/Products';

export const addToItem = createAction(
    '[Cart] Add To Item',
    props<{ item: Product }>()
);

