import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directory.reducer";
import cartReducer from './cart/cart.reducer'


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
