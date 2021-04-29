import {CARTTYPE} from '../cart/cart.types'

import { addItemToCart } from "./cart.utiles";

const INITIALIZE_STATE = {
  cartItems: [],
};
const cartReducer = (state = INITIALIZE_STATE, action) => {
  if (action.type === CARTTYPE.ADD_ITEM) {
    return {
      ...state,
     cartItems: addItemToCart(state.cartItems, action.payload),
    };
  }

  return state;
};

export default cartReducer;