import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directory.reducer";
import cartReducer from './cart/cart.reducer';
import  registerUserReducer from '../redux/user/user.reducer'
import {fetchIntilizeReducer} from './Initilize/initilize.reducer'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "fetchIntilize"],
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  cart: cartReducer,
  fetchIntilize: fetchIntilizeReducer,
  registerUser: registerUserReducer,
});

export default persistReducer(persistConfig, rootReducer);
