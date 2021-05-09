import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import reducers from "./root-reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [logger];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware, thunk))
);

export const persistor = persistStore(store);

// export default { store, persistor };
