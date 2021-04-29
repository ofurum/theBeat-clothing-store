 import products from '../../Data/data'
 import {directoryDataType} from './directory.types'

 const INITIALIZE_STATE = {
     products: products
 }


const directoryReducer = (state = INITIALIZE_STATE, action) => {
  if (action.type === directoryDataType.DIRECTORY_DATA) {
    return {
      ...state,
      products: state.products,
    };
  }

  return state;
};

export default directoryReducer;
