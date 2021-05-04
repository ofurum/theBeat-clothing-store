 import products from '../../Data/data'
 import {setProductData, SearchProduct} from './directory.types'
 





 const INITIALIZE_STATE = {
     products: null,
 }

const filterProduct = (state, {payload}) => {
  if(!payload.length) return {...state, products: INITIALIZE_STATE.products}
  return {
    ...state,
    products: state.products.filter((product) =>
      product.productName.toLowerCase().includes(payload.toLowerCase())
    ),
  };
}
const directoryReducer = (state = INITIALIZE_STATE, action) => {
  //const search = state.products.filter(product => product.name.toLowerCase().includes(action.type))
  if (action.type === setProductData.SET_PRODUCT_DATA) {
    return {
      ...state,
      products: action.payload,
    };
  };
  if(action.type === SearchProduct.SEARCH_PRODUCT){
    return filterProduct(state, action)
  }

  return state;
};

export default directoryReducer;
