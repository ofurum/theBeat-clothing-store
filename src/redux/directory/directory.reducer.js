 import products from '../../Data/data'
 import {directoryDataType, SearchProduct} from './directory.types'
 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1bmRlQGdtYWlsLmNvbSIsInVzZXIiOiI2MDhkNGY5ZDhkNWExNTAwMjE2MjJlYTYiLCJpYXQiOjE2MjAxNTA1MzUsImV4cCI6MTYyMDE1NDEzNSwiYXVkIjoiZW5lcmd5ZGlyZWN0LmNvbSIsImlzcyI6ImVuZXJneS1kaXJlY3QiLCJzdWIiOiI2MDhkNGY5ZDhkNWExNTAwMjE2MjJlYTYifQ.yKsGh_ZKXFREnv7g4btUzE2cpodUxhnkICdc8LpACW8"


let allproducts
var myHeaders = new Headers();
      myHeaders.append("x-tag", "ODE1ZjM1YWZlNTI4Y2QwMThkNmJhMTI1NzNkMjk1YjRjZTdhZWUwODNmYzEyNTMzM2U2YThhZWM2YmIxZWFjZC8vLy8vLzc5NDY=");


    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

fetch("https://masters-prj.herokuapp.com/products", requestOptions)
  .then(response => response.json())
  .then(result => allproducts = result.data)
  .catch(error => console.log('error', error));

//  let allproducts = products.then(result => {
//    allproducts = result.data
//    })

console.log(allproducts)


 const INITIALIZE_STATE = {
     products: products.data,
 }

const filterProduct = (state, {payload}) => {
  if(!payload.length) return {...state, products: INITIALIZE_STATE.products}
  return {...state,products:state.products.filter((product) =>
    product.name.toLowerCase().includes(payload.toLowerCase())
  )}
}
const directoryReducer = (state = INITIALIZE_STATE, action) => {
  //const search = state.products.filter(product => product.name.toLowerCase().includes(action.type))
  if (action.type === directoryDataType.DIRECTORY_DATA) {
    return {
      ...state,
      products: state.products,
    }
  };
  if(action.type === SearchProduct.SEARCH_PRODUCT){
    return filterProduct(state, action)
  }

  return state;
};

export default directoryReducer;
