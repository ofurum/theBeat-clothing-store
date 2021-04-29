import {CARTTYPE} from '../cart/cart.types'

import { addItemToCart, removeProductFromCart } from "./cart.utiles";

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
  if(action.type === CARTTYPE.REMOVE_PRODUCT){
      return {
          ...state,
          cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
  }
  return state;
};

export default cartReducer;