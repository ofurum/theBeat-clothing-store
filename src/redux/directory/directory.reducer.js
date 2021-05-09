//  import products from '../../Data/data'
 import { SearchProduct, saveProductsData} from './directory.types'



 const INITIALIZE_STATE = {
     products: [],
 }

const filterProduct = (state, {payload}) => {
  if(!payload.length){ 
      window.location.href="/"
    return {...state, products: INITIALIZE_STATE.products}}
  return {...state,products:state.products.filter((product) =>
    product.productName.toLowerCase().includes(payload.toLowerCase())
  )}
}
const directoryReducer = (state = INITIALIZE_STATE,action) => {
  //const search = state.products.filter(product => product.name.toLowerCase().includes(action.type))
  
  if(action.type === SearchProduct.SEARCH_PRODUCT){
    window.scrollTo(0, 500);
    return filterProduct(state, action)
  }

  if(action.type === saveProductsData.SAVE_PRODUCTS_DATA){
    return {
      ...state,
      products:action.payload
    }
  }

  return state;
};

export default directoryReducer;
