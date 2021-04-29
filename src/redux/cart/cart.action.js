import {CARTTYPE} from './cart.types'

export const addItem = (item) => ({
  type: CARTTYPE.ADD_ITEM,
  payload: item,
});

export const removeProduct = (product) => ({
    type: CARTTYPE.REMOVE_PRODUCT,
    payload: product,
})
